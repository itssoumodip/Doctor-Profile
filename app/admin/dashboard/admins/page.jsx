"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useToast } from '@/components/ui/use-toast'
import { Toaster } from '@/components/ui/toaster'
import { useForm } from 'react-hook-form'
import { useAdminAuth } from '@/lib/adminAuth'
import { 
  User, 
  UserPlus, 
  Shield, 
  ShieldOff, 
  Trash2, 
  Eye,
  Mail,
  Calendar
} from 'lucide-react'

import { doc, collection, query, getDocs, updateDoc, deleteDoc, where } from 'firebase/firestore'
import { db } from '@/lib/firebase'

export default function AdminManagementPage() {
  const [admins, setAdmins] = useState([])
  const [loading, setLoading] = useState(true)
  const [showAddDialog, setShowAddDialog] = useState(false)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [adminToDelete, setAdminToDelete] = useState(null)
  const { toast } = useToast()
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const { createAdmin, currentUser } = useAdminAuth()

  useEffect(() => {
    fetchAdmins()
  }, [])

  const fetchAdmins = async () => {
    try {
      setLoading(true)
      const adminsRef = collection(db, 'admins')
      const adminsSnapshot = await getDocs(adminsRef)
      const adminsList = adminsSnapshot.docs.map(doc => {
        const data = doc.data()
        // Convert Firestore Timestamps to JavaScript Dates
        return {
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate(),
          updatedAt: data.updatedAt?.toDate()
        }
      })
      setAdmins(adminsList)
    } catch (error) {
      console.error('Error fetching admins:', error)
      toast({
        title: "Error",
        description: "Failed to fetch admins",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setLoading(false)
    }
  }

  const onSubmitAdmin = async (data) => {
    try {
      const result = await createAdmin({
        email: data.email,
        password: data.password,
        fullName: data.fullName,
        role: 'admin',
        permissions: ['admin']
      })
      
      if (result.success) {
        toast({
          title: "Success",
          description: "Admin user created successfully",
          duration: 3000,
        })
        setShowAddDialog(false)
        reset()
        fetchAdmins()
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to create admin user",
          variant: "destructive",
          duration: 5000,
        })
      }
    } catch (error) {
      console.error('Error creating admin:', error)
      toast({
        title: "Error",
        description: "An error occurred while creating admin",
        variant: "destructive",
        duration: 5000,
      })
    }
  }

  const handleStatusToggle = async (adminId, currentStatus) => {
    try {
      const newStatus = !currentStatus
      const adminDoc = doc(db, 'admins', adminId)
      await updateDoc(adminDoc, { isActive: newStatus })
      setAdmins(prev => 
        prev.map(admin => 
          admin.id === adminId 
            ? { ...admin, isActive: newStatus }
            : admin
        )
      )
      toast({
        title: "Success",
        description: `Admin ${newStatus ? 'activated' : 'deactivated'} successfully`,
        duration: 3000,
      })
    } catch (error) {
      console.error('Error updating admin status:', error)
      toast({
        title: "Error",
        description: "An error occurred while updating admin status",
        variant: "destructive",
        duration: 5000,
      })
    }
  }

  const updateAdminStatus = async (adminId, newStatus) => {
    try {
      // Don't allow deactivating yourself
      if (adminId === currentUser?.uid) {
        toast({
          title: "Error",
          description: "You cannot deactivate your own account",
          variant: "destructive",
          duration: 5000,
        })
        return
      }

      const adminRef = doc(db, 'admins', adminId)
      await updateDoc(adminRef, {
        isActive: newStatus,
        updatedAt: new Date()
      })

      toast({
        title: "Success",
        description: `Admin status ${newStatus ? 'activated' : 'deactivated'} successfully`,
        duration: 3000,
      })

      fetchAdmins()
    } catch (error) {
      console.error('Error updating admin status:', error)
      toast({
        title: "Error",
        description: "Failed to update admin status",
        variant: "destructive",
        duration: 5000,
      })
    }
  }

  const handleDelete = async () => {
    if (!adminToDelete) return

    try {
      const adminDoc = doc(db, 'admins', adminToDelete.id)
      await deleteDoc(adminDoc)
      setAdmins(prev => prev.filter(admin => admin.id !== adminToDelete.id))
      toast({
        title: "Success",
        description: "Admin deleted successfully",
        duration: 3000,
      })
    } catch (error) {
      console.error('Error deleting admin:', error)
      toast({
        title: "Error",
        description: "An error occurred while deleting admin",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setShowDeleteDialog(false)
      setAdminToDelete(null)
    }
  }

  const deleteAdminUser = async (adminId) => {
    try {
      // Don't allow deleting yourself
      if (adminId === currentUser?.uid) {
        toast({
          title: "Error",
          description: "You cannot delete your own account",
          variant: "destructive",
          duration: 5000,
        })
        return
      }

      const adminRef = doc(db, 'admins', adminId)
      await deleteDoc(adminRef)

      toast({
        title: "Success",
        description: "Admin user deleted successfully",
        duration: 3000,
      })

      setShowDeleteDialog(false)
      setAdminToDelete(null)
      fetchAdmins()
    } catch (error) {
      console.error('Error deleting admin:', error)
      toast({
        title: "Error",
        description: "Failed to delete admin user",
        variant: "destructive",
        duration: 5000,
      })
    }
  }

  const formatDate = (date) => {
    if (!date) return 'N/A';
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">Loading admin users...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Admin Management</CardTitle>
            <Button onClick={() => setShowAddDialog(true)}>
              <UserPlus className="mr-2" />
              Add Admin
            </Button>
          </div>
          <CardDescription>Manage admin users and their access</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-4">Loading...</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {admins.map((admin) => (
                  <TableRow key={admin.id}>
                    <TableCell>{admin.fullName}</TableCell>
                    <TableCell>{admin.email}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        {formatDate(admin.createdAt)}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={admin.isActive ? "success" : "destructive"}>
                        {admin.isActive ? "Active" : "Inactive"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => updateAdminStatus(admin.id, !admin.isActive)}
                        disabled={admin.id === currentUser?.uid}
                      >
                        {admin.isActive ? (
                          <ShieldOff className="h-4 w-4" />
                        ) : (
                          <Shield className="h-4 w-4" />
                        )}
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          setAdminToDelete(admin)
                          setShowDeleteDialog(true)
                        }}
                        disabled={admin.id === currentUser?.uid}
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* Add Admin Dialog */}
      <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Admin</DialogTitle>
            <DialogDescription>
              Create a new administrator account with access to the dashboard.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmitAdmin)}>
            <div className="grid gap-4 py-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <Input
                  id="fullName"
                  placeholder="Enter full name"
                  {...register("fullName", { required: "Full name is required" })}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="username" className="block text-sm font-medium mb-2">
                  Username *
                </label>
                <Input
                  id="username"
                  placeholder="Enter username"
                  {...register("username", { required: "Username is required" })}
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2">
                  Password *
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  {...register("password", { 
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters"
                    }
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                )}
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setShowAddDialog(false)}>
                Cancel
              </Button>
              <Button type="submit">Create Admin</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Admin User</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete <strong>{adminToDelete?.fullName}</strong>? 
              This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDeleteDialog(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Toaster />
    </div>
  )
}

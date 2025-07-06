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
import { 
  getAllAdmins, 
  createAdmin, 
  updateAdminStatus, 
  deleteAdmin 
} from '@/lib/firebaseOperations'

export default function AdminManagementPage() {
  const [admins, setAdmins] = useState([])
  const [loading, setLoading] = useState(true)
  const [showAddDialog, setShowAddDialog] = useState(false)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [adminToDelete, setAdminToDelete] = useState(null)
  const { toast } = useToast()
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  useEffect(() => {
    fetchAdmins()
  }, [])

  const fetchAdmins = async () => {
    try {
      setLoading(true)
      const result = await getAllAdmins()
      if (result.success) {
        setAdmins(result.data)
      } else {
        toast({
          title: "Error",
          description: "Failed to fetch admins",
          variant: "destructive",
          duration: 5000,
        })
      }
    } catch (error) {
      console.error('Error fetching admins:', error)
      toast({
        title: "Error",
        description: "An error occurred while fetching admins",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setLoading(false)
    }
  }

  const onSubmitAdmin = async (data) => {
    try {
      const adminData = {
        ...data,
        role: 'admin',
        permissions: ['view_appointments', 'manage_appointments', 'manage_messages'],
      }
      
      const result = await createAdmin(adminData)
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
      const result = await updateAdminStatus(adminId, newStatus)
      if (result.success) {
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
      } else {
        toast({
          title: "Error",
          description: "Failed to update admin status",
          variant: "destructive",
          duration: 5000,
        })
      }
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

  const handleDelete = async () => {
    if (!adminToDelete) return

    try {
      const result = await deleteAdmin(adminToDelete.id)
      if (result.success) {
        setAdmins(prev => prev.filter(admin => admin.id !== adminToDelete.id))
        toast({
          title: "Success",
          description: "Admin deleted successfully",
          duration: 3000,
        })
      } else {
        toast({
          title: "Error",
          description: "Failed to delete admin",
          variant: "destructive",
          duration: 5000,
        })
      }
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
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Admin Management</h1>
          <p className="text-gray-600">Manage admin users and their permissions</p>
        </div>
        <Button onClick={() => setShowAddDialog(true)} className="flex items-center gap-2">
          <UserPlus className="h-4 w-4" />
          Add Admin
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Admin Users ({admins.length})
          </CardTitle>
          <CardDescription>
            Manage administrator accounts and their access permissions
          </CardDescription>
        </CardHeader>
        <CardContent>
          {admins.length === 0 ? (
            <div className="text-center py-8">
              <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 mb-4">No admin users found</p>
              <Button onClick={() => setShowAddDialog(true)}>
                <UserPlus className="h-4 w-4 mr-2" />
                Add First Admin
              </Button>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {admins.map((admin) => (
                  <TableRow key={admin.id}>
                    <TableCell className="font-medium">
                      {admin.fullName || admin.name || 'N/A'}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-gray-400" />
                        {admin.email}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {admin.role || 'Admin'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={admin.isActive ? 'default' : 'secondary'}>
                        {admin.isActive ? 'Active' : 'Inactive'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        {admin.createdAt?.toLocaleDateString() || 'N/A'}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleStatusToggle(admin.id, admin.isActive)}
                        >
                          {admin.isActive ? (
                            <>
                              <ShieldOff className="h-4 w-4" />
                              Deactivate
                            </>
                          ) : (
                            <>
                              <Shield className="h-4 w-4" />
                              Activate
                            </>
                          )}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setAdminToDelete(admin)
                            setShowDeleteDialog(true)
                          }}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
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

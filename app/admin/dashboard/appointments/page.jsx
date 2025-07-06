"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useToast } from '@/components/ui/use-toast'
import { Toaster } from '@/components/ui/toaster'
import { 
  Calendar, 
  Clock, 
  Search, 
  Filter, 
  CheckCircle, 
  XCircle, 
  Trash2, 
  Eye,
  Phone,
  Mail,
  User
} from 'lucide-react'
import { 
  getAllAppointments, 
  updateAppointmentStatus, 
  deleteAppointment,
  approveAppointment,
  rejectAppointment 
} from '@/lib/firebaseOperations'

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState([])
  const [filteredAppointments, setFilteredAppointments] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedAppointment, setSelectedAppointment] = useState(null)
  const [showDetailsDialog, setShowDetailsDialog] = useState(false)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [showRejectDialog, setShowRejectDialog] = useState(false)
  const [appointmentToDelete, setAppointmentToDelete] = useState(null)
  const [appointmentToReject, setAppointmentToReject] = useState(null)
  const [rejectionReason, setRejectionReason] = useState('')
  const { toast } = useToast()

  useEffect(() => {
    fetchAppointments()
  }, [])

  useEffect(() => {
    filterAppointments()
  }, [appointments, searchTerm, statusFilter])

  const fetchAppointments = async () => {
    try {
      const result = await getAllAppointments()
      if (result.success) {
        setAppointments(result.data)
      } else {
        toast({
          title: "Error",
          description: "Failed to fetch appointments",
          variant: "destructive",
          duration: 5000,
        })
      }
    } catch (error) {
      console.error('Error fetching appointments:', error)
      toast({
        title: "Error",
        description: "An error occurred while fetching appointments",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setLoading(false)
    }
  }

  const filterAppointments = () => {
    let filtered = appointments

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(appointment => 
        appointment.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        appointment.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        appointment.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        appointment.phone?.includes(searchTerm)
      )
    }

    // Filter by status
    if (statusFilter !== 'all') {
      filtered = filtered.filter(appointment => appointment.status === statusFilter)
    }

    setFilteredAppointments(filtered)
  }

  const handleStatusUpdate = async (appointmentId, newStatus) => {
    try {
      let result
      
      // Use the special approve function for approved status to send email
      if (newStatus === 'approved') {
        result = await approveAppointment(appointmentId)
      } else {
        result = await updateAppointmentStatus(appointmentId, newStatus)
      }
      
      if (result.success) {
        setAppointments(prev => 
          prev.map(apt => 
            apt.id === appointmentId 
              ? { ...apt, status: newStatus }
              : apt
          )
        )
        
        let successMessage = `Appointment ${newStatus} successfully`
        if (newStatus === 'approved' && result.emailSent) {
          successMessage += '. Confirmation email sent to patient.'
        } else if (newStatus === 'approved' && !result.emailSent) {
          successMessage += '. Warning: Confirmation email failed to send.'
        }
        
        toast({
          title: "Success",
          description: successMessage,
          duration: 5000,
        })
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to update appointment status",
          variant: "destructive",
          duration: 5000,
        })
      }
    } catch (error) {
      console.error('Error updating appointment:', error)
      toast({
        title: "Error",
        description: "An error occurred while updating the appointment",
        variant: "destructive",
        duration: 5000,
      })
    }
  }

  const handleDeleteAppointment = async () => {
    if (!appointmentToDelete) return

    try {
      const result = await deleteAppointment(appointmentToDelete.id)
      if (result.success) {
        setAppointments(prev => prev.filter(apt => apt.id !== appointmentToDelete.id))
        setShowDeleteDialog(false)
        setAppointmentToDelete(null)
        toast({
          title: "Success",
          description: "Appointment deleted successfully",
          duration: 3000,
        })
      } else {
        toast({
          title: "Error",
          description: "Failed to delete appointment",
          variant: "destructive",
          duration: 5000,
        })
      }
    } catch (error) {
      console.error('Error deleting appointment:', error)
      toast({
        title: "Error",
        description: "An error occurred while deleting the appointment",
        variant: "destructive",
        duration: 5000,
      })
    }
  }

  // Handle appointment rejection with reason
  const handleRejectAppointment = async () => {
    if (!appointmentToReject) return

    try {
      const result = await rejectAppointment(appointmentToReject.id, rejectionReason)
      
      if (result.success) {
        setAppointments(prev => 
          prev.map(apt => 
            apt.id === appointmentToReject.id 
              ? { ...apt, status: 'rejected' }
              : apt
          )
        )
        
        let successMessage = 'Appointment rejected successfully'
        if (result.emailSent) {
          successMessage += '. Notification email sent to patient.'
        } else if (!result.emailSent) {
          successMessage += '. Warning: Notification email failed to send.'
        }
        
        toast({
          title: "Success",
          description: successMessage,
          duration: 5000,
        })
        
        setShowRejectDialog(false)
        setAppointmentToReject(null)
        setRejectionReason('')
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to reject appointment",
          variant: "destructive",
          duration: 5000,
        })
      }
    } catch (error) {
      console.error('Error rejecting appointment:', error)
      toast({
        title: "Error",
        description: "An error occurred while rejecting the appointment",
        variant: "destructive",
        duration: 5000,
      })
    }
  }

  const getStatusBadge = (status) => {
    const statusConfig = {
      pending: { variant: 'secondary', color: 'bg-yellow-100 text-yellow-800' },
      confirmed: { variant: 'success', color: 'bg-green-100 text-green-800' },
      cancelled: { variant: 'destructive', color: 'bg-red-100 text-red-800' }
    }
    
    const config = statusConfig[status] || statusConfig.pending
    
    return (
      <Badge className={config.color}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    )
  }

  const formatDate = (date) => {
    if (!date) return 'N/A'
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Appointments</h1>
        <p className="text-gray-600 mt-2">Manage all appointment bookings and patient information.</p>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 flex-wrap">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by name, email, or phone..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Appointments Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Appointments ({filteredAppointments.length})
          </CardTitle>
          <CardDescription>
            {filteredAppointments.length === 0 ? 'No appointments found' : 'Click on any row to view details'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Reason</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Submitted</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAppointments.map((appointment) => (
                  <TableRow key={appointment.id} className="cursor-pointer hover:bg-gray-50">
                    <TableCell>
                      <div>
                        <p className="font-medium">
                          {appointment.firstName} {appointment.lastName}
                        </p>
                        <p className="text-sm text-gray-600">{appointment.email}</p>
                        <p className="text-sm text-gray-600">{appointment.phone}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <div>
                          <p className="font-medium">{appointment.appointmentDate}</p>
                          <p className="text-sm text-gray-600">{appointment.appointmentTime}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <p className="capitalize">{appointment.reason?.replace('-', ' ')}</p>
                    </TableCell>
                    <TableCell>
                      {getStatusBadge(appointment.status)}
                    </TableCell>
                    <TableCell>
                      <p className="text-sm">{formatDate(appointment.createdAt)}</p>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setSelectedAppointment(appointment)
                            setShowDetailsDialog(true)
                          }}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        {appointment.status === 'pending' && (
                          <>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleStatusUpdate(appointment.id, 'approved')}
                              className="text-green-600 hover:text-green-700"
                              title="Approve Appointment"
                            >
                              <CheckCircle className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => {
                                setAppointmentToReject(appointment)
                                setShowRejectDialog(true)
                              }}
                              className="text-orange-600 hover:text-orange-700"
                              title="Reject Appointment"
                            >
                              <XCircle className="h-4 w-4" />
                            </Button>
                          </>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setAppointmentToDelete(appointment)
                            setShowDeleteDialog(true)
                          }}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Appointment Details Dialog */}
      <Dialog open={showDetailsDialog} onOpenChange={setShowDetailsDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Appointment Details</DialogTitle>
            <DialogDescription>
              Complete information about this appointment
            </DialogDescription>
          </DialogHeader>
          {selectedAppointment && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="font-semibold flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Patient Information
                  </h3>
                  <p><strong>Name:</strong> {selectedAppointment.firstName} {selectedAppointment.lastName}</p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    {selectedAppointment.email}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    {selectedAppointment.phone}
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Appointment Details
                  </h3>
                  <p><strong>Date:</strong> {selectedAppointment.appointmentDate}</p>
                  <p><strong>Time:</strong> {selectedAppointment.appointmentTime}</p>
                  <p><strong>Reason:</strong> {selectedAppointment.reason?.replace('-', ' ')}</p>
                  <p><strong>Status:</strong> {getStatusBadge(selectedAppointment.status)}</p>
                </div>
              </div>
              {selectedAppointment.notes && (
                <div>
                  <h3 className="font-semibold mb-2">Additional Notes</h3>
                  <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">
                    {selectedAppointment.notes}
                  </p>
                </div>
              )}
              <div className="border-t pt-4">
                <p className="text-sm text-gray-600">
                  <strong>Submitted:</strong> {formatDate(selectedAppointment.createdAt)}
                </p>
                {selectedAppointment.updatedAt !== selectedAppointment.createdAt && (
                  <p className="text-sm text-gray-600">
                    <strong>Last Updated:</strong> {formatDate(selectedAppointment.updatedAt)}
                  </p>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Appointment</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this appointment? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          {appointmentToDelete && (
            <div className="py-4">
              <p className="text-sm">
                <strong>Patient:</strong> {appointmentToDelete.firstName} {appointmentToDelete.lastName}
              </p>
              <p className="text-sm">
                <strong>Date:</strong> {appointmentToDelete.appointmentDate} at {appointmentToDelete.appointmentTime}
              </p>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDeleteDialog(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteAppointment}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Reject Appointment Dialog */}
      <Dialog open={showRejectDialog} onOpenChange={setShowRejectDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reject Appointment</DialogTitle>
            <DialogDescription>
              Please provide a reason for rejecting this appointment. The patient will be notified via email.
            </DialogDescription>
          </DialogHeader>
          {appointmentToReject && (
            <div className="py-4 space-y-4">
              <div>
                <p className="text-sm">
                  <strong>Patient:</strong> {appointmentToReject.firstName} {appointmentToReject.lastName}
                </p>
                <p className="text-sm">
                  <strong>Date:</strong> {appointmentToReject.appointmentDate} at {appointmentToReject.appointmentTime}
                </p>
                <p className="text-sm">
                  <strong>Service:</strong> {appointmentToReject.reason?.replace('-', ' ')}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Rejection Reason (Optional)
                </label>
                <Textarea
                  rows={4}
                  placeholder="Please provide additional information about why this appointment cannot be scheduled at the requested time..."
                  value={rejectionReason}
                  onChange={(e) => setRejectionReason(e.target.value)}
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => {
              setShowRejectDialog(false)
              setAppointmentToReject(null)
              setRejectionReason('')
            }}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleRejectAppointment}>
              Reject Appointment
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Toaster />
    </div>
  )
}

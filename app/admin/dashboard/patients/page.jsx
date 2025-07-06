"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useToast } from '@/components/ui/use-toast'
import { Toaster } from '@/components/ui/toaster'
import { 
  Users, 
  Search, 
  Eye,
  Phone,
  Mail,
  Calendar,
  User
} from 'lucide-react'
import { 
  getAllAppointments, 
  getAllContactMessages 
} from '@/lib/firebaseOperations'

export default function PatientsPage() {
  const [patients, setPatients] = useState([])
  const [filteredPatients, setFilteredPatients] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPatient, setSelectedPatient] = useState(null)
  const [showDetailsDialog, setShowDetailsDialog] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    fetchPatients()
  }, [])

  useEffect(() => {
    filterPatients()
  }, [patients, searchTerm])

  const fetchPatients = async () => {
    try {
      // Fetch appointments and contact messages to build patient list
      const [appointmentsResult, messagesResult] = await Promise.all([
        getAllAppointments(),
        getAllContactMessages()
      ])

      const patientMap = new Map()

      // Process appointments
      if (appointmentsResult.success) {
        appointmentsResult.data.forEach(appointment => {
          const email = appointment.email
          if (!patientMap.has(email)) {
            patientMap.set(email, {
              id: email,
              firstName: appointment.firstName,
              lastName: appointment.lastName,
              email: appointment.email,
              phone: appointment.phone,
              appointments: [],
              messages: [],
              lastContact: appointment.createdAt
            })
          }
          patientMap.get(email).appointments.push(appointment)
          
          // Update last contact if this is more recent
          if (appointment.createdAt > patientMap.get(email).lastContact) {
            patientMap.get(email).lastContact = appointment.createdAt
          }
        })
      }

      // Process contact messages
      if (messagesResult.success) {
        messagesResult.data.forEach(message => {
          const email = message.email
          if (!patientMap.has(email)) {
            patientMap.set(email, {
              id: email,
              firstName: message.firstName,
              lastName: message.lastName,
              email: message.email,
              phone: message.phone,
              appointments: [],
              messages: [],
              lastContact: message.createdAt
            })
          }
          patientMap.get(email).messages.push(message)
          
          // Update last contact if this is more recent
          if (message.createdAt > patientMap.get(email).lastContact) {
            patientMap.get(email).lastContact = message.createdAt
          }
        })
      }

      // Convert map to array and sort by last contact
      const patientsArray = Array.from(patientMap.values()).sort((a, b) => 
        new Date(b.lastContact) - new Date(a.lastContact)
      )

      setPatients(patientsArray)
    } catch (error) {
      console.error('Error fetching patients:', error)
      toast({
        title: "Error",
        description: "Failed to fetch patient data",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setLoading(false)
    }
  }

  const filterPatients = () => {
    let filtered = patients

    if (searchTerm) {
      filtered = filtered.filter(patient => 
        patient.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.phone?.includes(searchTerm)
      )
    }

    setFilteredPatients(filtered)
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
        <h1 className="text-3xl font-bold text-gray-900">Patients</h1>
        <p className="text-gray-600 mt-2">Manage patient information and history.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{filteredPatients.length}</div>
            <p className="text-xs text-muted-foreground">
              Unique patients in system
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Appointments</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {filteredPatients.reduce((sum, patient) => sum + patient.appointments.length, 0)}
            </div>
            <p className="text-xs text-muted-foreground">
              All appointments booked
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Messages</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {filteredPatients.reduce((sum, patient) => sum + patient.messages.length, 0)}
            </div>
            <p className="text-xs text-muted-foreground">
              Contact form submissions
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Search Patients
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by name, email, or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Patients Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            All Patients ({filteredPatients.length})
          </CardTitle>
          <CardDescription>
            {filteredPatients.length === 0 ? 'No patients found' : 'Click on any row to view patient details'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Appointments</TableHead>
                  <TableHead>Messages</TableHead>
                  <TableHead>Last Contact</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPatients.map((patient) => (
                  <TableRow key={patient.id} className="cursor-pointer hover:bg-gray-50">
                    <TableCell>
                      <div>
                        <p className="font-medium">
                          {patient.firstName} {patient.lastName}
                        </p>
                        <p className="text-sm text-gray-600">{patient.email}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <p className="text-sm flex items-center gap-1">
                          <Mail className="h-3 w-3" />
                          {patient.email}
                        </p>
                        {patient.phone && (
                          <p className="text-sm flex items-center gap-1">
                            <Phone className="h-3 w-3" />
                            {patient.phone}
                          </p>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                        {patient.appointments.length}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                        {patient.messages.length}
                      </span>
                    </TableCell>
                    <TableCell>
                      <p className="text-sm">{formatDate(patient.lastContact)}</p>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setSelectedPatient(patient)
                          setShowDetailsDialog(true)
                        }}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Patient Details Dialog */}
      <Dialog open={showDetailsDialog} onOpenChange={setShowDetailsDialog}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Patient Details
            </DialogTitle>
            <DialogDescription>
              Complete patient information and interaction history
            </DialogDescription>
          </DialogHeader>
          {selectedPatient && (
            <div className="space-y-6">
              {/* Patient Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">Patient Information</h3>
                  <p><strong>Name:</strong> {selectedPatient.firstName} {selectedPatient.lastName}</p>
                  <p><strong>Email:</strong> {selectedPatient.email}</p>
                  {selectedPatient.phone && (
                    <p><strong>Phone:</strong> {selectedPatient.phone}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Summary</h3>
                  <p><strong>Total Appointments:</strong> {selectedPatient.appointments.length}</p>
                  <p><strong>Total Messages:</strong> {selectedPatient.messages.length}</p>
                  <p><strong>Last Contact:</strong> {formatDate(selectedPatient.lastContact)}</p>
                </div>
              </div>

              {/* Appointments History */}
              {selectedPatient.appointments.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-3">Appointment History ({selectedPatient.appointments.length})</h3>
                  <div className="max-h-40 overflow-y-auto space-y-2">
                    {selectedPatient.appointments.map((appointment, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium">{appointment.appointmentDate} at {appointment.appointmentTime}</p>
                            <p className="text-sm text-gray-600">Reason: {appointment.reason?.replace('-', ' ')}</p>
                            {appointment.notes && (
                              <p className="text-sm text-gray-600">Notes: {appointment.notes}</p>
                            )}
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                            appointment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {appointment.status}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          Submitted: {formatDate(appointment.createdAt)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Messages History */}
              {selectedPatient.messages.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-3">Message History ({selectedPatient.messages.length})</h3>
                  <div className="max-h-40 overflow-y-auto space-y-2">
                    {selectedPatient.messages.map((message, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium">{message.subject}</p>
                            <p className="text-sm text-gray-600 line-clamp-2">{message.message}</p>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            message.status === 'read' ? 'bg-gray-100 text-gray-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {message.status}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          Received: {formatDate(message.createdAt)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Actions */}
              <div className="border-t pt-4 flex gap-2">
                <Button
                  onClick={() => window.open(`mailto:${selectedPatient.email}`)}
                  className="flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Send Email
                </Button>
                {selectedPatient.phone && (
                  <Button
                    variant="outline"
                    onClick={() => window.open(`tel:${selectedPatient.phone}`)}
                    className="flex items-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    Call
                  </Button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Toaster />
    </div>
  )
}

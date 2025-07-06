"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useToast } from '@/components/ui/use-toast'
import { Toaster } from '@/components/ui/toaster'
import { 
  Mail, 
  Search, 
  Filter, 
  CheckCircle, 
  Trash2, 
  Eye,
  Phone,
  User,
  MessageSquare
} from 'lucide-react'
import { 
  getAllContactMessages, 
  updateMessageStatus, 
  deleteContactMessage 
} from '@/lib/firebaseOperations'

export default function MessagesPage() {
  const [messages, setMessages] = useState([])
  const [filteredMessages, setFilteredMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedMessage, setSelectedMessage] = useState(null)
  const [showDetailsDialog, setShowDetailsDialog] = useState(false)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [messageToDelete, setMessageToDelete] = useState(null)
  const { toast } = useToast()

  useEffect(() => {
    fetchMessages()
  }, [])

  useEffect(() => {
    filterMessages()
  }, [messages, searchTerm, statusFilter])

  const fetchMessages = async () => {
    try {
      const result = await getAllContactMessages()
      if (result.success) {
        setMessages(result.data)
      } else {
        toast({
          title: "Error",
          description: "Failed to fetch messages",
          variant: "destructive",
          duration: 5000,
        })
      }
    } catch (error) {
      console.error('Error fetching messages:', error)
      toast({
        title: "Error",
        description: "An error occurred while fetching messages",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setLoading(false)
    }
  }

  const filterMessages = () => {
    let filtered = messages

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(message => 
        message.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.subject?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.phone?.includes(searchTerm)
      )
    }

    // Filter by status
    if (statusFilter !== 'all') {
      filtered = filtered.filter(message => message.status === statusFilter)
    }

    setFilteredMessages(filtered)
  }

  const handleStatusUpdate = async (messageId, newStatus) => {
    try {
      const result = await updateMessageStatus(messageId, newStatus)
      if (result.success) {
        setMessages(prev => 
          prev.map(msg => 
            msg.id === messageId 
              ? { ...msg, status: newStatus }
              : msg
          )
        )
        toast({
          title: "Success",
          description: `Message marked as ${newStatus}`,
          duration: 3000,
        })
      } else {
        toast({
          title: "Error",
          description: "Failed to update message status",
          variant: "destructive",
          duration: 5000,
        })
      }
    } catch (error) {
      console.error('Error updating message:', error)
      toast({
        title: "Error",
        description: "An error occurred while updating the message",
        variant: "destructive",
        duration: 5000,
      })
    }
  }

  const handleDeleteMessage = async () => {
    if (!messageToDelete) return

    try {
      const result = await deleteContactMessage(messageToDelete.id)
      if (result.success) {
        setMessages(prev => prev.filter(msg => msg.id !== messageToDelete.id))
        setShowDeleteDialog(false)
        setMessageToDelete(null)
        toast({
          title: "Success",
          description: "Message deleted successfully",
          duration: 3000,
        })
      } else {
        toast({
          title: "Error",
          description: "Failed to delete message",
          variant: "destructive",
          duration: 5000,
        })
      }
    } catch (error) {
      console.error('Error deleting message:', error)
      toast({
        title: "Error",
        description: "An error occurred while deleting the message",
        variant: "destructive",
        duration: 5000,
      })
    }
  }

  const getStatusBadge = (status) => {
    const statusConfig = {
      unread: { color: 'bg-blue-100 text-blue-800' },
      read: { color: 'bg-gray-100 text-gray-800' }
    }
    
    const config = statusConfig[status] || statusConfig.unread
    
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

  const handleViewMessage = (message) => {
    setSelectedMessage(message)
    setShowDetailsDialog(true)
    // Auto-mark as read when viewed
    if (message.status === 'unread') {
      handleStatusUpdate(message.id, 'read')
    }
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
        <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
        <p className="text-gray-600 mt-2">Manage contact form submissions and patient inquiries.</p>
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
                  placeholder="Search by name, email, subject..."
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
                <SelectItem value="unread">Unread</SelectItem>
                <SelectItem value="read">Read</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Messages Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Messages ({filteredMessages.length})
          </CardTitle>
          <CardDescription>
            {filteredMessages.length === 0 ? 'No messages found' : 'Click on any row to view details'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Sender</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Message Preview</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Received</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredMessages.map((message) => (
                  <TableRow 
                    key={message.id} 
                    className={`cursor-pointer hover:bg-gray-50 ${message.status === 'unread' ? 'bg-blue-50' : ''}`}
                    onClick={() => handleViewMessage(message)}
                  >
                    <TableCell>
                      <div>
                        <p className={`font-medium ${message.status === 'unread' ? 'font-bold' : ''}`}>
                          {message.firstName} {message.lastName}
                        </p>
                        <p className="text-sm text-gray-600">{message.email}</p>
                        {message.phone && (
                          <p className="text-sm text-gray-600">{message.phone}</p>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <p className={`${message.status === 'unread' ? 'font-semibold' : ''} line-clamp-1`}>
                        {message.subject}
                      </p>
                    </TableCell>
                    <TableCell>
                      <p className="text-sm text-gray-600 line-clamp-2 max-w-[200px]">
                        {message.message}
                      </p>
                    </TableCell>
                    <TableCell>
                      {getStatusBadge(message.status)}
                    </TableCell>
                    <TableCell>
                      <p className="text-sm">{formatDate(message.createdAt)}</p>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleViewMessage(message)
                          }}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        {message.status === 'unread' && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation()
                              handleStatusUpdate(message.id, 'read')
                            }}
                            className="text-green-600 hover:text-green-700"
                          >
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation()
                            setMessageToDelete(message)
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

      {/* Message Details Dialog */}
      <Dialog open={showDetailsDialog} onOpenChange={setShowDetailsDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Message Details
            </DialogTitle>
            <DialogDescription>
              Complete message information and content
            </DialogDescription>
          </DialogHeader>
          {selectedMessage && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="font-semibold flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Sender Information
                  </h3>
                  <p><strong>Name:</strong> {selectedMessage.firstName} {selectedMessage.lastName}</p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    {selectedMessage.email}
                  </p>
                  {selectedMessage.phone && (
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      {selectedMessage.phone}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Message Details</h3>
                  <p><strong>Subject:</strong> {selectedMessage.subject}</p>
                  <p><strong>Status:</strong> {getStatusBadge(selectedMessage.status)}</p>
                  <p><strong>Received:</strong> {formatDate(selectedMessage.createdAt)}</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Message Content</h3>
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <p className="text-gray-700 whitespace-pre-wrap">
                    {selectedMessage.message}
                  </p>
                </div>
              </div>

              <div className="border-t pt-4 flex gap-2">
                <Button
                  onClick={() => window.open(`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`)}
                  className="flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Reply via Email
                </Button>
                {selectedMessage.phone && (
                  <Button
                    variant="outline"
                    onClick={() => window.open(`tel:${selectedMessage.phone}`)}
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

      {/* Delete Confirmation Dialog */}
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Message</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this message? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          {messageToDelete && (
            <div className="py-4">
              <p className="text-sm">
                <strong>From:</strong> {messageToDelete.firstName} {messageToDelete.lastName}
              </p>
              <p className="text-sm">
                <strong>Subject:</strong> {messageToDelete.subject}
              </p>
              <p className="text-sm">
                <strong>Received:</strong> {formatDate(messageToDelete.createdAt)}
              </p>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDeleteDialog(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteMessage}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Toaster />
    </div>
  )
}

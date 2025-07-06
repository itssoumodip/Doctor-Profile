'use client'

import { useSearchParams } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, Clock, Mail, Phone } from 'lucide-react'
import Link from 'next/link'

export default function ClientConfirmation() {
  const searchParams = useSearchParams()
  const patientName = searchParams.get('name') || 'Patient'
  const appointmentDate = searchParams.get('date') || 'Date not specified'
  const appointmentTime = searchParams.get('time') || 'Time not specified'
  const service = searchParams.get('service') || 'Service not specified'

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="shadow-lg">
          <CardHeader className="text-center bg-green-50 rounded-t-lg">
            <div className="mx-auto mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <CardTitle className="text-2xl text-green-700">
              Appointment Request Submitted!
            </CardTitle>
            <CardDescription className="text-lg text-green-600">
              Thank you, {patientName}. We have received your appointment request.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-6 space-y-6">
            {/* Appointment Details */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-3">Appointment Details:</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Date:</strong> {appointmentDate}</p>
                <p><strong>Time:</strong> {appointmentTime}</p>
                <p><strong>Service:</strong> {service}</p>
              </div>
            </div>

            {/* Status Information */}
            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-yellow-500 mt-0.5 mr-3" />
                <div>
                  <h3 className="font-semibold text-yellow-800">Pending Approval</h3>
                  <p className="text-yellow-700 text-sm mt-1">
                    Your appointment is currently under review. Our medical team will contact you soon.
                  </p>
                </div>
              </div>
            </div>

            {/* What's Next */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">What happens next?</h3>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-blue-500 mt-0.5 mr-3" />
                  <div className="text-sm">
                    <p className="font-medium">Email Confirmation</p>
                    <p className="text-gray-600">
                      You will receive a confirmation email with appointment details.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                  <div className="text-sm">
                    <p className="font-medium">Phone Contact</p>
                    <p className="text-gray-600">
                      Our team may contact you via mobile to confirm details.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 mr-3" />
                  <div className="text-sm">
                    <p className="font-medium">Final Confirmation</p>
                    <p className="text-gray-600">
                      You'll receive a final confirmation once your appointment is approved.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Need to make changes?</h3>
              <p className="text-sm text-gray-600 mb-3">
                If you need to modify or cancel your appointment, please contact us:
              </p>
              <div className="text-sm space-y-1">
                <p><strong>Email:</strong> {process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@example.com"}</p>
                <p><strong>Phone:</strong> {process.env.NEXT_PUBLIC_CONTACT_PHONE || "+1 (555) 123-4567"}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button asChild className="flex-1">
                <Link href="/">
                  Return to Home
                </Link>
              </Button>
              <Button variant="outline" asChild className="flex-1">
                <Link href="/appointment">
                  Book Another Appointment
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

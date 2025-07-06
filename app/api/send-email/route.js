import { sendAppointmentBookingEmail, sendAppointmentApprovalEmail } from '@/lib/emailService'

export async function POST(request) {
  try {
    const { type, email, userName, appointmentDetails } = await request.json()
    
    if (!email || !userName || !appointmentDetails) {
      return Response.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    let result
    
    switch (type) {
      case 'booking':
        result = await sendAppointmentBookingEmail(email, userName, appointmentDetails)
        break
      case 'approval':
        result = await sendAppointmentApprovalEmail(email, userName, appointmentDetails)
        break
      default:
        return Response.json(
          { success: false, error: 'Invalid email type' },
          { status: 400 }
        )
    }
    
    return Response.json(result)
  } catch (error) {
    console.error('Email API error:', error)
    return Response.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    )
  }
}

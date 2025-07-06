import { NextResponse } from 'next/server'

// Email function for appointment rejection
const sendAppointmentRejectionEmail = async (userEmail, userName, appointmentDetails, rejectionReason) => {
  try {
    console.log('Starting to send rejection email to:', userEmail)
    console.log('Email parameters:', {
      userName,
      date: appointmentDetails.date,
      time: appointmentDetails.time,
      service: appointmentDetails.service,
      reason: rejectionReason
    })
    
    const nodemailer = await import('nodemailer')
    
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: userEmail,
      subject: 'Appointment Update - Dr. Partha Pratim Paul',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626;">Appointment Update</h2>
          <p>Dear ${userName},</p>
          
          <p>Thank you for your interest in scheduling an appointment with us. After reviewing your request, we need to inform you about your appointment status.</p>
          
          <div style="background-color: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #dc2626;">
            <h3 style="margin-top: 0; color: #991b1b;">Appointment Request Update</h3>
            <p><strong>Date:</strong> ${appointmentDetails.date}</p>
            <p><strong>Time:</strong> ${appointmentDetails.time}</p>
            <p><strong>Service:</strong> ${appointmentDetails.service}</p>
            <p><strong>Status:</strong> <span style="color: #dc2626; font-weight: bold;">Requires Modification</span></p>
          </div>
          
          ${rejectionReason ? `
          <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h4 style="margin-top: 0; color: #92400e;">Additional Information:</h4>
            <p style="color: #78350f; margin-bottom: 0;">${rejectionReason}</p>
          </div>
          ` : ''}
          
          <div style="background-color: #e0f2fe; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h4 style="margin-top: 0; color: #0277bd;">Next Steps:</h4>
            <ul style="color: #01579b; margin-bottom: 0;">
              <li>Please contact us to discuss alternative appointment times</li>
              <li>You may book a new appointment through our website</li>
              <li>Our staff will be happy to help you find a suitable time</li>
            </ul>
          </div>
          
          <p>We apologize for any inconvenience and look forward to serving you soon. Please don't hesitate to contact us:</p>
          <ul>
            <li>Phone: ${process.env.NEXT_PUBLIC_CONTACT_PHONE}</li>
            <li>Email: ${process.env.NEXT_PUBLIC_CONTACT_EMAIL}</li>
          </ul>
          
          <p>Thank you for your understanding.</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This is an automated message. Please do not reply to this email.</p>
          </div>
        </div>
      `
    }

    const info = await transporter.sendMail(mailOptions)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('Error sending rejection email:', error)
    return { success: false, error: error.message }
  }
}

export async function POST(request) {
  try {
    const { userEmail, userName, appointmentDetails, rejectionReason } = await request.json()
    
    if (!userEmail || !userName || !appointmentDetails) {
      return NextResponse.json(
        { error: 'Missing required fields: userEmail, userName, appointmentDetails' },
        { status: 400 }
      )
    }

    // Log received data for debugging
    console.log('Rejection email API received:', { userEmail, userName, appointmentDetails, rejectionReason })
    
    // Check for fields that might be undefined
    if (!appointmentDetails.date) {
      console.warn('Missing appointmentDetails.date, using fallback')
      appointmentDetails.date = appointmentDetails.appointmentDate || 'Not specified'
    }
    
    if (!appointmentDetails.time) {
      console.warn('Missing appointmentDetails.time, using fallback')
      appointmentDetails.time = appointmentDetails.appointmentTime || 'Not specified'
    }
    
    if (!appointmentDetails.service) {
      console.warn('Missing appointmentDetails.service, using fallback')
      appointmentDetails.service = appointmentDetails.reason || 'Medical appointment'
    }
    
    // Send rejection email to user
    const emailResult = await sendAppointmentRejectionEmail(userEmail, userName, appointmentDetails, rejectionReason)

    if (emailResult.success) {
      console.log('Rejection email sent successfully', emailResult)
      return NextResponse.json({
        success: true,
        message: 'Rejection notification email sent successfully',
        messageId: emailResult.messageId
      })
    } else {
      return NextResponse.json(
        { 
          error: 'Failed to send rejection notification email',
          details: emailResult.error
        },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Error in send-rejection-email API:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    )
  }
}

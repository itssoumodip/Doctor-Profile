import { NextResponse } from 'next/server'

// Email function directly in API route to avoid import issues
const sendAppointmentApprovalEmail = async (userEmail, userName, appointmentDetails) => {
  try {
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
      subject: 'Appointment Approved - Dr. Heart Specialist',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #16a34a;">Appointment Confirmed!</h2>
          <p>Dear ${userName},</p>
          
          <p>Great news! Your appointment has been <strong style="color: #16a34a;">approved and confirmed</strong>.</p>
          
          <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #16a34a;">
            <h3 style="margin-top: 0; color: #166534;">Confirmed Appointment Details:</h3>
            <p><strong>Date:</strong> ${appointmentDetails.date}</p>
            <p><strong>Time:</strong> ${appointmentDetails.time}</p>
            <p><strong>Service:</strong> ${appointmentDetails.service}</p>
            <p><strong>Phone:</strong> ${appointmentDetails.phone}</p>
            ${appointmentDetails.message || appointmentDetails.notes ? `<p><strong>Notes:</strong> ${appointmentDetails.message || appointmentDetails.notes}</p>` : ''}
          </div>
          
          <div style="background-color: #e0f2fe; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h4 style="margin-top: 0; color: #0277bd;">Important Reminders:</h4>
            <ul style="color: #01579b; margin-bottom: 0;">
              <li>Please arrive 15 minutes before your scheduled time</li>
              <li>Bring a valid ID and insurance information</li>
              <li>If you need to reschedule, please contact us at least 24 hours in advance</li>
            </ul>
          </div>
          
          <p>If you have any questions or need to make changes to your appointment, please contact us:</p>
          <ul>
            <li>Phone: [Your Phone Number]</li>
            <li>Email: ${process.env.SMTP_EMAIL}</li>
          </ul>
          
          <p>We look forward to seeing you soon!</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This is an automated message. Please do not reply to this email.</p>
          </div>
        </div>
      `
    }

    const info = await transporter.sendMail(mailOptions)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('Error sending approval email:', error)
    return { success: false, error: error.message }
  }
}

export async function POST(request) {
  try {
    const { userEmail, userName, appointmentDetails } = await request.json()
    
    if (!userEmail || !userName || !appointmentDetails) {
      return NextResponse.json(
        { error: 'Missing required fields: userEmail, userName, appointmentDetails' },
        { status: 400 }
      )
    }

    // Send approval confirmation email to user
    const emailResult = await sendAppointmentApprovalEmail(userEmail, userName, appointmentDetails)

    if (emailResult.success) {
      return NextResponse.json({
        success: true,
        message: 'Approval confirmation email sent successfully',
        messageId: emailResult.messageId
      })
    } else {
      return NextResponse.json(
        { 
          error: 'Failed to send approval confirmation email',
          details: emailResult.error
        },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Error in send-approval-email API:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    )
  }
}

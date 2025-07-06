import { NextResponse } from 'next/server'

// Test email function - directly in API route to avoid import issues
const sendTestEmail = async (userEmail, userName, appointmentDetails) => {
  try {
    // Dynamic import of nodemailer to ensure server-side only
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
      subject: 'TEST - Appointment Booking Confirmation - Dr. Heart Specialist',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">TEST EMAIL - Appointment Booking Received</h2>
          <p>Dear ${userName},</p>
          
          <p>This is a test email to verify the email system is working correctly.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Test Appointment Details:</h3>
            <p><strong>Date:</strong> ${appointmentDetails.appointmentDate}</p>
            <p><strong>Time:</strong> ${appointmentDetails.appointmentTime}</p>
            <p><strong>Service:</strong> ${appointmentDetails.service}</p>
            <p><strong>Phone:</strong> ${appointmentDetails.phone}</p>
            ${appointmentDetails.message ? `<p><strong>Message:</strong> ${appointmentDetails.message}</p>` : ''}
          </div>
          
          <div style="background-color: #fee2e2; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #dc2626; margin: 0;"><strong>Note:</strong> Your appointment is currently <strong>pending approval</strong>. Our team will review your request and send you a confirmation email once approved.</p>
          </div>
          
          <p>If you have any questions or need to modify your appointment, please contact us:</p>
          <ul>
            <li>Phone: [Your Phone Number]</li>
            <li>Email: ${process.env.SMTP_EMAIL}</li>
          </ul>
          
          <p>Thank you for choosing our services!</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This is an automated message. Please do not reply to this email.</p>
          </div>
        </div>
      `
    }

    await transporter.sendMail(mailOptions)
    return { success: true, message: 'Test email sent successfully' }
  } catch (error) {
    console.error('Error sending test email:', error)
    return { success: false, message: 'Failed to send test email', error: error.message }
  }
}

export async function POST(request) {
  try {
    const testData = {
      email: process.env.ADMIN_EMAIL || 'test@example.com',
      fullName: 'Test User',
      appointmentDate: 'Monday, January 15',
      appointmentTime: '10:00 AM',
      service: 'Initial Consultation',
      phone: '+1 (555) 123-4567',
      message: 'This is a test appointment to verify the email system'
    }

    const result = await sendTestEmail(
      testData.email,
      testData.fullName,
      testData
    )

    return NextResponse.json({
      success: result.success,
      message: result.message,
      details: result
    })
  } catch (error) {
    console.error('Error in test-email API:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    )
  }
}

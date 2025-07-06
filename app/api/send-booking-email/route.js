import { NextResponse } from 'next/server'

// Email functions directly in API route to avoid import issues
const sendAppointmentBookingEmail = async (userEmail, userName, appointmentDetails) => {
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
      subject: 'Appointment Booking Confirmation - Dr. Heart Specialist',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Appointment Request Received ✅</h2>
          <p>Dear ${userName},</p>
          
          <p>Thank you for booking an appointment with us. We have received your appointment request and are currently reviewing it.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Requested Appointment Details:</h3>
            <p><strong>Date:</strong> ${appointmentDetails.date}</p>
            <p><strong>Time:</strong> ${appointmentDetails.time}</p>
            <p><strong>Service:</strong> ${appointmentDetails.service}</p>
            <p><strong>Phone:</strong> ${appointmentDetails.phone}</p>
            ${appointmentDetails.message || appointmentDetails.notes ? `<p><strong>Message:</strong> ${appointmentDetails.message || appointmentDetails.notes}</p>` : ''}
          </div>
          
          <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h4 style="margin-top: 0; color: #92400e;">📧 What happens next?</h4>
            <ul style="color: #78350f; margin-bottom: 0;">
              <li><strong>Email Confirmation:</strong> We will send you a confirmation email once your appointment is approved</li>
              <li><strong>Phone Contact:</strong> Our team may contact you via mobile to confirm details or suggest alternative times</li>
              <li><strong>Final Confirmation:</strong> You'll receive a final confirmation with complete appointment details</li>
            </ul>
          </div>
          
          <div style="background-color: #fee2e2; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #dc2626; margin: 0;"><strong>⏳ Status:</strong> Your appointment is currently <strong>pending approval</strong>. Our medical team will review your request and respond within 24 hours.</p>
          </div>
          
          <p>If you have any questions or need to modify your appointment, please contact us:</p>
          <ul>
            <li>📞 Phone: [Your Phone Number]</li>
            <li>📧 Email: ${process.env.SMTP_EMAIL}</li>
          </ul>
          
          <p>Thank you for choosing our medical services!</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This is an automated message. Please do not reply to this email.</p>
          </div>
        </div>
      `
    }

    const info = await transporter.sendMail(mailOptions)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('Error sending booking email:', error)
    return { success: false, error: error.message }
  }
}

const sendAdminNotificationEmail = async (appointmentData) => {
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
      to: process.env.ADMIN_EMAIL,
      subject: 'New Appointment Booking - Admin Notification',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626;">New Appointment Booking</h2>
          <p>A new appointment has been booked and requires your review:</p>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #dc2626;">
            <h3 style="margin-top: 0; color: #374151;">Patient Information:</h3>
            <p><strong>Name:</strong> ${appointmentData.name}</p>
            <p><strong>Email:</strong> ${appointmentData.email}</p>
            <p><strong>Phone:</strong> ${appointmentData.phone}</p>
          </div>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Appointment Details:</h3>
            <p><strong>Date:</strong> ${appointmentData.date}</p>
            <p><strong>Time:</strong> ${appointmentData.time}</p>
            <p><strong>Service:</strong> ${appointmentData.service}</p>
            ${appointmentData.message ? `<p><strong>Message:</strong> ${appointmentData.message}</p>` : ''}
          </div>
          
          <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #92400e; margin: 0;"><strong>Action Required:</strong> Please review this appointment and approve or modify as needed through the admin dashboard.</p>
          </div>
          
          <p>Please log in to the admin dashboard to manage this appointment.</p>
        </div>
      `
    }

    const info = await transporter.sendMail(mailOptions)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('Error sending admin notification:', error)
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

    // Send confirmation email to user
    const userEmailResult = await sendAppointmentBookingEmail(userEmail, userName, appointmentDetails)
    
    // Send notification to admin with correct field mapping
    const adminNotificationData = {
      name: userName,
      email: userEmail,
      phone: appointmentDetails.phone,
      date: appointmentDetails.date,
      time: appointmentDetails.time,
      service: appointmentDetails.service,
      message: appointmentDetails.notes || appointmentDetails.message,
      fullName: userName
    }
    
    const adminEmailResult = await sendAdminNotificationEmail(adminNotificationData)

    if (userEmailResult.success) {
      return NextResponse.json({
        success: true,
        message: 'Booking confirmation email sent successfully',
        userEmailSent: userEmailResult.success,
        adminEmailSent: adminEmailResult.success,
        userMessageId: userEmailResult.messageId,
        adminMessageId: adminEmailResult.messageId
      })
    } else {
      return NextResponse.json(
        { 
          error: 'Failed to send booking confirmation email',
          details: userEmailResult.error
        },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Error in send-booking-email API:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    )
  }
}

// Email service functions - Server-side only
// This file exports email templates and configuration functions

export const getEmailConfig = () => ({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
})

export const getBookingEmailTemplate = (userName, appointmentDetails) => ({
  from: `"Dr. Partha Pratim Paul Medical Center" <${process.env.SMTP_EMAIL}>`,
  subject: 'Appointment Request Received - Confirmation Pending',
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #2563eb; margin: 0;">Dr. Partha Pratim Paul Medical Center</h1>
          <p style="color: #6b7280; margin: 5px 0;">Quality Healthcare Services</p>
        </div>
        
        <h2 style="color: #1f2937; margin-bottom: 20px;">Appointment Request Received</h2>
        
        <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
          Dear ${userName},
        </p>
        
        <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
          Thank you for booking an appointment with us. We have received your appointment request with the following details:
        </p>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1f2937; margin-top: 0;">Appointment Details:</h3>
          <ul style="color: #4b5563; line-height: 1.8;">
            <li><strong>Name:</strong> ${appointmentDetails.fullName || appointmentDetails.name}</li>
            <li><strong>Phone:</strong> ${appointmentDetails.phone}</li>
            <li><strong>Email:</strong> ${appointmentDetails.email}</li>
            <li><strong>Date:</strong> ${appointmentDetails.date || appointmentDetails.appointmentDate}</li>
            <li><strong>Time:</strong> ${appointmentDetails.time || appointmentDetails.appointmentTime}</li>
            <li><strong>Service:</strong> ${appointmentDetails.service || appointmentDetails.reason}</li>
            ${appointmentDetails.message || appointmentDetails.notes ? `<li><strong>Message:</strong> ${appointmentDetails.message || appointmentDetails.notes}</li>` : ''}
          </ul>
        </div>
        
        <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0;">
          <p style="margin: 0; color: #92400e; font-weight: 500;">
            ⏳ Your appointment is currently under review. We will contact you within 24 hours to confirm your appointment or discuss alternative times if needed.
          </p>
        </div>
        
        <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
          <strong>What happens next?</strong>
        </p>
        <ul style="color: #4b5563; line-height: 1.8;">
          <li>Our team will review your appointment request</li>
          <li>We will call you at <strong>${appointmentDetails.phone}</strong> to confirm</li>
          <li>You will receive a confirmation email once approved</li>
          <li>If you need to make changes, please call us immediately</li>
        </ul>
        
        <div style="text-align: center; margin: 30px 0;">
          <div style="background-color: #2563eb; color: white; padding: 15px; border-radius: 8px; display: inline-block;">
            <p style="margin: 0; font-size: 18px; font-weight: bold;">Need immediate assistance?</p>
            <p style="margin: 5px 0 0 0;">Call us at: <strong>+1 (555) 123-4567</strong></p>
          </div>
        </div>
        
        <p style="color: #6b7280; font-size: 14px; text-align: center; margin-top: 30px; border-top: 1px solid #e5e7eb; padding-top: 20px;">
          This is an automated message. Please do not reply to this email.<br>
          If you have any questions, please contact us directly.
        </p>
      </div>
    </div>
  `,
})

export const getApprovalEmailTemplate = (userName, appointmentDetails) => ({
  from: `"Dr. Partha Pratim Paul Medical Center" <${process.env.SMTP_EMAIL}>`,
  subject: '✅ Appointment Confirmed - Dr. Partha Pratim Paul Medical Center',
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #2563eb; margin: 0;">Dr. Partha Pratim Paul Medical Center</h1>
          <p style="color: #6b7280; margin: 5px 0;">Quality Healthcare Services</p>
        </div>
        
        <div style="background-color: #dcfce7; border-left: 4px solid #16a34a; padding: 20px; margin-bottom: 30px; border-radius: 0 8px 8px 0;">
          <h2 style="color: #166534; margin: 0 0 10px 0;">🎉 Appointment Confirmed!</h2>
          <p style="color: #166534; margin: 0; font-size: 16px;">Your appointment has been approved and scheduled.</p>
        </div>
        
        <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
          Dear ${userName},
        </p>
        
        <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
          Great news! Your appointment has been confirmed. Here are your appointment details:
        </p>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1f2937; margin-top: 0;">Confirmed Appointment Details:</h3>
          <ul style="color: #4b5563; line-height: 1.8;">
            <li><strong>Date:</strong> ${appointmentDetails.date || appointmentDetails.appointmentDate}</li>
            <li><strong>Time:</strong> ${appointmentDetails.time || appointmentDetails.appointmentTime}</li>
            <li><strong>Service:</strong> ${appointmentDetails.service || appointmentDetails.reason}</li>
            <li><strong>Status:</strong> <span style="color: #16a34a; font-weight: bold;">CONFIRMED</span></li>
          </ul>
        </div>
        
        <div style="background-color: #dbeafe; border-left: 4px solid #2563eb; padding: 15px; margin: 20px 0;">
          <h4 style="color: #1e40af; margin: 0 0 10px 0;">Important Reminders:</h4>
          <ul style="color: #1e40af; margin: 0; line-height: 1.6;">
            <li>Please arrive 15 minutes before your appointment time</li>
            <li>Bring a valid ID and insurance card (if applicable)</li>
            <li>If you need to reschedule, please call us at least 24 hours in advance</li>
            <li>Bring any relevant medical records or test results</li>
          </ul>
        </div>
        
        <div style="text-align: center; margin: 30px 0;">
          <div style="background-color: #2563eb; color: white; padding: 15px; border-radius: 8px; display: inline-block;">
            <p style="margin: 0; font-size: 18px; font-weight: bold;">Need to make changes?</p>
            <p style="margin: 5px 0 0 0;">Call us at: <strong>+1 (555) 123-4567</strong></p>
          </div>
        </div>
        
        <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
          We look forward to seeing you at your appointment. Thank you for choosing Dr. Partha Pratim Paul Medical Center for your healthcare needs.
        </p>
        
        <p style="color: #6b7280; font-size: 14px; text-align: center; margin-top: 30px; border-top: 1px solid #e5e7eb; padding-top: 20px;">
          This is an automated message. Please do not reply to this email.<br>
          If you have any questions, please contact us directly.
        </p>
      </div>
    </div>
  `,
})

export const getAdminNotificationTemplate = (appointmentDetails) => ({
  from: `"Dr. Partha Pratim Paul Medical Center System" <${process.env.SMTP_EMAIL}>`,
  to: process.env.ADMIN_EMAIL,
  subject: '🔔 New Appointment Request - Action Required',
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #2563eb; margin: 0;">Dr. Partha Pratim Paul Medical Center</h1>
          <p style="color: #6b7280; margin: 5px 0;">Admin Dashboard</p>
        </div>
        
        <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; margin-bottom: 30px; border-radius: 0 8px 8px 0;">
          <h2 style="color: #92400e; margin: 0 0 10px 0;">📅 New Appointment Request</h2>
          <p style="color: #92400e; margin: 0; font-size: 16px;">A new appointment request requires your review and approval.</p>
        </div>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1f2937; margin-top: 0;">Patient Details:</h3>
          <ul style="color: #4b5563; line-height: 1.8;">
            <li><strong>Name:</strong> ${appointmentDetails.fullName || appointmentDetails.name}</li>
            <li><strong>Phone:</strong> ${appointmentDetails.phone}</li>
            <li><strong>Email:</strong> ${appointmentDetails.email}</li>
            <li><strong>Requested Date:</strong> ${appointmentDetails.appointmentDate || appointmentDetails.date}</li>
            <li><strong>Requested Time:</strong> ${appointmentDetails.appointmentTime || appointmentDetails.time}</li>
            <li><strong>Service:</strong> ${appointmentDetails.reason || appointmentDetails.service}</li>
            ${appointmentDetails.message || appointmentDetails.notes ? `<li><strong>Message:</strong> ${appointmentDetails.message || appointmentDetails.notes}</li>` : ''}
            <li><strong>Submitted:</strong> ${new Date().toLocaleString()}</li>
          </ul>
        </div>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/admin/dashboard/appointments" 
             style="background-color: #2563eb; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
            Review in Admin Dashboard
          </a>
        </div>
        
        <div style="background-color: #dbeafe; border-left: 4px solid #2563eb; padding: 15px; margin: 20px 0;">
          <p style="color: #1e40af; margin: 0; font-weight: 500;">
            💡 <strong>Action Required:</strong> Please log into the admin dashboard to approve or reschedule this appointment request.
          </p>
        </div>
        
        <p style="color: #6b7280; font-size: 14px; text-align: center; margin-top: 30px; border-top: 1px solid #e5e7eb; padding-top: 20px;">
          This is an automated notification from the Dr. Partha Pratim Paul Medical Center appointment system.
        </p>
      </div>
    </div>
  `,
})

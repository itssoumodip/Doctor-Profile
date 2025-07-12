import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    // Get contact form data
    const contactData = await request.json()
    
    // Validate required fields
    if (!contactData.email || !contactData.firstName || !contactData.message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    // Send email using nodemailer
    const result = await sendContactEmail(contactData)
    
    if (result.success) {
      return NextResponse.json({ success: true, message: 'Email sent successfully' })
    } else {
      throw new Error(result.error)
    }
  } catch (error) {
    console.error('Contact Email API error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    )
  }
}

async function sendContactEmail(contactData) {
  try {
    // Dynamic import of nodemailer to ensure server-side only
    const nodemailer = await import('nodemailer')
    
    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    const fullName = `${contactData.firstName} ${contactData.lastName || ''}`
    
    // Create email content with modern and professional template
    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: process.env.CONTACT_RECIPIENT_EMAIL,
      replyTo: contactData.email,
      subject: `Contact Form: ${contactData.subject || 'New Message from Website'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #2563eb; margin-top: 0;">New Contact Form Submission</h2>
          
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h3 style="margin-top: 0; color: #374151;">Contact Information</h3>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${contactData.email}</p>
            ${contactData.phone ? `<p><strong>Phone:</strong> ${contactData.phone}</p>` : ''}
            <p><strong>Subject:</strong> ${contactData.subject || 'No subject provided'}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div style="background-color: #f0f9ff; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #2563eb;">
            <h3 style="margin-top: 0; color: #374151;">Message</h3>
            <p style="white-space: pre-line;">${contactData.message}</p>
          </div>
          
          <p style="color: #6b7280; font-size: 0.875rem; margin-top: 20px; border-top: 1px solid #e5e7eb; padding-top: 15px;">
            This message was sent from the contact form on your website.
          </p>
        </div>
      `
    }
    
    // Send mail
    await transporter.sendMail(mailOptions)
    
    return { success: true }
  } catch (error) {
    console.error('Error sending contact email:', error)
    return { success: false, error: error.message }
  }
}

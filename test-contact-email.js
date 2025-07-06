// Simple script to test contact email functionality
// Run with: node test-contact-email.js

require('dotenv').config({ path: '.env.local' });
const nodemailer = require('nodemailer');

async function testContactEmail() {
  try {
    console.log('Testing contact email functionality...');
    
    // Check environment variables
    if (!process.env.SMTP_HOST || !process.env.SMTP_EMAIL || !process.env.SMTP_PASSWORD) {
      console.error('ERROR: Missing required email configuration in .env.local file');
      console.error('Please make sure SMTP_HOST, SMTP_PORT, SMTP_EMAIL, and SMTP_PASSWORD are set');
      return;
    }
    
    // Create a test transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });
    
    // Test connection
    console.log('Verifying SMTP connection...');
    await transporter.verify();
    console.log('SMTP connection successful! ✓');
    
    // Test message data
    const testContactData = {
      firstName: 'Test',
      lastName: 'User',
      email: process.env.SMTP_EMAIL, // Send to yourself for testing
      phone: '123-456-7890',
      subject: 'Test Contact Form Email',
      message: 'This is a test message from the contact form email system.',
    };
    
    const fullName = `${testContactData.firstName} ${testContactData.lastName}`;
    
    // Create email content
    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: process.env.CONTACT_RECIPIENT_EMAIL || process.env.SMTP_EMAIL,
      replyTo: testContactData.email,
      subject: `Contact Form: ${testContactData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #2563eb; margin-top: 0;">Test Contact Form Submission</h2>
          
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h3 style="margin-top: 0; color: #374151;">Contact Information</h3>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${testContactData.email}</p>
            <p><strong>Phone:</strong> ${testContactData.phone}</p>
            <p><strong>Subject:</strong> ${testContactData.subject}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div style="background-color: #f0f9ff; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #2563eb;">
            <h3 style="margin-top: 0; color: #374151;">Message</h3>
            <p>${testContactData.message}</p>
          </div>
          
          <p style="color: #6b7280; font-size: 0.875rem; margin-top: 20px; border-top: 1px solid #e5e7eb; padding-top: 15px;">
            This is a test message from your website contact form system.
          </p>
        </div>
      `,
    };
    
    // Send mail
    console.log('Sending test email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Test email sent successfully! ✓');
    console.log('Message ID:', info.messageId);
    
    console.log('\nEmail Configuration Test Completed Successfully!');
    
  } catch (error) {
    console.error('Error testing contact email functionality:');
    console.error(error);
    
    if (error.code === 'EAUTH') {
      console.log('\nTIP: If using Gmail, you might need to:');
      console.log('1. Allow less secure apps: https://myaccount.google.com/lesssecureapps');
      console.log('2. Or create an App Password if you have 2FA enabled');
    }
  }
}

testContactEmail();

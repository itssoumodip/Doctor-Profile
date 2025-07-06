// Simple SMTP test using dynamic import
async function testEmail() {
  try {
    console.log('Starting email test...');
    
    // Dynamic import for ES modules compatibility
    const nodemailerModule = await import('nodemailer');
    console.log('Nodemailer imported successfully');
    
    // Get the correct export
    const nodemailer = nodemailerModule.default || nodemailerModule;
    console.log('Using createTransport method...');
    
    // Create transporter - CORRECT METHOD: createTransport (not createTransporter)
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // Use STARTTLS
      auth: {
        user: 'soumodipddas2005@gmail.com',
        pass: 'hckbxnfoefewjktv',
      },
      tls: {
        rejectUnauthorized: false // Allow self-signed certificates
      }
    });

    console.log('Transporter created, verifying connection...');
    
    // Verify connection
    await transporter.verify();
    console.log('✅ SMTP connection verified successfully!');

    // Send test email
    const mailOptions = {
      from: 'soumodipddas2005@gmail.com',
      to: 'soumodipddas2005@gmail.com',
      subject: 'Test Email - Doctor Booking System',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">✅ Email System Test Successful</h2>
          <p>This is a test email to verify that the email system is working correctly.</p>
          <p><strong>Test Time:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>Status:</strong> Email configuration is working properly!</p>
          <div style="background-color: #f0fdf4; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #16a34a; margin: 0;">🎉 Success! Your email system is now functional.</p>
          </div>
        </div>
      `
    };

    console.log('Sending test email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('Response:', info.response);
    
    return { success: true, messageId: info.messageId };
    
  } catch (error) {
    console.error('❌ Email test failed:');
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    
    // Provide helpful error messages
    if (error.code === 'EAUTH') {
      console.error('\n🔐 Authentication Error:');
      console.error('- Check if your Gmail app password is correct');
      console.error('- Ensure 2-factor authentication is enabled on Gmail');
      console.error('- Verify the app password was generated correctly');
    } else if (error.code === 'ECONNECTION') {
      console.error('\n🌐 Connection Error:');
      console.error('- Check your internet connection');
      console.error('- Verify SMTP settings (host, port)');
      console.error('- Check if firewall is blocking the connection');
    } else if (error.code === 'ETIMEDOUT') {
      console.error('\n⏰ Timeout Error:');
      console.error('- Gmail SMTP server is not responding');
      console.error('- Try again in a few minutes');
    }
    
    return { success: false, error: error.message };
  }
}

// Run the test
testEmail().then(result => {
  if (result.success) {
    console.log('\n🎉 EMAIL SYSTEM IS WORKING!');
    console.log('You can now use the appointment booking system.');
  } else {
    console.log('\n❌ EMAIL SYSTEM NEEDS FIXING');
    console.log('Please check the error messages above.');
  }
}).catch(err => {
  console.error('Unexpected error:', err);
});

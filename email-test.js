// Simple email test
async function testEmailSystem() {
  try {
    console.log('Testing email system...')
    
    // Test 1: Check if nodemailer can be imported
    const nodemailer = await import('nodemailer')
    console.log('✅ Nodemailer imported successfully')
    
    // Test 2: Create transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'soumodipddas2005@gmail.com',
        pass: 'hckbxnfoefewjktv',
      },
    })
    console.log('✅ Transporter created')
    
    // Test 3: Verify connection
    await transporter.verify()
    console.log('✅ SMTP connection verified')
    
    // Test 4: Send test email
    const info = await transporter.sendMail({
      from: 'soumodipddas2005@gmail.com',
      to: 'soumodipddas2005@gmail.com',
      subject: 'Test Email - Doctor Booking System',
      html: `
        <h2>🎉 Email System Test</h2>
        <p>This test email was sent at: ${new Date().toLocaleString()}</p>
        <p>If you receive this, your email system is working!</p>
      `
    })
    
    console.log('✅ Test email sent successfully!')
    console.log('Message ID:', info.messageId)
    return { success: true, messageId: info.messageId }
    
  } catch (error) {
    console.error('❌ Email test failed:', error.message)
    
    // Specific error handling
    if (error.code === 'EAUTH') {
      console.error('🔐 Authentication failed - check Gmail app password')
    } else if (error.code === 'ECONNECTION') {
      console.error('🌐 Connection failed - check internet/firewall')
    } else if (error.code === 'ETIMEDOUT') {
      console.error('⏰ Connection timeout - try again')
    }
    
    return { success: false, error: error.message }
  }
}

testEmailSystem()

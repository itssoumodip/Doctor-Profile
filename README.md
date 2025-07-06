# Dr. Partha Pratim Paul - Doctor Profile Website

A modern, responsive doctor profile website for Dr. Partha Pratim Paul built with Next.js, Tailwind CSS, and Firebase.

## Features

- Responsive design
- Interactive appointment booking
- Contact form with email notifications
- Admin dashboard
- Patient testimonials
- Service information
- Double-booking prevention for appointments

## Email Configuration

The contact form now uses Nodemailer to send emails directly instead of storing messages in the database.

### Setup Email Service

1. Create or update your `.env.local` file with the following email configuration:
   ```
   SMTP_HOST=your-smtp-host
   SMTP_PORT=your-smtp-port
   SMTP_EMAIL=your-email@example.com
   SMTP_PASSWORD=your-email-password
   CONTACT_RECIPIENT_EMAIL=where-to-receive@example.com
   ```

2. Email Service Options:
   - **Gmail**: Use `smtp.gmail.com` as host
   - **Outlook/Hotmail**: Use `smtp-mail.outlook.com` as host
   - **Yahoo**: Use `smtp.mail.yahoo.com` as host
   - **Custom Domain**: Use your domain's SMTP server

3. If using Gmail, you may need to:
   - Enable "Less secure app access" or
   - Create an "App Password" if you have 2FA enabled

### Testing Email Functionality

To verify your email configuration is working properly:

```bash
# Run the email test script
node test-contact-email.js
```

This will send a test email to the address specified in your .env.local file.

## Development

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This site can be easily deployed to Vercel:

```bash
npm run build
```

Remember to set up the environment variables in your deployment platform.

### Vercel Deployment Notes

The project includes a `build-fix.js` script that runs automatically during the build process to ensure all configuration files are properly set up. This script:

1. Ensures Tailwind CSS and related dependencies are installed
2. Creates JavaScript versions of TypeScript configuration files if needed
3. Handles compatibility between ESM and CommonJS module formats

When deploying to Vercel, make sure to add all the required environment variables:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_EMAIL`
- `SMTP_PASSWORD`
- `CONTACT_RECIPIENT_EMAIL`
- Firebase configuration variables

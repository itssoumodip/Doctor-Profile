# Doctor Profile Website

A modern, responsive doctor profile website built with Next.js, Tailwind CSS, and Firebase.

## Features

- Responsive design
- Interactive appointment booking
- Contact form with email notifications
- Admin dashboard
- Patient testimonials
- Service information

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

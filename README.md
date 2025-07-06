# Doctor Profile Website with Admin Dashboard

A modern, responsive doctor profile website built with Next.js 14, Firebase, and Tailwind CSS. Features a complete admin dashboard for managing appointments and contact messages.

## 🚀 Features

### Public Website
- **Responsive Design** - Mobile-first approach with beautiful UI
- **Appointment Booking** - Multi-step form with date/time selection
- **Contact Forms** - Patient inquiry system
- **Modern UI** - Tailwind CSS with custom animations
- **SEO Optimized** - Meta tags and structured data

### Admin Dashboard
- **Secure Authentication** - Protected admin routes
- **Appointment Management** - View, approve, cancel, and delete appointments
- **Message Management** - Handle contact form submissions
- **Analytics Dashboard** - Overview of key metrics
- **Real-time Updates** - Firebase real-time database
- **CRUD Operations** - Full data management capabilities

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Backend**: Firebase (Firestore, Auth)
- **UI Components**: Radix UI primitives
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Styling**: Tailwind CSS with custom animations

## 📋 Prerequisites

- Node.js 18+ 
- Firebase account
- Git

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone [your-repo-url]
cd doctor-profile
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Firebase Setup

#### Create a Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Follow the setup wizard

#### Enable Required Services
1. **Firestore Database**:
   - Go to "Firestore Database" in the left sidebar
   - Click "Create database"
   - Choose "Start in test mode" (you can configure security rules later)
   - Select a location

2. **Authentication** (Optional - for enhanced admin security):
   - Go to "Authentication" in the left sidebar
   - Click "Get started"
   - Enable "Email/Password" sign-in method

#### Get Firebase Configuration
1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps" section
3. Click "Add app" and select "Web"
4. Register your app
5. Copy the configuration object

### 4. Environment Configuration

Update the Firebase configuration in `lib/firebase.js`:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key-here",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com", 
  messagingSenderId: "123456789",
  appId: "your-app-id"
}
```

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📊 Database Structure

The application creates the following Firestore collections automatically:

### Appointments Collection
```javascript
{
  id: "auto-generated",
  firstName: "John",
  lastName: "Doe", 
  email: "john@example.com",
  phone: "+1234567890",
  appointmentDate: "Monday, December 25, 2023",
  appointmentTime: "10:00 AM",
  reason: "consultation",
  notes: "Additional patient notes",
  status: "pending", // pending, confirmed, cancelled
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

### Contact Messages Collection  
```javascript
{
  id: "auto-generated",
  firstName: "Jane",
  lastName: "Smith",
  email: "jane@example.com", 
  phone: "+1234567890",
  subject: "Question about services",
  message: "Patient inquiry message",
  status: "unread", // unread, read
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

## 🔐 Admin Access

### Default Credentials
- **Email**: admin@doctor.com
- **Password**: admin123

### Admin Routes
- `/admin` - Login page
- `/admin/dashboard` - Main dashboard with analytics
- `/admin/dashboard/appointments` - Appointment management
- `/admin/dashboard/messages` - Message management

## 🎨 Customization

### Doctor Information
Update the following files to customize for your practice:

1. **Personal Information**: 
   - `app/page.jsx` - Hero section and stats
   - `app/layout.jsx` - Meta title and description
   - `app/about/page.jsx` - Doctor biography

2. **Contact Details**:
   - `app/contact/page.jsx` - Phone, email, address
   - `components/footer.jsx` - Footer contact info

3. **Services**:
   - `app/services/page.jsx` - Medical services offered

### Styling
- Modify `tailwind.config.ts` for custom colors and themes
- Update `app/globals.css` for global styles
- Customize component styles in the `components/` directory

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically deploy your app

### Other Platforms
- **Netlify**: Connect GitHub repo and deploy
- **Firebase Hosting**: `npm run build && firebase deploy`

## 📱 Features Breakdown

### Appointment System
- Multi-step booking form
- Date and time slot selection  
- Patient information collection
- Email validation and form validation
- Real-time status updates
- Admin approval workflow

### Contact Management
- Contact form submissions
- Message status tracking (read/unread)
- Built-in email reply functionality
- Phone call integration
- Search and filtering

### Admin Dashboard
- Real-time analytics
- Appointment status management
- Message inbox with previews
- Bulk operations
- Data export capabilities

## 🔒 Security

### Current Implementation
- Admin authentication with session management
- Input validation and sanitization
- XSS protection
- CSRF protection via Next.js

### Production Recommendations
1. **Enable Firebase Security Rules**:
   ```javascript
   // Firestore Rules
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /{document=**} {
         allow read, write: if request.auth != null;
       }
     }
   }
   ```

2. **Environment Variables**: Store sensitive data in environment variables
3. **HTTPS**: Always use HTTPS in production
4. **Rate Limiting**: Implement rate limiting for forms

## 🐛 Troubleshooting

### Common Issues

1. **Firebase Connection Errors**:
   - Verify your Firebase configuration
   - Check if Firestore is enabled
   - Ensure you're using the correct project ID

2. **Build Errors**:
   - Run `npm install` to ensure all dependencies are installed
   - Check for TypeScript errors (the app ignores them but fix for best practice)

3. **Admin Login Issues**:
   - Use the exact credentials: admin@doctor.com / admin123
   - Clear browser cache and cookies

## 📞 Support

If you encounter any issues or need customization help, please:

1. Check the troubleshooting section above
2. Review the Firebase console for any errors
3. Check browser console for JavaScript errors

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components by [Radix UI](https://www.radix-ui.com/)
- Icons by [Lucide](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Backend by [Firebase](https://firebase.google.com/)

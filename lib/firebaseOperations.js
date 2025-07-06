import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy, 
  where,
  getDoc,
  serverTimestamp 
} from 'firebase/firestore'
import { signInAnonymously } from 'firebase/auth'
import { db, auth } from './firebase'
// Email functions will be called via API routes to avoid Node.js module issues in browser

// Collections
const APPOINTMENTS_COLLECTION = 'appointments'
const CONTACT_MESSAGES_COLLECTION = 'contactMessages'
const USERS_COLLECTION = 'users'
const ADMINS_COLLECTION = 'admins'

// Appointment Operations with Email Integration
export const createAppointment = async (appointmentData) => {
  try {
    console.log('Attempting to create appointment with data:', appointmentData)
    console.log('Firebase app initialized:', !!db)
    
    const docRef = await addDoc(collection(db, APPOINTMENTS_COLLECTION), {
      ...appointmentData,
      status: 'pending',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    })
    
    console.log('Appointment created successfully with ID:', docRef.id)
    
    // Send emails via API route to avoid Node.js module issues
    try {
      const emailResponse = await fetch('/api/send-booking-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userEmail: appointmentData.email,
          userName: `${appointmentData.firstName} ${appointmentData.lastName}`,
          appointmentDetails: {
            ...appointmentData,
            date: appointmentData.appointmentDate,
            time: appointmentData.appointmentTime,
            service: appointmentData.reason
          }
        })
      })
      
      const emailResult = await emailResponse.json()
      console.log('Email sending result:', emailResult)
      
      return { 
        success: true, 
        id: docRef.id, 
        emailSent: emailResult.success || false,
        emailError: emailResult.error
      }
    } catch (emailError) {
      console.error('Error sending emails:', emailError)
      // Still return success for appointment creation even if email fails
      return { 
        success: true, 
        id: docRef.id, 
        emailSent: false,
        emailError: emailError.message
      }
    }
  } catch (error) {
    console.error('Error creating appointment:', error)
    console.error('Error code:', error.code)
    console.error('Error message:', error.message)
    return { success: false, error: error.message }
  }
}

export const getAllAppointments = async () => {
  try {
    const q = query(
      collection(db, APPOINTMENTS_COLLECTION), 
      orderBy('createdAt', 'desc')
    )
    const querySnapshot = await getDocs(q)
    const appointments = []
    querySnapshot.forEach((doc) => {
      appointments.push({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate(),
        updatedAt: doc.data().updatedAt?.toDate()
      })
    })
    return { success: true, data: appointments }
  } catch (error) {
    console.error('Error fetching appointments:', error)
    return { success: false, error: error.message }
  }
}

export const updateAppointmentStatus = async (appointmentId, status, appointmentData = null) => {
  try {
    const appointmentRef = doc(db, APPOINTMENTS_COLLECTION, appointmentId)
    await updateDoc(appointmentRef, {
      status,
      updatedAt: serverTimestamp()
    })
    
    return { success: true }
  } catch (error) {
    console.error('Error updating appointment status:', error)
    return { success: false, error: error.message }
  }
}

export const deleteAppointment = async (appointmentId) => {
  try {
    await deleteDoc(doc(db, APPOINTMENTS_COLLECTION, appointmentId))
    return { success: true }
  } catch (error) {
    console.error('Error deleting appointment:', error)
    return { success: false, error: error.message }
  }
}

// Contact Message Operations
export const createContactMessage = async (contactData) => {
  try {
    const docRef = await addDoc(collection(db, CONTACT_MESSAGES_COLLECTION), {
      ...contactData,
      status: 'unread',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    })
    return { success: true, id: docRef.id }
  } catch (error) {
    console.error('Error creating contact message:', error)
    return { success: false, error: error.message }
  }
}

export const getAllContactMessages = async () => {
  try {
    const q = query(
      collection(db, CONTACT_MESSAGES_COLLECTION), 
      orderBy('createdAt', 'desc')
    )
    const querySnapshot = await getDocs(q)
    const messages = []
    querySnapshot.forEach((doc) => {
      messages.push({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate(),
        updatedAt: doc.data().updatedAt?.toDate()
      })
    })
    return { success: true, data: messages }
  } catch (error) {
    console.error('Error fetching contact messages:', error)
    return { success: false, error: error.message }
  }
}

export const updateMessageStatus = async (messageId, status) => {
  try {
    const messageRef = doc(db, CONTACT_MESSAGES_COLLECTION, messageId)
    await updateDoc(messageRef, {
      status,
      updatedAt: serverTimestamp()
    })
    return { success: true }
  } catch (error) {
    console.error('Error updating message status:', error)
    return { success: false, error: error.message }
  }
}

export const deleteContactMessage = async (messageId) => {
  try {
    await deleteDoc(doc(db, CONTACT_MESSAGES_COLLECTION, messageId))
    return { success: true }
  } catch (error) {
    console.error('Error deleting contact message:', error)
    return { success: false, error: error.message }
  }
}

// User Operations
export const createUser = async (userData) => {
  try {
    const docRef = await addDoc(collection(db, USERS_COLLECTION), {
      ...userData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    })
    return { success: true, id: docRef.id }
  } catch (error) {
    console.error('Error creating user:', error)
    return { success: false, error: error.message }
  }
}

export const getUserByEmail = async (email) => {
  try {
    const q = query(
      collection(db, USERS_COLLECTION), 
      where('email', '==', email)
    )
    const querySnapshot = await getDocs(q)
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0]
      return {
        success: true,
        data: {
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate(),
          updatedAt: doc.data().updatedAt?.toDate()
        }
      }
    }
    return { success: false, error: 'User not found' }
  } catch (error) {
    console.error('Error fetching user:', error)
    return { success: false, error: error.message }
  }
}

// Admin Management Operations
export const createAdmin = async (adminData) => {
  try {
    console.log('Creating admin with data:', adminData)
    
    // Check if Firebase Auth is initialized and user is authenticated
    if (!auth.currentUser) {
      console.error('No authenticated user found. User must be authenticated to create admin.')
      return { 
        success: false, 
        error: 'No authenticated user found. You must be authenticated to create an admin.',
        code: 'auth/not-authenticated'
      }
    }
    
    // First check if an admin with this email already exists
    const adminsRef = collection(db, 'admins')
    const q = query(adminsRef, where('email', '==', adminData.email))
    const querySnapshot = await getDocs(q)
    
    if (!querySnapshot.empty) {
      console.error('Admin with this email already exists')
      return { 
        success: false, 
        error: 'An admin with this email already exists' 
      }
    }
    
    // Create the admin document
    const docRef = await addDoc(collection(db, ADMINS_COLLECTION), {
      ...adminData,
      role: 'admin',
      createdBy: auth.currentUser.uid,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      isActive: true
    })
    
    console.log('Admin created successfully with ID:', docRef.id)
    return { success: true, id: docRef.id }
  } catch (error) {
    console.error('Error creating admin:', error)
    console.error('Error code:', error.code)
    console.error('Error message:', error.message)
    
    // Provide helpful error message based on error code
    let errorMessage = error.message
    if (error.code === 'permission-denied') {
      errorMessage = 'Permission denied. Make sure you are authenticated and have admin privileges.'
    }
    
    return { 
      success: false, 
      error: errorMessage,
      code: error.code
    }
  }
}

export const getAllAdmins = async () => {
  try {
    // Check if Firebase Auth is initialized and user is authenticated
    if (!auth.currentUser) {
      console.error('No authenticated user found. User must be authenticated to fetch admins.')
      return { 
        success: false, 
        error: 'No authenticated user found. You must be authenticated to fetch admins.',
        code: 'auth/not-authenticated'
      }
    }
    
    const q = query(
      collection(db, ADMINS_COLLECTION), 
      orderBy('createdAt', 'desc')
    )
    const querySnapshot = await getDocs(q)
    const admins = []
    querySnapshot.forEach((doc) => {
      admins.push({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate(),
        updatedAt: doc.data().updatedAt?.toDate()
      })
    })
    return { success: true, data: admins }
  } catch (error) {
    console.error('Error fetching admins:', error)
    
    // Provide helpful error message based on error code
    let errorMessage = error.message
    if (error.code === 'permission-denied') {
      errorMessage = 'Permission denied. Make sure you are authenticated and have admin privileges.'
    }
    
    return { 
      success: false, 
      error: errorMessage,
      code: error.code
    }
  }
}

export const updateAdminStatus = async (adminId, isActive) => {
  try {
    const adminRef = doc(db, ADMINS_COLLECTION, adminId)
    await updateDoc(adminRef, {
      isActive,
      updatedAt: serverTimestamp()
    })
    return { success: true }
  } catch (error) {
    console.error('Error updating admin status:', error)
    return { success: false, error: error.message }
  }
}

export const deleteAdmin = async (adminId) => {
  try {
    await deleteDoc(doc(db, ADMINS_COLLECTION, adminId))
    return { success: true }
  } catch (error) {
    console.error('Error deleting admin:', error)
    return { success: false, error: error.message }
  }
}

// Enhanced appointment approval with email and slot availability check
export const approveAppointment = async (appointmentId) => {
  try {
    // First get the appointment data
    const appointmentRef = doc(db, APPOINTMENTS_COLLECTION, appointmentId)
    const appointmentDoc = await getDoc(appointmentRef)
    
    if (!appointmentDoc.exists()) {
      return { success: false, error: 'Appointment not found' }
    }
    
    const appointmentData = appointmentDoc.data()
    
    // Check if this time slot is already booked by another approved appointment
    const appointmentsRef = collection(db, APPOINTMENTS_COLLECTION)
    const q = query(
      appointmentsRef,
      where('appointmentDate', '==', appointmentData.appointmentDate),
      where('appointmentTime', '==', appointmentData.appointmentTime),
      where('status', '==', 'approved')
    )
    
    const snapshot = await getDocs(q)
    
    // If there's already an approved appointment for this slot, prevent double booking
    if (!snapshot.empty) {
      return { 
        success: false, 
        error: 'This time slot has already been booked by another patient. Please choose a different time slot or reschedule this appointment.'
      }
    }
    
    // Update the appointment status
    await updateDoc(appointmentRef, {
      status: 'approved',
      approvedAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    })
    
    // Send approval email via API route
    try {
      const emailResponse = await fetch('/api/send-approval-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userEmail: appointmentData.email,
          userName: `${appointmentData.firstName} ${appointmentData.lastName}`,
          appointmentDetails: {
            ...appointmentData,
            date: appointmentData.appointmentDate,
            time: appointmentData.appointmentTime,
            service: appointmentData.reason
          }
        })
      })
      
      const emailResult = await emailResponse.json()
      console.log('Approval email sent:', emailResult.success ? 'Success' : 'Failed')
      
      return { 
        success: true, 
        emailSent: emailResult.success || false,
        emailError: emailResult.error 
      }
    } catch (emailError) {
      console.error('Error sending approval email:', emailError)
      return { 
        success: true, 
        emailSent: false,
        emailError: emailError.message 
      }
    }
  } catch (error) {
    console.error('Error approving appointment:', error)
    return { success: false, error: error.message }
  }
}

// Enhanced appointment rejection with email
export const rejectAppointment = async (appointmentId, rejectionReason = '') => {
  try {
    // First get the appointment data
    const appointmentRef = doc(db, APPOINTMENTS_COLLECTION, appointmentId)
    const appointmentDoc = await getDoc(appointmentRef)
    
    if (!appointmentDoc.exists()) {
      return { success: false, error: 'Appointment not found' }
    }
    
    const appointmentData = appointmentDoc.data()
    
    // Update the appointment status
    await updateDoc(appointmentRef, {
      status: 'rejected',
      rejectedAt: serverTimestamp(),
      rejectionReason: rejectionReason,
      updatedAt: serverTimestamp()
    })
    
    // Send rejection email via API route
    try {
      // Prepare the email data
      const emailData = {
        userEmail: appointmentData.email,
        userName: `${appointmentData.firstName} ${appointmentData.lastName}`,
        appointmentDetails: {
          ...appointmentData,
          date: appointmentData.appointmentDate,
          time: appointmentData.appointmentTime,
          service: appointmentData.reason
        },
        rejectionReason: rejectionReason
      }
      
      console.log('Sending rejection email with data:', JSON.stringify(emailData))
      
      const emailResponse = await fetch('/api/send-rejection-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData)
      })
      
      const emailResult = await emailResponse.json()
      console.log('Rejection email API response:', emailResult)
      
      return { 
        success: true, 
        emailSent: emailResult.success || false,
        emailError: emailResult.error 
      }
    } catch (emailError) {
      console.error('Error sending rejection email:', emailError)
      console.error('Error details:', {
        code: emailError.code,
        status: emailError.status,
        message: emailError.message
      })
      return { 
        success: true, 
        emailSent: false,
        emailError: emailError.message 
      }
    }
  } catch (error) {
    console.error('Error rejecting appointment:', error)
    return { success: false, error: error.message }
  }
}

// Analytics Operations
export const getAnalytics = async () => {
  try {
    // Get appointments count
    const appointmentsSnapshot = await getDocs(collection(db, APPOINTMENTS_COLLECTION))
    const totalAppointments = appointmentsSnapshot.size

    // Get pending appointments count
    const pendingQuery = query(
      collection(db, APPOINTMENTS_COLLECTION),
      where('status', '==', 'pending')
    )
    const pendingSnapshot = await getDocs(pendingQuery)
    const pendingAppointments = pendingSnapshot.size

    // Get confirmed appointments count
    const confirmedQuery = query(
      collection(db, APPOINTMENTS_COLLECTION),
      where('status', '==', 'confirmed')
    )
    const confirmedSnapshot = await getDocs(confirmedQuery)
    const confirmedAppointments = confirmedSnapshot.size

    // Get contact messages count
    const messagesSnapshot = await getDocs(collection(db, CONTACT_MESSAGES_COLLECTION))
    const totalMessages = messagesSnapshot.size

    // Get unread messages count
    const unreadQuery = query(
      collection(db, CONTACT_MESSAGES_COLLECTION),
      where('status', '==', 'unread')
    )
    const unreadSnapshot = await getDocs(unreadQuery)
    const unreadMessages = unreadSnapshot.size

    return {
      success: true,
      data: {
        totalAppointments,
        pendingAppointments,
        confirmedAppointments,
        totalMessages,
        unreadMessages
      }
    }
  } catch (error) {
    console.error('Error fetching analytics:', error)
    return { success: false, error: error.message }
  }
}

// Test function to check Firebase permissions
export const testFirebasePermissions = async () => {
  try {
    // Try to write a test document to check permissions
    const testDocRef = await addDoc(collection(db, 'permissionTest'), {
      test: true,
      timestamp: serverTimestamp()
    });
    
    // If successful, delete the test document
    await deleteDoc(testDocRef);
    
    return { 
      success: true, 
      message: 'Firebase permissions test passed. You can write to Firestore.'
    };
  } catch (error) {
    console.error('Firebase permissions test failed:', error);
    return { 
      success: false, 
      error: error.message,
      code: error.code,
      message: 'Firebase permissions test failed. Check your security rules.'
    };
  }
}

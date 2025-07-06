// Firebase Utilities for Diagnostics and Testing
import { auth, db } from './firebase';
import { 
  collection, 
  addDoc, 
  getDocs,
  deleteDoc,
  query,
  where,
  serverTimestamp 
} from 'firebase/firestore';
import { 
  signInAnonymously, 
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

// Test Firebase connection and authentication
export const testFirebaseConnection = async () => {
  try {
    // Check if Firebase is initialized
    if (!db || !auth) {
      return {
        success: false,
        error: 'Firebase is not properly initialized',
        tips: ['Check that your firebase.js contains proper initialization code', 
               'Verify your Firebase config in firebase.js']
      };
    }
    
    return {
      success: true,
      message: 'Firebase is properly initialized'
    };
  } catch (error) {
    console.error('Firebase connection test error:', error);
    return {
      success: false,
      error: error.message,
      code: error.code
    };
  }
};

// Test Firebase authentication
export const testFirebaseAuth = async () => {
  try {
    // First sign out to ensure clean state
    await signOut(auth);
    
    // Attempt anonymous sign in
    const userCredential = await signInAnonymously(auth);
    const uid = userCredential.user.uid;
    
    return {
      success: true,
      message: 'Successfully authenticated with Firebase',
      uid: uid,
      isAnonymous: userCredential.user.isAnonymous
    };
  } catch (error) {
    console.error('Firebase auth test error:', error);
    return {
      success: false,
      error: error.message,
      code: error.code
    };
  }
};

// Test Firebase write permissions
export const testFirebaseWritePermissions = async () => {
  try {
    // Ensure we're authenticated
    if (!auth.currentUser) {
      await signInAnonymously(auth);
    }
    
    // Try to write a test document
    const testDoc = {
      testField: 'test value',
      timestamp: serverTimestamp(),
      testRunId: Date.now().toString()
    };
    
    const docRef = await addDoc(collection(db, 'permissionTest'), testDoc);
    
    // Clean up - delete the test document
    await deleteDoc(docRef);
    
    return {
      success: true,
      message: 'Successfully wrote to and deleted from Firestore',
      docId: docRef.id
    };
  } catch (error) {
    console.error('Firebase write permissions test error:', error);
    return {
      success: false,
      error: error.message,
      code: error.code,
      tips: ['Check Firestore rules in Firebase Console',
             'Make sure you have a "permissionTest" collection in your rules',
             'See FIREBASE_SECURITY_RULES_FIX.md for recommended rules']
    };
  }
};

// Get current auth status
export const getCurrentAuthStatus = () => {
  const user = auth.currentUser;
  
  if (user) {
    return {
      isAuthenticated: true,
      uid: user.uid,
      isAnonymous: user.isAnonymous,
      email: user.email
    };
  } else {
    return {
      isAuthenticated: false
    };
  }
};

// Export a function that combines all tests
export const runAllFirebaseTests = async () => {
  const connectionTest = await testFirebaseConnection();
  const authTest = await testFirebaseAuth();
  const writeTest = await testFirebaseWritePermissions();
  
  return {
    connection: connectionTest,
    authentication: authTest,
    writePermissions: writeTest,
    timestamp: new Date().toISOString()
  };
};

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth'

// Your web app's Firebase config
// For Firebase JS SDK v9-compat and v9 and later
const firebaseConfig = {
  apiKey: "AIzaSyDqDYQpVTFOaMsQ3spDlWpjWgxdX1YZjHQ",
  authDomain: "doctor-fc903.firebaseapp.com",
  projectId: "doctor-fc903",
  storageBucket: "doctor-fc903.firebasestorage.app",
  messagingSenderId: "180837126691",
  appId: "1:180837126691:web:80d6e6492250a09ed49796",
  measurementId: "G-MQPX2R11DD"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase services
export const db = getFirestore(app)
export const auth = getAuth(app)

// Set auth persistence to LOCAL to keep the user logged in
// This must be called after auth is initialized
setPersistence(auth, browserLocalPersistence)
  .catch((error) => {
    console.error("Error setting auth persistence:", error);
  });

export default app

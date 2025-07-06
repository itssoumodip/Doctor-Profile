"use client"

import { createContext, useContext, useState, useEffect } from 'react'
import { 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  createUserWithEmailAndPassword
} from 'firebase/auth'
import { auth, db } from './firebase'
import { doc, getDoc, setDoc, serverTimestamp, collection, query, where, getDocs } from 'firebase/firestore'

const AdminAuthContext = createContext()

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext)
  if (!context) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider')
  }
  return context
}

export const AdminAuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState(null)
  const [authError, setAuthError] = useState(null)

  useEffect(() => {
    // Check if admin is already logged in using Firebase Authentication
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in
        console.log("User is signed in:", user.uid);
        try {
          // Check if this user is an admin in Firestore using regular operation
          const adminRef = doc(db, 'admins', user.uid);
          const adminDoc = await getDoc(adminRef);
          
          // If admin document exists with this UID, user is authenticated as admin
          if (adminDoc.exists() && adminDoc.data().isActive !== false) {
            setIsAuthenticated(true);
            setCurrentUser(user);
          } else {
            // User exists but is not an admin, sign them out
            console.log("User is not an admin, signing out");
            await signOut(auth);
            setIsAuthenticated(false);
            setCurrentUser(null);
          }
        } catch (error) {
          console.error("Error verifying admin status:", error);
          setAuthError(error.message);
        }
      } else {
        // User is signed out
        console.log("User is signed out");
        setIsAuthenticated(false);
        setCurrentUser(null);
      }
      setIsLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    setAuthError(null);
    try {
      // First sign in with Firebase Auth
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      try {
        // After authentication, check if user is an admin
        const adminRef = doc(db, 'admins', user.uid);
        const adminDoc = await getDoc(adminRef);
        
        if (adminDoc.exists() && adminDoc.data().isActive !== false) {
          // User is an active admin
          setIsAuthenticated(true);
          setCurrentUser(user);
          return { success: true };
        } else {
          // User exists but is not an active admin, sign them out
          await signOut(auth);
          setIsAuthenticated(false);
          setCurrentUser(null);
          const errorMsg = "Not authorized as admin";
          setAuthError(errorMsg);
          return { success: false, error: errorMsg };
        }
      } catch (error) {
        // Error checking admin status
        console.error("Error checking admin status:", error);
        await signOut(auth);
        setIsAuthenticated(false);
        setCurrentUser(null);
        const errorMsg = "Error verifying admin status";
        setAuthError(errorMsg);
        return { success: false, error: errorMsg };
      }
    } catch (error) {
      console.error("Login error:", error);
      const errorMsg = 
        error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' 
          ? "Invalid email or password"
          : error.message;
      setAuthError(errorMsg);
      return { success: false, error: errorMsg };
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setIsAuthenticated(false);
      setCurrentUser(null);
      return { success: true };
    } catch (error) {
      console.error("Error logging out:", error);
      return { success: false, error: error.message };
    }
  };

  // Create the first admin if none exists (bootstrap function)
  const createFirstAdmin = async (adminData) => {
    try {
      console.log("Starting first admin creation process...");
      
      try {
        // Try to get any admin document to check if admins exist
        const adminsRef = collection(db, 'admins');
        const querySnapshot = await getDocs(adminsRef);
        
        if (!querySnapshot.empty) {
          console.log("Admin accounts already exist, cannot create first admin");
          return { 
            success: false, 
            error: "Admin accounts already exist. Cannot create first admin." 
          };
        }
        
        // Create the user in Firebase Auth
        const userCredential = await createUserWithEmailAndPassword(
          auth, 
          adminData.email, 
          adminData.password
        );
        const user = userCredential.user;
        console.log("Created user in Firebase Auth with UID:", user.uid);
        
        // Create admin document directly in Firestore
        const adminDocData = {
          email: adminData.email,
          fullName: adminData.fullName || 'Admin User',
          role: 'admin',
          isActive: true,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
          permissions: ['all']
        };
        
        // Create admin document with user's UID
        await setDoc(doc(db, 'admins', user.uid), adminDocData);
        console.log("Admin document created successfully");
        
        // Set authentication state
        setIsAuthenticated(true);
        setCurrentUser(user);
        setAuthError(null);
        
        return { 
          success: true,
          message: "First admin created successfully",
          adminId: user.uid
        };
      } catch (error) {
        // If anything fails during admin creation, clean up the auth user
        if (auth.currentUser) {
          await auth.currentUser.delete();
          console.log("Rolled back Firebase Auth user creation due to error");
        }
        throw error; // Re-throw to be caught by outer catch
      }
    } catch (error) {
      console.error("Error creating first admin:", error);
      const errorMsg = error.message || "Error creating admin user";
      setAuthError(errorMsg);
      return { success: false, error: errorMsg };
    }
  };

  // Create a new admin (requires admin privileges)
  const createAdmin = async (adminData) => {
    try {
      if (!isAuthenticated || !currentUser) {
        return {
          success: false,
          error: "Must be authenticated as admin to create new admins"
        };
      }

      // Check if email is already used
      const userQuery = query(collection(db, 'admins'), where('email', '==', adminData.email));
      const existingAdmins = await getDocs(userQuery);
      if (!existingAdmins.empty) {
        return {
          success: false,
          error: "An admin with this email already exists"
        };
      }

      // Create the user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        adminData.email,
        adminData.password
      );
      const newUser = userCredential.user;

      try {
        // Create admin document in Firestore
        const adminDocData = {
          email: adminData.email,
          fullName: adminData.fullName || 'Admin User',
          role: adminData.role || 'admin',
          isActive: true,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
          createdBy: currentUser.uid,
          permissions: adminData.permissions || ['admin']
        };

        await setDoc(doc(db, 'admins', newUser.uid), adminDocData);

        return {
          success: true,
          message: "Admin created successfully",
          adminId: newUser.uid
        };
      } catch (error) {
        // If Firestore update fails, clean up the auth user
        if (newUser) {
          await newUser.delete();
        }
        throw error;
      }
    } catch (error) {
      console.error("Error creating admin:", error);
      const errorMsg = error.code === 'auth/email-already-in-use' 
        ? "This email is already registered"
        : error.message;
      return { success: false, error: errorMsg };
    }
  };

  return (
    <AdminAuthContext.Provider value={{
      isAuthenticated,
      isLoading,
      currentUser,
      authError,
      login,
      logout,
      createFirstAdmin,
      createAdmin
    }}>
      {children}
    </AdminAuthContext.Provider>
  )
}

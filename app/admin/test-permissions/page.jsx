"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { getFirestore, doc, setDoc, addDoc, collection } from 'firebase/firestore'
import { getAuth, signInAnonymously } from 'firebase/auth'
import { initializeApp } from 'firebase/app'

export default function TestFirestorePermissionsPage() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const addResult = (message, isError = false) => {
    setResults(prev => [...prev, { message, isError, timestamp: new Date().toISOString() }])
  }

  const testFirestore = async () => {
    setLoading(true)
    setResults([])
    
    try {
      addResult("Starting Firestore permission test...")
      
      // Test 1: Initialize Firebase
      const firebaseConfig = {
        apiKey: "AIzaSyDqDYQpVTFOaMsQ3spDlWpjWgxdX1YZjHQ",
        authDomain: "doctor-fc903.firebaseapp.com",
        projectId: "doctor-fc903",
        storageBucket: "doctor-fc903.firebasestorage.app", 
        messagingSenderId: "180837126691",
        appId: "1:180837126691:web:80d6e6492250a09ed49796"
      }
      
      const testApp = initializeApp(firebaseConfig, 'testApp')
      const testDb = getFirestore(testApp)
      const testAuth = getAuth(testApp)
      
      addResult("Firebase initialized successfully")
      
      // Test 2: Test write without authentication
      try {
        addResult("Testing write WITHOUT authentication...")
        const testDoc = {
          message: "Test document",
          createdAt: new Date().toISOString()
        }
        
        await addDoc(collection(testDb, "permissionTest"), testDoc)
        addResult("✅ SUCCESS: Write without authentication worked! Your rules allow unauthenticated writes.")
      } catch (error) {
        addResult(`❌ ERROR: Write without authentication failed: ${error.message}`, true)
        addResult("This is expected if your rules require authentication.")
      }
      
      // Test 3: Test with anonymous authentication
      try {
        addResult("Testing with ANONYMOUS authentication...")
        const anonResult = await signInAnonymously(testAuth)
        addResult(`Anonymous user signed in: ${anonResult.user.uid}`)
        
        const testDoc = {
          message: "Test document with anonymous auth",
          createdAt: new Date().toISOString(),
          userId: anonResult.user.uid
        }
        
        await addDoc(collection(testDb, "permissionTest"), testDoc)
        addResult("✅ SUCCESS: Write with anonymous authentication worked! Your rules are properly configured.")
      } catch (error) {
        addResult(`❌ ERROR: Write with anonymous authentication failed: ${error.message}`, true)
        addResult("This indicates your rules don't allow anonymous users or anonymous auth isn't enabled.")
      }
      
      // Test 4: Test writing to admin collection
      try {
        addResult("Testing write to ADMINS collection with anonymous auth...")
        const currentUser = testAuth.currentUser
        
        if (currentUser) {
          const testAdminDoc = {
            email: "test@example.com",
            fullName: "Test Admin",
            role: "admin",
            isActive: true,
            createdAt: new Date().toISOString()
          }
          
          await setDoc(doc(testDb, "admins", currentUser.uid), testAdminDoc)
          addResult("✅ SUCCESS: Write to admins collection worked! First admin creation should work.")
        } else {
          addResult("❌ No authenticated user found for admin test", true)
        }
      } catch (error) {
        addResult(`❌ ERROR: Write to admins collection failed: ${error.message}`, true)
        addResult("This is the specific issue preventing first admin creation.")
      }
      
    } catch (error) {
      addResult(`Critical error during tests: ${error.message}`, true)
    } finally {
      setLoading(false)
      addResult("Tests completed")
    }
  }
  
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Firebase Permissions Test</CardTitle>
          <CardDescription>
            Test if Firebase is properly configured and permissions are working
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={testFirestore}
            disabled={loading}
            className="mb-6"
          >
            {loading ? 'Testing...' : 'Run Tests'}
          </Button>
          
          <div className="space-y-4">
            {results.map((result, i) => (
              <Alert key={i} variant={result.isError ? "destructive" : "default"}>
                <AlertTitle>
                  {result.isError ? 'Error' : 'Info'}
                </AlertTitle>
                <AlertDescription className="whitespace-pre-wrap font-mono">
                  {result.message}
                </AlertDescription>
              </Alert>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

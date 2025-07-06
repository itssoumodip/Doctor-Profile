"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertCircle, CheckCircle } from 'lucide-react'
import { useAdminAuth } from '@/lib/adminAuth'
import { useToast } from '@/components/ui/use-toast'
import { Toaster } from '@/components/ui/toaster'

export default function BootstrapAdminPage() {
  const { createFirstAdmin } = useAdminAuth()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)
  const { toast } = useToast()

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setError(null)
    
    const formData = new FormData(event.target)
    const adminData = {
      email: formData.get('email'),
      password: formData.get('password'),
      fullName: formData.get('fullName')
    }
    
    try {
      const result = await createFirstAdmin(adminData)
      
      if (result.success) {
        setSuccess(true)
        toast({
          title: "Success",
          description: "First admin user created successfully. You can now log in.",
          duration: 5000,
        })
      } else {
        setError(result.error)
        toast({
          title: "Error",
          description: result.error || "Failed to create admin",
          variant: "destructive",
          duration: 10000,
        })
        console.error("First admin creation failed:", result.error)
      }
    } catch (err) {
      setError(err.message)
      toast({
        title: "Error",
        description: `An unexpected error occurred: ${err.message}`,
        variant: "destructive",
        duration: 10000,
      })
      console.error("Exception during admin creation:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>Bootstrap Admin User</CardTitle>
            <CardDescription>
              Create the first admin user for your application
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            {success ? (
              <Alert className="mb-4">
                <CheckCircle className="h-4 w-4" />
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription>
                  First admin user created successfully. You can now log in to the admin dashboard.
                </AlertDescription>
              </Alert>
            ) : error ? (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" name="fullName" placeholder="Admin User" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="admin@example.com" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password" 
                    name="password" 
                    type="password" 
                    placeholder="••••••••" 
                    required 
                    minLength={6}
                  />
                  <p className="text-xs text-gray-500">Password must be at least 6 characters</p>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={loading || success}
                >
                  {loading ? 'Creating...' : success ? 'Created!' : 'Create Admin User'}
                </Button>
              </div>
            </form>
          </CardContent>
          
          <CardFooter className="flex flex-col items-start">
            <p className="text-sm text-gray-500">
              Note: This page only works when there are no existing admin users in the database.
              It is intended for initial setup only.
            </p>
          </CardFooter>
        </Card>
        
        <Toaster />
      </div>
    </div>
  )
}

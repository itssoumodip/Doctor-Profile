"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertCircle, CheckCircle, Server, Shield, Key } from 'lucide-react'
import { testFirebasePermissions, createAdmin } from '@/lib/firebaseOperations'
import { runAllFirebaseTests, getCurrentAuthStatus } from '@/lib/firebaseUtils'
import { useToast } from '@/components/ui/use-toast'
import { Toaster } from '@/components/ui/toaster'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs-simple'

export default function FirebasePermissionsTestPage() {
  const [testResult, setTestResult] = useState(null)
  const [authStatus, setAuthStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('diagnostics')
  const { toast } = useToast()

  const handleRunDiagnostics = async () => {
    setLoading(true)
    try {
      // Get current auth status first
      const currentAuth = getCurrentAuthStatus()
      setAuthStatus(currentAuth)
      
      // Run all Firebase tests
      const allTests = await runAllFirebaseTests()
      setTestResult(allTests)
      
      if (allTests.connection.success && 
          allTests.authentication.success && 
          allTests.writePermissions.success) {
        toast({
          title: "Success",
          description: "All Firebase diagnostics passed successfully",
          duration: 5000,
        })
      } else {
        toast({
          title: "Warning",
          description: "Some Firebase diagnostics failed. Check the detailed results.",
          variant: "destructive",
          duration: 5000,
        })
      }
    } catch (error) {
      console.error('Error running diagnostics:', error)
      setTestResult({
        success: false,
        error: error.message,
        message: 'Error occurred while running diagnostics'
      })
      toast({
        title: "Error",
        description: "An unexpected error occurred during diagnostics",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setLoading(false)
    }
  }

  const handleTestAdminCreation = async () => {
    setLoading(true)
    try {
      // Get current auth status first
      const currentAuth = getCurrentAuthStatus()
      setAuthStatus(currentAuth)
      
      // Create a test admin with timestamp to avoid duplicates
      const timestamp = new Date().getTime()
      const testAdmin = {
        name: `Test Admin ${timestamp}`,
        email: `test-${timestamp}@example.com`,
        permissions: ['test'],
      }
      
      const result = await createAdmin(testAdmin)
      setTestResult(result)
      
      if (result.success) {
        toast({
          title: "Success",
          description: "Test admin created successfully with ID: " + result.id,
          duration: 5000,
        })
      } else {
        toast({
          title: "Error",
          description: `Admin creation test failed: ${result.error}`,
          variant: "destructive",
          duration: 5000,
        })
      }
    } catch (error) {
      console.error('Error testing admin creation:', error)
      setTestResult({
        success: false,
        error: error.message,
        message: 'Error occurred while testing admin creation'
      })
      toast({
        title: "Error",
        description: "An unexpected error occurred during admin creation test",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Firebase Diagnostics & Permissions</h1>
        <p className="text-gray-600">Diagnose Firebase issues and test permissions</p>
      </div>

      <Tabs defaultValue="diagnostics" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="diagnostics" className="flex items-center gap-2">
            <Server className="h-4 w-4" />
            Firebase Diagnostics
          </TabsTrigger>
          <TabsTrigger value="admin" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Admin Creation Test
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="diagnostics">
          <Card>
            <CardHeader>
              <CardTitle>Firebase Connection & Permissions Diagnostics</CardTitle>
              <CardDescription>
                Test Firebase initialization, authentication, and database permissions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={handleRunDiagnostics} 
                disabled={loading}
                className="w-full mb-4"
              >
                {loading ? 'Running Diagnostics...' : 'Run Firebase Diagnostics'}
              </Button>
              
              {authStatus && (
                <Alert className="mb-4" variant={authStatus.isAuthenticated ? "default" : "warning"}>
                  <Key className="h-4 w-4" />
                  <AlertTitle>Authentication Status</AlertTitle>
                  <AlertDescription>
                    {authStatus.isAuthenticated 
                      ? `Authenticated (${authStatus.isAnonymous ? 'Anonymous' : 'User'})` 
                      : 'Not authenticated'}
                    {authStatus.uid && <div className="text-xs mt-1">UID: {authStatus.uid}</div>}
                  </AlertDescription>
                </Alert>
              )}
              
              {testResult && (
                <div className="space-y-4">
                  <TestResultCard 
                    title="Firebase Connection" 
                    result={testResult.connection}
                  />
                  
                  <TestResultCard 
                    title="Firebase Authentication" 
                    result={testResult.authentication}
                  />
                  
                  <TestResultCard 
                    title="Firebase Write Permissions" 
                    result={testResult.writePermissions}
                  />
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="admin">
          <Card>
            <CardHeader>
              <CardTitle>Admin Creation Test</CardTitle>
              <CardDescription>
                Test if your app can create admin users specifically
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={handleTestAdminCreation} 
                disabled={loading}
                className="w-full mb-4"
              >
                {loading ? 'Testing...' : 'Test Admin Creation'}
              </Button>
              
              {authStatus && (
                <Alert className="mb-4" variant={authStatus.isAuthenticated ? "default" : "warning"}>
                  <Key className="h-4 w-4" />
                  <AlertTitle>Authentication Status</AlertTitle>
                  <AlertDescription>
                    {authStatus.isAuthenticated 
                      ? `Authenticated (${authStatus.isAnonymous ? 'Anonymous' : 'User'})` 
                      : 'Not authenticated'}
                    {authStatus.uid && <div className="text-xs mt-1">UID: {authStatus.uid}</div>}
                  </AlertDescription>
                </Alert>
              )}
              
              {testResult && (
                <AdminTestResult result={testResult} />
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <Toaster />
    </div>
  )
}

function TestResultCard({ title, result }) {
  return (
    <Card>
      <CardHeader className="py-4">
        <CardTitle className="text-lg flex items-center gap-2">
          {result.success 
            ? <CheckCircle className="h-5 w-5 text-green-500" /> 
            : <AlertCircle className="h-5 w-5 text-red-500" />}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Alert variant={result.success ? "default" : "destructive"}>
          <AlertTitle>{result.success ? "Success" : "Error"}</AlertTitle>
          <AlertDescription className="mt-2">
            <div className="font-medium">
              {result.message || (result.success ? "Test completed successfully" : "Test failed")}
            </div>
            {!result.success && result.error && (
              <div className="mt-2">
                <div className="font-semibold">Error details:</div>
                <pre className="mt-1 bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-auto text-sm">
                  {result.error}
                </pre>
                {result.code && (
                  <div className="mt-1">
                    <span className="font-semibold">Error code:</span> {result.code}
                  </div>
                )}
              </div>
            )}
          </AlertDescription>
        </Alert>
        
        {!result.success && result.tips && (
          <div className="mt-4 text-sm text-gray-600">
            <p className="font-medium mb-2">Troubleshooting Tips:</p>
            <ul className="list-disc pl-5 space-y-1">
              {result.tips.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function AdminTestResult({ result }) {
  return (
    <Card>
      <CardHeader className="py-4">
        <CardTitle className="text-lg flex items-center gap-2">
          {result.success 
            ? <CheckCircle className="h-5 w-5 text-green-500" /> 
            : <AlertCircle className="h-5 w-5 text-red-500" />}
          Admin Creation Test
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Alert variant={result.success ? "default" : "destructive"}>
          <AlertTitle>{result.success ? "Success" : "Error"}</AlertTitle>
          <AlertDescription className="mt-2">
            <div className="font-medium">
              {result.success 
                ? `Admin created successfully with ID: ${result.id}` 
                : "Failed to create admin"}
            </div>
            {!result.success && result.error && (
              <div className="mt-2">
                <div className="font-semibold">Error details:</div>
                <pre className="mt-1 bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-auto text-sm">
                  {result.error}
                </pre>
                {result.code && (
                  <div className="mt-1">
                    <span className="font-semibold">Error code:</span> {result.code}
                  </div>
                )}
              </div>
            )}
          </AlertDescription>
        </Alert>
        
        {!result.success && (
          <div className="mt-4 text-sm text-gray-600">
            <p className="font-medium mb-2">Common Solutions:</p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Check Firebase security rules in the Firebase console</li>
              <li>Ensure you're properly authenticated before creating admin users</li>
              <li>Update your security rules according to FIREBASE_SECURITY_RULES_FIX.md</li>
              <li>If all else fails, try using the alternative security rules for development</li>
            </ol>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

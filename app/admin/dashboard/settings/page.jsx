"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'
import { Toaster } from '@/components/ui/toaster'
import { 
  Settings, 
  User, 
  Bell, 
  Database, 
  Shield,
  Save,
  Download,
  Upload,
  AlertTriangle
} from 'lucide-react'

export default function SettingsPage() {
  const [doctorInfo, setDoctorInfo] = useState({
    name: 'Dr. Partha Pratim Paul',
    specialty: 'Cardiologist & Heart Specialist',
    email: 'doctor@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Medical Center Dr, Healthcare City, HC 12345',
    bio: 'Providing exceptional women\'s healthcare with over 15 years of experience.',
    education: 'MD - Harvard Medical School, Residency - Johns Hopkins',
    certifications: 'Board Certified Cardiologist, Fellow of American College of Cardiology'
  })

  const [systemSettings, setSystemSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    appointmentReminders: true,
    autoConfirmation: false,
    maintenanceMode: false
  })

  const { toast } = useToast()

  const handleDoctorInfoChange = (field, value) => {
    setDoctorInfo(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSystemSettingChange = (field, value) => {
    setSystemSettings(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const saveDoctorInfo = () => {
    // In a real app, this would save to Firebase
    toast({
      title: "Doctor Information Saved",
      description: "Your profile information has been updated successfully.",
      duration: 3000,
    })
  }

  const saveSystemSettings = () => {
    // In a real app, this would save to Firebase
    toast({
      title: "System Settings Saved",
      description: "Your system preferences have been updated successfully.",
      duration: 3000,
    })
  }

  const exportData = () => {
    toast({
      title: "Data Export Started",
      description: "Your data export will be ready for download shortly.",
      duration: 3000,
    })
  }

  const importData = () => {
    toast({
      title: "Import Feature",
      description: "Data import functionality will be available soon.",
      duration: 3000,
    })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-2">Manage your account settings and system preferences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Doctor Information */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Doctor Information
            </CardTitle>
            <CardDescription>
              Update your professional information displayed on the website
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={doctorInfo.name}
                  onChange={(e) => handleDoctorInfoChange('name', e.target.value)}
                  placeholder="Dr. John Smith"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="specialty">Specialty</Label>
                <Input
                  id="specialty"
                  value={doctorInfo.specialty}
                  onChange={(e) => handleDoctorInfoChange('specialty', e.target.value)}
                  placeholder="Cardiologist & Heart Specialist"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={doctorInfo.email}
                  onChange={(e) => handleDoctorInfoChange('email', e.target.value)}
                  placeholder="doctor@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={doctorInfo.phone}
                  onChange={(e) => handleDoctorInfoChange('phone', e.target.value)}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="address">Clinic Address</Label>
              <Input
                id="address"
                value={doctorInfo.address}
                onChange={(e) => handleDoctorInfoChange('address', e.target.value)}
                placeholder="123 Medical Center Dr, Healthcare City"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Professional Bio</Label>
              <Textarea
                id="bio"
                value={doctorInfo.bio}
                onChange={(e) => handleDoctorInfoChange('bio', e.target.value)}
                placeholder="Brief description of your practice and experience"
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="education">Education</Label>
              <Textarea
                id="education"
                value={doctorInfo.education}
                onChange={(e) => handleDoctorInfoChange('education', e.target.value)}
                placeholder="Medical school, residency, fellowship details"
                className="min-h-[80px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="certifications">Certifications</Label>
              <Textarea
                id="certifications"
                value={doctorInfo.certifications}
                onChange={(e) => handleDoctorInfoChange('certifications', e.target.value)}
                placeholder="Board certifications, fellowships, awards"
                className="min-h-[80px]"
              />
            </div>

            <Button onClick={saveDoctorInfo} className="flex items-center gap-2">
              <Save className="h-4 w-4" />
              Save Doctor Information
            </Button>
          </CardContent>
        </Card>

        {/* System Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notification Settings
            </CardTitle>
            <CardDescription>
              Configure how you receive notifications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="email-notifications" className="text-sm font-medium">
                  Email Notifications
                </Label>
                <p className="text-xs text-gray-600">Receive notifications via email</p>
              </div>
              <input
                id="email-notifications"
                type="checkbox"
                checked={systemSettings.emailNotifications}
                onChange={(e) => handleSystemSettingChange('emailNotifications', e.target.checked)}
                className="h-4 w-4 text-blue-600 rounded border-gray-300"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="sms-notifications" className="text-sm font-medium">
                  SMS Notifications
                </Label>
                <p className="text-xs text-gray-600">Receive notifications via SMS</p>
              </div>
              <input
                id="sms-notifications"
                type="checkbox"
                checked={systemSettings.smsNotifications}
                onChange={(e) => handleSystemSettingChange('smsNotifications', e.target.checked)}
                className="h-4 w-4 text-blue-600 rounded border-gray-300"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="appointment-reminders" className="text-sm font-medium">
                  Appointment Reminders
                </Label>
                <p className="text-xs text-gray-600">Send reminders to patients</p>
              </div>
              <input
                id="appointment-reminders"
                type="checkbox"
                checked={systemSettings.appointmentReminders}
                onChange={(e) => handleSystemSettingChange('appointmentReminders', e.target.checked)}
                className="h-4 w-4 text-blue-600 rounded border-gray-300"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="auto-confirmation" className="text-sm font-medium">
                  Auto-confirm Appointments
                </Label>
                <p className="text-xs text-gray-600">Automatically confirm new appointments</p>
              </div>
              <input
                id="auto-confirmation"
                type="checkbox"
                checked={systemSettings.autoConfirmation}
                onChange={(e) => handleSystemSettingChange('autoConfirmation', e.target.checked)}
                className="h-4 w-4 text-blue-600 rounded border-gray-300"
              />
            </div>

            <Button onClick={saveSystemSettings} className="w-full flex items-center gap-2">
              <Save className="h-4 w-4" />
              Save Notification Settings
            </Button>
          </CardContent>
        </Card>

        {/* Data Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Data Management
            </CardTitle>
            <CardDescription>
              Export or import your data
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium">Export Data</h4>
              <p className="text-xs text-gray-600">
                Download all your appointments and patient data as a backup
              </p>
              <Button onClick={exportData} variant="outline" className="w-full flex items-center gap-2">
                <Download className="h-4 w-4" />
                Export All Data
              </Button>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium">Import Data</h4>
              <p className="text-xs text-gray-600">
                Import data from a previous backup or another system
              </p>
              <Button onClick={importData} variant="outline" className="w-full flex items-center gap-2">
                <Upload className="h-4 w-4" />
                Import Data
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Security & Access
            </CardTitle>
            <CardDescription>
              Manage security settings and access controls
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input
                  id="current-password"
                  type="password"
                  placeholder="Enter current password"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input
                  id="new-password"
                  type="password"
                  placeholder="Enter new password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                <div>
                  <Label className="text-sm font-medium text-yellow-800">
                    Maintenance Mode
                  </Label>
                  <p className="text-xs text-yellow-600">
                    Enable to temporarily disable public access to the website
                  </p>
                </div>
              </div>
              <input
                type="checkbox"
                checked={systemSettings.maintenanceMode}
                onChange={(e) => handleSystemSettingChange('maintenanceMode', e.target.checked)}
                className="h-4 w-4 text-yellow-600 rounded border-yellow-300"
              />
            </div>

            <div className="flex gap-2">
              <Button className="flex items-center gap-2">
                <Save className="h-4 w-4" />
                Update Password
              </Button>
              <Button variant="outline">
                Enable Two-Factor Authentication
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Firebase Configuration */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Firebase Configuration
            </CardTitle>
            <CardDescription>
              Current Firebase connection status and configuration
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-medium text-blue-900 mb-2">Setup Instructions</h4>
              <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
                <li>Create a Firebase project at <code className="bg-blue-100 px-1 rounded">console.firebase.google.com</code></li>
                <li>Enable Firestore Database in "test mode"</li>
                <li>Get your Firebase configuration from Project Settings</li>
                <li>Update the configuration in <code className="bg-blue-100 px-1 rounded">lib/firebase.js</code></li>
                <li>Deploy your application</li>
              </ol>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium">Project ID</Label>
                <p className="text-sm text-gray-600 mt-1">your-project-id</p>
              </div>
              <div>
                <Label className="text-sm font-medium">Database Region</Label>
                <p className="text-sm text-gray-600 mt-1">us-central1</p>
              </div>
            </div>

            <div className="flex items-center gap-2 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
              <p className="text-sm text-yellow-800">
                Firebase configuration is not yet set up. Please follow the setup instructions above.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Toaster />
    </div>
  )
}

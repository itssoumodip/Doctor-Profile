import { Suspense } from 'react'

// ClientConfirmation must be imported from a separate file to avoid
// 'use client' directive conflicts with this server component
import ClientConfirmation from './client-confirmation'

// Default export for the page is a server component that uses Suspense to wrap the client component
export default function AppointmentConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Loading confirmation details...</h2>
          <p className="text-gray-500">Please wait</p>
        </div>
      </div>
    }>
      <ClientConfirmation />
    </Suspense>
  )
}

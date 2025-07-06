"use client"

import { useEffect } from 'react'

export default function ErrorSuppressor() {
  useEffect(() => {
    // Suppress console errors from extensions
    const originalError = console.error
    const originalWarn = console.warn
    
    console.error = (...args) => {
      const message = args[0]?.toString() || ''
      
      // Filter out extension-related errors
      if (
        message.includes('hybridaction') ||
        message.includes('autotrack.studyquicks.com') ||
        message.includes('chrome-extension') ||
        message.includes('questionai') ||
        message.includes('studyquicks') ||
        message.includes('ERR_BLOCKED_BY_CLIENT') ||
        message.includes('CONFIGURATION_NOT_FOUND') ||
        message.includes('Failed to load resource') ||
        message.includes('net::ERR_BLOCKED_BY_CLIENT') ||
        message.includes('zybTrackerStatisticsAction') ||
        message.includes('WAP plat undefined') ||
        message.includes('copilot.b68e6a51.js') ||
        message.includes('main.3b8695ff.js') ||
        message.includes('sidebar.cc1d36ec.js') ||
        message.includes('chromeos-questionnaire') ||
        message.includes('Service is currently unstable') ||
        message.includes('errNo: -2') ||
        message.includes('Unexpected end of JSON input') ||
        message.includes('questionai.com') ||
        message.includes('hajphibbdloomfdkeoejchiikjggnaif') ||
        message.includes('googleapis.com/identitytoolkit')
      ) {
        return // Suppress these errors
      }
      
      originalError.apply(console, args)
    }
    
    console.warn = (...args) => {
      const message = args[0]?.toString() || ''
      
      // Filter out extension-related warnings
      if (
        message.includes('extension') ||
        message.includes('chrome-extension') ||
        message.includes('autotrack') ||
        message.includes('questionai') ||
        message.includes('studyquicks') ||
        message.includes('WAP plat') ||
        message.includes('copilot.') ||
        message.includes('zybTracker')
      ) {
        return // Suppress these warnings
      }
      
      originalWarn.apply(console, args)
    }
    
    // Suppress global errors
    const handleError = (event) => {
      const message = event.message || event.error?.message || ''
      
      if (
        message.includes('chrome-extension') ||
        message.includes('questionai') ||
        message.includes('autotrack') ||
        message.includes('Invalid or unexpected token') ||
        message.includes('studyquicks') ||
        message.includes('WAP plat') ||
        message.includes('copilot.') ||
        message.includes('zybTracker') ||
        message.includes('errNo: -2')
      ) {
        event.preventDefault()
        event.stopPropagation()
        return false
      }
    }
    
    window.addEventListener('error', handleError, true)
    window.addEventListener('unhandledrejection', (event) => {
      const message = event.reason?.message || event.reason?.toString() || ''
      
      if (
        message.includes('chrome-extension') ||
        message.includes('questionai') ||
        message.includes('autotrack') ||
        message.includes('studyquicks') ||
        message.includes('Service is currently unstable') ||
        message.includes('errNo: -2') ||
        message.includes('WAP plat')
      ) {
        event.preventDefault()
      }
    })
    
    return () => {
      console.error = originalError
      console.warn = originalWarn
      window.removeEventListener('error', handleError, true)
    }
  }, [])
  
  return null
}

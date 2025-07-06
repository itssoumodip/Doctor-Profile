"use client"

import { useEffect } from 'react'

// Immediately suppress errors on module load
const setupErrorSuppression = () => {
  // Backup original console methods
  const originalError = console.error
  const originalWarn = console.warn
  const originalLog = console.log
  
  const shouldSuppress = (message) => {
    const msgStr = message?.toString() || ''
    return (
      msgStr.includes('hybridaction') ||
      msgStr.includes('autotrack.studyquicks.com') ||
      msgStr.includes('chrome-extension') ||
      msgStr.includes('questionai') ||
      msgStr.includes('studyquicks') ||
      msgStr.includes('ERR_BLOCKED_BY_CLIENT') ||
      msgStr.includes('CONFIGURATION_NOT_FOUND') ||
      msgStr.includes('Failed to load resource') ||
      msgStr.includes('net::ERR_BLOCKED_BY_CLIENT') ||
      msgStr.includes('zybTrackerStatisticsAction') ||
      msgStr.includes('WAP plat undefined') ||
      msgStr.includes('WAP plat') ||
      msgStr.includes('copilot.b68e6a51.js') ||
      msgStr.includes('main.3b8695ff.js') ||
      msgStr.includes('sidebar.cc1d36ec.js') ||
      msgStr.includes('chromeos-questionnaire') ||
      msgStr.includes('Service is currently unstable') ||
      msgStr.includes('errNo: -2') ||
      msgStr.includes('Unexpected end of JSON input') ||
      msgStr.includes('questionai.com') ||
      msgStr.includes('hajphibbdloomfdkeoejchiikjggnaif') ||
      msgStr.includes('googleapis.com/identitytoolkit') ||
      msgStr.includes('GET http://localhost:3000/hybridaction') ||
      msgStr.includes('GET https://autotrack.studyquicks.com') ||
      msgStr.includes('was preloaded using link preload') ||
      msgStr.includes('FormAssistantStatus') ||
      msgStr.includes('extension_track') ||
      msgStr.includes('ISC_004') ||
      msgStr.includes('ISC_001') ||
      msgStr.includes('H60_112') ||
      msgStr.includes('J0C_001') ||
      msgStr.includes('ets=') ||
      msgStr.includes('cuid=') ||
      msgStr.includes('installChannel=store')
    )
  }
  
  console.error = (...args) => {
    if (shouldSuppress(args[0])) return
    originalError.apply(console, args)
  }
  
  console.warn = (...args) => {
    if (shouldSuppress(args[0])) return
    originalWarn.apply(console, args)
  }
  
  console.log = (...args) => {
    if (shouldSuppress(args[0])) return
    originalLog.apply(console, args)
  }
  
  return { originalError, originalWarn, originalLog }
}

// Set up suppression immediately
const originals = setupErrorSuppression()

export default function ErrorSuppressor() {
  useEffect(() => {
    // Additional global error handling
    
    // Additional global error handling
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
        message.includes('errNo: -2') ||
        message.includes('Service is currently unstable') ||
        message.includes('hybridaction')
      ) {
        event.preventDefault()
        event.stopPropagation()
        return false
      }
    }
    
    const handleUnhandledRejection = (event) => {
      const message = event.reason?.message || event.reason?.toString() || ''
      const reasonObj = event.reason || {}
      
      if (
        message.includes('chrome-extension') ||
        message.includes('questionai') ||
        message.includes('autotrack') ||
        message.includes('studyquicks') ||
        message.includes('Service is currently unstable') ||
        message.includes('errNo: -2') ||
        message.includes('WAP plat') ||
        reasonObj.errNo === -2 ||
        (reasonObj.errMsg && reasonObj.errMsg.includes('Service is currently unstable'))
      ) {
        event.preventDefault()
        return false
      }
    }
    
    window.addEventListener('error', handleError, true)
    window.addEventListener('unhandledrejection', handleUnhandledRejection, true)
    
    return () => {
      console.error = originals.originalError
      console.warn = originals.originalWarn
      console.log = originals.originalLog
      window.removeEventListener('error', handleError, true)
      window.removeEventListener('unhandledrejection', handleUnhandledRejection, true)
    }
  }, [])
  
  return null
}

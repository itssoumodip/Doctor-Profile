"use client"

import { createContext, useContext, useState, useEffect } from 'react'

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

  useEffect(() => {
    // Check if admin is already logged in
    const adminToken = localStorage.getItem('adminToken')
    if (adminToken) {
      // In a real app, you'd validate this token with your backend
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  const login = async (email, password) => {
    // Simple hardcoded authentication for demo
    // In production, replace with proper Firebase Authentication
    if (email === 'admin@doctor.com' && password === 'admin123') {
      const token = 'admin-session-token-' + Date.now()
      localStorage.setItem('adminToken', token)
      setIsAuthenticated(true)
      return { success: true }
    }
    return { success: false, error: 'Invalid credentials' }
  }

  const logout = () => {
    localStorage.removeItem('adminToken')
    setIsAuthenticated(false)
  }

  return (
    <AdminAuthContext.Provider value={{
      isAuthenticated,
      isLoading,
      login,
      logout
    }}>
      {children}
    </AdminAuthContext.Provider>
  )
}

"use client"

import { Inter } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { usePathname } from "next/navigation"
import ErrorSuppressor from "@/components/ErrorSuppressor"
import { AdminAuthProvider } from "@/lib/adminAuth"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const isAdminRoute = pathname ? pathname.startsWith('/admin') : false

  return (
    <html lang="en">
      <head>
        <script src="/suppress-errors.js" async />
      </head>
      <body className={inter.className}>
        <ErrorSuppressor />
        <AdminAuthProvider>
          {!isAdminRoute && <Header />}
          {children}
          {!isAdminRoute && <Footer />}
        </AdminAuthProvider>
      </body>
    </html>
  )
}

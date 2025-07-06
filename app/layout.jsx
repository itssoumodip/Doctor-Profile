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
    <html lang="en" className="scroll-smooth">
      <head>
        <script src="/suppress-errors.js" async />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ErrorSuppressor />
        <AdminAuthProvider>
          <div className="flex flex-col min-h-screen w-full mx-auto">
            {!isAdminRoute && <Header />}
            <div className="flex-1 w-full mx-auto">
              {children}
            </div>
            {!isAdminRoute && <Footer />}
          </div>
        </AdminAuthProvider>
      </body>
    </html>
  )
}

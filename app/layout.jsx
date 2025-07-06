"use client"

import { Inter } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { usePathname } from "next/navigation"
import ErrorSuppressor from "@/components/ErrorSuppressor"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const isAdminRoute = pathname ? pathname.startsWith('/admin') : false

  return (
    <html lang="en">
      <body className={inter.className}>
        <ErrorSuppressor />
        {!isAdminRoute && <Header />}
        {children}
        {!isAdminRoute && <Footer />}
      </body>
    </html>
  )
}

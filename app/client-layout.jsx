"use client"

import { usePathname } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ClientLayout({ children }) {
  const pathname = usePathname()
  const isAdminRoute = pathname ? pathname.startsWith('/admin') : false

  return (
    <div className="flex flex-col min-h-screen w-full mx-auto">
      {!isAdminRoute && <Header />}
      <div className="flex-1 w-full mx-auto">
        {children}
      </div>
      {!isAdminRoute && <Footer />}
    </div>
  )
} 
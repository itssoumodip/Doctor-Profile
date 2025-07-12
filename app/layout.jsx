import { Inter } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import ErrorSuppressor from "@/components/ErrorSuppressor"
import { AdminAuthProvider } from "@/lib/adminAuth"
import ClientLayout from "./client-layout"

export const metadata = {
  title: "Dr. Partha Pratim Paul",
  description: "Expert women's health care with comprehensive obstetric and gynecological services including infertility management and minimally invasive procedures",
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <script src="/suppress-errors.js" async />
        <ErrorSuppressor />
        <AdminAuthProvider>
          <ClientLayout>{children}</ClientLayout>
        </AdminAuthProvider>
      </body>
    </html>
  )
}

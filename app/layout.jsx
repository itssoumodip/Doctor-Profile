import { Inter } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Dr. Sarah Mitchell | Cardiologist",
  description: "Expert cardiac care with personalized treatment plans for your heart health needs",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
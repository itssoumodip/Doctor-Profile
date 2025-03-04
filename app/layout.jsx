import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer" // Updated to use footer.jsx

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Dr. Sarah Johnson - Cardiology Specialist",
  description: "Professional website for Dr. Sarah Johnson, a leading cardiologist with over 15 years of experience in cardiac care."
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
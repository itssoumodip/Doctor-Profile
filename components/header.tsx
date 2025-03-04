"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Calendar, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container flex items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold text-lg">
            SJ
          </div>
          <div>
            <p className="text-lg font-bold text-blue-900">Dr. Sarah Johnson</p>
            <p className="text-xs text-blue-700">Cardiologist</p>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors">
            About
          </Link>
          <Link href="/services" className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors">
            Services
          </Link>
          <Link
            href="/testimonials"
            className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors"
          >
            Testimonials
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors">
            Contact
          </Link>
          <Button className="bg-blue-700 hover:bg-blue-800 text-white transition-all duration-300">
            <Link href="/appointment" className="flex items-center gap-2">
              Book Appointment <Calendar className="h-4 w-4" />
            </Link>
          </Button>
        </nav>
        <button
          className="md:hidden flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6 text-blue-900" /> : <Menu className="h-6 w-6 text-blue-900" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white pt-16">
          <nav className="container flex flex-col items-center gap-6 px-4 py-8">
            <Link
              href="/"
              className="text-lg font-medium text-gray-900 hover:text-blue-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-lg font-medium text-gray-900 hover:text-blue-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-lg font-medium text-gray-900 hover:text-blue-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/testimonials"
              className="text-lg font-medium text-gray-900 hover:text-blue-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="/contact"
              className="text-lg font-medium text-gray-900 hover:text-blue-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button
              className="w-full bg-blue-700 hover:bg-blue-800 text-white transition-all duration-300 mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Link href="/appointment" className="flex items-center justify-center gap-2 w-full">
                Book Appointment <Calendar className="h-4 w-4" />
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}


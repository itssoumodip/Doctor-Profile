"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Calendar, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
          <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white font-bold text-lg">
            SJ
          </div>
          <div>
            <p className="text-lg font-bold text-blue-900">Dr. Sarah Johnson</p>
            <p className="text-xs text-gray-600">Cardiologist</p>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-gray-700 hover:text-blue-900 font-medium">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-900 font-medium">About</Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-900 font-medium">Services</Link>
          <Link href="/testimonials" className="text-gray-700 hover:text-blue-900 font-medium">Testimonials</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-900 font-medium">Contact</Link>
          <Button asChild>
            <Link href="/appointment" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Book Appointment
            </Link>
          </Button>
        </nav>
        <button
          className="md:hidden flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4">
          <nav className="container flex flex-col gap-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-900 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-900 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-blue-900 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/testimonials"
              className="text-gray-700 hover:text-blue-900 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-900 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild>
              <Link
                href="/appointment"
                className="flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Calendar className="h-4 w-4" />
                Book Appointment
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}


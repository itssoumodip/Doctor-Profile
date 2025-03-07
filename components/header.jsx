"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Calendar, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center p-0.5 transition-transform duration-300 group-hover:scale-110">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <span className="text-blue-700 font-bold text-lg">DR</span>
              </div>
            </div>
            <div>
              <p className="font-bold text-blue-900 text-lg leading-tight">Dr.</p>
              <p className="text-xs text-blue-600 -mt-1">Cardiologist</p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative px-3 py-2 text-gray-700 hover:text-blue-700 transition-colors duration-200 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            className="border-blue-600 text-blue-700 hover:bg-blue-50"
          >
            <Link href="/login">Sign In</Link>
          </Button>
          <Button
            size="sm"
            className="bg-blue-700 hover:bg-blue-800 text-white"
          >
            <Link href="/appointment">Book Appointment</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
        
        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-20">
            <div className="container mx-auto px-4 py-3">
              <nav className="flex flex-col space-y-3 py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-3 py-2 text-gray-700 hover:text-blue-700 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link 
                  href="/login"
                  className="px-3 py-2 text-gray-700 hover:text-blue-700 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link 
                  href="/appointment"
                  className="flex items-center gap-2 px-3 py-2 bg-blue-700 text-white rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Calendar className="h-4 w-4" />
                  Book Appointment
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}


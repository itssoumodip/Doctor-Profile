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
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className={`sticky top-0 z-50 w-full backdrop-blur-md transition-all duration-300 ${
      isScrolled ? "bg-white/90 shadow-md" : "bg-white/80 shadow-sm"
    }`}>
      <div className="container mx-auto px-4 md:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
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

          {/* Desktop Navigation - Now Centered */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-4">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 font-medium transition-colors duration-200 group ${
                    pathname === item.href 
                      ? "text-blue-700" 
                      : "text-gray-700 hover:text-blue-700"
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                    pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </Link>
              ))}
            </div>
          </nav>

          {/* Appointment Button */}
          <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
            <Button
              size="sm"
              className="bg-blue-700 hover:bg-blue-800 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Link href="/appointment" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Book Appointment
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button with Animation */}
          <button 
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-all duration-300 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col items-center justify-center relative">
              <span 
                className={`block w-5 h-0.5 bg-blue-700 transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "absolute rotate-45" : "mb-1"
                }`}
              ></span>
              <span 
                className={`block w-5 h-0.5 bg-blue-700 transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span 
                className={`block w-5 h-0.5 bg-blue-700 transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "absolute -rotate-45" : "mt-1"
                }`}
              ></span>
            </div>
          </button>
        </div>
        
        {/* Mobile Menu Panel with Animation */}
        <div 
          className={`lg:hidden absolute left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-20 transition-all duration-300 transform ${
            isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0 pointer-events-none"
          }`}
        >
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-md transition-all duration-200 ${
                    pathname === item.href 
                      ? "bg-blue-50 text-blue-700 font-medium" 
                      : "text-gray-700 hover:text-blue-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 mt-2 border-t border-gray-100">
                <Link 
                  href="/appointment"
                  className="flex items-center gap-2 px-4 py-3 bg-blue-700 text-white rounded-md font-medium hover:bg-blue-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Calendar className="h-4 w-4" />
                  Book Appointment
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}


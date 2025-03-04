"use client"

import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { SocialIcon } from "@/components/social-icon"

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-900 font-bold text-lg">
                DR.
              </div>
              <div>
                <p className="text-lg font-bold">Dr.</p>
                <p className="text-xs text-blue-200">Cardiologist</p>
              </div>
            </div>
            <p className="text-blue-200">
              Providing exceptional cardiac care with over 15 years of experience. Dedicated to improving heart health
              and patient well-being.
            </p>
            <div className="flex gap-4">
              <SocialIcon platform="facebook" color="white" />
              <SocialIcon platform="twitter" color="white" />
              <SocialIcon platform="instagram" color="white" />
              <SocialIcon platform="linkedin" color="white" />
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-blue-200 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-blue-200 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/services" className="text-blue-200 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/testimonials" className="text-blue-200 hover:text-white transition-colors">
                Testimonials
              </Link>
              <Link href="/appointment" className="text-blue-200 hover:text-white transition-colors">
                Appointment
              </Link>
              <Link href="/contact" className="text-blue-200 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Services</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/services" className="text-blue-200 hover:text-white transition-colors">
                Cardiac Consultation
              </Link>
              <Link href="/services" className="text-blue-200 hover:text-white transition-colors">
                Echocardiography
              </Link>
              <Link href="/services" className="text-blue-200 hover:text-white transition-colors">
                Electrocardiogram (ECG)
              </Link>
              <Link href="/services" className="text-blue-200 hover:text-white transition-colors">
                Stress Testing
              </Link>
              <Link href="/services" className="text-blue-200 hover:text-white transition-colors">
                Preventive Cardiology
              </Link>
              <Link href="/services" className="text-blue-200 hover:text-white transition-colors">
                Cardiac Rehabilitation
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-300 mt-1" />
                <div>
                  <p className="text-white">(+91) 0000000000</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-300 mt-1" />
                <div>
                  <p className="text-white">email.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-300 mt-1" />
                <div>
                  <p className="text-white">Address</p>
                  <p className="text-blue-200">Kolkata</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-10 pt-6 text-center text-blue-200 text-sm">
          <p>&copy; {new Date().getFullYear()} Dr. have all rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link href="/" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/" className="hover:text-white transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
import Link from "next/link"
import { Calendar, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { SocialIcon } from "@/components/social-icon"
import dynamic from 'next/dynamic'

// Use dynamic import to avoid SSR issues with Leaflet
const ContactMap = dynamic(() => import('@/components/ContactMap'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gray-200 animate-pulse">
      <div className="w-full h-full flex items-center justify-center text-gray-500">Loading Map...</div>
    </div>
  )
})

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900 animate-fade-in">
              Contact Us
            </h1>
            <p className="max-w-[700px] text-gray-600 md:text-xl animate-fade-in animation-delay-200">
              We're here to answer your questions and provide the care you need
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-6">
              <div className="space-y-2 animate-fade-in">
                <h2 className="text-3xl font-bold tracking-tighter text-blue-900">Get in Touch</h2>
                <p className="text-gray-600 md:text-lg">
                  Have questions or need to schedule an appointment? Contact us using any of the methods below or fill
                  out the contact form.
                </p>
              </div>
              <div className="space-y-4 animate-fade-in animation-delay-200">
                <div className="flex items-center gap-3 group">
                  <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                    <Phone className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Phone</p>
                    <p className="text-gray-600">(+91) 000000000</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                    <Mail className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-gray-600">gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                    <MapPin className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Address</p>
                    <p className="text-gray-600">kolkata</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                    <Calendar className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Office Hours</p>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              <div className="animate-fade-in animation-delay-300">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  <SocialIcon platform="facebook" />
                  <SocialIcon platform="twitter" />
                  <SocialIcon platform="instagram" />
                  <SocialIcon platform="linkedin" />
                  <SocialIcon platform="youtube" />
                </div>
              </div>
              <div className="animate-fade-in animation-delay-400">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Emergency Contact</h3>
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <p className="text-gray-700">
                    For medical emergencies, please call <span className="font-bold">911</span> or go to your nearest
                    emergency room.
                  </p>
                  <p className="text-gray-700 mt-2">
                    For urgent cardiac concerns during office hours, call our priority line at{" "}
                    <span className="font-bold">(123) 456-7899</span>.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2 animate-fade-in animation-delay-200">
                <h2 className="text-3xl font-bold tracking-tighter text-blue-900">Send a Message</h2>
                <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible</p>
              </div>
              <form className="space-y-4 animate-fade-in animation-delay-300">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first-name" className="text-sm font-medium text-gray-700">
                      First Name
                    </Label>
                    <Input
                      id="first-name"
                      placeholder="Enter your first name"
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name" className="text-sm font-medium text-gray-700">
                      Last Name
                    </Label>
                    <Input
                      id="last-name"
                      placeholder="Enter your last name"
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="Enter the subject of your message"
                    required
                    className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message"
                    required
                    className="min-h-[150px] transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
              <div className="rounded-xl overflow-hidden shadow-lg h-[300px] animate-fade-in animation-delay-400">
                <ContactMap location={{ lat: 22.5726, lng: 88.3639 }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900 animate-fade-in">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl animate-fade-in animation-delay-200">
              Find answers to common questions about our practice
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
            <div className="space-y-6 animate-fade-in animation-delay-300">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-blue-800">QESTION</h3>
                <p className="text-gray-600">
                  ANSWER - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet felis eget nunc
                  fringilla. Nullam auctor, nunc nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies
                  nunc. Nullam auctor, nunc nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-blue-800">QESTION</h3>
                <p className="text-gray-600">
                  ANSWER - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet felis eget nunc
                  fringilla. Nullam auctor, nunc nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies
                  nunc. Nullam auctor, nunc nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-blue-800">QESTION</h3>
                <p className="text-gray-600">
                  ANSWER - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet felis eget nunc
                  fringilla. Nullam auctor, nunc nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies
                  nunc. Nullam auctor, nunc nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc.
                </p>
              </div>
             
            </div>
            <div className="space-y-6 animate-fade-in animation-delay-400">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-blue-800">QESTION</h3>
                <p className="text-gray-600">
                ANSWER - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet felis eget nunc
                  fringilla. Nullam auctor, nunc nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies
                  nunc. Nullam auctor, nunc nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-blue-800">QESTION</h3>
                <p className="text-gray-600">
                ANSWER - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet felis eget nunc
                  fringilla. Nullam auctor, nunc nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies
                  nunc. Nullam auctor, nunc nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-blue-800">QESTION</h3>
                <p className="text-gray-600">
                ANSWER - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet felis eget nunc
                  fringilla. Nullam auctor, nunc nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies
                  nunc. Nullam auctor, nunc nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc.
                </p>
              </div>
              
            </div>
          </div>
          <div className="flex justify-center mt-8 animate-fade-in animation-delay-500">
            <Button className="bg-blue-700 hover:bg-blue-800 text-white transition-all duration-300">
              <Link href="/">View All FAQs</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}


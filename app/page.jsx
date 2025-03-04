import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Award, Calendar, Clock, MapPin, Phone, Star, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StatCounter } from "@/components/stat-counter"
import { ServiceCard } from "@/components/service-card"
import { TestimonialSlider } from "@/components/testimonial-slider"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-900 animate-fade-in">
                  Dr.
                </h1>
                <p className="text-blue-600 text-xl md:text-2xl font-medium animate-fade-in animation-delay-200">
                  Cardiologist & Heart Specialist
                </p>
                <p className="max-w-[600px] text-gray-600 md:text-xl animate-fade-in animation-delay-300">
                  Providing exceptional cardiac care with over 15 years of experience. Dedicated to improving heart
                  health and patient well-being.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row animate-fade-in animation-delay-400">
                <Button
                  size="lg"
                  className="bg-blue-700 hover:bg-blue-800 text-white transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="/appointment" className="flex items-center gap-2">
                    Book Appointment <Calendar className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-700 text-blue-700 hover:bg-blue-50 transition-all duration-300"
                >
                  <Link href="/about" className="flex items-center gap-2">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end animate-fade-in animation-delay-500">
              <div className="relative w-[280px] h-[350px] sm:w-[350px] sm:h-[450px] overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105">
                <Image
                  src="https://images.unsplash.com/photo-1599493758267-c6c884c7071f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Dr. Office"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatCounter
              icon={<Clock className="h-8 w-8 mb-2 text-blue-600 mx-auto" />}
              value={15}
              label="Years Experience"
              duration={2000}
            />
            <StatCounter
              icon={<Users className="h-8 w-8 mb-2 text-blue-600 mx-auto" />}
              value={5000}
              label="Patients Treated"
              duration={2000}
            />
            <StatCounter
              icon={<Award className="h-8 w-8 mb-2 text-blue-600 mx-auto" />}
              value={12}
              label="Awards Received"
              duration={1800}
            />
            <StatCounter
              icon={<Star className="h-8 w-8 mb-2 text-blue-600 mx-auto" />}
              value={98}
              suffix="%"
              label="Patient Satisfaction"
              duration={2200}
            />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">Our Services</h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl">
              Comprehensive cardiac care services tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="Cardiac Consultation"
              description="Comprehensive evaluation of your heart health with personalized recommendations."
              icon="Heart"
            />
            <ServiceCard
              title="Echocardiography"
              description="Advanced ultrasound imaging to assess heart structure and function."
              icon="Activity"
            />
            <ServiceCard
              title="Preventive Cardiology"
              description="Strategies to prevent heart disease and maintain optimal cardiovascular health."
              icon="Shield"
            />
          </div>
          <div className="flex justify-center mt-10">
            <Button
              variant="outline"
              className="border-blue-700 text-blue-700 hover:bg-blue-50 transition-all duration-300"
            >
              <Link href="/services" className="flex items-center gap-2">
                View All Services <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="w-full py-12 md:py-24 bg-blue-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Patient Testimonials</h2>
            <p className="max-w-[700px] text-blue-100 md:text-xl">What our patients say about their experience</p>
          </div>
          <TestimonialSlider />
          <div className="flex justify-center mt-10">
            <Button variant="secondary" className="bg-white text-blue-700 hover:bg-blue-50 transition-all duration-300">
              <Link href="/testimonials" className="flex items-center gap-2">
                Read More Testimonials <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">Get in Touch</h2>
                <p className="max-w-[600px] text-gray-600 md:text-xl">
                  We're here to answer your questions and provide the care you need
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 group">
                  <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                    <Phone className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Call Us</p>
                    <p className="text-gray-600">(+91) 0000000000</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                    <MapPin className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Visit Us</p>
                    <p className="text-gray-600">Address</p>
                  </div>
                </div>
              </div>
              <Button className="w-fit bg-blue-700 hover:bg-blue-800 text-white transition-all duration-300">
                <Link href="/contact" className="flex items-center gap-2">
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg h-[300px] md:h-[400px] transform transition-all duration-500 hover:shadow-2xl relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235850.81272997358!2d88.18219084411842!3d22.53534308280847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1741120260956!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Doctor's Office Location"
                className="w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-3">
                <p className="font-medium">Dr. Office</p>
                <p className="text-sm text-gray-600">Kolkata</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


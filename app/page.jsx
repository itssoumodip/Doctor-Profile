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
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-blue-100 overflow-hidden">
        {/* Add decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200 rounded-full opacity-20 -ml-40 -mb-40"></div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 w-fit animate-fade-in">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                <span className="text-sm font-medium">Highly Rated Specialist</span>
              </div>
              
              <div className="space-y-3">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-900 animate-fade-in">
                  Dr. <span className="text-blue-700">Sarah Mitchell</span>
                </h1>
                <p className="text-blue-600 text-xl md:text-2xl font-medium animate-fade-in animation-delay-200">
                  Cardiologist & Heart Specialist
                </p>
                <p className="max-w-[600px] text-gray-600 md:text-xl animate-fade-in animation-delay-300">
                  Providing exceptional cardiac care with over 15 years of experience. Dedicated to improving heart
                  health and patient well-being through personalized treatment plans.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3 mt-2 animate-fade-in animation-delay-400">
                <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20">
                  <Star className="h-3 w-3 mr-1 fill-blue-500 text-blue-500" />
                  Top Rated
                </span>
                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  <Award className="h-3 w-3 mr-1" />
                  Board Certified
                </span>
                <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-sm font-medium text-purple-700 ring-1 ring-inset ring-purple-600/20">
                  <Users className="h-3 w-3 mr-1" />
                  5000+ Patients
                </span>
              </div>
              
              <div className="flex flex-col gap-3 min-[400px]:flex-row animate-fade-in animation-delay-400 pt-2">
                <Button
                  size="lg"
                  className="bg-blue-700 hover:bg-blue-800 text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
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
                {/* Add decorative elements behind image */}
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-400 rounded-full opacity-70 z-0"></div>
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-blue-300 rounded-full opacity-70 z-0"></div>
                <Image
                  src="https://images.unsplash.com/photo-1599493758267-c6c884c7071f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Dr. Sarah Mitchell"
                  fill
                  className="object-cover z-10 relative"
                  priority
                />
                {/* Add floating badge */}
                <div className="absolute bottom-4 right-0 bg-white px-4 py-2 rounded-l-lg shadow-lg z-20">
                  <p className="text-blue-700 font-semibold">MD, FACC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-16 bg-white relative">
        {/* Add wave pattern */}
        <div className="absolute top-0 left-0 right-0 h-6 bg-[url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201440%20320%22%3E%3Cpath%20fill%3D%22%23EFF6FF%22%20fill-opacity%3D%221%22%20d%3D%22M0%2C96L48%2C112C96%2C128%2C192%2C160%2C288%2C186.7C384%2C213%2C480%2C235%2C576%2C229.3C672%2C224%2C768%2C192%2C864%2C181.3C960%2C171%2C1056%2C181%2C1152%2C181.3C1248%2C181%2C1344%2C171%2C1392%2C165.3L1440%2C160L1440%2C0L1392%2C0C1344%2C0%2C1248%2C0%2C1152%2C0C1056%2C0%2C960%2C0%2C864%2C0C768%2C0%2C672%2C0%2C576%2C0C480%2C0%2C384%2C0%2C288%2C0C192%2C0%2C96%2C0%2C48%2C0L0%2C0Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E')]"></div>
        
        <div className="container px-4 md:px-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-blue-900">By the Numbers</h3>
            <p className="text-gray-600">Our track record of excellence</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <StatCounter
                icon={<Clock className="h-8 w-8 mb-2 text-blue-600 mx-auto" />}
                value={15}
                label="Years Experience"
                duration={2000}
              />
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <StatCounter
                icon={<Users className="h-8 w-8 mb-2 text-blue-600 mx-auto" />}
                value={5000}
                label="Patients Treated"
                duration={2000}
              />
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <StatCounter
                icon={<Award className="h-8 w-8 mb-2 text-blue-600 mx-auto" />}
                value={12}
                label="Awards Received"
                duration={1800}
              />
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <StatCounter
                icon={<Star className="h-8 w-8 mb-2 text-blue-600 mx-auto" />}
                value={98}
                suffix="%"
                label="Patient Satisfaction"
                duration={2200}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 md:px-6 relative">
          {/* Add decorative elements */}
          <div className="hidden md:block absolute -left-4 top-1/4 w-24 h-24 bg-blue-50 rounded-full opacity-80"></div>
          <div className="hidden md:block absolute right-10 bottom-10 w-40 h-40 bg-blue-50 rounded-full opacity-60"></div>
          
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 relative">
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">Our Expertise</span>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">Comprehensive Services</h2>
            <div className="w-20 h-1 bg-blue-700 rounded-full mx-auto my-2"></div>
            <p className="max-w-[700px] tSext-gray-600 md:text-xl">
              Advanced cardiac care services tailored to your specific health needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="group">
              <ServiceCard
                title="Cardiac Consultation"
                description="Comprehensive evaluation of your heart health with personalized recommendations."
                icon="Heart"
                className="h-full border-2 border-transparent hover:border-blue-200 transition-all duration-300 hover:shadow-xl"
              />
            </div>
            
            <div className="group">
              <ServiceCard
                title="Echocardiography"
                description="Advanced ultrasound imaging to assess heart structure and function with the latest technology."
                icon="Activity"
                className="h-full border-2 border-transparent hover:border-blue-200 transition-all duration-300 hover:shadow-xl"
              />
            </div>
            
            <div className="group">
              <ServiceCard
                title="Preventive Cardiology"
                description="Personalized strategies to prevent heart disease and maintain optimal cardiovascular health."
                icon="Shield"
                className="h-full border-2 border-transparent hover:border-blue-200 transition-all duration-300 hover:shadow-xl"
              />
            </div>
          </div>
          
          <div className="flex justify-center mt-12">
            <Button
              variant="outline"
              className="border-2 border-blue-700 text-blue-700 hover:bg-blue-50 transition-all duration-300 group"
            >
              <Link href="/services" className="flex items-center gap-2">
                View All Services 
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="0.5"></path>
            <path d="M0,0 L100,100 M100,0 L0,100" fill="none" stroke="white" strokeWidth="0.5"></path>
            <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.5"></circle>
          </svg>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <span className="px-3 py-1 rounded-full bg-white bg-opacity-20 text-white text-sm font-medium">Real Experiences</span>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Voice of Our Patients</h2>
            <div className="w-20 h-1 bg-white opacity-60 rounded-full mx-auto my-2"></div>
            <p className="max-w-[700px] text-blue-100 md:text-xl">
              Discover what our patients say about their journey to better heart health
            </p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 shadow-xl mb-12">
            <TestimonialSlider />
          </div>
          
          <div className="flex justify-center mt-10">
            <Button variant="secondary" className="bg-white text-blue-700 hover:bg-blue-50 transition-all duration-300 shadow-lg group">
              <Link href="/testimonials" className="flex items-center gap-2">
                Read More Testimonials 
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Add a new CTA section before the end of main */}
      <section className="w-full py-16 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Ready to prioritize your heart health?</h2>
              <p className="text-blue-100 max-w-2xl">
                Take the first step toward a healthier heart today. Schedule a consultation with Dr. Sarah Mitchell for personalized cardiac care.
              </p>
            </div>
            <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 justify-end">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 w-full sm:w-auto">
                <Link href="/appointment" className="flex items-center justify-center gap-2">
                  Book Appointment <Calendar className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-600 w-full sm:w-auto">
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  Contact Us <Phone className="h-4 w-4" />
                </Link>
              </Button>
            </div>
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


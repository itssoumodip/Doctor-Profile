import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Award, Calendar, Clock, MapPin, Phone, Star, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StatCounter } from "@/components/stat-counter"
import { ServiceCard } from "@/components/service-card"
import { TestimonialSlider } from "@/components/testimonial-slider"
import { FallbackImage } from "@/components/fallback-image"

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
        <div className="absolute top-0 left-0 right-0 w-full overflow-hidden">
          <svg className="w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                  fill="#EBF5FF" fillOpacity="0.6"></path>
          </svg>
        </div>
        
        <div className="container px-4 md:px-6 relative z-10 pt-8">
          <div className="text-center mb-12">
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">Our Impact</span>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900 mt-3">
              Making a <span className="text-blue-700">Difference</span> in Cardiac Care
            </h2>
            <div className="w-20 h-1 bg-blue-700 rounded-full mx-auto my-4"></div>
            <p className="max-w-[700px] mx-auto text-gray-600 md:text-lg">
              Our commitment to excellence has helped thousands of patients achieve better heart health
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
              <StatCounter
                icon={<Users className="h-8 w-8 mb-2 text-blue-600 mx-auto group-hover:scale-110 transition-transform duration-300" />}
                value={5000}
                suffix="+"
                label="Patients Treated"
                duration={2500}
              />
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
              <StatCounter
                icon={<Clock className="h-8 w-8 mb-2 text-blue-600 mx-auto group-hover:scale-110 transition-transform duration-300" />}
                value={15}
                suffix="+"
                label="Years of Experience"
                duration={1500}
              />
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
              <StatCounter
                icon={<Award className="h-8 w-8 mb-2 text-blue-600 mx-auto group-hover:scale-110 transition-transform duration-300" />}
                value={12}
                label="Awards Received"
                duration={1800}
              />
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
              <StatCounter
                icon={<Star className="h-8 w-8 mb-2 text-blue-600 mx-auto group-hover:scale-110 transition-transform duration-300" />}
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

      {/* Feature Highlights */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">Why Choose Dr. Mitchell</span>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900 mt-3">World-Class Cardiac Care</h2>
            <div className="w-20 h-1 bg-blue-700 rounded-full mx-auto my-4"></div>
            <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl">
              Experience the difference with personalized, evidence-based heart care
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-blue-600 group hover:-translate-y-2">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <svg className="w-7 h-7 text-blue-700 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-900">Patient-Centered Approach</h3>
              <p className="text-gray-600">Your care is personalized to your unique needs, with treatments tailored specifically for you.</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Personalized treatment plans
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Patient education & involvement
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Continuous follow-up care
                </li>
              </ul>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-purple-600 group hover:-translate-y-2">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-300">
                <svg className="w-7 h-7 text-purple-700 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-900">Advanced Technology</h3>
              <p className="text-gray-600">Access to the latest diagnostic and treatment technologies for optimal heart care.</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  State-of-the-art equipment
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Non-invasive cardiac imaging
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Digital health monitoring
                </li>
              </ul>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-teal-600 group hover:-translate-y-2">
              <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors duration-300">
                <svg className="w-7 h-7 text-teal-700 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-teal-900">Evidence-Based Care</h3>
              <p className="text-gray-600">All treatments follow the latest clinical research and cardiac care guidelines.</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Research-backed treatments
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Continuous medical education
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  International guideline adherence
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Journey Section */}
      <section className="w-full py-16 bg-white overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">Your Care Journey</span>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900 mt-3">What to Expect</h2>
            <div className="w-20 h-1 bg-blue-700 rounded-full mx-auto my-4"></div>
            <p className="max-w-[700px] mx-auto text-gray-600 md:text-lg">
              Your heart health journey with Dr. Mitchell is streamlined and comprehensive
            </p>
          </div>
          
          <div className="relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-500 to-blue-200 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-4 border-4 border-white shadow-lg transition-transform group-hover:scale-110 duration-300">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">1</div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-900">Initial Consultation</h3>
                <p className="text-gray-600">Comprehensive assessment of your heart health and medical history.</p>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-4 border-4 border-white shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">2</div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-900">Diagnostic Testing</h3>
                <p className="text-gray-600">State-of-the-art cardiac diagnostics to accurately assess your condition.</p>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-4 border-4 border-white shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">3</div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-900">Treatment Plan</h3>
                <p className="text-gray-600">Personalized care plan tailored to your specific cardiac needs.</p>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-4 border-4 border-white shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">4</div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-900">Follow-Up Care</h3>
                <p className="text-gray-600">Ongoing support and monitoring to ensure optimal heart health.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" className="border-2 border-blue-700 text-blue-700 hover:bg-blue-50">
              <Link href="/process" className="flex items-center gap-2">
                Learn More About Our Process
                <ArrowRight className="h-4 w-4" />
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

      {/* Modern Footer */}
      <footer className="w-full bg-gradient-to-r from-blue-900 to-blue-950 text-white">
        {/* Footer Top with curved shape */}
        <div className="relative h-16">
          <svg className="absolute bottom-0 w-full h-16" preserveAspectRatio="none" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 74L60 68.7C120 63.3 240 52.7 360 46.5C480 40.3 600 38.7 720 42.2C840 45.7 960 54.3 1080 57.2C1200 60 1320 57 1380 55.5L1440 54V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V74Z" fill="#1e3a8a"/>
          </svg>
        </div>
        
        {/* Footer Content */}
        <div className="container px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1: Logo and info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <span className="text-blue-900 font-bold text-xl">SM</span>
                </div>
                <h3 className="text-xl font-bold">Dr. Sarah Mitchell</h3>
              </div>
              <p className="text-blue-200">Providing exceptional cardiac care with personalized treatment plans for every patient.</p>
              <div className="flex space-x-4 pt-2">
                {/* Social Media Icons */}
                <a href="#" className="w-9 h-9 rounded-full bg-blue-800 hover:bg-blue-700 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-blue-800 hover:bg-blue-700 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-blue-800 hover:bg-blue-700 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path></svg>
                </a>
              </div>
            </div>
            
            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">About Dr. Mitchell</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Our Services</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Patient Reviews</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Insurance Information</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Blog & Articles</a></li>
              </ul>
            </div>
            
            {/* Column 3: Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2">Our Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Cardiac Consultation</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Echocardiography</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Preventive Cardiology</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Heart Failure Management</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Cardiac Rehabilitation</a></li>
              </ul>
            </div>
            
            {/* Column 4: Office Hours */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2">Office Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              <div className="pt-4">
                <a href="#" className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors">
                  <Calendar className="h-4 w-4" />
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
          
          {/* Footer Bottom */}
          <div className="mt-12 pt-6 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-blue-300">© {new Date().getFullYear()} Dr. Sarah Mitchell Cardiology. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm text-blue-300">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sitemap</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Appointment Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="bg-blue-700 hover:bg-blue-800 text-white shadow-lg rounded-full p-4 flex items-center gap-2 animate-pulse-slow"
        >
          <Calendar className="h-5 w-5" />
          <span>Book Now</span>
        </Button>
      </div>
    </main>
  )
}


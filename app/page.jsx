import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Award, Calendar, Clock, MapPin, Phone, Star, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StatCounter } from "@/components/stat-counter"
import { ServiceCard } from "@/components/service-card"
import { TestimonialSlider } from "@/components/testimonial-slider"
import { FallbackImage } from "@/components/fallback-image"
import { ScrollReveal } from "@/components/scroll-reveal"
import { BackToTopButton } from "@/components/back-to-top-button"
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/lib/firebase'

export default async function Home() {
  // Fetch testimonials from Firebase server-side
  const testimonialsCollection = collection(db, 'testimonials');
  const snapshot = await getDocs(testimonialsCollection);
  const testimonials = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  return (
    <main className="flex flex-col min-h-screen overflow-hidden">
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-[#ebf5ffc0] overflow-hidden">

        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 -mr-32 -mt-32 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200 rounded-full opacity-20 -ml-40 -mb-30 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-blue-300 rounded-full opacity-10 animate-blob animation-delay-3000"></div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 w-fit animate-fade-in transform hover:scale-105 transition-transform duration-300">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                <span className="text-sm font-medium">Women's Health Expert</span>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-600 animate-fade-in">
                  Dr. Partha Pratim Paul <span className="relative inline-block">
                    <div className="absolute -bottom-1 left-0 w-full h-1 bg-blue-500 rounded-full transform origin-left animate-pulse-slow"></div>
                  </span>
                </h1>
                <p className="text-blue-600 text-xl md:text-2xl font-medium animate-fade-in animation-delay-200">
                  Obstetrician & Gynaecologist
                </p>
                <p className="max-w-[600px] text-gray-600 md:text-xl animate-fade-in animation-delay-300 leading-relaxed">
                  Providing exceptional women's healthcare with comprehensive experience in obstetrics and gynecology. Dedicated to comprehensive obstetric and gynecological care with expertise in infertility management and minimally invasive procedures.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3 mt-2 animate-fade-in animation-delay-400">
                <span className="inline-flex items-center rounded-md bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20 hover:bg-blue-100 transition-colors duration-300">
                  <Star className="h-3 w-3 mr-1 fill-blue-500 text-blue-500" />
                  Top Rated
                </span>
                <span className="inline-flex items-center rounded-md bg-green-50 px-3 py-1.5 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20 hover:bg-green-100 transition-colors duration-300">
                  <Award className="h-3 w-3 mr-1" />
                  Board Certified
                </span>
              </div>  {/* Added the missing closing div tag here */}
              
              <div className="flex flex-col gap-3 sm:flex-row animate-fade-in animation-delay-500 pt-2">
                <Button
                  size="lg"
                  className="bg-blue-700 hover:bg-blue-800 text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                >
                  <Link href="/appointment" className="flex items-center gap-2">
                    Book Appointment <Calendar className="h-4 w-4 animate-pulse-slow" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-700 text-blue-700 hover:bg-blue-50 transition-all duration-300 hover:-translate-y-1"
                >
                  <Link href="/about" className="flex items-center gap-2">
                    Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end animate-fade-in animation-delay-500">
              <div className="relative w-[280px] h-[350px] sm:w-[350px] sm:h-[450px] overflow-hidden rounded-2xl shadow-2xl animate-float">
                {/* Add decorative elements behind image
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-400 rounded-full opacity-70 z-0 animate-blob"></div>
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-blue-300 rounded-full opacity-70 z-0 animate-blob animation-delay-2000"></div> */}
                <Image
                  src="/doctor.svg"
                  alt="Dr. Partha Pratim Paul"
                  fill
                  className="object-cover z-10 relative transition-transform duration-500 hover:scale-105 hover:rotate-1"
                  priority
                />
                {/* Add floating badge */}
                <div className="absolute bottom-4 right-0 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-l-lg shadow-lg z-20 animate-pulse-slow">
                  <p className="text-blue-700 font-semibold">Dr. Partha Pratim Paul</p>
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
                  fill="#EBF5FF" fillOpacity="0.8" className="animate-pulse-slow"></path>
          </svg>
        </div>
        
        <div className="container px-4 md:px-6 relative z-10 pt-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="flex items-center gap-2 mb-2 justify-center transform transition-all duration-300 hover:scale-105">
                <span className="h-px w-8 bg-blue-500 hidden sm:block"></span>
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium shadow-sm">Our Impact</span>
                <span className="h-px w-8 bg-blue-500 hidden sm:block"></span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-blue-700 to-blue-800 animate-gradient-x pb-3 leading-tight">
                Making a Difference in Women's Healthcare
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full mx-auto my-4 transform transition-all duration-500 hover:w-32"></div>
              <p className="max-w-[700px] mx-auto text-gray-600 md:text-lg leading-relaxed mt-3">
                Our commitment to excellence has helped thousands of women achieve better reproductive and overall health
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <ScrollReveal delay={100} animation="animate-slide-up">
              <div className="bg-white rounded-xl p-6 shadow-lg hover-lift border border-gray-100 group">
                <StatCounter
                  icon={<Users className="h-8 w-8 mb-2 text-blue-600 mx-auto group-hover:scale-110 transition-transform duration-300" />}
                  value={5000}
                  suffix="+"
                  label="Patients Treated"
                  duration={2500}
                  className="glass-effect"
                />
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200} animation="animate-slide-up">
              <div className="bg-white rounded-xl p-6 shadow-lg hover-lift border border-gray-100 group">
                <StatCounter
                  icon={<Clock className="h-8 w-8 mb-2 text-blue-600 mx-auto group-hover:scale-110 transition-transform duration-300" />}
                  value={13}
                  suffix="+"
                  label="overall experience"
                  duration={1500}
                  className="glass-effect"
                />
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300} animation="animate-slide-up">
              <div className="bg-white rounded-xl p-6 shadow-lg hover-lift border border-gray-100 group">
                <StatCounter
                  icon={<Award className="h-8 w-8 mb-2 text-blue-600 mx-auto group-hover:scale-110 transition-transform duration-300" />}
                  value={5}
                  label="Awards Received"
                  duration={1800}
                  className="glass-effect"
                />
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400} animation="animate-slide-up">
              <div className="bg-white rounded-xl p-6 shadow-lg hover-lift border border-gray-100 group">
                <StatCounter
                  icon={<Star className="h-8 w-8 mb-2 text-blue-600 mx-auto group-hover:scale-110 transition-transform duration-300" />}
                  value={98}
                  suffix="%"
                  label="Patient Satisfaction"
                  duration={2200}
                  className="glass-effect"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        {/* Enhanced decorative elements */}
        <div className="hidden md:block absolute -left-4 top-1/4 w-24 h-24 bg-blue-100 rounded-full opacity-80 animate-blob blur-xl"></div>
        <div className="hidden md:block absolute right-10 bottom-10 w-40 h-40 bg-blue-100 rounded-full opacity-60 animate-blob animation-delay-3000 blur-lg"></div>
        <div className="absolute right-1/4 top-1/3 w-32 h-32 bg-blue-50 rounded-full opacity-40 animate-blob animation-delay-2000 blur-md"></div>
        <div className="absolute left-1/3 bottom-1/4 w-20 h-20 bg-blue-200 rounded-full opacity-30 animate-pulse-slow"></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <ScrollReveal threshold={0.1}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16 relative">
              <div className="flex items-center gap-2 mb-2 transform transition-all duration-300 hover:scale-105">
                <span className="h-px w-8 bg-blue-500 hidden sm:block"></span>
                <span className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium shadow-sm">Our Expertise</span>
                <span className="h-px w-8 bg-blue-500 hidden sm:block"></span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-blue-700 to-blue-800 animate-gradient-x">
                Comprehensive Services
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full mx-auto my-2 transform transition-all duration-500 hover:w-32"></div>
              <p className="max-w-[700px] text-gray-600 md:text-xl leading-relaxed">
                Comprehensive women's healthcare services tailored to your specific reproductive and gynecological needs
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8">
            <ScrollReveal delay={100} animation="animate-slide-up">
              <div className="group transform transition-all duration-500 hover:-translate-y-2">
                <ServiceCard
                  title="Obstetric Care"
                  description="Comprehensive prenatal, delivery, and postnatal care including management of high-risk pregnancies and obstetric emergencies."
                  icon="Heart"
                  className="h-full border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-blue-lg rounded-xl overflow-hidden bg-white backdrop-blur-sm"
                  iconClassName="group-hover:text-white group-hover:bg-gradient-to-r from-blue-600 to-blue-700"
                />
                <div className="h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-700 ease-out rounded-b-lg"></div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200} animation="animate-slide-up">
              <div className="group transform transition-all duration-500 hover:-translate-y-2 h-full">
                <ServiceCard
                  title="Infertility Management"
                  description="Comprehensive infertility evaluation and treatment including ovulation induction, IUI, and pre-IVF consultations."
                  icon="Activity"
                  className="h-full border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-blue-lg rounded-xl overflow-hidden bg-white backdrop-blur-sm"
                  iconClassName="group-hover:text-white group-hover:bg-gradient-to-r from-blue-600 to-blue-700"
                />
                <div className="h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-700 ease-out rounded-b-lg"></div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300} animation="animate-slide-up">
              <div className="group transform transition-all duration-500 hover:-translate-y-2">
                <ServiceCard
                  title="Minimally Invasive Surgery"
                  description="Advanced laparoscopic, hysteroscopic, and vaginal procedures for various gynecological conditions with faster recovery."
                  icon="Shield"
                  className="h-full border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-blue-lg rounded-xl overflow-hidden bg-white backdrop-blur-sm"
                  iconClassName="group-hover:text-white group-hover:bg-gradient-to-r from-blue-600 to-blue-700"
                />
                <div className="h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-700 ease-out rounded-b-lg"></div>
              </div>
            </ScrollReveal>
          </div>
          
          {/* Additional services visible only on larger screens */}
          <div className="hidden xl:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8">
            <ScrollReveal delay={400} animation="animate-slide-up">
              <div className="group transform transition-all duration-500 hover:-translate-y-2">
                <ServiceCard
                  title="Colposcopy & Hysteroscopy"
                  description="Advanced diagnostic and therapeutic procedures for cervical and uterine conditions with precision and care."
                  icon="HeartPulse"
                  className="h-full border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-blue-lg rounded-xl overflow-hidden bg-white backdrop-blur-sm"
                  iconClassName="group-hover:text-white group-hover:bg-gradient-to-r from-blue-600 to-blue-700"
                />
                <div className="h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-700 ease-out rounded-b-lg"></div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={500} animation="animate-slide-up">
              <div className="group transform transition-all duration-500 hover:-translate-y-2">
                <ServiceCard
                  title="High-Risk Pregnancy Care"
                  description="Expert management of complex pregnancies including gestational diabetes, hypertension, and multiple gestations."
                  icon="Stethoscope"
                  className="h-full border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-blue-lg rounded-xl overflow-hidden bg-white backdrop-blur-sm"
                  iconClassName="group-hover:text-white group-hover:bg-gradient-to-r from-blue-600 to-blue-700"
                />
                <div className="h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-700 ease-out rounded-b-lg"></div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={600} animation="animate-slide-up">
              <div className="group transform transition-all duration-500 hover:-translate-y-2">
                <ServiceCard
                  title="Cosmetic Gynecology"
                  description="Advanced cosmetic gynecological procedures to enhance comfort, confidence, and intimate wellness."
                  icon="LineChart"
                  className="h-full border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-blue-lg rounded-xl overflow-hidden bg-white backdrop-blur-sm"
                  iconClassName="group-hover:text-white group-hover:bg-gradient-to-r from-blue-600 to-blue-700"
                />
                <div className="h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-700 ease-out rounded-b-lg"></div>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="flex justify-center mt-12">
            <Button
              variant="outline"
              className="border-2 border-blue-700 text-blue-700 hover:bg-blue-50 transition-all duration-300 group transform hover:-translate-y-1 hover:shadow-lg relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-blue-100 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-md"></span>
              <Link href="/services" className="flex items-center gap-2 relative z-10">
                View All Services 
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          
          {/* Mobile view indicator dots - only visible on smaller screens */}
          <div className="flex justify-center mt-8 gap-1 sm:hidden">
            <span className="h-2 w-8 rounded-full bg-blue-600"></span>
            <span className="h-2 w-2 rounded-full bg-blue-200"></span>
            <span className="h-2 w-2 rounded-full bg-blue-200"></span>
          </div>
        </div>
        
        {/* Floating side element for visual interest */}
        <div className="hidden lg:block absolute right-0 top-1/4 transform translate-x-1/2 bg-blue-50 w-32 h-32 rounded-full blur-3xl opacity-60 animate-pulse-slow"></div>
      </section>

      {/* Feature Highlights */}
      <section className="w-full py-16 bg-blue-50/70">
        <div className="container px-4 md:px-6">
          {/* Why Choose Dr. - Updated Header */}
          <div className="text-center mb-12">
            <div className="flex items-center gap-2 mb-2 justify-center transform transition-all duration-300 hover:scale-105">
              <span className="h-px w-8 bg-blue-500 hidden sm:block"></span>
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium shadow-sm">Why Choose Dr.</span>
              <span className="h-px w-8 bg-blue-500 hidden sm:block"></span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900 mt-2">World-Class Women's Healthcare</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full mx-auto my-4 transform transition-all duration-500 hover:w-32"></div>
            <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl">
              Experience the difference with personalized, evidence-based women's healthcare
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
              <h3 className="text-xl font-bold mb-2 text-blue-900">Compassionate Women's Care</h3>
              <p className="text-gray-600">Your reproductive and gynecological health is personalized to your unique needs and life stage.</p>
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
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-blue-600 group hover:-translate-y-2">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <svg className="w-7 h-7 text-blue-700 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-900">Advanced Medical Technology</h3>
              <p className="text-gray-600">Access to the latest diagnostic and treatment technologies for optimal women's healthcare.</p>
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
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-blue-600 group hover:-translate-y-2">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <svg className="w-7 h-7 text-blue-700 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-900">Evidence-Based Practice</h3>
              <p className="text-gray-600">All treatments follow the latest clinical research and obstetric-gynecological care guidelines.</p>
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
          {/* Your Care Journey - Updated Header */}
          <div className="text-center mb-12">
            <div className="flex items-center gap-2 mb-2 justify-center transform transition-all duration-300 hover:scale-105">
              <span className="h-px w-8 bg-blue-500 hidden sm:block"></span>
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium shadow-sm">Your Care Journey</span>
              <span className="h-px w-8 bg-blue-500 hidden sm:block"></span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900 mt-2">What to Expect</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full mx-auto my-4 transform transition-all duration-500 hover:w-32"></div>
            <p className="max-w-[700px] mx-auto text-gray-600 md:text-lg">
              Your women's healthcare journey with Dr. Paul is streamlined and comprehensive
            </p>
          </div>
          
          <div className="relative">
            {/* Connector Line */}

            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-4 border-4 border-white shadow-lg transition-transform group-hover:scale-110 duration-300">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">1</div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-900">Initial Consultation</h3>
                <p className="text-gray-600">Comprehensive assessment of your reproductive health, medical history, and specific concerns.</p>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-4 border-4 border-white shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">2</div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-900">Diagnostic Testing</h3>
                <p className="text-gray-600">Advanced gynecological and obstetric diagnostics including ultrasound, colposcopy, and lab work.</p>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-4 border-4 border-white shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">3</div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-900">Treatment Plan</h3>
                <p className="text-gray-600">Personalized care plan tailored to your specific reproductive and gynecological needs.</p>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-4 border-4 border-white shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">4</div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-900">Follow-Up Care</h3>
                <p className="text-gray-600">Ongoing support and monitoring to ensure optimal reproductive and overall health.</p>
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
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-blue-700 to-blue-800 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="0.5"></path>
            <path d="M0,0 L100,100 M100,0 L0,100" fill="none" stroke="white" strokeWidth="0.5"></path>
            <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.5"></circle>
          </svg>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          {/* Real Experiences - Updated Header */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="flex items-center gap-2 mb-2 justify-center transform transition-all duration-300 hover:scale-105">
              <span className="h-px w-8 bg-white opacity-60 hidden sm:block"></span>
              <span className="px-3 py-1 rounded-full bg-white bg-opacity-20 text-white text-sm font-medium shadow-sm">Real Experiences</span>
              <span className="h-px w-8 bg-white opacity-60 hidden sm:block"></span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Voice of Our Patients</h2>
            <div className="w-24 h-1.5 bg-white opacity-60 rounded-full mx-auto my-2 transform transition-all duration-500 hover:w-32"></div>
              <p className="max-w-[700px] text-blue-100 md:text-xl">
                Discover what our patients say about their journey to better women's health
              </p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 shadow-xl mb-12">
            <TestimonialSlider testimonials={testimonials} />
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
      <section className="w-full py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Ready to prioritize your women's health?</h2>
              <p className="text-blue-100 max-w-2xl">
                Take the first step toward better women's healthcare today. Schedule a consultation with Dr. Paul for personalized obstetric and gynecological care.
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
                    <p className="text-gray-600">+91 9874147230</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                    <MapPin className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Visit Us</p>
                    <p className="text-sm text-gray-600">Kalyani, Nadia, West Bengal</p>
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
                <p className="font-medium">Dr. Partha Pratim Paul's Clinic</p>
                <p className="text-sm text-gray-600">Kalyani, Nadia, West Bengal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remove the entire footer section - it will be moved to layout.jsx */}
    </main>
  )
}


import Link from "next/link"
import { ArrowRight, MessageCircle, Star, Calendar, Heart, ChevronRight, Quote, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TestimonialCard } from "@/components/testimonial-card"
import { TestimonialSlider } from "@/components/testimonial-slider"
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { db } from '@/lib/firebase'

export default async function TestimonialsPage() {
  // Fetch testimonials from Firebase server-side
  const testimonialsCollection = collection(db, 'testimonials');
  const snapshot = await getDocs(testimonialsCollection);
  const testimonials = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  return (
    <main className="flex flex-col min-h-screen overflow-hidden bg-white">
      {/* Hero Section - Completely redesigned */}
      <section className="w-full pt-16 pb-24 md:pt-24 md:pb-32 relative overflow-hidden">
        {/* Gradient background with enhanced colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-white"></div>
        
        {/* Enhanced decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 left-1/4 w-48 h-48 border border-blue-200 rounded-full opacity-40"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-blue-200 rounded-full opacity-30"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-2 border-blue-100/50 rounded-full opacity-20"></div>
          
          {/* Heart pulse SVG animation for medical theme */}
          <svg className="absolute top-1/2 right-[15%] transform -translate-y-1/2 w-32 h-32 text-blue-300/30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,50 L30,50 L40,30 L50,70 L60,30 L70,50 L90,50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse"/>
          </svg>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-[800px] mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium shadow-sm mb-6 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Patient Voices
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-600 animate-fade-in">
              Our Patient <br />Testimonials
            </h1>
            
            <div className="w-32 h-2 bg-gradient-to-r from-blue-700 to-blue-400 rounded-full mt-6 mb-8"></div>
            
            <p className="text-gray-700 md:text-xl lg:text-2xl leading-relaxed animate-fade-in animation-delay-200 mb-10">
              Real stories from patients who have experienced our personalized approach to <span className="text-blue-700 font-semibold">women's health, obstetric, gynecological, and infertility care</span>.
            </p>
            
            {/* Featured testimonial quote for immediate impact */}
          </div>
        </div>
        
        {/* Improved wave divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16">
          <svg className="absolute top-1 left-0 w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* Success Stories Section - Redesigned with cards */}
      <section className="w-full py-20 bg-white relative">
        <div className="container px-4 md:px-6">
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>
    </main>
  )
}
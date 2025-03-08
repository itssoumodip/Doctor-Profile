import Link from "next/link"
import { ArrowRight, MessageCircle, Star, Calendar, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TestimonialCard } from "@/components/testimonial-card"
import { TestimonialSlider } from "@/components/testimonial-slider"

export default function TestimonialsPage() {
  return (
    <main className="flex flex-col min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-blue-100 relative overflow-hidden">
        {/* Add decorative elements matching the home page */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-200/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-blue-100/70 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 left-1/4 w-32 h-32 border border-blue-200 rounded-full opacity-60 animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-blue-200 rounded-full opacity-60"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-blue-100 rounded-full opacity-30"></div>
        </div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium shadow-sm animate-fade-in">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              Patient Experiences
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-600 animate-fade-in relative">
              Patient Testimonials
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full mx-auto my-4 transform transition-all duration-500 hover:w-32"></div>
            </h1>
            
            <p className="max-w-[800px] text-gray-700 md:text-xl lg:text-2xl animate-fade-in animation-delay-200">
              Real stories from patients on their journey to <span className="text-blue-700 font-semibold">better heart health</span>
            </p>
          </div>
        </div>
        
        {/* Modern curved section divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16">
          <svg className="absolute top-1 left-0 w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-blue-700"></path>
          </svg>
        </div>
      </section>

      {/* Featured Testimonials Slider */}
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
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <div className="flex items-center gap-2 mb-2 justify-center transform transition-all duration-300 hover:scale-105">
              <span className="h-px w-8 bg-white opacity-60 hidden sm:block"></span>
              <span className="px-3 py-1 rounded-full bg-white bg-opacity-20 text-white text-sm font-medium shadow-sm">Featured Stories</span>
              <span className="h-px w-8 bg-white opacity-60 hidden sm:block"></span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Transformative Experiences</h2>
            <div className="w-24 h-1.5 bg-white opacity-60 rounded-full mx-auto my-2 transform transition-all duration-500 hover:w-32"></div>
            <p className="max-w-[700px] text-blue-100 md:text-xl">
              Stories from patients whose lives have been changed through personalized cardiac care
            </p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
            <TestimonialSlider />
          </div>
        </div>
        
        {/* Modern curved section divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16">
          <svg className="absolute -top-1 left-0 w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12 animate-fade-in">
            <div className="flex items-center gap-2 mb-2 justify-center transform transition-all duration-300 hover:scale-105">
              <span className="h-px w-8 bg-blue-500 hidden sm:block"></span>
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium shadow-sm">Patient Stories</span>
              <span className="h-px w-8 bg-blue-500 hidden sm:block"></span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-blue-700 to-blue-800 animate-gradient-x">
              More Patient Stories
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full mx-auto my-2 transform transition-all duration-500 hover:w-32"></div>
            <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl mt-4">
              Read detailed accounts from patients about their cardiac care journey
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Replace placeholder data with real testimonials */}
            <div className="group transform transition-all duration-500 hover:-translate-y-2">
              <TestimonialCard
                name="Michael R."
                age="58"
                condition="Coronary Artery Disease"
                quote="After my diagnosis, I was worried about my future. The personalized care plan and ongoing support helped me regain confidence and improve my heart health beyond what I thought possible."
                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80"
                rating={5}
                detailed
              />
              <div className="h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-700 ease-out rounded-b-lg"></div>
            </div>
            
            <div className="group transform transition-all duration-500 hover:-translate-y-2">
              <TestimonialCard
                name="Sarah K."
                age="45"
                condition="Hypertension"
                quote="The comprehensive approach to managing my hypertension has made all the difference. My blood pressure is now under control, and I've learned valuable lifestyle changes that have improved my overall wellbeing."
                image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80"
                rating={5}
                detailed
              />
              <div className="h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-700 ease-out rounded-b-lg"></div>
            </div>
            
            <div className="group transform transition-all duration-500 hover:-translate-y-2">
              <TestimonialCard
                name="Robert J."
                age="62"
                condition="Heart Failure"
                quote="Living with heart failure was challenging until I found this practice. The team's expertise and compassionate care have helped me maintain my quality of life and stay active with my grandchildren."
                image="https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=400&h=400&fit=crop&q=80"
                rating={5}
                detailed
              />
              <div className="h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-700 ease-out rounded-b-lg"></div>
            </div>
            
            <div className="group transform transition-all duration-500 hover:-translate-y-2">
              <TestimonialCard
                name="Patricia M."
                age="52"
                condition="Arrhythmia"
                quote="The diagnostic process was thorough and efficient. My arrhythmia was properly identified and treated, and now I can enjoy my daily activities without constant worry about my heart rhythm."
                image="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=400&h=400&fit=crop&q=80"
                rating={4}
                detailed
              />
              <div className="h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-700 ease-out rounded-b-lg"></div>
            </div>
            
            <div className="group transform transition-all duration-500 hover:-translate-y-2">
              <TestimonialCard
                name="David L."
                age="67"
                condition="Valve Disease"
                quote="Following my heart valve surgery, the cardiac rehabilitation program was crucial to my recovery. The personalized approach and encouragement from the entire team helped me regain strength and confidence."
                image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80"
                rating={5}
                detailed
              />
              <div className="h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-700 ease-out rounded-b-lg"></div>
            </div>
            
            <div className="group transform transition-all duration-500 hover:-translate-y-2">
              <TestimonialCard
                name="Karen W."
                age="49"
                condition="Preventative Care"
                quote="Taking a proactive approach to my heart health was the best decision I've made. The comprehensive risk assessment identified early warning signs and the preventative measures have given me peace of mind."
                image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80"
                rating={5}
                detailed
              />
              <div className="h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-700 ease-out rounded-b-lg"></div>
            </div>
            
            <div className="group transform transition-all duration-500 hover:-translate-y-2">
              <TestimonialCard
                name="Thomas B."
                age="71"
                condition="Coronary Bypass"
                quote="After my bypass surgery, I received exceptional follow-up care that was critical to my recovery. The team went above and beyond to ensure I understood my treatment plan and felt supported throughout my journey."
                image="https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400&h=400&fit=crop&q=80"
                rating={5}
                detailed
              />
              <div className="h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-700 ease-out rounded-b-lg"></div>
            </div>
            
            <div className="group transform transition-all duration-500 hover:-translate-y-2">
              <TestimonialCard
                name="Jennifer A."
                age="39"
                condition="Familial Hypercholesterolemia"
                quote="Managing my genetic condition was overwhelming until I found this practice. The team developed a tailored approach that has effectively controlled my cholesterol levels and reduced my long-term cardiac risks."
                image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&q=80"
                rating={5}
                detailed
              />
              <div className="h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-700 ease-out rounded-b-lg"></div>
            </div>
            
            <div className="group transform transition-all duration-500 hover:-translate-y-2">
              <TestimonialCard
                name="William T."
                age="64"
                condition="Cardiac Rehabilitation"
                quote="The cardiac rehabilitation program was exactly what I needed after my heart attack. The structured exercise and education helped me rebuild strength and confidence in my heart's capabilities."
                image="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=400&fit=crop&q=80"
                rating={4}
                detailed
              />
              <div className="h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-700 ease-out rounded-b-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-40 h-40 bg-blue-200/50 rounded-full opacity-70 filter blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-200/50 rounded-full opacity-70 filter blur-3xl"></div>
          <div className="absolute top-1/3 left-1/4 w-32 h-32 border border-blue-200 rounded-full opacity-60 animate-pulse-slow"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12 animate-fade-in">
            <div className="flex items-center gap-2 mb-2 justify-center transform transition-all duration-300 hover:scale-105">
              <span className="h-px w-8 bg-blue-500 hidden sm:block"></span>
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium shadow-sm">Video Stories</span>
              <span className="h-px w-8 bg-blue-500 hidden sm:block"></span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-blue-700 to-blue-800 animate-gradient-x">
              Video Testimonials
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full mx-auto my-2 transform transition-all duration-500 hover:w-32"></div>
            <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl mt-4">
              Watch our patients share their experiences and recovery journeys
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Video testimonial cards */}
            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 aspect-video transform hover:-translate-y-2">
              <img 
                src="https://plus.unsplash.com/premium_photo-1682130157004-057c137d96d5?q=80&w=1932&auto=format&fit=crop" 
                alt="Patient video testimonial" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent flex items-center justify-center">
                <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-700 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p className="font-medium text-lg">Richard's Heart Recovery Journey</p>
                <p className="text-sm text-white/80">After successful treatment for heart disease</p>
              </div>
            </div>
            
            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 aspect-video transform hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" 
                alt="Patient video testimonial" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent flex items-center justify-center">
                <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-700 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
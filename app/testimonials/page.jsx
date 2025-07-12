import Link from "next/link"
import { ArrowRight, MessageCircle, Star, Calendar, Heart, ChevronRight, Quote, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TestimonialCard } from "@/components/testimonial-card"
import { TestimonialSlider } from "@/components/testimonial-slider"

export default function TestimonialsPage() {
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
              Real stories from patients who've experienced our personalized approach to <span className="text-blue-700 font-semibold">cardiac healthcare</span>
            </p>
            
            {/* Featured testimonial quote for immediate impact */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100 mt-6 relative">
              <Quote className="absolute top-4 left-4 w-10 h-10 text-blue-100" />
              <Quote className="absolute bottom-4 right-4 w-10 h-10 text-blue-100 transform rotate-180" />
              <blockquote className="text-gray-700 text-xl md:text-2xl italic font-light text-center px-8">
                "After my heart attack, I wasn't sure if I'd ever feel confident again. The cardiac team guided me every step of the way with exceptional care and support."
              </blockquote>
              <div className="mt-6 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-200">
                  <img 
                    src="" 
                    alt="Patient" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-semibold text-blue-800 mt-2">Robert M., 58</p>
                <p className="text-sm text-gray-600">Heart Attack Survivor</p>
                <div className="flex space-x-1 mt-1">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
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
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-2 mb-4 justify-center transform transition-all duration-300 hover:scale-105">
              <span className="h-px w-8 bg-blue-500 hidden sm:block"></span>
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium shadow-sm">Success Stories</span>
              <span className="h-px w-8 bg-blue-500 hidden sm:block"></span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-blue-700 to-blue-800 pb-1">
              Life-Changing Results
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full my-4"></div>
            <p className="max-w-[700px] text-gray-600 md:text-lg">
              Our patients share how specialized cardiac care has transformed their health and quality of life
            </p>
          </div>
          
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {/* Redesigned testimonial cards with consistent styling */}
            <div className="group">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 relative h-full flex flex-col">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100/50 rounded-full -mt-8 -mr-8 blur-xl"></div>
                <div className="p-6 flex-grow">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <div className="w-16 h-16 rounded-full border-2 border-blue-200 overflow-hidden">
                        <img 
                          src="" 
                          alt="Michael R." 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-blue-800">Michael R., 58</h3>
                      <p className="text-blue-600 text-sm">Coronary Artery Disease</p>
                      <div className="flex mt-1">
                        {Array(5).fill(0).map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className="italic text-gray-600 border-l-2 border-blue-300 pl-4 py-2 text-sm leading-relaxed">
                    "After my diagnosis, I was worried about my future. The personalized care plan and ongoing support helped me regain confidence and improve my heart health beyond what I thought possible."
                  </blockquote>
                </div>
                <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 relative h-full flex flex-col">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100/50 rounded-full -mt-8 -mr-8 blur-xl"></div>
                <div className="p-6 flex-grow">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <div className="w-16 h-16 rounded-full border-2 border-blue-200 overflow-hidden">
                        <img 
                          src="" 
                          alt="Sarah K." 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-blue-800">Sarah K., 45</h3>
                      <p className="text-blue-600 text-sm">Hypertension</p>
                      <div className="flex mt-1">
                        {Array(5).fill(0).map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className="italic text-gray-600 border-l-2 border-blue-300 pl-4 py-2 text-sm leading-relaxed">
                    "The comprehensive approach to managing my hypertension has made all the difference. My blood pressure is now under control, and I've learned valuable lifestyle changes that have improved my overall wellbeing."
                  </blockquote>
                </div>
                <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 relative h-full flex flex-col">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100/50 rounded-full -mt-8 -mr-8 blur-xl"></div>
                <div className="p-6 flex-grow">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <div className="w-16 h-16 rounded-full border-2 border-blue-200 overflow-hidden">
                        <img 
                          src="" 
                          alt="Robert J." 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-blue-800">Robert J., 62</h3>
                      <p className="text-blue-600 text-sm">Heart Failure</p>
                      <div className="flex mt-1">
                        {Array(5).fill(0).map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className="italic text-gray-600 border-l-2 border-blue-300 pl-4 py-2 text-sm leading-relaxed">
                    "Living with heart failure was challenging until I found this practice. The team's expertise and compassionate care have helped me maintain my quality of life and stay active with my grandchildren."
                  </blockquote>
                </div>
                <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 relative h-full flex flex-col">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100/50 rounded-full -mt-8 -mr-8 blur-xl"></div>
                <div className="p-6 flex-grow">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <div className="w-16 h-16 rounded-full border-2 border-blue-200 overflow-hidden">
                        <img 
                          src="" 
                          alt="Patricia M." 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-blue-800">Patricia M., 52</h3>
                      <p className="text-blue-600 text-sm">Arrhythmia</p>
                      <div className="flex mt-1">
                        {Array(4).fill(0).map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current text-yellow-400" />
                        ))}
                        <Star className="w-3 h-3 text-gray-300" />
                      </div>
                    </div>
                  </div>
                  <blockquote className="italic text-gray-600 border-l-2 border-blue-300 pl-4 py-2 text-sm leading-relaxed">
                    "The diagnostic process was thorough and efficient. My arrhythmia was properly identified and treated, and now I can enjoy my daily activities without constant worry about my heart rhythm."
                  </blockquote>
                </div>
                <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 relative h-full flex flex-col">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100/50 rounded-full -mt-8 -mr-8 blur-xl"></div>
                <div className="p-6 flex-grow">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <div className="w-16 h-16 rounded-full border-2 border-blue-200 overflow-hidden">
                        <img 
                          src="" 
                          alt="David L." 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-blue-800">David L., 67</h3>
                      <p className="text-blue-600 text-sm">Valve Disease</p>
                      <div className="flex mt-1">
                        {Array(5).fill(0).map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className="italic text-gray-600 border-l-2 border-blue-300 pl-4 py-2 text-sm leading-relaxed">
                    "Following my heart valve surgery, the cardiac rehabilitation program was crucial to my recovery. The personalized approach and encouragement from the entire team helped me regain strength and confidence."
                  </blockquote>
                </div>
                <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 relative h-full flex flex-col">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100/50 rounded-full -mt-8 -mr-8 blur-xl"></div>
                <div className="p-6 flex-grow">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <div className="w-16 h-16 rounded-full border-2 border-blue-200 overflow-hidden">
                        <img 
                          src="" 
                          alt="Karen W." 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-blue-800">Karen W., 49</h3>
                      <p className="text-blue-600 text-sm">Preventative Care</p>
                      <div className="flex mt-1">
                        {Array(5).fill(0).map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className="italic text-gray-600 border-l-2 border-blue-300 pl-4 py-2 text-sm leading-relaxed">
                    "Taking a proactive approach to my heart health was the best decision I've made. The comprehensive risk assessment identified early warning signs and the preventative measures have given me peace of mind."
                  </blockquote>
                </div>
                <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
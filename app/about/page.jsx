import Image from "next/image"
import Link from "next/link"
import { Award, BookOpen, Calendar, GraduationCap, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Timeline } from "@/components/timeline"

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-28 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-200/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-blue-100/70 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 left-1/4 w-32 h-32 border border-blue-200 rounded-full opacity-60 animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-blue-200 rounded-full opacity-60"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-blue-100 rounded-full opacity-30"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="inline-flex items-center gap-2 p-2 px-4 bg-blue-100 backdrop-blur-sm rounded-full text-blue-700 text-sm font-medium animate-fade-in border border-blue-200/50 shadow-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              About Us
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-blue-900 animate-fade-in relative">
              About Dr. Partha Pratim Paul <span className="text-blue-700 relative inline-block">
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-blue-200/50 -z-10 rounded-full"></span>
              </span>
            </h1>
            
            <p className="max-w-[800px] text-gray-700 md:text-xl lg:text-2xl animate-fade-in animation-delay-200">
              Dedicated to excellence in cardiac care with over <span className="text-blue-700 font-semibold">15 years</span> of experience transforming patient lives
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-4 animate-fade-in animation-delay-300">
              <span className="bg-white/90 backdrop-blur-sm text-blue-800 px-6 py-2 rounded-full text-sm font-medium border border-blue-100 shadow-sm hover:shadow-md transition-all">
                Board Certified Cardiologist
              </span>
              <span className="bg-white/90 backdrop-blur-sm text-blue-800 px-6 py-2 rounded-full text-sm font-medium border border-blue-100 shadow-sm hover:shadow-md transition-all">
                Medical Researcher
              </span>
              <span className="bg-white/90 backdrop-blur-sm text-blue-800 px-6 py-2 rounded-full text-sm font-medium border border-blue-100 shadow-sm hover:shadow-md transition-all">
                Published Author
              </span>
            </div>
            
            <div className="flex gap-6 mt-8 animate-fade-in animation-delay-400">
              <a href="#bio" className="inline-flex items-center gap-2 text-blue-700 font-medium hover:text-blue-800 transition-colors bg-blue-50/50 hover:bg-blue-100/50 px-4 py-2 rounded-full">
                Read Bio <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 text-blue-700 font-medium hover:text-blue-800 transition-colors bg-blue-50/50 hover:bg-blue-100/50 px-4 py-2 rounded-full">
                Contact <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Modern curved section divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16">
          <svg className="absolute top-1 left-0 w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* Bio Section */}
      <section id="bio" className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="flex justify-center lg:justify-start animate-fade-in order-2 lg:order-1">
              <div className="relative w-[280px] h-[350px] sm:w-[400px] sm:h-[500px] overflow-hidden rounded-2xl shadow-xl transform hover:translate-y-[-5px] transition-all duration-500 group">
                <Image
                  src="https://images.unsplash.com/photo-1603843722974-3a4031f9f97c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Dr. Partha Pratim Paul"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-xl">Dr. Partha Pratim Paul</h3>
                  <p className="text-white/80 text-sm">Cardiologist & Medical Director</p>
                  <div className="flex gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-blue-600/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs">15+ Years Experience</span>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 rounded-full opacity-70 z-[-1]"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-200 rounded-full opacity-70 z-[-1]"></div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center space-y-8 animate-fade-in animation-delay-200 order-1 lg:order-2">
              <div className="inline-block p-1.5 px-4 bg-blue-50 rounded-full text-blue-700 text-sm font-medium mb-2 w-fit">
                My Journey
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-blue-900 leading-tight">My Story</h2>
              <div className="space-y-5 text-gray-700">
                <p className="md:text-lg leading-relaxed">
                  I've dedicated my career to advancing cardiac care through innovative treatments and compassionate patient service. With over 15 years in the field, my focus remains on improving outcomes and quality of life for those with heart conditions.
                </p>
                <p className="md:text-lg leading-relaxed">
                  My approach combines the latest medical advancements with personalized care, recognizing that each patient's journey is unique. This philosophy has guided my research, teaching, and clinical practice throughout my career.
                </p>
                <blockquote className="pl-6 border-l-4 border-blue-500 italic text-gray-600 py-4 bg-blue-50/50 pr-6 rounded-r-lg my-6">
                  "My mission is to provide compassionate care that transforms lives and advances cardiac medicine through innovation."
                </blockquote>
              </div>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors cursor-default">
                  Award Winner 2023
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors cursor-default">
                  Research Excellence
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors cursor-default">
                  Patient Choice Award
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors cursor-default">
                  Top Medical Educator
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Modern curved section divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16">
          <svg className="absolute -top-1 left-0 w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-gray-50"></path>
          </svg>
        </div>
      </section>

      {/* Education & Qualifications */}
      <section id="education" className="w-full py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-40 h-40 bg-blue-200/50 rounded-full opacity-70 filter blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-200/50 rounded-full opacity-70 filter blur-3xl"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16 animate-fade-in">
            <div className="flex items-center gap-2 mb-2 justify-center transform transition-all duration-300 hover:scale-105">
              <span className="h-px w-8 bg-blue-500 hidden sm:block"></span>
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium shadow-sm">Professional Background</span>
              <span className="h-px w-8 bg-blue-500 hidden sm:block"></span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-blue-700 to-blue-800 animate-gradient-x">
              Education & Qualifications
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full mx-auto my-2 transform transition-all duration-500 hover:w-32"></div>
            <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl mt-4">
              Academic excellence and continuous professional development in cardiac care
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-2 items-start">
            <div className="space-y-8 animate-fade-in animation-delay-200 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-blue-100">
              <h3 className="text-2xl font-bold text-blue-800 flex items-center gap-3 pb-4 border-b border-blue-100">
                <div className="p-2 bg-blue-100 rounded-full">
                  <GraduationCap className="h-6 w-6 text-blue-700" />
                </div>
                Education
              </h3>
              <Timeline
                items={[
                  {
                    year: "2010",
                    title: "Fellowship in Interventional Cardiology",
                    institution: "Harvard Medical School",
                    description: "Specialized training in advanced cardiac procedures and interventions for complex heart conditions.",
                  },
                  {
                    year: "2008",
                    title: "Cardiology Residency",
                    institution: "Johns Hopkins University",
                    description: "Comprehensive training in diagnostics, treatment, and management of cardiovascular diseases.",
                  },
                  {
                    year: "2005",
                    title: "Doctor of Medicine (MD)",
                    institution: "Stanford University School of Medicine",
                    description: "Graduated with honors, specializing in internal medicine with focus on cardiology.",
                  }
                ]}
              />
            </div>
            <div className="space-y-8 animate-fade-in animation-delay-300 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-blue-100">
              <h3 className="text-2xl font-bold text-blue-800 flex items-center gap-3 pb-4 border-b border-blue-100">
                <div className="p-2 bg-blue-100 rounded-full">
                  <Award className="h-6 w-6 text-blue-700" />
                </div>
                Certifications & Awards
              </h3>
              <ul className="space-y-5">
                <li className="bg-white p-5 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md border border-gray-100 hover:border-blue-200 hover:translate-y-[-2px]">
                  <div className="flex items-start gap-3">
                    <Star className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">Excellence in Cardiac Research</h4>
                      <p className="text-gray-600">Awarded for groundbreaking research in preventative cardiology approaches</p>
                      <span className="text-xs font-medium text-blue-600 mt-2 inline-block bg-blue-50 px-2 py-1 rounded-md">Awarded 2023</span>
                    </div>
                  </div>
                </li>
                <li className="bg-white p-5 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md border border-gray-100 hover:border-blue-200 hover:translate-y-[-2px]">
                  <div className="flex items-start gap-3">
                    <Star className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">Board Certification in Cardiology</h4>
                      <p className="text-gray-600">American Board of Internal Medicine, Cardiovascular Disease</p>
                      <span className="text-xs font-medium text-blue-600 mt-2 inline-block bg-blue-50 px-2 py-1 rounded-md">Renewed 2022</span>
                    </div>
                  </div>
                </li>
                <li className="bg-white p-5 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md border border-gray-100 hover:border-blue-200 hover:translate-y-[-2px]">
                  <div className="flex items-start gap-3">
                    <Star className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">Top Doctor Award</h4>
                      <p className="text-gray-600">Recognized among top 1% of cardiologists nationwide for patient care and outcomes</p>
                      <span className="text-xs font-medium text-blue-600 mt-2 inline-block bg-blue-50 px-2 py-1 rounded-md">Awarded 2021</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Modern curved section divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16">
          <svg className="absolute -top-1 left-0 w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="w-full py-20 md:py-28 bg-gradient-to-b from-white to-blue-50/70 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-100/70 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-blue-200 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-1/2 right-1/3 w-48 h-48 border border-blue-100 rounded-full"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16 animate-fade-in">
            <div className="inline-flex gap-2 items-center p-1.5 px-4 bg-blue-100/80 rounded-full text-blue-700 text-sm font-medium mb-2 backdrop-blur-sm border border-blue-200/30">
              <BookOpen className="h-4 w-4" /> Academic Contributions
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-blue-900 relative inline-block">
              Publications & Research
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full mx-auto my-2 transform transition-all duration-500 hover:w-32"></div>
            </h2>
            <p className="max-w-[800px] text-gray-600 md:text-xl mt-6">
              Contributing to the advancement of cardiac medicine through groundbreaking research and insightful publications
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Publication cards - using modern glass morphism design */}
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl border border-blue-100/50 h-full flex flex-col animate-fade-in animation-delay-200 hover:translate-y-[-5px]">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-100 rounded-full">
                    <BookOpen className="h-6 w-6 text-blue-700" />
                  </div>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Research Paper</span>
                </div>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md">2023</span>
              </div>
              
              <h4 className="text-xl font-bold text-blue-800 mb-3 hover:text-blue-700 transition-colors">
                Advances in Cardiac Imaging Techniques
              </h4>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                <p className="text-gray-600 text-sm">Published in American Heart Journal • June 2023</p>
              </div>
              
              <p className="text-gray-700 flex-grow">
                This research explores innovative cardiac imaging methods that provide clearer visualization of heart structures and function, leading to more accurate diagnoses and improved treatment planning.
              </p>
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <a href="#" className="text-blue-700 hover:text-blue-800 font-medium text-sm flex items-center gap-1 group">
                  Read Publication <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* Repeat similar structure for other publication cards */}
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl border border-blue-100/50 h-full flex flex-col animate-fade-in animation-delay-300 hover:translate-y-[-5px]">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-100 rounded-full">
                    <BookOpen className="h-6 w-6 text-blue-700" />
                  </div>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Clinical Study</span>
                </div>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md">2022</span>
              </div>
              
              <h4 className="text-xl font-bold text-blue-800 mb-3 hover:text-blue-700 transition-colors">
                Preventative Cardiology Approaches
              </h4>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                <p className="text-gray-600 text-sm">Published in Journal of Cardiology • March 2022</p>
              </div>
              
              <p className="text-gray-700 flex-grow">
                This study examines the effectiveness of various preventative cardiology strategies in reducing the incidence of heart disease in high-risk populations, with promising results for lifestyle interventions.
              </p>
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <a href="#" className="text-blue-700 hover:text-blue-800 font-medium text-sm flex items-center gap-1 group">
                  Read Publication <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl border border-blue-100/50 h-full flex flex-col animate-fade-in animation-delay-400 hover:translate-y-[-5px]">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-100 rounded-full">
                    <BookOpen className="h-6 w-6 text-blue-700" />
                  </div>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Case Study</span>
                </div>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md">2024</span>
              </div>
              
              <h4 className="text-xl font-bold text-blue-800 mb-3 hover:text-blue-700 transition-colors">
                Modern Treatment of Arrhythmias
              </h4>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                <p className="text-gray-600 text-sm">Published in Cardiac Health • January 2024</p>
              </div>
              
              <p className="text-gray-700 flex-grow">
                This publication details breakthrough treatments for cardiac arrhythmias, including minimally invasive procedures that significantly reduce recovery time and improve long-term patient outcomes.
              </p>
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <a href="#" className="text-blue-700 hover:text-blue-800 font-medium text-sm flex items-center gap-1 group">
                  Read Publication <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-16 animate-fade-in animation-delay-500">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 font-medium text-base rounded-full shadow-lg hover:shadow-blue-200/50 px-8 py-6">
              <Link href="/" className="flex items-center gap-3">
                View All Publications 
                <span className="p-1.5 bg-blue-500 rounded-full group-hover:bg-blue-400 transition-colors">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Modern curved section divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16">
          <svg className="absolute -top-1 left-0 w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply opacity-20 blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply opacity-20 blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply opacity-20 blur-2xl"></div>
          <div className="absolute top-1/4 left-1/2 w-48 h-48 border border-white/10 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-white/10 rounded-full"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <div className="flex flex-col justify-center space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 p-2 px-4 bg-blue-600/30 backdrop-blur-sm rounded-full text-blue-50 text-sm font-medium mb-2 w-fit border border-white/10">
                <span className="w-2 h-2 bg-blue-200 rounded-full animate-pulse"></span> 
                Start Your Journey
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Ready to Schedule <span className="text-blue-300">an Appointment?</span>
              </h2>
              <p className="max-w-[600px] text-blue-100 text-lg md:text-xl leading-relaxed">
                Take the first step towards better heart health. Our team is ready to provide you with exceptional care tailored to your unique needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 mt-4">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 transition-all duration-300 font-medium text-base rounded-xl shadow-lg hover:shadow-white/20 px-8 py-7 group">
                  <Link href="/appointment" className="flex items-center gap-3">
                    Book Appointment 
                    <span className="p-1.5 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
                      <Calendar className="h-5 w-5" />
                    </span>
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 transition-all duration-300 font-medium text-base rounded-xl py-7 backdrop-blur-sm"
                >
                  <Link href="/contact" className="flex items-center gap-3">
                    Contact Us 
                    <span className="p-1.5 bg-blue-700/40 rounded-full group-hover:bg-blue-700/60 transition-colors">
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end animate-fade-in animation-delay-200">
              <div className="relative w-full max-w-md h-[350px] md:h-[450px] overflow-hidden rounded-3xl shadow-2xl transform hover:scale-[1.02] transition-all duration-500 border border-white/20 backdrop-blur-sm">
                <Image
                  src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Doctor's Office"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 transform transition-transform duration-300 hover:translate-y-[-5px]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-1.5 bg-blue-100/20 backdrop-blur-sm rounded-full">
                        <Calendar className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-xs font-semibold text-white uppercase tracking-wider">Next Available</span>
                    </div>
                    <p className="text-white font-medium text-lg">Tomorrow, 10:00 AM - 4:00 PM</p>
                    <p className="text-white/80 text-sm mt-1">Book early for preferred time slots</p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-blue-400/30 backdrop-blur-md border border-white/20 flex items-center justify-center">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
                  <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse delay-150"></span>
                  <span className="h-2 w-2 rounded-full bg-white/70 animate-pulse delay-300"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


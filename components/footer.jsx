"use client"

import Link from "next/link"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { BackToTopButton } from "@/components/back-to-top-button"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-900 to-blue-950 text-white relative">
      <div className="relative h-20 overflow-hidden">
        <svg className="absolute bottom-0 w-full" preserveAspectRatio="none" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 74L60 68.7C120 63.3 240 52.7 360 46.5C480 40.3 600 38.7 720 42.2C840 45.7 960 54.3 1080 57.2C1200 60 1320 57 1380 55.5L1440 54V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V74Z" 
            fill="#1e3a8a" className="animate-pulse-slow"/>
        </svg>
        
        <svg className="absolute bottom-0 w-full opacity-30" preserveAspectRatio="none" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg" style={{animationDelay: "0.5s"}}>
          <path d="M0 44L60 48.7C120 53.3 240 62.7 360 66.5C480 70.3 600 68.7 720 62.2C840 55.7 960 44.3 1080 37.2C1200 30 1320 27 1380 25.5L1440 24V74H1380C1320 74 1200 74 1080 74C960 74 840 74 720 74C600 74 480 74 360 74C240 74 120 74 60 74H0V44Z" 
            fill="#1e3a8a" className="animate-pulse-slow"/>
        </svg>
      </div>
      
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNmMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNnptMCAzMGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNmMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNnptLTMwIDBjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTZjLTMuMzE0IDAtNiAyLjY4Ni02IDZzMi42ODYgNiA2IDZ6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMSIvPjxwYXRoIGQ9Ik02IDZoNDh2NDhINnoiLz48L2c+PC9zdmc+')]"></div>
      </div>
      
      <div className="absolute left-1/4 top-1/3 w-36 h-36 rounded-full bg-blue-800 opacity-10 blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute right-1/5 bottom-1/4 w-48 h-48 rounded-full bg-blue-700 opacity-10 blur-3xl animate-blob animation-delay-4000"></div>
      
      <div className="container px-4 md:px-6 py-12 md:py-16 relative z-10">  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-5 transform transition-all duration-500 hover:-translate-y-1">
            <div className="flex items-center space-x-3">
              <Image
                src="/doctorcircle.svg"
                alt="Dr. Partha Pratim Paul"
                width={48}
                height={48}
                className="rounded-full object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                priority
              />
              <h3 className="text-xl font-bold text-white">Dr. Partha Pratim Paul</h3>
            </div>
            
            <p className="text-blue-200 leading-relaxed">
              Providing exceptional women's healthcare with personalized treatment plans for every patient's unique reproductive and gynecological needs.
            </p>
            
            {/* <div className="flex space-x-4 pt-2">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-blue-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd" clipRule="evenodd"></path></svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-blue-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-blue-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-blue-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div> */}
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 relative pb-2 border-b border-blue-700">
              <span className="relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-500 rounded-full transform origin-left"></span>
              </span>
            </h3>
            <ul className="space-y-2">
              {['About Dr. Partha Pratim Paul', 'Our Services', 'Patient Reviews', 'Insurance Information', 'Blog & Articles'].map((item, index) => (
                <li key={index} className="transform transition-transform duration-200 hover:translate-x-1">
                  <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center">
                    <svg className="w-3 h-3 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 relative pb-2 border-b border-blue-700">
              <span className="relative inline-block">
                Our Services
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-500 rounded-full transform origin-left"></span>
              </span>
            </h3>
            <ul className="space-y-2">
              {['Obstetric Care', 'Infertility Management', 'Minimally Invasive Surgery', 'High-Risk Pregnancy Care', 'Gynecological Procedures'].map((service, index) => (
                <li key={index} className="transform transition-transform duration-200 hover:translate-x-1">
                  <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center group">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mr-2 group-hover:scale-125 transition-transform duration-300"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 relative pb-2 border-b border-blue-700">
              <span className="relative inline-block">
                Office Hours
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-500 rounded-full transform origin-left"></span>
              </span>
            </h3>
            <div className="space-y-3">
              {[
                { day: 'Monday - Friday', hours: '9:00 AM - 5:00 PM' },
                { day: 'Saturday', hours: '10:00 AM - 2:00 PM' },
                { day: 'Sunday', hours: 'Closed' }
              ].map((schedule, index) => (
                <div key={index} className="flex justify-between items-center group px-2 py-1.5 rounded-md hover:bg-blue-800/30 transition-colors duration-200">
                  <span className="flex items-center">
                    <svg className="h-3.5 w-3.5 mr-2 text-blue-300 group-hover:text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {schedule.day}
                  </span>
                  <span className="font-medium text-blue-100">{schedule.hours}</span>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <a 
                href="#" 
                className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <svg className="h-4 w-4 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="relative z-10">Book Appointment</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-blue-300">
            © {new Date().getFullYear()} Dr. Partha Pratim Paul - Obstetrics & Gynecology. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center">
            <ul className="flex flex-wrap justify-center space-x-6 text-sm text-blue-300">
              <li className="hover:-translate-y-0.5 transition-transform duration-200">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li className="hover:-translate-y-0.5 transition-transform duration-200">
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </li>
              <li className="hover:-translate-y-0.5 transition-transform duration-200">
                <a href="#" className="hover:text-white transition-colors">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
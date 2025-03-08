import Link from "next/link"
import { ArrowRight, Calendar, Heart, Activity, Shield, Zap, Timer, RefreshCw, LineChart, TrendingDown, Droplet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/service-card"

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-blue-10 relative overflow-hidden">
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
              Our Expertise
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-600 animate-fade-in relative">
              Our Services
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full mx-auto my-4 transform transition-all duration-500 hover:w-32"></div>
            </h1>
            
            <p className="max-w-[800px] text-gray-700 md:text-xl lg:text-2xl animate-fade-in animation-delay-200">
              Comprehensive cardiac care services tailored to your <span className="text-blue-700 font-semibold">individual needs</span>
            </p>
          </div>
        </div>
        
        {/* Modern curved section divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16">
          <svg className="absolute top-1 left-0 w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16 animate-fade-in">
            <div className="flex items-center gap-2 mb-2 justify-center transform transition-all duration-300 hover:scale-105">
              <span className="h-px w-8 bg-blue-500 hidden sm:block"></span>
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium shadow-sm">Cardiac Care</span>
              <span className="h-px w-8 bg-blue-500 hidden sm:block"></span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-blue-700 to-blue-800 animate-gradient-x">
              Specialized Services
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full mx-auto my-2 transform transition-all duration-500 hover:w-32"></div>
            <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl mt-4">
              Advanced cardiac care services using the latest technology and evidence-based approaches
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service cards with enhanced styling */}
            <div className="group transform transition-all duration-500 hover:-translate-y-2">
              <ServiceCard
                title="Cardiac Consultation"
                description="Comprehensive evaluation of your heart health with personalized recommendations and treatment plans."
                icon="Heart"
                detailed
                className="h-full border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-blue-lg rounded-xl overflow-hidden bg-white backdrop-blur-sm"
                iconClassName="group-hover:text-white group-hover:bg-gradient-to-r from-blue-600 to-blue-700"
              />
              <div className="h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-700 ease-out rounded-b-lg"></div>
            </div>
            
            <div className="group transform transition-all duration-500 hover:-translate-y-2">
              <ServiceCard
                title="Echocardiography"
                description="Advanced ultrasound imaging to assess heart structure and function, detecting abnormalities and guiding treatment."
                icon="Activity"
                detailed
                className="h-full border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-blue-lg rounded-xl overflow-hidden bg-white backdrop-blur-sm"
                iconClassName="group-hover:text-white group-hover:bg-gradient-to-r from-blue-600 to-blue-700"
              />
              <div className="h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-700 ease-out rounded-b-lg"></div>
            </div>
            
            <div className="group transform transition-all duration-500 hover:-translate-y-2">
              <ServiceCard
                title="Electrocardiogram (ECG)"
                description="Recording of the heart's electrical activity to detect arrhythmias, heart attacks, and other cardiac conditions."
                icon="Zap"
                detailed
                className="h-full border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-blue-lg rounded-xl overflow-hidden bg-white backdrop-blur-sm"
                iconClassName="group-hover:text-white group-hover:bg-gradient-to-r from-blue-600 to-blue-700"
              />
              <div className="h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-700 ease-out rounded-b-lg"></div>
            </div>
            
            <div className="group transform transition-all duration-500 hover:-translate-y-2">
              <ServiceCard
                title="Stress Testing"
                description="Evaluation of heart function during physical activity to diagnose coronary artery disease and assess exercise capacity."
                icon="Timer"
                detailed
                className="h-full border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-blue-lg rounded-xl overflow-hidden bg-white backdrop-blur-sm"
                iconClassName="group-hover:text-white group-hover:bg-gradient-to-r from-blue-600 to-blue-700"
              />
              <div className="h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-700 ease-out rounded-b-lg"></div>
            </div>
            
            <div className="group transform transition-all duration-500 hover:-translate-y-2">
              <ServiceCard
                title="Holter Monitoring"
                description="Continuous ECG recording over 24-48 hours to detect irregular heart rhythms during daily activities."
                icon="LineChart"
                detailed
                className="h-full border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-blue-lg rounded-xl overflow-hidden bg-white backdrop-blur-sm"
                iconClassName="group-hover:text-white group-hover:bg-gradient-to-r from-blue-600 to-blue-700"
              />
              <div className="h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-700 ease-out rounded-b-lg"></div>
            </div>
            
            <div className="group transform transition-all duration-500 hover:-translate-y-2">
              <ServiceCard
                title="Preventive Cardiology"
                description="Strategies to prevent heart disease through risk assessment, lifestyle modifications, and preventive medications."
                icon="Shield"
                detailed
                className="h-full border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-blue-lg rounded-xl overflow-hidden bg-white backdrop-blur-sm"
                iconClassName="group-hover:text-white group-hover:bg-gradient-to-r from-blue-600 to-blue-700"
              />
              <div className="h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-700 ease-out rounded-b-lg"></div>
            </div>
            
            <div className="group transform transition-all duration-500 hover:-translate-y-2">
              <ServiceCard
                title="Cardiac Rehabilitation"
                description="Supervised program to improve cardiovascular health after a heart attack, heart surgery, or heart failure."
                icon="RefreshCw"
                detailed
                className="h-full border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-blue-lg rounded-xl overflow-hidden bg-white backdrop-blur-sm"
                iconClassName="group-hover:text-white group-hover:bg-gradient-to-r from-blue-600 to-blue-700"
              />
              <div className="h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-700 ease-out rounded-b-lg"></div>
            </div>
            
            <div className="group transform transition-all duration-500 hover:-translate-y-2">
              <ServiceCard
                title="Hypertension Management"
                description="Comprehensive approach to controlling high blood pressure through medication, lifestyle changes, and monitoring."
                icon="TrendingDown"
                detailed
                className="h-full border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-blue-lg rounded-xl overflow-hidden bg-white backdrop-blur-sm"
                iconClassName="group-hover:text-white group-hover:bg-gradient-to-r from-blue-600 to-blue-700"
              />
              <div className="h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-700 ease-out rounded-b-lg"></div>
            </div>
            
            <div className="group transform transition-all duration-500 hover:-translate-y-2">
              <ServiceCard
                title="Lipid Management"
                description="Assessment and treatment of cholesterol disorders to reduce the risk of heart disease and stroke."
                icon="Droplet"
                detailed
                className="h-full border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-blue-lg rounded-xl overflow-hidden bg-white backdrop-blur-sm"
                iconClassName="group-hover:text-white group-hover:bg-gradient-to-r from-blue-600 to-blue-700"
              />
              <div className="h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-700 ease-out rounded-b-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-40 h-40 bg-blue-200/50 rounded-full opacity-70 filter blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-200/50 rounded-full opacity-70 filter blur-3xl"></div>
          <div className="absolute top-1/3 left-1/4 w-32 h-32 border border-blue-200 rounded-full opacity-60 animate-pulse-slow"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16 animate-fade-in">
            <div className="flex items-center gap-2 mb-2 justify-center transform transition-all duration-300 hover:scale-105">
              <span className="h-px w-8 bg-blue-500 hidden sm:block"></span>
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium shadow-sm">Your Journey</span>
              <span className="h-px w-8 bg-blue-500 hidden sm:block"></span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-blue-700 to-blue-800 animate-gradient-x">
              Our Care Process
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full mx-auto my-2 transform transition-all duration-500 hover:w-32"></div>
            <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl mt-4">
              What to expect when you choose our cardiac care services
            </p>
          </div>
          
          {/* Updated process timeline */}
          <div className="relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-500 to-blue-200 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-4 border-4 border-white shadow-lg transition-transform group-hover:scale-110 duration-300">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">1</div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-800">Initial Consultation</h3>
                <p className="text-gray-600">Comprehensive evaluation of your cardiac health and medical history</p>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-4 border-4 border-white shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">2</div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-800">Diagnostic Testing</h3>
                <p className="text-gray-600">Specialized tests to accurately diagnose your condition</p>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-4 border-4 border-white shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">3</div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-800">Treatment Plan</h3>
                <p className="text-gray-600">Personalized care plan tailored to your specific cardiac needs</p>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-4 border-4 border-white shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">4</div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-800">Follow-up Care</h3>
                <p className="text-gray-600">Ongoing support and monitoring to ensure optimal heart health</p>
              </div>
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

      {/* CTA Section */}
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
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 space-y-4">
              <div className="inline-flex items-center gap-2 p-2 px-4 bg-blue-600/30 backdrop-blur-sm rounded-full text-blue-50 text-sm font-medium mb-4 w-fit border border-white/10">
                <span className="w-2 h-2 bg-blue-200 rounded-full animate-pulse"></span> 
                Start Your Journey
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Ready to Take the <span className="text-blue-300">First Step?</span>
              </h2>
              <p className="text-blue-100 max-w-2xl md:text-lg">
                Schedule a consultation today and start your journey to better heart health with personalized cardiac care.
              </p>
            </div>
            <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 justify-end">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 w-full sm:w-auto group">
                <Link href="/appointment" className="flex items-center justify-center gap-2">
                  Book Appointment 
                  <Calendar className="h-4 w-4 group-hover:scale-110 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-600 w-full sm:w-auto group">
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  Contact Us 
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


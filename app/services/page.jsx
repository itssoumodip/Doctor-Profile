import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/service-card"

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900 animate-fade-in">
              Our Services
            </h1>
            <p className="max-w-[700px] text-gray-600 md:text-xl animate-fade-in animation-delay-200">
              Comprehensive cardiac care services tailored to your individual needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="Cardiac Consultation"
              description="Comprehensive evaluation of your heart health with personalized recommendations and treatment plans."
              icon="Heart"
              detailed
            />
            <ServiceCard
              title="Echocardiography"
              description="Advanced ultrasound imaging to assess heart structure and function, detecting abnormalities and guiding treatment."
              icon="Activity"
              detailed
            />
            <ServiceCard
              title="Electrocardiogram (ECG)"
              description="Recording of the heart's electrical activity to detect arrhythmias, heart attacks, and other cardiac conditions."
              icon="Zap"
              detailed
            />
            <ServiceCard
              title="Stress Testing"
              description="Evaluation of heart function during physical activity to diagnose coronary artery disease and assess exercise capacity."
              icon="Timer"
              detailed
            />
            <ServiceCard
              title="Holter Monitoring"
              description="Continuous ECG recording over 24-48 hours to detect irregular heart rhythms during daily activities."
              icon="LineChart"
              detailed
            />
            <ServiceCard
              title="Preventive Cardiology"
              description="Strategies to prevent heart disease through risk assessment, lifestyle modifications, and preventive medications."
              icon="Shield"
              detailed
            />
            <ServiceCard
              title="Cardiac Rehabilitation"
              description="Supervised program to improve cardiovascular health after a heart attack, heart surgery, or heart failure."
              icon="RefreshCw"
              detailed
            />
            <ServiceCard
              title="Hypertension Management"
              description="Comprehensive approach to controlling high blood pressure through medication, lifestyle changes, and monitoring."
              icon="TrendingDown"
              detailed
            />
            <ServiceCard
              title="Lipid Management"
              description="Assessment and treatment of cholesterol disorders to reduce the risk of heart disease and stroke."
              icon="Droplet"
              detailed
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container mb-20 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900 animate-fade-in">
              Our Care Process
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl animate-fade-in animation-delay-200">
              What to expect when you choose our cardiac care services
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center text-center space-y-3 animate-fade-in animation-delay-300">
              <div className="relative">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-700 text-xl font-bold">
                  1
                </div>
                <div className="absolute top-1/2 left-full h-0.5 w-full bg-blue-200 hidden md:block"></div>
              </div>
              <h3 className="text-xl font-bold text-blue-800">Initial Consultation</h3>
              <p className="text-gray-600">Comprehensive evaluation of your cardiac health and medical history</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3 animate-fade-in animation-delay-400">
              <div className="relative">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-700 text-xl font-bold">
                  2
                </div>
                <div className="absolute top-1/2 left-full h-0.5 w-full bg-blue-200 hidden md:block"></div>
              </div>
              <h3 className="text-xl font-bold text-blue-800">Diagnostic Testing</h3>
              <p className="text-gray-600">Specialized tests to accurately diagnose your condition</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3 animate-fade-in animation-delay-500">
              <div className="relative">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-700 text-xl font-bold">
                  3
                </div>
                <div className="absolute top-1/2 left-full h-0.5 w-full bg-blue-200 hidden md:block"></div>
              </div>
              <h3 className="text-xl font-bold text-blue-800">Treatment Plan</h3>
              <p className="text-gray-600">Personalized care plan tailored to your specific cardiac needs</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3 animate-fade-in animation-delay-600">
              <div className="relative">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-700 text-xl font-bold">
                  4
                </div>
              </div>
              <h3 className="text-xl font-bold text-blue-800">Follow-up Care</h3>
              <p className="text-gray-600">Ongoing support and monitoring to ensure optimal heart health</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-blue-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl animate-fade-in">
              Ready to Take the First Step?
            </h2>
            <p className="max-w-[600px] text-blue-100 md:text-xl animate-fade-in animation-delay-200">
              Schedule a consultation today and start your journey to better heart health
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6 animate-fade-in animation-delay-300">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 transition-all duration-300">
                <Link href="/appointment" className="flex items-center gap-2">
                  Book Appointment <Calendar className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-blue-600 transition-all duration-300"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


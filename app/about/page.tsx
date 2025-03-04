import Image from "next/image"
import Link from "next/link"
import { Award, BookOpen, Calendar, GraduationCap, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Timeline } from "@/components/timeline"

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900 animate-fade-in">
              About Dr. Sarah Johnson
            </h1>
            <p className="max-w-[700px] text-gray-600 md:text-xl animate-fade-in animation-delay-200">
              Dedicated to excellence in cardiac care and patient well-being
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center lg:justify-start animate-fade-in">
              <div className="relative w-[280px] h-[350px] sm:w-[400px] sm:h-[500px] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/placeholder.svg?height=1000&width=800"
                  alt="Dr. Sarah Johnson"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4 animate-fade-in animation-delay-200">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">My Story</h2>
                <p className="text-gray-600 md:text-lg">
                  With over 15 years of experience in cardiology, I've dedicated my career to improving heart health and
                  providing compassionate care to my patients. My journey in medicine began with a passion for helping
                  others and has evolved into a specialized practice focused on preventive cardiology and advanced
                  cardiac treatments.
                </p>
                <p className="text-gray-600 md:text-lg mt-4">
                  I believe in a patient-centered approach that combines the latest medical advancements with
                  personalized care. Every patient deserves to be heard, understood, and treated with respect and
                  dignity.
                </p>
                <p className="text-gray-600 md:text-lg mt-4">
                  When I'm not in the clinic, I enjoy hiking, reading medical journals, and spending time with my
                  family. I also regularly participate in community health initiatives and medical missions.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Board Certified
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Harvard Medical School
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  American Heart Association
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Research Published
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Qualifications */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">
              Education & Qualifications
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl">
              Academic excellence and continuous professional development
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6 animate-fade-in animation-delay-200">
              <h3 className="text-2xl font-bold text-blue-800 flex items-center gap-2">
                <GraduationCap className="h-6 w-6" /> Education
              </h3>
              <Timeline
                items={[
                  {
                    year: "2003-2007",
                    title: "Doctor of Medicine",
                    institution: "Harvard Medical School",
                    description: "Graduated with honors, specializing in cardiovascular medicine",
                  },
                  {
                    year: "2007-2010",
                    title: "Residency in Internal Medicine",
                    institution: "Massachusetts General Hospital",
                    description: "Completed comprehensive training in internal medicine",
                  },
                  {
                    year: "2010-2013",
                    title: "Fellowship in Cardiology",
                    institution: "Cleveland Clinic",
                    description: "Specialized training in advanced cardiac care and procedures",
                  },
                ]}
              />
            </div>
            <div className="space-y-6 animate-fade-in animation-delay-300">
              <h3 className="text-2xl font-bold text-blue-800 flex items-center gap-2">
                <Award className="h-6 w-6" /> Certifications & Awards
              </h3>
              <ul className="space-y-4">
                <li className="bg-white p-4 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Board Certification in Cardiovascular Disease</h4>
                      <p className="text-gray-600">American Board of Internal Medicine</p>
                    </div>
                  </div>
                </li>
                <li className="bg-white p-4 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Excellence in Cardiac Research Award</h4>
                      <p className="text-gray-600">American Heart Association, 2018</p>
                    </div>
                  </div>
                </li>
                <li className="bg-white p-4 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Top Cardiologist Award</h4>
                      <p className="text-gray-600">National Medical Association, 2020</p>
                    </div>
                  </div>
                </li>
                <li className="bg-white p-4 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Fellowship</h4>
                      <p className="text-gray-600">American College of Cardiology</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">Publications & Research</h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl">
              Contributing to the advancement of cardiac medicine
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md animate-fade-in animation-delay-200">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-6 w-6 text-blue-700" />
                <h3 className="font-semibold text-gray-900">Journal Article</h3>
              </div>
              <h4 className="text-lg font-bold text-blue-800 mb-2">
                Advances in Preventive Cardiology: A Comprehensive Review
              </h4>
              <p className="text-gray-600 mb-3">Published in Journal of Cardiology, 2021</p>
              <p className="text-gray-700">
                A comprehensive review of the latest advances in preventive cardiology, focusing on lifestyle
                interventions and early detection strategies.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md animate-fade-in animation-delay-300">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-6 w-6 text-blue-700" />
                <h3 className="font-semibold text-gray-900">Research Paper</h3>
              </div>
              <h4 className="text-lg font-bold text-blue-800 mb-2">
                The Impact of Telemedicine on Cardiac Patient Outcomes
              </h4>
              <p className="text-gray-600 mb-3">Published in Digital Health Journal, 2022</p>
              <p className="text-gray-700">
                An analysis of how telemedicine interventions affect outcomes for patients with various cardiac
                conditions, with a focus on rural populations.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md animate-fade-in animation-delay-400">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-6 w-6 text-blue-700" />
                <h3 className="font-semibold text-gray-900">Book Chapter</h3>
              </div>
              <h4 className="text-lg font-bold text-blue-800 mb-2">Modern Approaches to Heart Failure Management</h4>
              <p className="text-gray-600 mb-3">Published in Comprehensive Cardiology, 2020</p>
              <p className="text-gray-700">
                A detailed chapter covering the latest treatment protocols and management strategies for patients with
                heart failure.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-10 animate-fade-in animation-delay-500">
            <Button className="bg-blue-700 hover:bg-blue-800 text-white transition-all duration-300">
              <Link href="/publications" className="flex items-center gap-2">
                View All Publications <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-blue-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4 animate-fade-in">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Schedule an Appointment?</h2>
                <p className="max-w-[600px] text-blue-100 md:text-xl">
                  Take the first step towards better heart health. Schedule a consultation today.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
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
            <div className="flex justify-center lg:justify-end animate-fade-in animation-delay-200">
              <div className="relative w-full max-w-md h-[300px] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Doctor's Office"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


import Image from "next/image"
import Link from "next/link"
import { Award, BookOpen, Calendar, GraduationCap, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Timeline } from "@/components/timeline"

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-28 lg:py-36 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="inline-block p-1.5 px-3 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-2 animate-fade-in">
              About Us
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-blue-900 animate-fade-in">
              About Dr. <span className="text-blue-700">Johnson</span>
            </h1>
            <p className="max-w-[800px] text-gray-600 md:text-xl animate-fade-in animation-delay-200">
              Dedicated to excellence in cardiac care with over 15 years of experience transforming patient lives
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-2 animate-fade-in animation-delay-300">
              <span className="bg-white/60 backdrop-blur-sm text-blue-800 px-4 py-1.5 rounded-full text-sm font-medium border border-blue-100">
                Board Certified Cardiologist
              </span>
              <span className="bg-white/60 backdrop-blur-sm text-blue-800 px-4 py-1.5 rounded-full text-sm font-medium border border-blue-100">
                Medical Researcher
              </span>
              <span className="bg-white/60 backdrop-blur-sm text-blue-800 px-4 py-1.5 rounded-full text-sm font-medium border border-blue-100">
                Published Author
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="flex justify-center lg:justify-start animate-fade-in">
              <div className="relative w-[280px] h-[350px] sm:w-[400px] sm:h-[500px] overflow-hidden rounded-2xl shadow-xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1603843722974-3a4031f9f97c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Dr. "
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <h3 className="text-white font-bold text-xl">Dr. Johnson</h3>
                  <p className="text-white/80 text-sm">Cardiologist & Medical Director</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-6 animate-fade-in animation-delay-200">
              <div className="inline-block p-1.5 px-4 bg-blue-50 rounded-full text-blue-700 text-sm font-medium mb-2 w-fit">
                My Journey
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-blue-900">My Story</h2>
              <div className="space-y-4 text-gray-700">
                <p className="md:text-lg leading-relaxed">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat
                </p>
                <p className="md:text-lg leading-relaxed">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                </p>
                <blockquote className="pl-4 border-l-4 border-blue-500 italic text-gray-600">
                  "My mission is to provide compassionate care that transforms lives and advances cardiac medicine through innovation."
                </blockquote>
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-medium">
                  Award Winner 2023
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-medium">
                  Research Excellence
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-medium">
                  Patient Choice Award
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-medium">
                  Top Medical Educator
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
                    year: "DATE",
                    title: "DEGREE",
                    institution: "INSTITUTION",
                    description: "DESCRIPTION - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut ",
                  },
                  {
                    year: "DATE",
                    title: "DEGREE",
                    institution: "INSTITUTION",
                    description: "DESCRIPTION - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut ",
                  },
                  {
                    year: "DATE",
                    title: "DEGREE",
                    institution: "INSTITUTION",
                    description: "DESCRIPTION - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut ",
                  }
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
                      <h4 className="font-semibold text-gray-900">NAME</h4>
                      <p className="text-gray-600">DESCRIPTION - Lorem ipsum dolor sit amet </p>
                    </div>
                  </div>
                </li>
                <li className="bg-white p-4 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">NAME</h4>
                      <p className="text-gray-600">DESCRIPTION - Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                </li>
                <li className="bg-white p-4 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">NAME</h4>
                      <p className="text-gray-600">DESCRIPTION - Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                </li>
                <li className="bg-white p-4 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">NAME</h4>
                      <p className="text-gray-600">DESCRIPTION - Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16 animate-fade-in">
            <div className="inline-block p-1.5 px-4 bg-blue-50 rounded-full text-blue-700 text-sm font-medium mb-2">
              Academic Contributions
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-blue-900">Publications & Research</h2>
            <p className="max-w-[800px] text-gray-600 md:text-xl">
              Contributing to the advancement of cardiac medicine through groundbreaking research and insightful publications
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:bg-blue-50/50 animate-fade-in animation-delay-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-full">
                  <BookOpen className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="font-semibold text-gray-900">Research Paper</h3>
              </div>
              <h4 className="text-lg font-bold text-blue-800 mb-2">
                Advances in Cardiac Imaging Techniques
              </h4>
              <p className="text-gray-600 mb-4 text-sm">Published in American Heart Journal • June 2023</p>
              <p className="text-gray-700">
                DESCRIPTION - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              </p>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <a href="#" className="text-blue-700 hover:text-blue-800 font-medium text-sm flex items-center gap-1">
                  Read Publication <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
            
            {/* Repeat for other publication items with similar styling */}
            
          </div>
          <div className="flex justify-center mt-12 animate-fade-in animation-delay-500">
            <Button className="bg-blue-700 hover:bg-blue-800 text-white transition-all duration-300 font-medium text-base">
              <Link href="/" className="flex items-center gap-2">
                View All Publications <ArrowRight className="h-5 w-5" />
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
                  src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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


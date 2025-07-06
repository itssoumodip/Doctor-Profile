"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { TestimonialCard } from "./testimonial-card"
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore"
import { db } from "@/lib/firebase"

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        setLoading(true)
        const testimonialsCollection = collection(db, 'testimonials')
        const testimonialsQuery = query(
          testimonialsCollection,
          orderBy('createdAt', 'desc'),
          limit(10)
        )
        const snapshot = await getDocs(testimonialsQuery)
        
        if (!snapshot.empty) {
          const testimonialsData = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }))
          setTestimonials(testimonialsData)
        } else {
          // Fallback to demo testimonials if none exist in the database
          setTestimonials([
            {
              name: "John Davis",
              age: 54,
              condition: "Heart Attack Survivor",
              quote: "Dr. Paul's expertise and care were instrumental in my recovery. His thorough approach and clear explanations helped me understand my condition and the path to recovery.",
              image: "/placeholder-user.jpg", 
              rating: 5,
            },
            {
              name: "Sarah Johnson",
              age: 48,
              condition: "Hypertension Patient",
              quote: "After struggling with high blood pressure for years, Dr. Paul's treatment plan finally helped me get it under control. His attentive care made all the difference.",
              image: "/placeholder-user.jpg", 
              rating: 5,
            },
            {
              name: "Robert Wilson",
              age: 62,
              condition: "Cardiac Surgery Patient",
              quote: "The pre and post-operative care I received was exceptional. Dr. Paul's expertise and compassionate approach helped ease my anxiety throughout the process.",
              image: "/placeholder-user.jpg", 
              rating: 5,
            }
          ])
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error)
        // Fallback to empty array
        setTestimonials([])
      } finally {
        setLoading(false)
      }
    }

    fetchTestimonials()
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-md">
        <div className="animate-pulse">
          <div className="h-20 bg-gray-200 rounded-md mb-4"></div>
          <div className="h-12 bg-gray-200 w-3/4 rounded-md mb-3"></div>
          <div className="h-12 bg-gray-200 w-1/2 rounded-md"></div>
        </div>
        <p className="text-center text-gray-500 mt-4">Loading testimonials...</p>
      </div>
    )
  }

  if (testimonials.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-md">
        <p className="text-center text-gray-500">No testimonials available yet.</p>
      </div>
    )
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id || index} className="w-full flex-shrink-0 px-4">
              <TestimonialCard 
                name={testimonial.name}
                age={testimonial.age}
                condition={testimonial.condition}
                quote={testimonial.quote}
                image={testimonial.image}
                rating={testimonial.rating}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white text-blue-700 rounded-full p-2 shadow-md hover:bg-blue-50 transition-colors duration-300 z-10 md:translate-x-0"
        aria-label="Previous testimonial"
        type="button"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white text-blue-700 rounded-full p-2 shadow-md hover:bg-blue-50 transition-colors duration-300 z-10 md:translate-x-0"
        aria-label="Next testimonial"
        type="button"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="flex justify-center mt-4 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? "bg-blue-700" : "bg-blue-200"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
            type="button"
          />
        ))}
      </div>
    </div>
  )
}


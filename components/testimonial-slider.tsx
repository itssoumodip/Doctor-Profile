"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { TestimonialCard } from "./testimonial-card"

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Robert Johnson",
      age: 62,
      condition: "Heart Attack Survivor",
      quote:
        "Dr. Johnson's quick diagnosis and immediate treatment plan saved my life. Her follow-up care has been exceptional, and I'm now back to my normal activities with a healthier heart.",
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
    },
    {
      name: "Emily Chen",
      age: 45,
      condition: "Hypertension",
      quote:
        "I struggled with high blood pressure for years until I found Dr. Johnson. Her comprehensive approach to treatment, combining medication with lifestyle changes, has finally brought my blood pressure under control.",
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      age: 58,
      condition: "Atrial Fibrillation",
      quote:
        "Living with AFib was affecting every aspect of my life. Dr. Johnson took the time to explain my condition and treatment options. With her care, my symptoms have significantly improved.",
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
    },
  ]

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
  }, []) // Removed nextSlide from dependencies

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white text-blue-700 rounded-full p-2 shadow-md hover:bg-blue-50 transition-colors duration-300 z-10 md:translate-x-0"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white text-blue-700 rounded-full p-2 shadow-md hover:bg-blue-50 transition-colors duration-300 z-10 md:translate-x-0"
        aria-label="Next testimonial"
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
          />
        ))}
      </div>
    </div>
  )
}


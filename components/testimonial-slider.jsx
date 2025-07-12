"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { TestimonialCard } from "./testimonial-card"
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore"
import { db } from "@/lib/firebase"

export function TestimonialSlider({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  useEffect(() => {
    if (!testimonials || testimonials.length === 0) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials]);

  if (!testimonials || testimonials.length === 0) {
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


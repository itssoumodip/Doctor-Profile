"use client"

import { Star } from "lucide-react"

/**
 * @typedef {Object} TestimonialCardProps
 * @property {string} name - Patient name
 * @property {number} age - Patient age
 * @property {string} condition - Medical condition
 * @property {string} quote - Patient testimonial
 * @property {number} rating - Star rating (1-5)
 * @property {string} image - Path to patient image
 */

/**
 * @param {TestimonialCardProps} props
 */
export function TestimonialCard({ name, age, condition, quote, rating }) {
  return (
    <div className="relative mb-10 bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-3xl shadow-md p-10 flex flex-col items-center max-w-5xl mx-auto border border-blue-100">
      {/* Accent bar */}
      <div className="absolute left-0 top-8 bottom-8 w-1 bg-blue-300 rounded-full opacity-60" />
      {/* Name */}
      <div className="text-2xl font-extrabold text-blue-800 mb-1 tracking-tight text-center z-10">{name}</div>
      {/* Age and Condition */}
      <div className="text-gray-500 text-sm mb-4 text-center z-10">{age} years{condition ? `, ${condition}` : ''}</div>
      {/* Star Rating */}
      <div className="flex mb-6 z-10">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
          />
        ))}
      </div>
      {/* Quote */}
      <div className="flex flex-col items-center w-full z-10">
        <span className="text-4xl text-blue-200 mb-2">“</span>
        <blockquote>
          <p className="text-blue-900 text-lg md:text-xl italic font-medium text-center px-2 md:px-6">{quote}</p>
        </blockquote>
        <span className="text-4xl text-blue-200 mt-2">”</span>
      </div>
    </div>
  )
}


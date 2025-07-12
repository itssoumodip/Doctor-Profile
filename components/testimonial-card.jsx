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
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-blue-900">{name}</h3>
        <p className="text-sm text-gray-600">{age} years, {condition}</p>
        <div className="flex mt-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-4 w-4 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} 
            />
          ))}
        </div>
      </div>
      <blockquote>
        <p className="text-gray-700 italic">&ldquo;{quote}&rdquo;</p>
      </blockquote>
    </div>
  )
}


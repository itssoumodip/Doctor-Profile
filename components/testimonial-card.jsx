import Image from "next/image"
import { Star } from "lucide-react"

/**
 * @typedef {Object} TestimonialCardProps
 * @property {string} name - Patient name
 * @property {number} age - Patient age
 * @property {string} condition - Medical condition
 * @property {string} quote - Patient testimonial
 * @property {number} rating - Star rating (1-5)
 * @property {string} imageSrc - Path to patient image
 * @property {Date} date - Testimonial date
 */

/**
 * @param {TestimonialCardProps} props
 */
export function TestimonialCard({ name, age, condition, quote, rating, imageSrc, date }) {
  const stars = Array(5).fill(0).map((_, i) => (
    <Star 
      key={i}
      className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
    />
  ))
  
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden">
          <Image 
            src={imageSrc} 
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-gray-600">{age} years • {condition}</p>
          <div className="flex mt-1">
            {stars}
          </div>
        </div>
      </div>
      <blockquote className="text-gray-600 italic flex-grow">"{quote}"</blockquote>
      <time className="text-xs text-gray-400 mt-4 block">{formattedDate}</time>
    </div>
  )
}


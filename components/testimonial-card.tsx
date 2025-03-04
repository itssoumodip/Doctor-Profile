import Image from "next/image"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  age: number
  condition: string
  quote: string
  image: string
  rating: number
  detailed?: boolean
}

export function TestimonialCard({
  name,
  age,
  condition,
  quote,
  image,
  rating,
  detailed = false,
}: TestimonialCardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg ${detailed ? "h-full" : ""}`}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-600">
              {age} years, {condition}
            </p>
            <div className="flex mt-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
          </div>
        </div>
        <blockquote className={`text-gray-700 italic ${detailed ? "flex-grow" : ""}`}>"{quote}"</blockquote>
        {detailed && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Date of Review:</span>{" "}
              {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" })}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}


"use client"

import { Activity, Heart, Shield, Zap, Timer, LineChart, RefreshCw, TrendingDown, Droplet } from "lucide-react"

/**
 * @typedef {Object} ServiceCardProps
 * @property {string} title - The title of the service
 * @property {string} description - Description of the service
 * @property {string} icon - The name of the icon to display
 * @property {string} [className] - Additional CSS classes
 */

/**
 * @param {ServiceCardProps} props
 */
export function ServiceCard({ title, description, icon, className = "" }) {
  const IconMap = {
    Heart: Heart,
    Activity: Activity,
    Shield: Shield,
    Zap: Zap,
    Timer: Timer,
    LineChart: LineChart,
    RefreshCw: RefreshCw,
    TrendingDown: TrendingDown,
    Droplet: Droplet
  }

  // Check if icon is a path to an SVG file
  const isSvgPath = icon?.startsWith('/')

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <div className="rounded-full w-12 h-12 bg-blue-100 flex items-center justify-center mb-4">
        {isSvgPath ? (
          <img src={icon} alt={title} className="h-10 w-10" />
        ) : (
          (IconMap[icon] || Heart)({ className: "h-25 w-25 text-blue-900" })
        )}
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}


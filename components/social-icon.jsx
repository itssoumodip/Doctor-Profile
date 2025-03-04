"use client"

import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * @typedef {'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'youtube'} SocialPlatform
 * @typedef {'white' | 'blue'} IconColor
 * @typedef {'sm' | 'md' | 'lg'} IconSize
 * 
 * @typedef {Object} SocialIconProps
 * @property {SocialPlatform} platform - Social media platform 
 * @property {IconColor} [color='blue'] - Icon color
 * @property {IconSize} [size='md'] - Icon size
 * @property {string} [className] - Additional CSS class names
 */

/**
 * @param {SocialIconProps} props
 */
export function SocialIcon({ platform, color = "blue", size = "md", className }) {
  // Map of platform names to their icon components
  const icons = {
    facebook: Facebook,
    twitter: Twitter,
    instagram: Instagram,
    linkedin: Linkedin,
    youtube: Youtube,
  }

  // Get the appropriate icon component or default to Facebook
  const IconComponent = icons[platform.toLowerCase()] || Facebook

  // Size classes
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  }

  // Background and hover classes based on color
  const bgClasses = {
    white: "text-blue-900 hover:text-blue-700",
    blue: "text-white hover:text-blue-100",
  }

  return (
    <div className={cn("rounded-full p-2 transition-colors", 
      color === "white" ? "bg-white" : "bg-blue-900",
      className)}>
      <IconComponent className={cn(
        sizeClasses[size], 
        bgClasses[color]
      )} />
    </div>
  )
}


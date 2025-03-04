import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import { cn } from "@/lib/utils"

interface SocialIconProps {
  platform: "facebook" | "twitter" | "instagram" | "linkedin" | "youtube"
  color?: "white" | "blue"
  size?: "sm" | "md" | "lg"
}

export function SocialIcon({ platform, color = "blue", size = "md" }: SocialIconProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  }

  const colorClasses = {
    blue: "bg-blue-100 text-blue-700 hover:bg-blue-200",
    white: "bg-blue-800 text-white hover:bg-blue-700",
  }

  const getIcon = () => {
    switch (platform) {
      case "facebook":
        return <Facebook className="h-5 w-5" />
      case "twitter":
        return <Twitter className="h-5 w-5" />
      case "instagram":
        return <Instagram className="h-5 w-5" />
      case "linkedin":
        return <Linkedin className="h-5 w-5" />
      case "youtube":
        return <Youtube className="h-5 w-5" />
    }
  }

  const getHref = () => {
    switch (platform) {
      case "facebook":
        return "https://facebook.com"
      case "twitter":
        return "https://twitter.com"
      case "instagram":
        return "https://instagram.com"
      case "linkedin":
        return "https://linkedin.com"
      case "youtube":
        return "https://youtube.com"
    }
  }

  return (
    <Link
      href={getHref()}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex items-center justify-center rounded-full transition-all duration-300 transform hover:scale-110",
        sizeClasses[size],
        colorClasses[color],
      )}
      aria-label={`Visit our ${platform} page`}
    >
      {getIcon()}
    </Link>
  )
}


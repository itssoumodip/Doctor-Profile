import { Activity, Heart, Shield, Zap, Timer, LineChart, RefreshCw, TrendingDown, Droplet } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  detailed?: boolean
}

export function ServiceCard({ title, description, icon, detailed = false }: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "Heart":
        return <Heart className="h-6 w-6" />
      case "Activity":
        return <Activity className="h-6 w-6" />
      case "Shield":
        return <Shield className="h-6 w-6" />
      case "Zap":
        return <Zap className="h-6 w-6" />
      case "Timer":
        return <Timer className="h-6 w-6" />
      case "LineChart":
        return <LineChart className="h-6 w-6" />
      case "RefreshCw":
        return <RefreshCw className="h-6 w-6" />
      case "TrendingDown":
        return <TrendingDown className="h-6 w-6" />
      case "Droplet":
        return <Droplet className="h-6 w-6" />
      default:
        return <Heart className="h-6 w-6" />
    }
  }

  return (
    <div
      className={`bg-white p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] animate-fade-in ${detailed ? "space-y-4" : "space-y-2"}`}
    >
      <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-700 mb-4">
        {getIcon()}
      </div>
      <h3 className="text-xl font-bold text-blue-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
      {detailed && (
        <button className="text-blue-700 font-medium hover:text-blue-800 transition-colors mt-2 text-sm">
          Learn more →
        </button>
      )}
    </div>
  )
}


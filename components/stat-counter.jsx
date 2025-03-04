// Example of how the StatCounter component might be implemented
"use client"

import { useState, useEffect } from "react"

export function StatCounter({ value, label, duration, suffix = "", icon }) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    let startValue = 0
    const incrementAmount = value > 100 ? Math.ceil(value / 20) : 1
    const timer = setInterval(() => {
      startValue += incrementAmount
      if (startValue > value) {
        startValue = value
        clearInterval(timer)
      }
      setCount(startValue)
    }, duration / (value / incrementAmount))
    
    return () => clearInterval(timer)
  }, [value, duration])
  
  return (
    <div className="flex flex-col items-center">
      {icon}
      <div className="text-3xl font-bold">
        {count}{suffix}
      </div>
      <div className="text-gray-500">{label}</div>
    </div>
  )
}
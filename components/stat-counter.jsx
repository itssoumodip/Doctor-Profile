"use client"

import { useState, useEffect } from "react"

/**
 * @typedef {Object} StatCounterProps
 * @property {number} value - The target value to count to
 * @property {string} label - Label describing what the statistic represents
 * @property {number} [duration=2000] - Duration of counting animation in ms
 * @property {string} [suffix=""] - Suffix to add after the number (e.g., "%", "+")
 * @property {React.ReactNode} [icon] - Optional icon to display
 */

/**
 * @param {StatCounterProps} props
 */
export function StatCounter({ value, label, duration = 2000, suffix = "", icon }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = value

    // Early return if value is 0
    if (start === end) return

    const incrementTime = (duration / end) * 1.1

    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= end) clearInterval(timer)
    }, incrementTime)

    return () => {
      clearInterval(timer)
    }
  }, [value, duration])

  return (
    <div className="flex flex-col items-center justify-center space-y-2 animate-fade-in">
      {icon}
      <h3 className="text-3xl font-bold text-blue-900 md:text-4xl">
        {count}
        {suffix}
      </h3>
      <p className="text-gray-600">{label}</p>
    </div>
  )
}


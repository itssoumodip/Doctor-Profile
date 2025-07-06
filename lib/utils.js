import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple class names using clsx and tailwind-merge
 * @param {string[]} inputs - Class names to combine
 * @returns {string} - Combined class name
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a date object to a string
 * @param {Date} date - Date to format
 * @param {string} format - Format to use
 * @returns {string} - Formatted date
 */
export function formatDate(date, format = "MMMM DD, YYYY") {
  if (!date) return ""

  // Simple formatting function, can be replaced with date-fns or other libraries
  const day = date.getDate().toString().padStart(2, "0")
  const month = (date.getMonth() + 1).toString().padStart(2, "0")
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ][date.getMonth()]
  const year = date.getFullYear()

  return format
    .replace("MMMM", monthName)
    .replace("MM", month)
    .replace("DD", day)
    .replace("YYYY", year)
}

/**
 * Returns a container class with responsive padding and max width
 * @param {string} className - Additional class names to add
 * @returns {string} - Container class
 */
export function container(className) {
  return cn(
    "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    className
  )
}


import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines and merges class names using clsx and tailwind-merge
 * @param {...import("clsx").ClassValue[]} inputs - Class values to be merged
 * @returns {string} - Merged class string
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


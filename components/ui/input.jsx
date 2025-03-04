"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * Input component with forwarded ref
 * @type {React.ForwardRefExoticComponent<React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>>}
 */
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type || "text"}
        className={cn(
          "flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Input.displayName = "Input"

export { Input }

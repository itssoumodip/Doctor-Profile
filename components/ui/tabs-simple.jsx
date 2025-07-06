"use client"

import React from "react"
import { cn } from "@/lib/utils"

// Simple tabs implementation that doesn't depend on Radix UI
const Tabs = ({ defaultValue, value, onValueChange, className, children, ...props }) => {
  const [selectedTab, setSelectedTab] = React.useState(value || defaultValue)
  
  React.useEffect(() => {
    if (value !== undefined) {
      setSelectedTab(value)
    }
  }, [value])
  
  const handleTabChange = (newValue) => {
    setSelectedTab(newValue)
    onValueChange?.(newValue)
  }
  
  // Clone children and pass selected state
  const updatedChildren = React.Children.map(children, child => {
    if (!React.isValidElement(child)) return child
    
    return React.cloneElement(child, {
      selectedTab,
      onTabChange: handleTabChange
    })
  })
  
  return (
    <div className={cn("w-full", className)} {...props}>
      {updatedChildren}
    </div>
  )
}

// List container for tab triggers
const TabsList = ({ className, children, selectedTab, onTabChange, ...props }) => {
  // Clone children to pass selected state to triggers
  const updatedChildren = React.Children.map(children, child => {
    if (!React.isValidElement(child)) return child
    
    return React.cloneElement(child, {
      selectedTab,
      onTabChange
    })
  })
  
  return (
    <div 
      className={cn(
        "inline-flex w-full justify-center h-10 items-center rounded-md bg-muted p-1 text-muted-foreground",
        className
      )} 
      role="tablist"
      {...props}
    >
      {updatedChildren}
    </div>
  )
}

// Individual tab trigger button
const TabsTrigger = ({ className, value, selectedTab, onTabChange, children, ...props }) => {
  const isActive = selectedTab === value
  
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        isActive ? "bg-background text-foreground shadow-sm" : "",
        className
      )}
      role="tab"
      aria-selected={isActive}
      tabIndex={isActive ? 0 : -1}
      onClick={() => onTabChange?.(value)}
      {...props}
    >
      {children}
    </button>
  )
}

// Content displayed for a selected tab
const TabsContent = ({ className, value, selectedTab, children, ...props }) => {
  if (value !== selectedTab) {
    return null
  }
  
  return (
    <div
      className={cn(
        "mt-2 w-full ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
      role="tabpanel"
      tabIndex={0}
      {...props}
    >
      {children}
    </div>
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }

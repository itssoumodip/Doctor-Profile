"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils"
import { createAppointment } from "@/lib/firebaseOperations"

/**
 * Available time slots for appointments
 * @type {string[]}
 */
const TIME_SLOTS = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "1:00 PM", "1:30 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM"
]

export default function AppointmentPage() {
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { toast } = useToast()
  
  // Suppress extension-related errors
  useEffect(() => {
    const originalConsoleError = console.error
    console.error = (...args) => {
      const message = args[0]?.toString() || ''
      // Filter out extension-related errors
      if (
        message.includes('hybridaction') ||
        message.includes('autotrack.studyquicks.com') ||
        message.includes('chrome-extension') ||
        message.includes('questionai')
      ) {
        return // Suppress these errors
      }
      originalConsoleError.apply(console, args)
    }
    
    return () => {
      console.error = originalConsoleError
    }
  }, [])
  
  const onSubmit = async (data) => {
    setIsSubmitting(true)
    
    try {
      const appointmentData = {
        ...data,
        appointmentDate: selectedDate,
        appointmentTime: selectedTime,
        submittedAt: new Date().toISOString()
      }
      
      const result = await createAppointment(appointmentData)
      
      if (result.success) {
        toast({
          title: "Appointment Booked Successfully!",
          description: `Your appointment has been scheduled for ${selectedDate} at ${selectedTime}. Redirecting to confirmation page...`,
          duration: 3000,
        })
        
        // Redirect to confirmation page with appointment details
        setTimeout(() => {
          const params = new URLSearchParams({
            name: `${data.firstName} ${data.lastName}`,
            date: selectedDate,
            time: selectedTime,
            service: data.reason
          })
          window.location.href = `/appointment/confirmation?${params.toString()}`
        }, 2000)
      } else {
        throw new Error(result.error)
      }
    } catch (error) {
      console.error('Error submitting appointment:', error)
      toast({
        title: "Error",
        description: "Failed to book appointment. Please try again.",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <main className="container px-4 md:px-6 py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">Book an Appointment</h1>
        <p className="text-gray-600 mb-8">Schedule a consultation with Dr. </p>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Steps indicator */}
          <div className="bg-blue-50 p-4">
            <div className="flex justify-between">
              <div className="flex items-center">
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                  step === 1 ? "bg-blue-900 text-white" : "bg-blue-100 text-blue-900"
                )}>
                  1
                </div>
                <span className="ml-2 font-medium text-blue-900">Select Date & Time</span>
              </div>
              <div className="flex-1 mx-4 border-t-2 border-dashed border-blue-200 self-center"></div>
              <div className="flex items-center">
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                  step === 2 ? "bg-blue-900 text-white" : "bg-blue-100 text-blue-900"
                )}>
                  2
                </div>
                <span className="ml-2 font-medium text-blue-900">Personal Information</span>
              </div>
            </div>
          </div>
          
          {/* Step 1: Date and Time Selection */}
          {step === 1 && (
            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-900" />
                  Select Date
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                  {Array.from({ length: 14 }, (_, i) => {
                    const date = new Date()
                    date.setDate(date.getDate() + i + 1) // Skip today, start from tomorrow
                    return date
                  }).map((date) => {
                    const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
                    const dayStr = date.toLocaleDateString('en-US', { weekday: 'short' })
                    const fullDate = date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
                    
                    return (
                      <button
                        key={dateStr}
                        type="button"
                        className={cn(
                          "p-3 border rounded-md hover:border-blue-500 text-center transition-colors",
                          selectedDate === fullDate 
                            ? "bg-blue-900 text-white border-blue-900" 
                            : "bg-white border-gray-200"
                        )}
                        onClick={() => setSelectedDate(fullDate)}
                      >
                        <div className="font-medium">{dayStr}</div>
                        <div className="text-sm">{dateStr}</div>
                      </button>
                    )
                  })}
                </div>
              </div>
              
              {selectedDate && (
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-900" />
                    Select Time
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                    {TIME_SLOTS.map((time) => (
                      <button
                        key={time}
                        type="button"
                        className={cn(
                          "p-3 border rounded-md hover:border-blue-500 text-center transition-colors",
                          selectedTime === time 
                            ? "bg-blue-900 text-white border-blue-900" 
                            : "bg-white border-gray-200"
                        )}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="mt-8 flex justify-end">
                <Button 
                  onClick={() => setStep(2)}
                  disabled={!selectedDate || !selectedTime}
                  className="flex items-center gap-2"
                >
                  Continue
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
          
          {/* Step 2: Personal Information */}
          {step === 2 && (
            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4">Your Information</h2>
                <p className="text-gray-600 mb-4">
                  Appointment for: <span className="font-medium">{selectedDate} at {selectedTime}</span>
                </p>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">
                        First name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className={cn(
                          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
                          errors.firstName && "border-red-500"
                        )}
                        {...register("firstName", { required: true })}
                      />
                      {errors.firstName && <p className="text-red-500 text-xs mt-1">First name is required</p>}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">
                        Last name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className={cn(
                          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
                          errors.lastName && "border-red-500"
                        )}
                        {...register("lastName", { required: true })}
                      />
                      {errors.lastName && <p className="text-red-500 text-xs mt-1">Last name is required</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        className={cn(
                          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
                          errors.email && "border-red-500"
                        )}
                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">Valid email is required</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">
                        Phone number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className={cn(
                          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
                          errors.phone && "border-red-500"
                        )}
                        {...register("phone", { required: true })}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">Phone number is required</p>}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="reason" className="block mb-2 text-sm font-medium text-gray-900">
                      Reason for visit *
                    </label>
                    <select
                      id="reason"
                      className={cn(
                        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
                        errors.reason && "border-red-500"
                      )}
                      {...register("reason", { required: true })}
                    >
                      <option value="">Select a reason</option>
                      <option value="consultation">Initial Consultation</option>
                      <option value="follow-up">Follow-up Visit</option>
                      <option value="test-results">Test Results Review</option>
                      <option value="prescription">Prescription Renewal</option>
                      <option value="other">Other (Please specify)</option>
                    </select>
                    {errors.reason && <p className="text-red-500 text-xs mt-1">Reason for visit is required</p>}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="notes" className="block mb-2 text-sm font-medium text-gray-900">
                      Additional notes (optional)
                    </label>
                    <textarea
                      id="notes"
                      rows="3"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      {...register("notes")}
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        type="checkbox"
                        className={cn(
                          "w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300",
                          errors.terms && "border-red-500"
                        )}
                        {...register("terms", { required: true })}
                      />
                    </div>
                    <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900">
                      I acknowledge the practice's 
                      <Link href="#" className="text-blue-600 hover:underline ml-1 mr-1">
                        cancellation policy
                      </Link> 
                      and 
                      <Link href="#" className="text-blue-600 hover:underline ml-1">
                        privacy policy
                      </Link>
                    </label>
                  </div>
                  {errors.terms && <p className="text-red-500 text-xs mt-1 mb-4">You must agree to the policies</p>}
                  
                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setStep(1)}>
                      Back
                    </Button>
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Booking..." : "Book Appointment"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
      <Toaster />
    </main>
  )
}


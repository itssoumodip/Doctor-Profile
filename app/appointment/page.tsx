"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { CalendarIcon, Check, Clock, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

export default function AppointmentPage() {
  const [date, setDate] = useState<Date>()
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would submit the form data to your backend
    setFormSubmitted(true)
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900 animate-fade-in">
              Book an Appointment
            </h1>
            <p className="max-w-[700px] text-gray-600 md:text-xl animate-fade-in animation-delay-200">
              Schedule a consultation with Dr. Sarah Johnson
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            {!formSubmitted ? (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter text-blue-900">Request an Appointment</h2>
                  <p className="text-gray-600">
                    Fill out the form below to request an appointment. Our staff will contact you to confirm your
                    appointment time.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name" className="text-sm font-medium text-gray-700">
                        First Name
                      </Label>
                      <Input
                        id="first-name"
                        placeholder="Enter your first name"
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name" className="text-sm font-medium text-gray-700">
                        Last Name
                      </Label>
                      <Input
                        id="last-name"
                        placeholder="Enter your last name"
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-700">Appointment Type</Label>
                    <RadioGroup defaultValue="new-patient" className="grid gap-4 sm:grid-cols-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="new-patient" id="new-patient" />
                        <Label htmlFor="new-patient" className="cursor-pointer">
                          New Patient
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="follow-up" id="follow-up" />
                        <Label htmlFor="follow-up" className="cursor-pointer">
                          Follow-up
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-700">Preferred Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal transition-all duration-300 focus:ring-2 focus:ring-blue-500",
                            !date && "text-muted-foreground",
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Select a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time" className="text-sm font-medium text-gray-700">
                      Preferred Time
                    </Label>
                    <Select>
                      <SelectTrigger className="transition-all duration-300 focus:ring-2 focus:ring-blue-500">
                        <SelectValue placeholder="Select a time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (1PM - 5PM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reason" className="text-sm font-medium text-gray-700">
                      Reason for Visit
                    </Label>
                    <Select>
                      <SelectTrigger className="transition-all duration-300 focus:ring-2 focus:ring-blue-500">
                        <SelectValue placeholder="Select a reason" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="consultation">General Consultation</SelectItem>
                        <SelectItem value="checkup">Routine Checkup</SelectItem>
                        <SelectItem value="ecg">ECG/EKG</SelectItem>
                        <SelectItem value="stress-test">Stress Test</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Additional Information
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide any additional information about your visit"
                      className="min-h-[120px] transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="terms"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      required
                    />
                    <Label htmlFor="terms" className="text-sm text-gray-700">
                      I agree to the{" "}
                      <Link href="/terms" className="text-blue-600 hover:underline">
                        terms and conditions
                      </Link>
                    </Label>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white transition-all duration-300 transform hover:scale-105"
                  >
                    Request Appointment
                  </Button>
                </form>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center space-y-4 text-center p-8 bg-blue-50 rounded-xl animate-fade-in">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-blue-900">Appointment Request Submitted!</h2>
                <p className="text-gray-600">
                  Thank you for requesting an appointment. Our staff will contact you shortly to confirm your
                  appointment details.
                </p>
                <Button
                  className="mt-4 bg-blue-700 hover:bg-blue-800 text-white transition-all duration-300"
                  onClick={() => setFormSubmitted(false)}
                >
                  Request Another Appointment
                </Button>
              </div>
            )}
            <div className="space-y-6">
              <div className="space-y-2 animate-fade-in animation-delay-200">
                <h2 className="text-3xl font-bold tracking-tighter text-blue-900">Office Hours</h2>
                <p className="text-gray-600">Our regular office hours for appointments and consultations</p>
              </div>
              <div className="space-y-4 animate-fade-in animation-delay-300">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-blue-700" />
                  <div>
                    <p className="font-medium text-gray-800">Monday - Friday</p>
                    <p className="text-gray-600">9:00 AM - 5:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-blue-700" />
                  <div>
                    <p className="font-medium text-gray-800">Saturday</p>
                    <p className="text-gray-600">9:00 AM - 1:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-blue-700" />
                  <div>
                    <p className="font-medium text-gray-800">Sunday</p>
                    <p className="text-gray-600">Closed</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 bg-blue-50 p-6 rounded-xl animate-fade-in animation-delay-400">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-blue-700 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Insurance Information</h3>
                    <p className="text-gray-600 mt-1">
                      Please bring your insurance card and photo ID to your appointment. We accept most major insurance
                      plans.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-blue-700 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">New Patients</h3>
                    <p className="text-gray-600 mt-1">
                      New patients should arrive 15 minutes early to complete necessary paperwork or complete forms
                      online before your visit.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-blue-700 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Cancellation Policy</h3>
                    <p className="text-gray-600 mt-1">
                      Please provide at least 24 hours notice if you need to cancel or reschedule your appointment.
                    </p>
                  </div>
                </div>
              </div>
              <div className="animate-fade-in animation-delay-500">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Location</h3>
                <div className="rounded-xl overflow-hidden shadow-lg h-[200px] md:h-[300px]">
                  <div className="w-full h-full bg-gray-200 animate-pulse">
                    {/* This would be replaced with an actual map component */}
                    <div className="w-full h-full flex items-center justify-center text-gray-500">Interactive Map</div>
                  </div>
                </div>
                <p className="text-gray-600 mt-2">123 Medical Center Dr, Healthcare City, HC 12345</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


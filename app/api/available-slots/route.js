import { db } from '@/lib/firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { NextResponse } from 'next/server'

/**
 * API route that checks for available appointment slots
 * This prevents double booking when an admin approves an appointment
 */
export async function GET(request) {
  try {
    // Get the date from query parameters
    const { searchParams } = new URL(request.url)
    const date = searchParams.get('date')

    if (!date) {
      return NextResponse.json(
        { success: false, error: 'Date parameter is required' },
        { status: 400 }
      )
    }

    // Query approved appointments for the specified date
    const appointmentsRef = collection(db, 'appointments')
    const q = query(
      appointmentsRef, 
      where('appointmentDate', '==', date),
      where('status', 'in', ['approved', 'confirmed'])
    )
    
    const snapshot = await getDocs(q)
    
    // Extract booked time slots
    const bookedSlots = []
    snapshot.forEach(doc => {
      const data = doc.data()
      if (data.appointmentTime) {
        bookedSlots.push(data.appointmentTime)
      }
    })
    
    // Return booked slots
    return NextResponse.json({
      success: true,
      bookedSlots
    })
  } catch (error) {
    console.error('Error checking available slots:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to check available slots' },
      { status: 500 }
    )
  }
}

/**
 * API route that allows checking if a specific slot is available
 */
export async function POST(request) {
  try {
    const { date, time } = await request.json()
    
    if (!date || !time) {
      return NextResponse.json(
        { success: false, error: 'Date and time parameters are required' },
        { status: 400 }
      )
    }
    
    // Query appointments for the specified date and time
    const appointmentsRef = collection(db, 'appointments')
    const q = query(
      appointmentsRef,
      where('appointmentDate', '==', date),
      where('appointmentTime', '==', time),
      where('status', 'in', ['approved', 'confirmed'])
    )
    
    const snapshot = await getDocs(q)
    
    // Check if time slot is available
    const isAvailable = snapshot.empty
    
    return NextResponse.json({
      success: true,
      isAvailable
    })
  } catch (error) {
    console.error('Error checking slot availability:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to check slot availability' },
      { status: 500 }
    )
  }
}

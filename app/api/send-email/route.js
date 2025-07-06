// This route is deprecated. Use the specific email routes instead:
// - /api/send-booking-email
// - /api/send-approval-email
// - /api/send-rejection-email
// - /api/send-contact-email

export async function POST(request) {
  return Response.json(
    { 
      success: false, 
      error: 'This endpoint is deprecated. Please use the specific email endpoints instead.' 
    },
    { status: 410 }  // 410 Gone status code
  )
}

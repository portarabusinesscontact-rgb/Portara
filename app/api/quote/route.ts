import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate required fields
    const required = ["orgName", "contactPerson", "email", "phone", "city", "state", "quantity"]
    for (const field of required) {
      if (!data[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 })
      }
    }

    // TODO: Wire up email notification or CRM integration
    console.log("[v0] Quote request received:", data)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Error processing quote request:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}

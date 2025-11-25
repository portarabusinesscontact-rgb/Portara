// app/api/contact/route.ts
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request): Promise<Response> {
  try {
    const body = await req.json()
    const { name, email, reason, message } = body ?? {}

    console.log("CONTACT API HIT. BODY:", body)

    // Basic validation
    if (!name || !email || !reason || !message) {
      console.log("CONTACT API ERROR: Missing fields")
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      )
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing")
      return new Response(
        JSON.stringify({ error: "Server misconfigured (no RESEND_API_KEY)" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      )
    }

    const toAddress = process.env.CONTACT_TO
    if (!toAddress) {
      console.error("CONTACT_TO env var is missing")
      return new Response(
        JSON.stringify({ error: "Server misconfigured (no CONTACT_TO)" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      )
    }

    const subject = `New Portara contact: ${reason}`
    const textBody = `
New contact form submission:

Name: ${name}
Email: ${email}
Reason: ${reason}

Message:
${message}
`.trim()

    console.log("SENDING EMAIL VIA RESEND →", {
      to: toAddress,
      subject,
    })

    const { error } = await resend.emails.send({
      from: "Portara Contact <onboarding@resend.dev>",
      to: toAddress,
      replyTo: String(email),
      subject,
      text: textBody,
    })

    if (error) {
      console.error("RESEND ERROR:", error)
      return new Response(
        JSON.stringify({ error: "Email send failed" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      )
    }

    console.log("RESEND SUCCESS")
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (err) {
    console.error("CONTACT API FATAL ERROR:", err)
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

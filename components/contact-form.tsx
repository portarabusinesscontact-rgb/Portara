"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setStatus("idle")

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      reason: formData.get("reason"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        // ✅ SUCCESS PATH
        setStatus("success")
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        })
        e.currentTarget.reset()
      } else {
        // ❌ ERROR PATH (API returned 4xx/5xx)
        let errorMessage = "Failed to submit"
        try {
          const json = await response.json()
          if (json?.error) errorMessage = json.error
        } catch {
          // ignore parse error
        }
        console.error("Contact form submit error:", errorMessage)

        setStatus("error")
        toast({
          title: "We couldn’t send your message",
          description:
            "Something went wrong with the contact form. Please try again, or email us directly at portarabusinesscontact@gmail.com.",
          variant: "destructive",
        })
      }
    } catch (error) {
      // ❌ NETWORK / UNEXPECTED ERROR
      console.error(error)
      setStatus("error")
      toast({
        title: "We couldn’t send your message",
        description:
          "Something went wrong with the contact form. Please try again, or email us directly at portarabusinesscontact@gmail.com.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      <div>
        <label htmlFor="reason" className="block text-sm font-medium mb-2">
          Reason for Contact *
        </label>
        <select
          id="reason"
          name="reason"
          required
          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="">Select a reason</option>
          <option value="sponsorship">Sponsorship</option>
          <option value="bulk">Bulk Purchase</option>
          <option value="press">Press Inquiry</option>
          <option value="partnership">Partnership</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
          placeholder="Tell us how we can help..."
        />
      </div>

      <div className="space-y-2">
        <Button
          type="submit"
          size="lg"
          disabled={loading}
          className="w-full md:w-auto"
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  )
}

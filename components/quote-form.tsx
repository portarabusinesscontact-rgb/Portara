"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export function QuoteForm() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      orgName: formData.get("orgName"),
      contactPerson: formData.get("contactPerson"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      city: formData.get("city"),
      state: formData.get("state"),
      quantity: formData.get("quantity"),
      notes: formData.get("notes"),
    }

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast({
          title: "Quote request submitted!",
          description: "We'll get back to you within 24 hours.",
        })
        e.currentTarget.reset()
      } else {
        throw new Error("Failed to submit")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit quote request. Please try again.",
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
          <label htmlFor="orgName" className="block text-sm font-medium mb-2">
            Organization Name *
          </label>
          <input
            type="text"
            id="orgName"
            name="orgName"
            required
            className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <div>
          <label htmlFor="contactPerson" className="block text-sm font-medium mb-2">
            Contact Person *
          </label>
          <input
            type="text"
            id="contactPerson"
            name="contactPerson"
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

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium mb-2">
            City *
          </label>
          <input
            type="text"
            id="city"
            name="city"
            required
            className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <div>
          <label htmlFor="state" className="block text-sm font-medium mb-2">
            State *
          </label>
          <input
            type="text"
            id="state"
            name="state"
            required
            className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      <div>
        <label htmlFor="quantity" className="block text-sm font-medium mb-2">
          Quantity *
        </label>
        <select
          id="quantity"
          name="quantity"
          required
          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="">Select quantity</option>
          <option value="100">100 units</option>
          <option value="250">250 units</option>
          <option value="500">500 units</option>
          <option value="1000">1000 units</option>
          <option value="custom">Custom quantity</option>
        </select>
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium mb-2">
          Additional Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
          placeholder="Tell us about your organization and specific needs..."
        />
      </div>

      <Button type="submit" size="lg" disabled={loading} className="w-full md:w-auto">
        {loading ? "Submitting..." : "Request Quote"}
      </Button>
    </form>
  )
}

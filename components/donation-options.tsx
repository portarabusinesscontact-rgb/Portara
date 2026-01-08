"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { SPONSOR_CHECKOUT_URL } from "@/lib/config"

const amounts = [50, 100, 500]

export function DonationOptions() {
  const [selectedAmount, setSelectedAmount] = useState(100)
  const [customAmount, setCustomAmount] = useState("")
  const [isMonthly, setIsMonthly] = useState(false)
  const [showCustom, setShowCustom] = useState(false)

  const finalAmount = showCustom ? customAmount : selectedAmount

  const handleCheckout = () => {
    if (!SPONSOR_CHECKOUT_URL) {
      console.log("[v0] Checkout URL not configured")
      return
    }
    // In production, this would redirect to Stripe with amount and frequency
    console.log("[v0] Redirecting to checkout:", {
      amount: finalAmount,
      frequency: isMonthly ? "monthly" : "one-time",
    })
    window.location.href = SPONSOR_CHECKOUT_URL
  }

  return (
    <Card className="p-6 md:p-8">
      {/* Frequency Toggle */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-lg border border-border p-1 bg-muted">
          <button
            onClick={() => setIsMonthly(false)}
            className={cn(
              "px-6 py-2 rounded-md text-sm font-medium transition-colors",
              !isMonthly ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground",
            )}
          >
            One-time
          </button>
          <button
            onClick={() => setIsMonthly(true)}
            className={cn(
              "px-6 py-2 rounded-md text-sm font-medium transition-colors",
              isMonthly ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground",
            )}
          >
            Monthly
          </button>
        </div>
      </div>

      {/* Amount Selection */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        {amounts.map((amount) => (
          <button
            key={amount}
            onClick={() => {
              setSelectedAmount(amount)
              setShowCustom(false)
            }}
            className={cn(
              "py-4 rounded-lg border-2 font-semibold transition-all",
              selectedAmount === amount && !showCustom
                ? "border-primary bg-primary/5 text-primary"
                : "border-border hover:border-primary/50",
            )}
          >
            ${amount}
          </button>
        ))}
      </div>

      {/* Custom Amount */}
      <button
        onClick={() => setShowCustom(true)}
        className={cn(
          "w-full py-4 rounded-lg border-2 font-semibold transition-all mb-6",
          showCustom ? "border-primary bg-primary/5 text-primary" : "border-border hover:border-primary/50",
        )}
      >
        Other Amount
      </button>

      {showCustom && (
        <div className="mb-6">
          <label htmlFor="customAmount" className="block text-sm font-medium mb-2">
            Enter custom amount
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
            <input
              type="number"
              id="customAmount"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              min="1"
              step="1"
              placeholder="0"
              className="w-full pl-8 pr-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>
      )}

      {/* Impact Message */}
      <div className="bg-muted/50 rounded-lg p-4 mb-6">
        <p className="text-sm text-center">
          {isMonthly ? (
            <>
              <span className="font-semibold text-primary">${finalAmount}/month</span> provides{" "}
              <span className="font-semibold">ongoing support</span> for those in need
            </>
          ) : (
            <>
              <span className="font-semibold text-primary">${finalAmount}</span> sponsors{" "}
              <span className="font-semibold">
                {Math.floor(Number(finalAmount) / 100)} shelter{Math.floor(Number(finalAmount) / 100) !== 1 ? "s" : ""}
              </span>
            </>
          )}
        </p>
      </div>

      {/* Checkout Button */}
      {SPONSOR_CHECKOUT_URL ? (
        <Button
          size="lg"
          className="w-full"
          onClick={handleCheckout}
          disabled={!finalAmount || Number(finalAmount) < 1}
        >
          {isMonthly ? "Start Monthly Donation" : "Donate Now"}
        </Button>
      ) : (
        <div className="relative group">
          <Button size="lg" className="w-full" disabled>
            Configure Checkout URL
          </Button>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Add NEXT_PUBLIC_SPONSOR_CHECKOUT_URL to environment variables
          </div>
        </div>
      )}

      <p className="text-xs text-center text-muted-foreground mt-4">
        Tax-deductible as allowed by law. EIN: 41-3434523
      </p>
    </Card>
  )
}

"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
}

export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="bg-card rounded-xl border border-border overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
          >
            <span className="font-semibold pr-4">{item.question}</span>
            <svg
              className={cn(
                "w-5 h-5 text-muted-foreground transition-transform flex-shrink-0",
                openIndex === index && "rotate-180",
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && <div className="px-6 pb-4 text-muted-foreground">{item.answer}</div>}
        </div>
      ))}
    </div>
  )
}

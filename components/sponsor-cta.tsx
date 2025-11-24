"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SponsorCTA() {
  const pathname = usePathname()

  // Don't show on sponsor page
  if (pathname === "/sponsor") return null

  return (
    <>
      <div className="hidden md:block fixed bottom-8 right-8 z-40 animate-in fade-in slide-in-from-bottom-8 duration-500 delay-300">
        <div className="relative group">
          {/* Animated glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-0 group-hover:opacity-75 blur-xl transition-all duration-500 group-hover:scale-110 animate-pulse-slow" />

          <Link href="/sponsor">
            <Button
              size="lg"
              className="relative shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                />
              </svg>
              Sponsor a Tent
            </Button>
          </Link>
        </div>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl border-t border-border/40 p-4 shadow-2xl animate-in slide-in-from-bottom-full duration-500 delay-300">
        <Link href="/sponsor" className="block">
          <Button
            size="lg"
            className="w-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group"
          >
            <svg
              className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
              />
            </svg>
            Sponsor a Tent
          </Button>
        </Link>
      </div>
    </>
  )
}

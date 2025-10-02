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
      {/* Desktop: Sticky button */}
      <div className="hidden md:block fixed bottom-8 right-8 z-40">
        <Link href="/sponsor">
          <Button size="lg" className="shadow-lg">
            Sponsor a Tent
          </Button>
        </Link>
      </div>

      {/* Mobile: Bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-border p-4 shadow-lg">
        <Link href="/sponsor" className="block">
          <Button size="lg" className="w-full">
            Sponsor a Tent
          </Button>
        </Link>
      </div>
    </>
  )
}

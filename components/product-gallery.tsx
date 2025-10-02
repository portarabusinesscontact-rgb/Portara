"use client"

import { cn } from "@/lib/utils"

import Image from "next/image"
import { useState } from "react"

const images = [
  {
    src: "/backpack-form-portable-shelter-tent-folded.jpg",
    alt: "Portara shelter in compact backpack form",
    caption: "Backpack form - Portable and easy to carry",
  },
  {
    src: "/expanded-tent-shelter-privacy-dignity.jpg",
    alt: "Portara shelter fully expanded",
    caption: "Expanded form - Private, protected space",
  },
]

export function ProductGallery() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="space-y-6">
      {/* Main Image */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
        <Image
          src={images[activeIndex].src || "/placeholder.svg"}
          alt={images[activeIndex].alt}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Caption */}
      <p className="text-center text-muted-foreground font-medium">{images[activeIndex].caption}</p>

      {/* Thumbnails */}
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "relative aspect-[4/3] rounded-xl overflow-hidden transition-all",
              activeIndex === index
                ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                : "opacity-60 hover:opacity-100",
            )}
          >
            <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}

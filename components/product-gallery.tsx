"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState } from "react"

const images = [
  {
    src: "/tent-front.png",
    alt: "Portara tent closed, front view on its raised frame",
    caption: "Front view - Raised frame with enclosed tent",
  },
  {
    src: "/tent-open.png",
    alt: "Portara tent open with fly raised, showing sleeping area",
    caption: "Open setup - Ventilated fly with sleeping space",
  },
]

export function ProductGallery() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="space-y-6">
      {/* Main Image */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted shadow-xl border-2 border-border/50 group">
        <Image
          src={images[activeIndex].src || "/placeholder.svg"}
          alt={images[activeIndex].alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority
        />
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Caption */}
      <p className="text-center text-muted-foreground font-medium text-lg transition-all duration-300">
        {images[activeIndex].caption}
      </p>

      {/* Thumbnails */}
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "relative aspect-[4/3] rounded-xl overflow-hidden transition-all duration-300 border-2",
              activeIndex === index
                ? "ring-4 ring-primary ring-offset-2 ring-offset-background border-primary shadow-lg scale-105"
                : "opacity-60 hover:opacity-100 border-border/50 hover:border-primary/50 hover:scale-105 shadow-sm hover:shadow-md",
            )}
          >
            <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}

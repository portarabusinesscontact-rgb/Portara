import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SponsorCTA } from "@/components/sponsor-cta"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
})

export const metadata: Metadata = {
  title: "Portara - Portable Dignity Shelter",
  description:
    "Portable dignity shelter providing privacy, protection, and portability for those experiencing homelessness.",
  openGraph: {
    title: "Portara - Portable Dignity Shelter",
    description:
      "Portable dignity shelter providing privacy, protection, and portability for those experiencing homelessness.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <SponsorCTA />
      </body>
    </html>
  )
}

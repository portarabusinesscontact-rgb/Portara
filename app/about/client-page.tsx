"use client"

import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function AboutClientPage() {
  const [email, setEmail] = useState("")

  return (
    <>
      <Section className="pt-12 md:pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center mb-16 relative z-10">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-balance tracking-tight leading-tight">
              Our mission
            </h1>
          </div>
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
              Providing portable dignity shelters to protect and empower individuals experiencing homelessness across
              America.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-gradient-to-br from-card via-muted/20 to-card border-y border-border/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden group animate-in fade-in slide-in-from-left-8 duration-700 shadow-xl">
              <img
                src="/ChatGPT%20Image%20Jan%208,%202026,%2002_56_15%20PM.png"
                alt="ChatGPT generated image"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-700">
              <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">How we started</h2>
              <p className="text-muted-foreground leading-relaxed">
                Portara is a student-founded 501(c)(3) built around one simple observation: in New York City, many
                people sleeping outside refuse congregate shelters because of safety, rules, crowding, or separation
                from partners/pets—but blankets and sleeping bags still leave people exposed to rain, wind, and
                freezing concrete.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believed that everyone deserves privacy, protection, and a sense of personal space- regardless of
                their housing situation. That belief drove us to create the Portara shelter: a portable, durable, and
                dignified solution.
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 tracking-tight">Our approach</h2>
            <p className="text-muted-foreground leading-relaxed">
              We work directly with homeless shelters, outreach organizations, and city programs to ensure Portara
              shelters reach those who need them most. Our distribution partners have established relationships with
              unhoused communities and understand local needs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every Portara shelter is manufactured with high-quality, weather-resistant materials designed to last 2-3
              years with proper care. We provide setup instructions and care guides to all recipients through our
              partner organizations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              While we know a tent is not a permanent solution to homelessness, we believe it can provide crucial
              stability and dignity during a difficult time. Our ultimate goal is to support individuals on their path
              to permanent housing.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12 tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
            Our journey
          </h2>

          <div className="space-y-8">
            {[
              {
                year: "Sept 2025",
                title: "Founded",
                description: "Formed the Portara team to design a dignified, portable shelter.",
              },
              {
                year: "Oct 2025",
                title: "501(c)(3) Status",
                description: "Received official 501(c)(3) determination so we can fund and scale impact.",
              },
              {
                year: "Nov 2025",
                title: "Pilot & Distribution",
                description: "Tested and delivered our first set of shelters with a partner agency.",
              },
              {
                year: "Today",
                title: "Building Momentum",
                description: "Designing a new compact tent and expanding partnerships for wider reach.",
              },
            ].map((item, index) => (
              <div
                key={item.year}
                className="flex gap-6 group animate-in fade-in slide-in-from-left-8 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl md:text-3xl font-serif font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent group-hover:scale-110 inline-block transition-transform">
                    {item.year}
                  </span>
                </div>
                <div className="flex-shrink-0 w-px bg-gradient-to-b from-border via-primary/50 to-border relative">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20 group-hover:scale-150 group-hover:ring-8 transition-all duration-300" />
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-gradient-to-br from-card via-primary/5 to-card border-y border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)]" />

        <div className="max-w-2xl mx-auto text-center relative z-10">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 tracking-tight">Stay updated</h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Subscribe to receive impact stories, updates, and news from Portara
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                console.log("[v0] TODO: Wire email signup:", email)
                alert("Thank you for subscribing! (Email integration pending)")
                setEmail("")
              }}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto group"
            >
              <div className="flex-1 relative">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background 
                    focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary 
                    transition-all duration-300 hover:border-primary/50
                    placeholder:text-muted-foreground/50"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <svg
                  className="w-5 h-5 mr-2 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </Section>
    </>
  )
}

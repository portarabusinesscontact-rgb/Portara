"use client"

import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"

export default function AboutClientPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-12 md:pt-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-balance">Our mission</h1>
          <p className="text-xl text-muted-foreground text-balance">
            Providing portable dignity shelters to protect and empower individuals experiencing homelessness across
            America.
          </p>
        </div>
      </Section>

      {/* Story */}
      <Section className="bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden">
              <img src="/nonprofit-team-working-together-compassion.jpg" alt="Our team" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4">How we started</h2>
              <p className="text-muted-foreground mb-4">
                Portara was founded in 2020 by a group of designers, engineers, and social workers who saw firsthand the
                lack of dignified shelter options for people experiencing homelessness.
              </p>
              <p className="text-muted-foreground">
                We believed that everyone deserves privacy, protection, and a sense of personal space— regardless of
                their housing situation. That belief drove us to create the Portara shelter: a portable, durable, and
                dignified solution.
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold mb-6">Our approach</h2>
            <p className="text-muted-foreground mb-4">
              We work directly with homeless shelters, outreach organizations, and city programs to ensure Portara
              shelters reach those who need them most. Our distribution partners have established relationships with
              unhoused communities and understand local needs.
            </p>
            <p className="text-muted-foreground mb-4">
              Every Portara shelter is manufactured with high-quality, weather-resistant materials designed to last 2-3
              years with proper care. We provide setup instructions and care guides to all recipients through our
              partner organizations.
            </p>
            <p className="text-muted-foreground">
              While we know a tent is not a permanent solution to homelessness, we believe it can provide crucial
              stability and dignity during a difficult time. Our ultimate goal is to support individuals on their path
              to permanent housing.
            </p>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">Our journey</h2>

          <div className="space-y-8">
            {[
              { year: "2020", title: "Founded", description: "Portara established as a 501(c)(3) nonprofit" },
              {
                year: "2021",
                title: "First Distribution",
                description: "Distributed 100 shelters in partnership with 5 organizations",
              },
              { year: "2022", title: "Expansion", description: "Grew to 50+ partner organizations across 20 cities" },
              { year: "2023", title: "Milestone", description: "Reached 1,000 shelters distributed" },
              { year: "2024", title: "Today", description: "2,500+ shelters distributed, 150+ partners, 45 cities" },
            ].map((item, index) => (
              <div key={item.year} className="flex gap-6">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-serif font-bold text-primary">{item.year}</span>
                </div>
                <div className="flex-shrink-0 w-px bg-border relative">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary" />
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Email Signup */}
      <Section className="bg-card">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Stay updated</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to receive impact stories, updates, and news from Portara
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              const formData = new FormData(e.currentTarget)
              console.log("[v0] TODO: Wire email signup:", formData.get("email"))
              alert("Thank you for subscribing! (Email integration pending)")
            }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button type="submit" size="lg">
              Subscribe
            </Button>
          </form>
        </div>
      </Section>
    </>
  )
}

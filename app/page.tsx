import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Section } from "@/components/section"
import { ProductGallery } from "@/components/product-gallery"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-12 md:pt-20 pb-16 md:pb-24 relative overflow-hidden">
        {/* Subtle gradient background accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 text-balance tracking-tight">
              Portara
            </h1>
          </div>
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 text-balance leading-relaxed">
              Portable dignity shelter: privacy, protection, portability.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Link href="/sponsor">
              <Button size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-all hover:scale-105">
                Sponsor a Tent
              </Button>
            </Link>
            <Link href="/bulk">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-transparent hover:bg-muted/50 transition-all hover:scale-105 border-2"
              >
                Bulk Buy for Shelters
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Product Section */}
      <Section className="bg-card border-y border-border/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-balance tracking-tight leading-tight">
              Dignity in a backpack
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div className="flex items-start group">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-lg mb-1">Expanded:</p>
                  <p className="leading-relaxed">73 × 36 × 45 in (185 × 90 × 115 cm)</p>
                  <p className="leading-relaxed">1 inch elevated insulated floor</p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-lg mb-1">Packed:</p>
                  <p className="leading-relaxed">24 × 12 × 8 in (60 × 30 × 20 cm)</p>
                  <p className="leading-relaxed">Lightweight and portable</p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-lg mb-1">Features:</p>
                  <p className="leading-relaxed">Opaque waterproof shell, lockable flap, privacy wings, wind flap</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ProductGallery />
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 tracking-tight">How it works</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Your support creates real impact through our streamlined process
          </p>
        </div>

        <div className="relative">
          {/* Connecting line between cards (hidden on mobile) */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {[
              {
                step: "1",
                title: "Sponsor",
                description:
                  "Individuals and organizations sponsor shelters through our website or bulk purchase program.",
              },
              {
                step: "2",
                title: "Manufacture",
                description: "We produce high-quality Portara shelters with durable, weather-resistant materials.",
              },
              {
                step: "3",
                title: "Distribute",
                description: "Partner shelters and outreach teams distribute to individuals experiencing homelessness.",
              },
            ].map((item, index) => (
              <Card
                key={item.step}
                className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 bg-background"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 text-primary flex items-center justify-center text-2xl font-serif font-bold mx-auto mb-6 ring-4 ring-primary/10 shadow-sm">
                  {item.step}
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Impact Stats */}
      <Section className="bg-gradient-to-br from-card via-muted/30 to-card border-y border-border/50 relative overflow-hidden">
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

        <div className="max-w-3xl mx-auto text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 tracking-tight">Our impact</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Together, we're providing dignity and shelter to those who need it most
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          {[
            { number: "2,500+", label: "Shelters Distributed" },
            { number: "150+", label: "Partner Organizations" },
            { number: "45", label: "Cities Served" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center group" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold bg-gradient-to-br from-primary via-primary to-primary/70 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-lg md:text-xl text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-balance">
            Trusted by organizations nationwide
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="aspect-[3/2] bg-muted rounded-xl flex items-center justify-center hover:bg-muted/70 transition-all duration-300 hover:scale-105 border border-border/50 shadow-sm hover:shadow-md"
            >
              <span className="text-muted-foreground font-semibold">Partner Logo</span>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}

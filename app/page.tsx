import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Section } from "@/components/section"
import { ProductGallery } from "@/components/product-gallery"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-balance">Portara</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
            Portable dignity shelter: privacy, protection, portability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sponsor">
              <Button size="lg" className="w-full sm:w-auto">
                Sponsor a Tent
              </Button>
            </Link>
            <Link href="/bulk">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                Bulk Buy for Shelters
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Product Section */}
      <Section className="bg-card">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Dignity in a backpack</h2>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-foreground">Expanded:</p>
                  <p>73 × 36 × 45 in (185 × 90 × 115 cm)</p>
                  <p>1 inch elevated insulated floor</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-foreground">Packed:</p>
                  <p>24 × 12 × 8 in (60 × 30 × 20 cm)</p>
                  <p>Lightweight and portable</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-semibold text-foreground">Features:</p>
                  <p>Opaque waterproof shell, lockable flap, privacy wings, wind flap</p>
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
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">How it works</h2>
          <p className="text-lg text-muted-foreground">
            Your support creates real impact through our streamlined process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          ].map((item) => (
            <Card key={item.step} className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl font-serif font-bold mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Impact Stats */}
      <Section className="bg-card">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our impact</h2>
          <p className="text-lg text-muted-foreground">
            Together, we're providing dignity and shelter to those who need it most
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: "2,500+", label: "Shelters Distributed" },
            { number: "150+", label: "Partner Organizations" },
            { number: "45", label: "Cities Served" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-5xl md:text-6xl font-serif font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-lg text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Trusted by organizations nationwide</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-[3/2] bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground font-semibold">Partner Logo</span>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}

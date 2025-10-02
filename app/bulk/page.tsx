import { Section } from "@/components/section"
import { TierCards } from "@/components/tier-cards"
import { QuoteForm } from "@/components/quote-form"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Bulk Buy for Shelters | Portara",
  description: "Bulk procurement of Portara shelters for shelters, outreach teams, and city programs.",
}

export default function BulkPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-12 md:pt-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-balance">
            Bulk procurement for organizations
          </h1>
          <p className="text-xl text-muted-foreground text-balance">
            Equip your shelter, outreach team, or city program with Portara shelters. Volume pricing available for
            orders of 100+ units.
          </p>
        </div>

        <TierCards />
      </Section>

      {/* Quote Form */}
      <Section className="bg-card">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Request a custom quote</h2>
            <p className="text-lg text-muted-foreground">
              Tell us about your organization and we'll create a tailored proposal
            </p>
          </div>

          <QuoteForm />
        </div>
      </Section>

      {/* Spec Sheet */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Product specifications</h2>
          <p className="text-muted-foreground mb-8">
            Download our detailed spec sheet for technical information, materials, and setup instructions.
          </p>
          <a href="/Portara-Spec.pdf" download>
            <Button size="lg" variant="outline">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Spec Sheet (PDF)
            </Button>
          </a>
        </div>
      </Section>
    </>
  )
}

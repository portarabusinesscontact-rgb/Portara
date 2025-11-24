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
      <Section className="pt-12 md:pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

        <div className="max-w-3xl mx-auto text-center mb-16 relative z-10">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-balance tracking-tight leading-tight">
              Bulk procurement for organizations
            </h1>
          </div>
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
              Equip your shelter, outreach team, or city program with Portara shelters. Volume pricing available for
              orders of 100+ units.
            </p>
          </div>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <TierCards />
        </div>
      </Section>

      <Section className="bg-gradient-to-br from-card via-muted/20 to-card border-y border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.05),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(245,158,11,0.05),transparent_50%)]" />

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight">Request a custom quote</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Tell us about your organization and we'll create a tailored proposal
            </p>
          </div>

          <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 border border-border/50 shadow-2xl">
            <QuoteForm />
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 tracking-tight">Product specifications</h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Download our detailed spec sheet for technical information, materials, and setup instructions.
            </p>
            <a href="/Portara-Spec.pdf" download className="inline-block group">
              <Button
                size="lg"
                variant="outline"
                className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 bg-transparent"
              >
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 group-hover:scale-110 group-hover:-translate-y-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download Spec Sheet (PDF)
                </div>
              </Button>
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}

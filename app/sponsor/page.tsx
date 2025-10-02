import { Section } from "@/components/section"
import { DonationOptions } from "@/components/donation-options"
import { FAQ } from "@/components/faq"
import { faqItems } from "@/lib/config"

export const metadata = {
  title: "Sponsor a Tent | Portara",
  description: "Sponsor a Portara shelter and provide dignity and protection to someone experiencing homelessness.",
}

export default function SponsorPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-12 md:pt-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-balance">
            Sponsor a shelter, change a life
          </h1>
          <p className="text-xl text-muted-foreground text-balance">
            For just $50, you can provide a Portara shelter to someone experiencing homelessness. Give the gift of
            privacy, protection, and dignity.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <DonationOptions />
        </div>
      </Section>

      {/* Impact Story */}
      <Section className="bg-card">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden">
              <img src="/person-with-portable-shelter-dignity-hope.jpg" alt="Impact story" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4">More than just shelter</h2>
              <p className="text-muted-foreground mb-4">
                A Portara shelter provides more than protection from the elements. It offers privacy, security, and a
                sense of personal space—fundamental human needs that are often impossible to meet while experiencing
                homelessness.
              </p>
              <p className="text-muted-foreground">
                The lockable flap and opaque walls give individuals control over their environment, while the elevated
                floor provides insulation from cold and wet ground. It's a foundation for stability and a step toward
                permanent housing.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Frequently asked questions</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about sponsoring a Portara shelter
            </p>
          </div>

          <FAQ items={faqItems} />
        </div>
      </Section>
    </>
  )
}

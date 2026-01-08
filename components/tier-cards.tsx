import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const tiers = [
  {
    units: 25,
    unitPrice: "$95",
    totalPrice: "$2,375",
    features: ["Bulk discount pricing", "Standard shipping", "Email support"],
  },
  {
    units: 50,
    unitPrice: "$92",
    totalPrice: "$4,650",
    features: ["Enhanced bulk discount", "Priority shipping", "Dedicated support", "Custom branding available"],
  },
  {
    units: 100,
    unitPrice: "$90",
    totalPrice: "$9,000",
    features: [
      "Maximum bulk discount",
      "Express shipping",
      "Account manager",
      "Custom branding included",
      "Training materials",
    ],
  },
]

export function TierCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {tiers.map((tier, index) => (
        <Card
          key={tier.units}
          className={cn(
            "p-8 h-full flex flex-col relative transition-all duration-300 hover:-translate-y-2 border-2 bg-background hover:border-primary/60 shadow-lg hover:shadow-2xl",
          )}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="text-center mb-8 space-y-3">
            <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-primary/70 font-semibold">Bulk Package</p>
            <h3 className="text-4xl font-serif font-semibold tracking-tight text-foreground leading-tight">{tier.units} Units</h3>
            <div className="space-y-2">
              <div className="inline-block px-5 py-2 bg-primary/10 rounded-lg border border-primary/15">
                <p className="text-3xl font-bold text-primary leading-none">{tier.unitPrice}</p>
              </div>
              <p className="text-base text-muted-foreground font-medium tracking-tight">per unit</p>
              <p className="text-xl font-semibold text-foreground">{tier.totalPrice} total</p>
            </div>
          </div>

          <ul className="space-y-4 mb-8">
            {tier.features.map((feature, index) => (
              <li key={index} className="flex items-start text-sm group">
                <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mr-3 flex-shrink-0 transition-colors group-hover:bg-primary/15 group-hover:border-primary/40">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="leading-relaxed text-base text-foreground">{feature}</span>
              </li>
            ))}
          </ul>

          <Button
            className={cn(
              "w-full mt-auto transition-all duration-300 font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl hover:-translate-y-0.5",
            )}
            variant="default"
            size="lg"
          >
            Request Quote
          </Button>
        </Card>
      ))}
    </div>
  )
}

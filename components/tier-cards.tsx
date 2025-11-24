import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const tiers = [
  {
    units: 100,
    unitPrice: "$85",
    totalPrice: "$8,500",
    features: ["Bulk discount pricing", "Standard shipping", "Email support"],
  },
  {
    units: 500,
    unitPrice: "$78",
    totalPrice: "$39,000",
    features: ["Enhanced bulk discount", "Priority shipping", "Dedicated support", "Custom branding available"],
    popular: true,
  },
  {
    units: 1000,
    unitPrice: "$72",
    totalPrice: "$72,000",
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
            "p-8 relative transition-all duration-300 hover:-translate-y-2 border-2 bg-background",
            tier.popular
              ? "ring-4 ring-primary/20 border-primary shadow-2xl scale-105"
              : "hover:border-primary/50 shadow-lg hover:shadow-xl",
          )}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {tier.popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-gradient-to-r from-primary via-primary to-primary/80 text-primary-foreground text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
                Most Popular
              </span>
            </div>
          )}

          <div className="text-center mb-8 space-y-4">
            <h3 className="text-4xl font-serif font-bold tracking-tight">{tier.units} Units</h3>
            <div className="space-y-2">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg">
                <p className="text-3xl font-bold text-primary">{tier.unitPrice}</p>
              </div>
              <p className="text-sm text-muted-foreground font-medium">per unit</p>
              <p className="text-xl font-semibold text-foreground">{tier.totalPrice} total</p>
            </div>
          </div>

          <ul className="space-y-4 mb-8">
            {tier.features.map((feature, index) => (
              <li key={index} className="flex items-start text-sm group">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-secondary/30 transition-colors">
                  <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>

          <Button
            className={cn(
              "w-full transition-all duration-300 font-semibold",
              tier.popular ? "shadow-lg hover:shadow-xl hover:scale-105" : "hover:scale-105",
            )}
            variant={tier.popular ? "default" : "outline"}
            size="lg"
          >
            Request Quote
          </Button>
        </Card>
      ))}
    </div>
  )
}

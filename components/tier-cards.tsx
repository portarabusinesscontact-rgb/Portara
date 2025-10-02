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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {tiers.map((tier) => (
        <Card key={tier.units} className={cn("p-6 relative", tier.popular && "ring-2 ring-primary")}>
          {tier.popular && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                Most Popular
              </span>
            </div>
          )}

          <div className="text-center mb-6">
            <h3 className="text-3xl font-serif font-bold mb-2">{tier.units} Units</h3>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-primary">{tier.unitPrice}</p>
              <p className="text-sm text-muted-foreground">per unit</p>
              <p className="text-lg font-semibold">{tier.totalPrice} total</p>
            </div>
          </div>

          <ul className="space-y-3 mb-6">
            {tier.features.map((feature, index) => (
              <li key={index} className="flex items-start text-sm">
                <svg
                  className="w-5 h-5 text-secondary mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          <Button className="w-full" variant={tier.popular ? "default" : "outline"}>
            Request Quote
          </Button>
        </Card>
      ))}
    </div>
  )
}

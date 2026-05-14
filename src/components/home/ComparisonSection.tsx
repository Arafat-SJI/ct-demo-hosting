import { Badge } from "@/components/ui/badge";
import { Scale, Check } from "lucide-react";

type PricingPlan = {
  name: string;
  price: string;
  period?: string;
  features: string[];
};

const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$999",
    period: "/yr",
    features: [
      "5 AI Agents",
      "10 Team Members",
      "Hosted by CollabAI",
      "Knowledge Base",
      "Email Support",
    ],
  },
  {
    name: "Pro",
    price: "$1,999",
    period: "/yr",
    features: [
      "10 AI Agents",
      "50 Team Members",
      "Hosted or Self-hosted",
      "Advanced Workflows",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom Pricing",
    features: [
      "Unlimited Agents",
      "Unlimited Members",
      "On-premise / Private Cloud",
      "White-label Option",
      "Dedicated Success Team",
    ],
  },
];

export function ComparisonSection() {
  return (
    <section id="comparison" className="section px-6 lg:px-12 bg-card relative">
      {/* Top divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="section-inner">
        {/* Section Header */}
        <div className="text-center">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            <Scale className="w-3 h-3 mr-1" />
            Packages
          </Badge>
          <h2 className="mb-4">Simple Pricing. Serious Capability.</h2>
          {/* <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're not trying to replace every tool. We work <em>with</em> your existing stack. Here's the honest comparison:
          </p> */}
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className="document-card flex flex-col h-full bg-card group"
            >
              <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
              <div className="mb-6 flex items-baseline gap-0.5">
                <span className="text-3xl font-bold tracking-tight text-foreground">
                  {plan.price}
                </span>
                {plan.period ? (
                  <span className="text-sm font-medium text-muted-foreground">
                    {plan.period}
                  </span>
                ) : null}
              </div>
              <ul className="space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check
                      className="w-4 h-4 text-primary shrink-0 mt-0.5"
                      aria-hidden
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

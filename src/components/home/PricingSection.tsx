import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, DollarSign, Sparkles, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const plans = [
  {
    name: "Starter",
    price: "$25",
    period: "/user/month",
    description: "Small teams (5-15 people) starting with the essentials",
    includes: [
      "Platform Core (auth, notifications, admin)",
      "Actions (task management)",
      "Meetings (Zoom/Teams/Meet integration)",
      "Knowledge Base (docs + semantic search)",
    ],
    features: [
      "Up to 15 users",
      "1,000 AI queries/month",
      "Standard integrations (Google, Zoom)",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$50",
    period: "/user/month",
    description: "Growing companies (15-50 people) who need full operations visibility",
    includes: [
      "Everything in Starter, plus:",
      "Projects (milestones, risks, client portal)",
      "Business Development (deals, contacts, pipeline)",
      "Productivity (department metrics, employee profiles)",
      "EOS Framework (V/TO, Rocks, Scorecard, IDS)",
    ],
    features: [
      "Up to 50 users",
      "5,000 AI queries/month",
      "HubSpot and ActiveCollab sync",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$75",
    period: "/user/month",
    description: "Mid-market and professional services firms (50-500 people)",
    includes: [
      "Everything in Professional, plus:",
      "AI Agents (full suite, custom agents)",
      "Advanced Analytics (custom dashboards)",
      "White-label branding (your domain, your logo)",
      "API access (build custom integrations)",
      "Dedicated support channel (<2hr SLA)",
    ],
    features: [
      "Unlimited users",
      "Unlimited AI queries",
      "HIPAA-ready deployment",
      "Custom onboarding and training",
    ],
    highlighted: false,
  },
];

const addOns = [
  { name: "Additional AI queries", price: "$10 per 1,000" },
  { name: "Custom integrations", price: "Starting at $2,000" },
  { name: "Professional services (implementation)", price: "$150/hour" },
  { name: "White-label deployment", price: "$500/month" },
];

const faqs = [
  {
    question: "Do I have to pay for modules I don't use?",
    answer: "No. Each module can be toggled on or off. You only pay for what's active.",
  },
  {
    question: "What counts as an 'AI query'?",
    answer: "Any time an AI agent processes a request — summarizing a meeting, answering a knowledge base question, generating a task list. Background syncing (like HubSpot updates) doesn't count.",
  },
  {
    question: "Can I start with Starter and upgrade later?",
    answer: "Yes. You can add modules anytime. Your data carries over.",
  },
  {
    question: "Is there a free trial?",
    answer: "Contact us for installation and pricing details.",
  },
  {
    question: "What about annual pricing?",
    answer: "Pay annually and get 2 months free (effectively 17% off).",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="section px-6 lg:px-12 bg-gradient-to-b from-background to-card/50">
      <div className="section-inner">
        {/* Section Header */}
        <div className="text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            <DollarSign className="w-3 h-3 mr-1" />
            Pricing
          </Badge>
          <h2 className="mb-4">Modular Pricing. Pay Only for What You Use.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We don't believe in forcing you into tiers you don't need. Turn on the modules that matter. Turn off what doesn't. Add more as you grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`document-card flex flex-col relative overflow-hidden ${
                plan.highlighted
                  ? "ring-2 ring-primary shadow-xl shadow-primary/10"
                  : ""
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
              )}

              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  {plan.highlighted && (
                    <Badge className="bg-primary text-primary-foreground">Popular</Badge>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              {/* Includes */}
              <div className="mb-6">
                <p className="text-xs font-bold text-muted-foreground uppercase mb-3">Includes:</p>
                <ul className="space-y-2">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features */}
              <div className="flex-1 mb-6">
                <p className="text-xs font-bold text-muted-foreground uppercase mb-3">You get:</p>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Sparkles className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Button
                size="lg"
                variant={plan.highlighted ? "default" : "outline"}
                className="w-full font-bold"
                asChild
              >
                <a
                  href={plan.name === "Enterprise" ? "https://collabai.software/contact" : "https://collabai.software/try-demo"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Add-Ons */}
        <div className="max-w-2xl mx-auto w-full">
          <h3 className="text-center font-bold mb-4">Add-Ons (Any Plan)</h3>
          <div className="document-card">
            <div className="grid grid-cols-2 gap-4">
              {addOns.map((addon) => (
                <div key={addon.name} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                  <span className="text-sm text-muted-foreground">{addon.name}</span>
                  <span className="text-sm font-bold text-foreground">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-center font-bold mb-4 flex items-center justify-center gap-2">
            <HelpCircle className="w-5 h-5 text-primary" />
            Frequently Asked Questions
          </h3>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-bold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

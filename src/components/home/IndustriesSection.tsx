import { Badge } from "@/components/ui/badge";
import {
  Stethoscope,
  CircleDollarSign,
  Building2,
  Shield,
  Sparkles,
} from "lucide-react";

const industries = [
  {
    icon: Stethoscope,
    title: "Healthcare",
    description:
      "Patient data stays private. AI agents handle intake, scheduling, documentation, and compliance.",
  },
  {
    icon: CircleDollarSign,
    title: "Mortgage & Finance",
    description:
      "Automate loan processing, document review, and compliance checks with private AI.",
  },
  {
    icon: Building2,
    title: "Property Management",
    description:
      "Manage tenants, maintenance, and operations with AI-powered dashboards.",
  },
  {
    icon: Shield,
    title: "Regulated Enterprises",
    description:
      "Any organization that handles sensitive data and can't risk it in a public cloud.",
  },
];

export function IndustriesSection() {
  return (
    <section id="industries" className="section px-6 lg:px-12 bg-card relative">
      {/* Top divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      <div className="section-inner">
        {/* Section Header */}
        <div className="text-center">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            <Sparkles className="w-3 h-3 mr-1" />
            Industries
          </Badge>
          <h2 className="mb-4">Built for Industries Where Compliance and Data Privacy Are Non-Negotiable.</h2>
          {/* <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Control Tower was built inside an agency. We know the pain of client work, billable hours, and managing 20 projects at once. That's why it works so well for professional services.
          </p> */}
        </div>

        {/* Industry Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="document-card group relative overflow-hidden flex flex-col h-full"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-start gap-3 mb-3">
                <div className="icon-container shrink-0 group-hover:bg-primary/10 transition-colors">
                  <industry.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-xl font-bold leading-tight pt-0.5">{industry.title}</h3>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed flex-1">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

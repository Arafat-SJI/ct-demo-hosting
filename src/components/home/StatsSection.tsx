import { Badge } from "@/components/ui/badge";
import { BarChart3, Building2, Bot, ShieldCheck, Factory } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "181+",
    label: "Organizations using CollabAI",
  },
  {
    icon: Bot,
    value: "76",
    label: "Pre-built AI Agents",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Private — Your Infrastructure",
  },
  {
    icon: Factory,
    value: "5+",
    label: "Industries Served",
  },
];

export function StatsSection() {
  return (
    <section id="stats" className="section px-6 lg:px-12 bg-gradient-to-br from-primary/5 via-card to-accent/5 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="section-inner relative z-10">
        <div className="text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            <BarChart3 className="w-3 h-3 mr-1" />
            Stats
          </Badge>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="document-card text-center h-full flex flex-col">
              <div className="icon-container mx-auto mb-3">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <p className="text-lg text-muted-foreground leading-relaxed flex-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

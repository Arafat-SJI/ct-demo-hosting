import { Badge } from "@/components/ui/badge";
import { Server, Settings2, LogIn, Play, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Server,
    title: "Deployed on your infrastructure",
    description:
      "We deploy Control Tower on your infrastructure — cloud, on-premise, or hybrid. Your data never moves.",
  },
  {
    icon: Settings2,
    title: "Configured for your workflows",
    description:
      "We configure your dashboards, connect your existing tools, and set up your AI agents for your specific workflows.",
  },
  {
    icon: LogIn,
    title: "Your team starts working",
    description:
      "Your team logs in and starts working. No training required. Business-user-first design.",
  },
];

const timeline = [
  { week: "Week 1", title: "Admin setup", tasks: ["Connect integrations", "Configure agents"] },
  { week: "Week 2", title: "Team training", tasks: ["2-hour workshops", "Pilot users"] },
  { week: "Week 3", title: "Data import", tasks: ["Historical context", "Fine-tune agents"] },
  { week: "Week 4", title: "Go-live", tasks: ["Optimization", "Full rollout"] },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section px-6 lg:px-12 bg-gradient-to-b from-background to-card/50">
      <div className="section-inner">
        {/* Section Header */}
        <div className="text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Play className="w-3 h-3 mr-1" />
            How It Works
          </Badge>
          <h2 className="mb-4">Get Running in Days, Not Months</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to add an AI workforce to your team.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto w-full">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden sm:block absolute left-[39px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
            
            <div className="space-y-5">
              {steps.map((step, index) => (
                <div key={step.title} className="document-card relative">
                  {/* Mobile: stacked — no cramped two-column row */}
                  <div className="flex flex-col gap-2 sm:hidden">
                    <div className="flex items-center gap-3">
                      <div className="number-badge shrink-0 text-sm" aria-hidden>
                        {index + 1}
                      </div>
                      <div className="icon-container shrink-0">
                        <step.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold leading-snug text-foreground">{step.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>

                  {/* Desktop: timeline + side-by-side icon and copy */}
                  <div className="hidden items-start gap-5 sm:flex">
                    <div className="relative z-10 shrink-0">
                      <div className="number-badge text-sm">{index + 1}</div>
                    </div>

                    <div className="flex min-w-0 flex-1 items-start gap-3">
                      <div className="icon-container shrink-0">
                        <step.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col gap-1">
                        <h3 className="text-lg font-bold leading-snug text-foreground">{step.title}</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Onboarding Timeline */}
        {/* <div className="max-w-4xl mx-auto">
          <h3 className="text-center text-lg font-bold mb-6">Onboarding Timeline</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {timeline.map((item, index) => (
              <div key={item.week} className="document-card text-center">
                <Badge variant="secondary" className="mb-3">{item.week}</Badge>
                <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                <ul className="space-y-1">
                  {item.tasks.map((task) => (
                    <li key={task} className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="w-3 h-3 text-primary" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}

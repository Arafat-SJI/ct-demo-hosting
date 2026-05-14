import { Badge } from "@/components/ui/badge";
import { Lightbulb, ScanSearch, Zap, Lock } from "lucide-react";

const pillars = [
  {
    icon: ScanSearch,
    title: "See Everything",
    description:
      "Real-time dashboards across all your operations. Every metric, every team, every client — one view.",
  },
  {
    icon: Zap,
    title: "Automate the Work",
    description:
      "AI agents handle repetitive tasks, surface insights, and trigger workflows automatically.",
  },
  {
    icon: Lock,
    title: "Own Your Data",
    description:
      "Deployed behind your firewall. Your infrastructure. Zero data leaves your environment.",
  },
];

export function SolutionSection() {
  return (
    <section id="solution" className="section px-6 lg:px-12 bg-gradient-to-b from-background to-card/50">
      <div className="section-inner">
        {/* Section Header */}
        <div className="text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Lightbulb className="w-3 h-3 mr-1" />
            Introducing Control Tower
          </Badge>
          <h2 className="mb-4">One Platform. Full Visibility. AI Doing the Work.</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Control Tower is an AI-powered operations platform built for regulated industries. It connects your data, your workflows, and your AI agents in one place — deployed privately inside your own infrastructure.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-3">
          Your team gets dashboards, automation, and AI assistance without giving up control of your data. No developers needed. No compliance risk. Just operations that actually run.
          </p>
        </div>


        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="document-card text-center bg-card group h-full flex flex-col"
            >
              <div className="icon-container mb-4 mx-auto group-hover:bg-primary/10 transition-colors">
                <pillar.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed flex-1">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Concept Explanation */}
        {/* <div className="max-w-3xl mx-auto mb-10">
          <p className="text-center text-muted-foreground">
            Your team keeps using HubSpot for deals. Zoom for meetings. Google Drive for docs. Slack for communication. Nothing changes about <em>how</em> they work.
          </p>
          <p className="text-center text-foreground font-bold mt-4">
            What changes: AI agents now work alongside them.
          </p>
        </div> */}

        {/* Integration Diagram */}
        {/* <div className="document-card max-w-4xl mx-auto overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-6">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Your Existing Tools
              </h3>
              <div className="space-y-3">
                {integrations.map((item) => (
                  <div key={item.tool} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border border-border">
                    <span className="font-bold text-foreground">{item.tool}</span>
                    <ArrowLeftRight className="w-4 h-4 text-primary" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                Control Tower AI Agents
              </h3>
              <div className="space-y-3">
                {integrations.map((item) => (
                  <div key={item.agent} className="flex items-center p-3 rounded-lg bg-primary/5 border border-primary/20">
                    <span className="text-sm font-medium text-foreground">{item.agent}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-border bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 p-6">
            <div className="flex items-center justify-center gap-3 text-center">
              <Target className="w-5 h-5 text-primary" />
              <p className="font-bold text-foreground">One Dashboard. Full Visibility. AI Agents Working 24/7.</p>
            </div>
          </div>
        </div> */}

        {/* The Result */}
        {/* <div className="max-w-3xl mx-auto mt-10 text-center">
          <div className="document-card bg-primary/5 border-primary/20">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Users className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold">The Result</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Your people focus on client work, strategy, and relationships. The AI agents handle coordination, context-gathering, follow-ups, and reporting.
            </p>
            <p className="text-xl font-bold text-primary">Same workflow. New workforce.</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}

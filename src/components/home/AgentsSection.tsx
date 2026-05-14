import { Link } from "react-router-dom";
import {
  Sparkles,
  LayoutDashboard,
  Bot,
  Brain,
  Workflow,
  Users,
  Plug2,
  Smartphone,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { teams, agents, getAgentsByTeam } from "@/data/agentsData";

const featuredSlugs = ["deal-coach", "meeting-intelligence", "project-analyzer", "task-ai-chat", "eos-triage-assistant", "pod-weekly-ai-summary"];
const featuredAgents = featuredSlugs.map((s) => agents.find((a) => a.slug === s)!).filter(Boolean);

const featureGrid = [
  {
    icon: LayoutDashboard,
    title: "Operational Dashboards",
    description:
      "Real-time visibility across clients, projects, and teams. Custom views per department.",
  },
  {
    icon: Bot,
    title: "76+ AI Agents",
    description:
      "Pre-built agents for healthcare, mortgage, finance, operations, marketing, and more.",
  },
  {
    icon: Brain,
    title: "Private Knowledge Base",
    description:
      "Upload your docs, policies, and procedures. AI answers questions from your own data.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Trigger-based workflows that connect your tools and eliminate manual handoffs.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Departments, roles, and permissions built in. Every team member sees what they need.",
  },
  {
    icon: Plug2,
    title: "Integrations",
    description:
      "Connect CRMs, APIs, document systems, and enterprise tools via our integration layer.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "iOS and Android apps so your team stays connected on the go.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "RBAC, SSO, audit logs, encryption, and compliance controls out of the box.",
  },
];

export function AgentsSection() {
  return (
    <section id="features" className="section px-6 lg:px-12 bg-card relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="section-inner">
        {/* Section Header */}
        <div className="text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Sparkles className="w-3 h-3 mr-1" />
            Features
          </Badge>
          <h2 className="mb-4">Everything Your Operations Team Needs.</h2>
          {/* <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {agents.length} pre-configured AI agents trained on your company data — meetings, docs, projects, deals — so they have context a generic chatbot never will.
          </p> */}
        </div>

        {/* Agent Teams */}
        {/* <div className="mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-6 text-center">
            Introducing
          </p>
          <h3 className="text-2xl font-bold text-center mb-8">Agent Teams</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teams.slice(0, 6).map((team) => {
              const teamAgents = getAgentsByTeam(team.slug);
              return (
                <Link key={team.slug} to={`/agents/${team.slug}`} className="relative group">
                  <div className={`absolute inset-0 rounded-xl ${team.shadowColors[1]} translate-y-3 translate-x-1 scale-[0.97]`} />
                  <div className={`absolute inset-0 rounded-xl ${team.shadowColors[0]} translate-y-1.5 translate-x-0.5 scale-[0.985]`} />

                  <div className="relative rounded-xl border border-border bg-card p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                    <div className="flex -space-x-3 mb-4">
                      {teamAgents.slice(0, 4).map((a, i) => (
                        <div key={i} className={`w-10 h-10 rounded-full bg-gradient-to-br ${a.gradient} flex items-center justify-center ring-2 ring-card`}>
                          <a.icon className="w-5 h-5 text-white" />
                        </div>
                      ))}
                      {teamAgents.length > 4 && (
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center ring-2 ring-card text-xs font-bold text-muted-foreground">
                          +{teamAgents.length - 4}
                        </div>
                      )}
                    </div>

                    <h4 className="text-lg font-bold mb-1">{team.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{team.description}</p>
                    <Badge variant="secondary" className="text-[10px] mb-3">{teamAgents.length} agents</Badge>

                    <div className="flex items-center gap-1 text-sm font-semibold text-primary">
                      Explore Team <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div> */}

        {/* Featured Agent Cards */}
        {/* <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
          {featuredAgents.map((agent) => (
            <Link
              key={agent.slug}
              to={`/agents/${agent.teamSlug}/${agent.slug}`}
              className="group rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`h-20 bg-gradient-to-r ${agent.gradient} relative`}>
                <span className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                  Core
                </span>
              </div>

              <div className="px-5 -mt-6 relative z-10">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${agent.gradient} flex items-center justify-center ring-4 ring-card shadow-md`}>
                  <agent.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="px-5 pt-2 pb-5">
                <h4 className="text-base font-bold mb-1">{agent.name}</h4>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{agent.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  <Badge variant="secondary" className="text-[10px]">{agent.trigger}</Badge>
                  <Badge variant="secondary" className="text-[10px]">{agent.model}</Badge>
                </div>
              </div>
            </Link>
          ))}
        </div> */}

        {/* Browse All CTA */}
        {/* <div className="text-center">
          <Button size="lg" className="font-bold" asChild>
            <Link to="/agents">
              Browse All {agents.length} Agents <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div> */}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featureGrid.map((item) => (
            <div
              key={item.title}
              className="document-card text-center bg-card group h-full flex flex-col"
            >
              <div className="icon-container mb-4 mx-auto group-hover:bg-primary/10 transition-colors">
                <item.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed flex-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

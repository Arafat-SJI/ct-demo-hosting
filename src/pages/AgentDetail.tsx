import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Cpu, Zap, Database as DbIcon, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { getAgentBySlug, getTeamBySlug, getAgentsByTeam } from "@/data/agentsData";

export default function AgentDetail() {
  const { teamSlug, agentSlug } = useParams<{ teamSlug: string; agentSlug: string }>();
  const agent = agentSlug ? getAgentBySlug(agentSlug) : undefined;
  const team = teamSlug ? getTeamBySlug(teamSlug) : undefined;

  if (!agent || !team) return <Navigate to="/agents" replace />;

  const relatedAgents = getAgentsByTeam(team.slug).filter((a) => a.slug !== agent.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Banner */}
      <section className={`bg-gradient-to-r ${agent.gradient} relative`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/70 text-sm mb-8">
            <Link to="/agents" className="hover:text-white transition-colors">Agents</Link>
            <span>/</span>
            <Link to={`/agents/${team.slug}`} className="hover:text-white transition-colors">{team.name}</Link>
            <span>/</span>
            <span className="text-white font-medium">{agent.name}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 lg:px-12 -mt-14 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main */}
            <div className="flex-1">
              <div className="bg-card rounded-xl border border-border p-8 shadow-lg">
                {/* Icon + Name */}
                <div className="flex items-start gap-5 mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${agent.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <agent.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap mb-2">
                      <h1 className="text-2xl md:text-3xl font-bold">{agent.name}</h1>
                      <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">Core</Badge>
                    </div>
                    <p className="text-muted-foreground">{agent.description}</p>
                  </div>
                </div>

                {/* CTA */}
                <Button size="lg" className="w-full md:w-auto mb-8 font-bold" asChild>
                  <a href="https://controltowerdemo.collabai.software" target="_blank" rel="noopener noreferrer">
                    <Play className="w-4 h-4 mr-2" /> Run Agent in Demo
                  </a>
                </Button>

                {/* Metadata */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  <div className="rounded-lg bg-muted p-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
                      <Cpu className="w-3.5 h-3.5" /> Model
                    </div>
                    <p className="text-sm font-semibold">{agent.model}</p>
                    <p className="text-xs text-muted-foreground">{agent.provider}</p>
                  </div>
                  <div className="rounded-lg bg-muted p-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
                      <Zap className="w-3.5 h-3.5" /> Trigger
                    </div>
                    <p className="text-sm font-semibold">{agent.trigger}</p>
                  </div>
                  <div className="rounded-lg bg-muted p-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
                      <DbIcon className="w-3.5 h-3.5" /> Data Sources
                    </div>
                    <p className="text-sm font-semibold">{agent.dataSources.length} sources</p>
                  </div>
                </div>

                {/* Data Sources */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-3">Data Sources</h3>
                  <div className="flex flex-wrap gap-2">
                    {agent.dataSources.map((ds) => (
                      <Badge key={ds} variant="secondary">{ds}</Badge>
                    ))}
                  </div>
                </div>

                {/* Team info */}
                <div className="rounded-lg border border-border p-4">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Part of</p>
                  <Link to={`/agents/${team.slug}`} className="flex items-center gap-3 group">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${team.gradient} flex items-center justify-center`}>
                      <team.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold group-hover:text-primary transition-colors">{team.name}</p>
                      <p className="text-xs text-muted-foreground">{team.description}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar — related agents */}
            {relatedAgents.length > 0 && (
              <div className="w-full md:w-80 flex-shrink-0">
                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="font-bold mb-4">Other Agents in {team.name}</h3>
                  <div className="space-y-3">
                    {relatedAgents.map((ra) => (
                      <Link
                        key={ra.slug}
                        to={`/agents/${team.slug}/${ra.slug}`}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors group"
                      >
                        <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${ra.gradient} flex items-center justify-center flex-shrink-0`}>
                          <ra.icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold group-hover:text-primary transition-colors truncate">{ra.name}</p>
                          <p className="text-xs text-muted-foreground truncate">{ra.trigger}</p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <Button variant="outline" size="sm" className="w-full mt-4" asChild>
                    <Link to={`/agents/${team.slug}`}>
                      View All <ArrowLeft className="w-3 h-3 ml-1 rotate-180" />
                    </Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-16" />
    </div>
  );
}

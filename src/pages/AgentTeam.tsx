import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { getTeamBySlug, getAgentsByTeam } from "@/data/agentsData";

export default function AgentTeam() {
  const { teamSlug } = useParams<{ teamSlug: string }>();
  const team = teamSlug ? getTeamBySlug(teamSlug) : undefined;
  const teamAgents = teamSlug ? getAgentsByTeam(teamSlug) : [];

  if (!team) return <Navigate to="/agents" replace />;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero banner */}
      <section className={`bg-gradient-to-r ${team.gradient} py-16 px-6 lg:px-12`}>
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/70 text-sm mb-6">
            <Link to="/agents" className="hover:text-white transition-colors flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" /> Agents
            </Link>
            <span>/</span>
            <span className="text-white font-medium">{team.name}</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <team.icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">{team.name}</h1>
              <p className="text-white/80 mt-1">{team.description}</p>
            </div>
          </div>

          <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
            {teamAgents.length} agents
          </Badge>
        </div>
      </section>

      {/* Agent grid */}
      <section className="section px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamAgents.map((agent) => (
              <Link
                key={agent.slug}
                to={`/agents/${teamSlug}/${agent.slug}`}
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

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <Badge variant="secondary" className="text-[10px]">{agent.trigger}</Badge>
                    <Badge variant="secondary" className="text-[10px]">{agent.model}</Badge>
                  </div>

                  <div className="flex items-center gap-1 text-sm font-semibold text-primary">
                    View Details <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link to="/agents">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to All Agents
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

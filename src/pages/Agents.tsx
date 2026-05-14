import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight, Sparkles, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { teams, agents, getAgentsByTeam } from "@/data/agentsData";

export default function Agents() {
  const [search, setSearch] = useState("");
  const [activeTeam, setActiveTeam] = useState<string | null>(null);

  const filtered = agents.filter((a) => {
    const matchesSearch =
      !search ||
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.description.toLowerCase().includes(search.toLowerCase());
    const matchesTeam = !activeTeam || a.teamSlug === activeTeam;
    return matchesSearch && matchesTeam;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="section px-6 lg:px-12 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Sparkles className="w-3 h-3 mr-1" />
            AI Agents Directory
          </Badge>
          <h1 className="mb-4">
            Browse <span className="gradient-text">{agents.length} AI Agents</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore every agent inside the Control Tower — organized by team, searchable, and ready to deploy.
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder={`Search ${agents.length} agents…`}
              className="pl-10 h-12 text-base"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Teams */}
      <section className="section px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-6 text-center">
            Introducing
          </p>
          <h2 className="text-2xl font-bold text-center mb-8">Agent Teams</h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teams.map((team) => {
              const teamAgents = getAgentsByTeam(team.slug);
              return (
                <Link
                  key={team.slug}
                  to={`/agents/${team.slug}`}
                  className="relative group"
                >
                  <div className={`absolute inset-0 rounded-xl ${team.shadowColors[1]} translate-y-3 translate-x-1 scale-[0.97]`} />
                  <div className={`absolute inset-0 rounded-xl ${team.shadowColors[0]} translate-y-1.5 translate-x-0.5 scale-[0.985]`} />

                  <div className="relative rounded-xl border border-border bg-card p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                    <div className="flex -space-x-3 mb-4">
                      {teamAgents.slice(0, 4).map((a, i) => (
                        <div
                          key={i}
                          className={`w-10 h-10 rounded-full bg-gradient-to-br ${a.gradient} flex items-center justify-center ring-2 ring-card`}
                        >
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
        </div>
      </section>

      {/* All Agents */}
      <section className="section px-6 lg:px-12 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">All Agents</h2>

          {/* Filter bar */}
          <div className="flex flex-wrap gap-2 mb-8">
            <Button
              variant={activeTeam === null ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTeam(null)}
            >
              <Filter className="w-3 h-3 mr-1" /> All
            </Button>
            {teams.map((t) => (
              <Button
                key={t.slug}
                variant={activeTeam === t.slug ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveTeam(activeTeam === t.slug ? null : t.slug)}
              >
                {t.name}
              </Button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((agent) => (
              <Link
                key={agent.slug}
                to={`/agents/${agent.teamSlug}/${agent.slug}`}
                className="group rounded-xl border border-border bg-background overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className={`h-20 bg-gradient-to-r ${agent.gradient} relative`}>
                  <span className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                    Core
                  </span>
                </div>

                <div className="px-5 -mt-6 relative z-10">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${agent.gradient} flex items-center justify-center ring-4 ring-background shadow-md`}>
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
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No agents found matching your search.</p>
          )}
        </div>
      </section>
    </div>
  );
}

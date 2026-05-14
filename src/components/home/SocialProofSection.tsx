import { Badge } from "@/components/ui/badge";
import { Trophy, Clock, Video, Cpu, FolderKanban, TrendingUp, Quote } from "lucide-react";

const metrics = [
  { icon: Clock, value: "40+", label: "Hours saved per week" },
  { icon: Video, value: "2,500+", label: "Meetings auto-processed" },
  { icon: Cpu, value: "10,000+", label: "AI agent tasks completed" },
  { icon: FolderKanban, value: "166", label: "Active projects tracked" },
  { icon: TrendingUp, value: "Full", label: "Pipeline visibility" },
];

const testimonials = [
  {
    quote: "Control Tower changed how we run the business. We used to spend Monday mornings catching up on what happened last week. Now the AI tells us before we even ask. Our L10 meetings actually take 90 minutes instead of running over.",
    author: "Leadership Team",
    company: "SJ Innovation",
  },
  {
    quote: "The Meeting Assistant alone was worth it. I used to spend 30 minutes after every client call typing up notes and creating tasks. Now I just end the Zoom and it's all done. That's 5+ hours a week back.",
    author: "Project Manager",
    company: "",
  },
  {
    quote: "Finally, a knowledge base people actually use. We tried Notion. We tried Confluence. Nobody searched them. Control Tower's AI search actually finds things because it understands what you mean, not just what you type.",
    author: "Operations Lead",
    company: "",
  },
];

export function SocialProofSection() {
  return (
    <section id="proof" className="section px-6 lg:px-12 bg-gradient-to-b from-background to-card/50">
      <div className="section-inner">
        {/* Section Header */}
        <div className="text-center">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            <Trophy className="w-3 h-3 mr-1" />
            Proven Results
          </Badge>
          <h2 className="mb-4">Battle-Tested, Not Beta</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Control Tower isn't a startup experiment. It's been running inside SJ Innovation for over a year — managing real projects, real clients, real dollars.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="document-card text-center">
              <div className="icon-container mx-auto mb-3">
                <metric.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{metric.value}</div>
              <p className="text-xs text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="document-card relative">
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="pt-4 border-t border-border">
                <p className="font-bold text-foreground text-sm">{testimonial.author}</p>
                {testimonial.company && (
                  <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

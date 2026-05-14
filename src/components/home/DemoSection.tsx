import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, CheckCircle, ExternalLink, Copy } from "lucide-react";
import { useState } from "react";

const features = [
  "Live dashboard with real project data",
  "Meeting transcripts with AI summaries",
  "EOS framework with V/TO, Rocks, and Scorecard",
  "AI chat interface — ask questions about the business",
  "Task management with Streams and Categories",
  "Knowledge base with semantic search",
  "Full admin panel and configuration options",
];

export function DemoSection() {
  const [copiedDemo, setCopiedDemo] = useState(false);
  const [copiedAdmin, setCopiedAdmin] = useState(false);

  const copyToClipboard = (text: string, type: 'demo' | 'admin') => {
    navigator.clipboard.writeText(text);
    if (type === 'demo') {
      setCopiedDemo(true);
      setTimeout(() => setCopiedDemo(false), 2000);
    } else {
      setCopiedAdmin(true);
      setTimeout(() => setCopiedAdmin(false), 2000);
    }
  };

  return (
    <section id="demo" className="section px-6 lg:px-12 bg-card relative">
      {/* Top divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      <div className="section-inner">
        {/* Section Header */}
        <div className="text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Play className="w-3 h-3 mr-1" />
            Live Demo
          </Badge>
          <h2 className="mb-4">See It Working. Right Now.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't take our word for it. Log into a live Control Tower instance with real data, real agents, and real functionality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Demo Credentials */}
          <div className="space-y-6">
            {/* Demo URL */}
            <div className="document-card">
              <h3 className="font-bold mb-3">Demo URL</h3>
              <a 
                href="https://controltowerdemo.collabai.software" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline flex items-center gap-2"
              >
                controltowerdemo.collabai.software
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Demo User */}
            <div className="document-card">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold">Demo User (View All Features)</h3>
                <button 
                  onClick={() => copyToClipboard('demo@collabai.software / Demo@123', 'demo')}
                  className="text-xs text-primary hover:underline flex items-center gap-1"
                >
                  <Copy className="w-3 h-3" />
                  {copiedDemo ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <div className="space-y-2 text-sm">
                <p><span className="text-muted-foreground">Email:</span> <code className="bg-muted px-2 py-1 rounded">demo@collabai.software</code></p>
                <p><span className="text-muted-foreground">Password:</span> <code className="bg-muted px-2 py-1 rounded">Demo@123</code></p>
              </div>
            </div>

            {/* Admin User */}
            <div className="document-card">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold">Admin User (See Admin Panel)</h3>
                <button 
                  onClick={() => copyToClipboard('admin@collabai.software / Admin@123', 'admin')}
                  className="text-xs text-primary hover:underline flex items-center gap-1"
                >
                  <Copy className="w-3 h-3" />
                  {copiedAdmin ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <div className="space-y-2 text-sm">
                <p><span className="text-muted-foreground">Email:</span> <code className="bg-muted px-2 py-1 rounded">admin@collabai.software</code></p>
                <p><span className="text-muted-foreground">Password:</span> <code className="bg-muted px-2 py-1 rounded">Admin@123</code></p>
              </div>
            </div>

            {/* CTA */}
            <Button size="lg" className="w-full font-bold" asChild>
              <a href="https://controltowerdemo.collabai.software" target="_blank" rel="noopener noreferrer">
                <Play className="w-4 h-4 mr-2" />
                Launch Demo
              </a>
            </Button>
          </div>

          {/* What You'll See */}
          <div className="document-card h-fit">
            <h3 className="font-bold mb-4">What You'll See</h3>
            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

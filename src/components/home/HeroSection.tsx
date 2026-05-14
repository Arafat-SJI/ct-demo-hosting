import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Server, Plug, LayoutDashboard, Users, Bot, Sparkles, Layers, Cpu, Play, ArrowRight } from "lucide-react";

// Import screenshots
import dashboardImg from "@/assets/screenshots/dashboard-setup.png";
import meetingsImg from "@/assets/screenshots/meetings-view.png";
import aiAgentsImg from "@/assets/screenshots/reports-analytics.png";

const trustBadges = [
  { icon: Shield, label: "HIPAA Ready" },
  { icon: Server, label: "Your Data, Your Servers" },
  { icon: Plug, label: "Works With Your Existing Tools" },
];

const tabs = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, image: dashboardImg },
  { id: "meetings", label: "Meetings", icon: Users, image: meetingsImg },
  { id: "agents", label: "AI Agents", icon: Bot, image: aiAgentsImg },
];

export function HeroSection() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const rotateIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const advanceTab = useCallback(() => {
    setActiveTab((current) => {
      const idx = tabs.findIndex((t) => t.id === current);
      const next = tabs[(idx + 1) % tabs.length];
      return next.id;
    });
  }, []);

  const startAutoRotate = useCallback(() => {
    if (rotateIntervalRef.current) {
      clearInterval(rotateIntervalRef.current);
      rotateIntervalRef.current = null;
    }
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    rotateIntervalRef.current = setInterval(advanceTab, 3000);
  }, [advanceTab]);

  useEffect(() => {
    startAutoRotate();
    return () => {
      if (rotateIntervalRef.current) {
        clearInterval(rotateIntervalRef.current);
        rotateIntervalRef.current = null;
      }
    };
  }, [startAutoRotate]);

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    startAutoRotate();
  };

  return (
    <section
      id="hero"
      className="section relative isolate w-full overflow-x-clip border-b border-white/5 bg-[#001E54] px-0 text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_100%_0%,rgba(9,106,237,0.28),transparent_50%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#096AED]/12 via-transparent to-[#000d28]"
        aria-hidden
      />
      <div className="section-inner relative z-10 px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Column - Content */}
          <div>
            {/* Eyebrow */}
            <Badge className="mb-5 border border-white/15 bg-white/10 text-white hover:bg-white/15">
              <Sparkles className="w-3 h-3 mr-1 text-[#096AED]" />
              <h1 className="text-[12px] py-[2px]">AI Operations Platform for Regulated Industries</h1>
            </Badge>

            {/* Headline */}
            <h2 className="mb-5">
              <span className="block text-white md:text-[60px] text-[40px] leading-[1.1]">
                Your Operations Under Control
              </span>
              <span className="gradient-text block pb-1 leading-[1.2] md:text-[60px] text-[40px]">
                Powered by AI.
              </span>
            </h2>

            {/* Subheadline */}
            <p className="mb-4 text-lg leading-relaxed text-white/75">
            Control Tower by CollabAI gives your team one place to see everything, automate the work, and stay compliant — privately behind your firewall.
            </p>

            {/* Supporting Text */}
            <p className="mb-8 text-lg text-white/75">
              Used internally at SJ Innovation for 1+ year. Thousands of hours saved. Now available for agencies, professional services firms, and mid-market companies running EOS.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-3">
              <Button
                size="lg"
                className="border-0 bg-[#096AED] font-bold text-white shadow-lg shadow-black/20 transition-all hover:bg-[#096AED]/90 hover:shadow-black/25"
                asChild
              >
                <a href="https://controltowerdemo.collabai.software" target="_blank" rel="noopener noreferrer">
                  <Play className="w-4 h-4 mr-2" />
                  Book a Free Demo
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/25 bg-transparent font-bold text-white hover:bg-white/10 hover:text-white"
                asChild
              >
                <a href="https://collabai.software/contact" target="_blank" rel="noopener noreferrer">
                See How It Works <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
            <p className="mb-6 max-w-xl text-lg text-white/75">
              Trusted by healthcare, mortgage, finance, and property management teams. No data leaves your infrastructure.
            </p>
            {/* <p className="text-xs text-muted-foreground mb-8">No signup required. See it working now.</p> */}

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90"
                >
                  <badge.icon className="h-4 w-4 shrink-0 text-[#096AED]" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Tabbed Screenshot Preview */}
          <div className="hidden lg:block">
            {/* Tab Buttons */}
            <div
              className="inline-flex gap-1 rounded-xl border border-white/10 bg-white/5 p-1.5 shadow-sm backdrop-blur-sm mb-5"
              role="tablist"
              aria-label="Product preview"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-[#096AED] text-white shadow-lg shadow-black/25"
                      : "text-white/60 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <tab.icon className={`h-4 w-4 transition-transform duration-300 ${activeTab === tab.id ? "scale-110" : ""}`} />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Screenshot Display */}
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#096AED]/25 via-[#096AED]/10 to-[#096AED]/25 opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-80" />
              
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a2247] shadow-2xl shadow-black/40">
                {/* Browser header */}
                <div className="flex items-center gap-2 border-b border-white/10 bg-[#061838] px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-destructive" />
                    <div className="h-3 w-3 rounded-full bg-[hsl(var(--warning))]" />
                    <div className="h-3 w-3 rounded-full bg-[#096AED]" />
                  </div>
                  <div className="mx-4 flex-1">
                    <div className="flex h-6 items-center rounded-md bg-[#001E54]/80 px-3">
                      <span className="truncate text-xs font-medium text-white/55">controltower.collabai.software</span>
                    </div>
                  </div>
                </div>
                
                {/* Screenshot content */}
                <div className="relative">
                  {tabs.map((tab) => (
                    <img
                      key={tab.id}
                      src={tab.image}
                      alt={`${tab.label} preview`}
                      className={`w-full h-[350px] object-cover object-top transition-opacity duration-700 ease-in-out ${
                        activeTab === tab.id
                          ? "opacity-100 relative z-[1]"
                          : "opacity-0 absolute inset-0 z-0 pointer-events-none"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Stats */}
            {/* <div className="mt-6 flex justify-center flex-wrap gap-4">
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border shadow-sm">
                <div className="icon-container shrink-0">
                  <Layers className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">40+</div>
                  <div className="text-xs text-muted-foreground font-medium">Hours Saved/Week</div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border shadow-sm">
                <div className="icon-container shrink-0">
                  <Cpu className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">48</div>
                  <div className="text-xs text-muted-foreground font-medium">AI Agents 24/7</div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border shadow-sm">
                <div className="icon-container shrink-0">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">2.5K+</div>
                  <div className="text-xs text-muted-foreground font-medium">Meetings Processed</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

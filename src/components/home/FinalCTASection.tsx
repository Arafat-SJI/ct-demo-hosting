import { Button } from "@/components/ui/button";
import { Sparkles, CalendarCheck } from "lucide-react";

export function FinalCTASection() {
  return (
    <section id="cta" className="section px-6 lg:px-12 bg-gradient-to-br from-primary/5 via-card to-accent/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="section-inner relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent mb-6">
            <Sparkles className="w-7 h-7 text-white" />
          </div>
          
          {/* Headline */}
          <h2 className="mb-4">Ready to put your operations under control?</h2>

          {/* Subheadline */}
          <p className="text-lg text-muted-foreground mb-8">
            See Control Tower in action with a free 30-minute demo. We'll show you exactly how it works for your industry.
       
          </p>

          {/* CTA Buttons */}
          {/* <div className="flex flex-wrap justify-center gap-4 mb-5">
            <Button size="lg" className="font-bold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all" asChild>
              <a href="https://controltowerdemo.collabai.software" target="_blank" rel="noopener noreferrer">
                <Play className="w-4 h-4 mr-2" />
                Try Live Demo
              </a>
            </Button>
            <Button size="lg" variant="outline" className="font-bold border-2" asChild>
              <a href="https://collabai.software/try-demo" target="_blank" rel="noopener noreferrer">
                <Rocket className="w-4 h-4 mr-2" />
                Start Free Trial
              </a>
            </Button>
            <Button size="lg" variant="ghost" className="font-bold" asChild>
              <a href="https://collabai.software/contact" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="w-4 h-4 mr-2" />
                Talk to Sales
              </a>
            </Button>
          </div> */}

          <div className="flex flex-wrap justify-center gap-4 mb-3">
            <Button size="lg" className="font-bold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all" asChild>
              <a href="https://collabai.software/contact" target="_blank" rel="noopener noreferrer">
                <CalendarCheck className="w-4 h-4 mr-2" />
                Book Your Free Demo
              </a>
            </Button>
          </div>
          <p className="text-lg text-muted-foreground">
            No commitment. No credit card. Setup takes days, not months.
          </p>

        </div>
      </div>
    </section>
  );
}

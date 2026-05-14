import { SiteLayout } from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";
import { Zap, Shield, Users } from "lucide-react";

const About = () => (
  <SiteLayout>
    <section className="section px-6 lg:px-12">
      <div className="max-w-3xl">
        <p className="text-sm font-medium text-primary mb-3">About Us</p>
        <h1 className="mb-6">About CollabAI Control Tower</h1>
        <p className="text-xl text-muted-foreground mb-12">We believe every professional services firm deserves access to AI-powered operations tools — without the complexity.</p>
        
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-muted-foreground leading-relaxed mb-6">Control Tower was born inside SJ Innovation, where we spent a year building and battle-testing an AI operations platform for our own agency. We saw the busywork drowning our team — copying meeting notes, chasing tasks, searching for context across a dozen tools.</p>
          <p className="text-muted-foreground leading-relaxed mb-6">So we built AI agents that work alongside our team — handling transcription, follow-ups, knowledge search, and pipeline updates — while everyone kept using the tools they already knew: HubSpot, Zoom, Google Drive, Slack.</p>
          <p className="text-muted-foreground leading-relaxed">After thousands of hours saved internally, we're making Control Tower available to agencies, law firms, accounting firms, healthcare organizations, and mid-market companies running EOS.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3 mb-12">
          <div className="document-card text-center">
            <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-1">Battle-Tested</h3>
            <p className="text-sm text-muted-foreground">1+ year in production at SJ Innovation</p>
          </div>
          <div className="document-card text-center">
            <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-1">HIPAA Ready</h3>
            <p className="text-sm text-muted-foreground">Your data, your servers, your control</p>
          </div>
          <div className="document-card text-center">
            <Users className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-1">Professional Services</h3>
            <p className="text-sm text-muted-foreground">Built for agencies, firms, and EOS companies</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button size="lg" asChild><a href="https://controltowerdemo.collabai.software" target="_blank" rel="noopener noreferrer">Try the Demo</a></Button>
          <Button size="lg" variant="outline" asChild><a href="https://collabai.software/contact" target="_blank" rel="noopener noreferrer">Contact Us</a></Button>
        </div>
      </div>
    </section>
  </SiteLayout>
);

export default About;

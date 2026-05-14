import { SiteLayout } from "@/components/layout/SiteLayout";
import { 
  Mic, 
  CheckCircle, 
  FileText, 
  BarChart3, 
  Target, 
  TrendingUp, 
  Shield, 
  Briefcase, 
  Bell,
  Users,
  RefreshCw,
  Zap,
  CalendarDays,
  Search,
  Palette
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Mic, title: "Meeting Assistant", description: "Joins your Zoom, Teams, and Google Meet calls. Auto-transcribes everything. Extracts action items. Creates tasks. Follows up with assignees automatically." },
  { icon: Briefcase, title: "Deal Manager", description: "Monitors your sales pipeline. Syncs with HubSpot bi-directionally. Alerts you when deals stall. Suggests next steps based on similar won deals." },
  { icon: Search, title: "Knowledge Librarian", description: "Indexes meeting transcripts, Google Drive docs, and internal wikis. Answers questions using semantic search (RAG). Finds what you need in seconds." },
  { icon: Target, title: "EOS Coach", description: "Built for companies running EOS. Tracks V/TO, Rocks, Scorecard, and Issues. Reminds you before L10 meetings. Surfaces what's off-track." },
  { icon: BarChart3, title: "Project Tracker", description: "Monitors project health across all engagements. Flags risks before they become problems. Syncs with ActiveCollab or your PM tool." },
  { icon: CheckCircle, title: "Task Coordinator", description: "Manages tasks across the organization. Groups work into Streams. Connects tasks to Rocks, OKRs, and client projects. Auto-follows up on overdue items." },
  { icon: FileText, title: "Document Management", description: "Centralize all documents with AI-powered Q&A. Upload policies, process docs, meeting notes — find anything instantly with semantic search." },
  { icon: TrendingUp, title: "Reports & Analytics", description: "Track productivity, project health, and team performance. Generate reports for leadership and clients with one click." },
  { icon: Shield, title: "HIPAA Ready", description: "Deploy on compliant infrastructure. Your data stays on your servers. Full audit logging for regulated industries." },
  { icon: RefreshCw, title: "Tool Integrations", description: "Connect to HubSpot, Zoom, Google Workspace, Slack, ActiveCollab, and more. OAuth setup takes minutes, not days." },
  { icon: Users, title: "Team Management", description: "Role-based access control. Admin, Moderator, and User permissions. Module-level visibility settings." },
  { icon: CalendarDays, title: "Calendar Sync", description: "Bi-directional calendar integration. AI agents know what's happening and when. Automatic meeting prep and follow-ups." },
  { icon: Bell, title: "Smart Notifications", description: "Personalized alerts via Slack and email. AI prioritizes what's urgent. Never miss a deadline or stalled deal." },
  { icon: Zap, title: "AI Chat Interface", description: "Ask questions about your business in natural language. Get answers with source citations from your knowledge base." },
  { icon: Palette, title: "White-Label Branding", description: "Your organization's identity — customizable logo, colors, and theme. Available on Enterprise plans." },
];

const Features = () => (
  <SiteLayout>
    <section className="section px-6 lg:px-12">
      <div className="max-w-4xl">
        <p className="text-sm font-medium text-primary mb-3">Platform Features</p>
        <h1 className="mb-6">Control Tower Features</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl">AI agents that work alongside your team — handling meetings, tasks, deals, and knowledge across your existing tools.</p>
        <div className="space-y-8">
          {features.map((f) => (
            <div key={f.title} className="document-card flex gap-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Button size="lg" asChild>
            <a href="https://controltowerdemo.collabai.software" target="_blank" rel="noopener noreferrer">Try Live Demo</a>
          </Button>
        </div>
      </div>
    </section>
  </SiteLayout>
);

export default Features;

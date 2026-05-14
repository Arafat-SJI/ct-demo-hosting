import {
  Users,
  AlertTriangle,
  EyeOff,
  Code2,
  CloudOff,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const painPoints = [
  {
    icon: EyeOff,
    title: "No visibility",
    description:
      '"You can\'t see what\'s happening across teams and systems in real time."',
  },
  {
    icon: Code2,
    title: "AI tools aren't built for you",
    description:
      '"Most AI platforms require developers and months of setup."',
  },
  {
    icon: CloudOff,
    title: "Data compliance risk",
    description:
      '"Your sensitive data can\'t sit in someone else\'s cloud."',
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="section px-6 lg:px-12 bg-card relative">
      {/* Top divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      <div className="section-inner">
        {/* Section Header */}
        <div className="text-center">
          <Badge className="mb-4 bg-destructive/10 text-destructive border-destructive/20">
            <AlertTriangle className="w-3 h-3 mr-1" />
            Why Teams Choose Control Tower
          </Badge>
          <h2 className="mb-4">Running Operations on Spreadsheets and Gut Feel Doesn't Work Anymore.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Your team is working hard. But the information is scattered — across emails, systems, and manual reports. Nobody has a full picture. Decisions take too long. And when regulators ask questions, nobody has the answers fast enough.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-3">
          You know AI can help. But most AI tools are built for developers, not for your operations team. They require IT support, months of setup, and put your sensitive data in the cloud.
          </p>
        </div>

        {/* Pain points — 3 columns */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {painPoints.map((item) => (
            <div
              key={item.title}
              className="document-card text-center bg-card group hover:border-destructive/30 h-full flex flex-col"
            >
              <div className="icon-container mb-4 mx-auto group-hover:bg-destructive/10 transition-colors">
                <item.icon className="w-8 h-8 text-primary group-hover:text-destructive transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-1">{item.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed flex-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* The Cost */}
        {/* <div className="max-w-3xl mx-auto">
          <div className="document-card bg-destructive/5 border-destructive/20 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Users className="w-5 h-5 text-destructive" />
              <h3 className="text-lg font-bold text-destructive">The Cost</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              A 20-person team loses <span className="text-foreground font-bold">400+ hours per month</span> to coordination overhead. That's <span className="text-foreground font-bold">2.5 full-time employees</span> doing work that software should handle.
            </p>
            <div className="pt-4 border-t border-destructive/20">
              <p className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">The Old "Solution" (That Doesn't Work):</span> Buy another tool. Migrate everyone. Train the team. Hope adoption sticks. Repeat next year.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

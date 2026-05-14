import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, Server, Check, FileCheck } from "lucide-react";

const principles = [
  {
    icon: Lock,
    title: "Private by Default",
    description: "Control Tower can be deployed on your infrastructure. Your data never has to leave your servers. You use your own API keys for AI providers.",
  },
  {
    icon: FileCheck,
    title: "HIPAA-Ready",
    description: "For healthcare and other regulated industries, we deploy on HIPAA-compliant infrastructure with appropriate safeguards.",
  },
  {
    icon: Eye,
    title: "No Training on Your Data",
    description: "We never use your business data to train AI models. Your competitive intelligence stays yours.",
  },
];

const securityFeatures = [
  {
    feature: "Deployed behind your firewall",
    implementation: "No data leaves your environment",
  },
  {
    feature: "Role-based access control (RBAC)",
    implementation: "Every user sees only what they should",
  },
  {
    feature: "SSO integration",
    implementation: "Connect to your existing identity provider",
  },
  {
    feature: "Full audit logs",
    implementation: "Every action tracked and searchable",
  },
  {
    feature: "Encryption",
    implementation: "At rest and in transit",
  },
  {
    feature: "Compliance-ready",
    implementation: "For HIPAA, SOC 2, and financial regulations",
  },
];
const compliance = [
  { standard: "HIPAA", status: "Ready — deployed on compliant infrastructure" },
  { standard: "GDPR", status: "Compliant — data export and deletion workflows" },
  { standard: "Data Residency", status: "Configurable — US, EU, or APAC deployment" },
];

export function SecuritySection() {
  return (
    <section id="security" className="section px-6 lg:px-12 bg-gradient-to-b from-background to-card/50">
      <div className="section-inner">
        {/* Section Header */}
        <div className="text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Shield className="w-3 h-3 mr-1" />
            Security & Compliance
          </Badge>
          <h2 className="mb-4">Your data. Your infrastructure. Your rules.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Control Tower is designed from the ground up for regulated industries. We never store your data on our servers. Every deployment runs inside your own environment — private cloud, on-premise, or hybrid.
          </p>
        </div>

        {/* Principles */}
        <div className="grid gap-6 md:grid-cols-3">
          {principles.map((principle) => (
            <div key={principle.title} className="document-card text-center group">
              <div className="icon-container mx-auto mb-4 group-hover:scale-110 transition-transform">
                <principle.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
              <p className="text-lg text-muted-foreground">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Security Features */}
          <div className="document-card">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Server className="w-5 h-5 text-primary" />
              Security Features
            </h3>
            <div className="space-y-3">
              {securityFeatures.map((item) => (
                <div key={item.feature} className="flex justify-between items-start py-2 border-b border-border last:border-0">
                  <span className="text-sm font-bold text-foreground">{item.feature}</span>
                  <span className="text-sm text-muted-foreground text-right max-w-[60%]">{item.implementation}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance */}
          <div className="document-card">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-primary" />
              Compliance
            </h3>
            <div className="space-y-4">
              {compliance.map((item) => (
                <div key={item.standard} className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-foreground">{item.standard}</span>
                    <p className="text-sm text-muted-foreground">{item.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { SiteLayout } from "@/components/layout/SiteLayout";
import { Shield, Database, Lock, UserCheck, Globe, Mail } from "lucide-react";

const Privacy = () => (
  <SiteLayout>
    <section className="section px-6 lg:px-12">
      <div className="max-w-3xl">
        <p className="text-sm font-medium text-primary mb-3">Privacy Policy</p>
        <h1 className="mb-4">Your Privacy Matters</h1>
        <p className="text-muted-foreground mb-8">
          Last Updated: February 2026
        </p>

        <div className="prose prose-lg max-w-none space-y-10">
          {/* Introduction */}
          <div className="document-card">
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-3">Our Commitment to Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  CollabAI Control Tower is committed to protecting the privacy of professional services firms and their teams. 
                  We believe in transparency — not just in how our platform works, but in how we handle your data.
                </p>
              </div>
            </div>
          </div>

          {/* Information We Collect */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Information We Collect</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <div className="pl-8">
                <h3 className="font-medium text-foreground mb-2">Account Information</h3>
                <p className="leading-relaxed">
                  When you create an account, we collect your email address, name, and organization name. 
                  This information is used to provide you access to the platform and personalize your experience.
                </p>
              </div>
              <div className="pl-8">
                <h3 className="font-medium text-foreground mb-2">Business Documents</h3>
                <p className="leading-relaxed">
                  Documents you upload to the platform (meeting transcripts, project files, policies) are stored securely 
                  and used solely to power the AI features you request, such as knowledge search and meeting summaries.
                </p>
              </div>
              <div className="pl-8">
                <h3 className="font-medium text-foreground mb-2">Usage Data</h3>
                <p className="leading-relaxed">
                  We collect anonymized usage data to improve the platform. This includes feature usage patterns 
                  and performance metrics — never the content of your documents.
                </p>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">How We Use Your Information</h2>
            </div>
            <ul className="space-y-3 text-muted-foreground pl-8">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Provide and maintain the Control Tower platform services</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Send important notifications about your account and team activities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Improve and optimize platform performance and features</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Respond to your support requests and inquiries</span>
              </li>
            </ul>
            <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-sm font-medium text-foreground">
                We never sell your data to third parties. Your business information remains yours.
              </p>
            </div>
          </div>

          {/* Data Storage & Security */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Data Storage & Security</h2>
            </div>
            <div className="space-y-4 text-muted-foreground pl-8">
              <p className="leading-relaxed">
                We implement industry-standard security measures including encryption in transit (TLS 1.3) 
                and at rest. Access to data is restricted to authorized personnel on a need-to-know basis.
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">Self-Hosted Option:</strong> For organizations requiring 
                complete data sovereignty, Control Tower can be deployed on your own infrastructure. 
                In this case, you maintain full control over all data storage and access.
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">HIPAA Compliance:</strong> For healthcare and regulated 
                industries, we offer HIPAA-ready deployment on compliant infrastructure with appropriate safeguards.
              </p>
            </div>
          </div>

          {/* Your Rights */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Your Rights</h2>
            </div>
            <div className="space-y-4 text-muted-foreground pl-8">
              <p className="leading-relaxed">You have the right to:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-foreground">Access</strong> your personal data and business documents at any time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-foreground">Update</strong> or correct your account information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-foreground">Export</strong> your data in standard formats</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-foreground">Delete</strong> your account and associated data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-foreground">Opt-out</strong> of non-essential communications</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Deployment Options */}
          <div className="document-card bg-muted/30">
            <h2 className="text-xl font-semibold mb-4">Deployment Options</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                <strong className="text-foreground">Self-Hosted Instances:</strong> If you deploy Control Tower 
                on your own servers, you are responsible for data handling, security, and compliance with 
                applicable privacy laws. We provide the software; you control the data.
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">Demo Instance:</strong> Our demo environment 
                at controltowerdemo.collabai.software is for evaluation purposes. Data on the demo instance 
                may be periodically cleared and should not be used for production activities.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Questions About Privacy?</h2>
            </div>
            <p className="text-muted-foreground pl-8 leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please{" "}
              <a 
                href="https://collabai.software/contact" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                contact us
              </a>
              . We're committed to addressing your concerns promptly.
            </p>
          </div>
        </div>
      </div>
    </section>
  </SiteLayout>
);

export default Privacy;

import { SiteLayout } from "@/components/layout/SiteLayout";
import { FileText, Scale, Users, Code, AlertTriangle, Gavel, Mail } from "lucide-react";

const Terms = () => (
  <SiteLayout>
    <section className="section px-6 lg:px-12">
      <div className="max-w-3xl">
        <p className="text-sm font-medium text-primary mb-3">Terms of Service</p>
        <h1 className="mb-4">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">
          Last Updated: February 2026
        </p>

        <div className="prose prose-lg max-w-none space-y-10">
          {/* Acceptance */}
          <div className="document-card">
            <div className="flex items-start gap-4">
              <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-3">Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using CollabAI Control Tower, you agree to be bound by these Terms of Service. 
                  If you do not agree to these terms, please do not use the platform. These terms apply 
                  to both the hosted service and self-hosted installations.
                </p>
              </div>
            </div>
          </div>

          {/* Description of Service */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Description of Service</h2>
            </div>
            <div className="space-y-4 text-muted-foreground pl-8">
              <p className="leading-relaxed">
                CollabAI Control Tower is an AI-powered operations platform for professional services firms. 
                The platform provides AI agents for meeting management, task coordination, knowledge search, 
                deal tracking, project monitoring, and EOS implementation.
              </p>
              <p className="leading-relaxed">
                The software is available as a hosted SaaS service with modular pricing, or for self-hosted 
                deployment on your own infrastructure.
              </p>
            </div>
          </div>

          {/* User Responsibilities */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">User Responsibilities</h2>
            </div>
            <div className="space-y-4 text-muted-foreground pl-8">
              <p className="leading-relaxed">As a user of Control Tower, you agree to:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Provide accurate and complete information when creating your account</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Maintain the security of your account credentials</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Use the platform only for lawful business purposes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Respect the intellectual property rights of others</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Comply with all applicable laws and regulations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Not attempt to gain unauthorized access to the platform or other users' data</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Intellectual Property */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Intellectual Property</h2>
            </div>
            <div className="space-y-4 text-muted-foreground pl-8">
              <p className="leading-relaxed">
                <strong className="text-foreground">Platform:</strong> CollabAI Control Tower software and 
                related materials are the property of CollabAI Software (SJ Innovation). Usage is subject 
                to your subscription terms or self-hosted license agreement.
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">Your Content:</strong> You retain full ownership 
                of all documents, data, and content you upload to the platform. We do not claim any 
                intellectual property rights over your business materials.
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">Trademarks:</strong> The CollabAI name, Control Tower 
                name, logos, and branding are trademarks of CollabAI Software and may not be used without permission.
              </p>
            </div>
          </div>

          {/* Disclaimers */}
          <div className="document-card bg-destructive/5 border-destructive/20">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-3">Disclaimers</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    <strong className="text-foreground">AS-IS BASIS:</strong> Control Tower is provided 
                    "as is" and "as available" without warranties of any kind, either express or implied. 
                    This includes, but is not limited to, implied warranties of merchantability, fitness 
                    for a particular purpose, and non-infringement.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-foreground">AI LIMITATIONS:</strong> The AI agents are 
                    designed to assist with business operations but should not replace professional legal, 
                    financial, or strategic advice. Always verify AI-generated summaries and recommendations.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-foreground">SELF-HOSTED INSTANCES:</strong> If you choose 
                    to self-host Control Tower, you are solely responsible for installation, configuration, 
                    security, and maintenance. We provide no warranty or support for self-hosted deployments 
                    unless under a separate support agreement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Gavel className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Limitation of Liability</h2>
            </div>
            <div className="space-y-4 text-muted-foreground pl-8">
              <p className="leading-relaxed">
                To the maximum extent permitted by applicable law, CollabAI Software, SJ Innovation, and 
                its contributors shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages, including but not limited to loss of profits, data, or use.
              </p>
              <p className="leading-relaxed">
                Our total liability for any claims arising from your use of the platform shall not exceed 
                the amount you paid for the service during the twelve months preceding the claim.
              </p>
            </div>
          </div>

          {/* Governing Law */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Governing Law</h2>
            </div>
            <p className="text-muted-foreground pl-8 leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with applicable laws, 
              without regard to conflict of law principles. Any disputes arising from these terms shall be 
              resolved through good-faith negotiation before pursuing formal legal action.
            </p>
          </div>

          {/* Modifications */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Modifications to Terms</h2>
            </div>
            <p className="text-muted-foreground pl-8 leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. Changes will be posted 
              on this page with an updated "Last Updated" date. Your continued use of the platform after 
              changes are posted constitutes acceptance of the modified terms.
            </p>
          </div>

          {/* Contact */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Questions?</h2>
            </div>
            <p className="text-muted-foreground pl-8 leading-relaxed">
              If you have any questions about these Terms of Service, please{" "}
              <a 
                href="https://collabai.software/contact" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                contact us
              </a>
              . We're happy to clarify any provisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  </SiteLayout>
);

export default Terms;

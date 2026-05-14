import { SiteLayout } from "@/components/layout/SiteLayout";
import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { SolutionSection } from "@/components/home/SolutionSection";
import { AgentsSection } from "@/components/home/AgentsSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { SocialProofSection } from "@/components/home/SocialProofSection";
import { DemoSection } from "@/components/home/DemoSection";

import { ComparisonSection } from "@/components/home/ComparisonSection";
import { SecuritySection } from "@/components/home/SecuritySection";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { StatsSection } from "@/components/home/StatsSection";

const Index = () => {
  return (
    <SiteLayout>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <AgentsSection />
      <IndustriesSection />
      <StatsSection />
      <FinalCTASection />
      <ComparisonSection />
      <SecuritySection />
    
    </SiteLayout>
  );
};

export default Index;

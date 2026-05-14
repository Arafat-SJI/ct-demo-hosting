import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface SiteLayoutProps {
  children: ReactNode;
  activeSection?: string;
}

export function SiteLayout({ children, activeSection }: SiteLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Navigation */}
      <Header />
      
      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

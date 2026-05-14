import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Clock, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

interface SideNavProps {
  activeSection?: string;
}

const navItems = [
  { label: "Overview", href: "/#hero" },
  { label: "The Problem", href: "/#problem" },
  { label: "AI Agents", href: "/#agents" },
  { label: "Features", href: "/features" },
  { label: "Comparison", href: "/#comparison" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Stories", href: "/#stories" },
  { label: "Open Source", href: "/#open-source" },
  { label: "About", href: "/about" },
];

const trustStats = [
  { icon: Clock, label: "5+ hrs saved", sublabel: "per meeting" },
  { icon: Gift, label: "100% Free", sublabel: "open source" },
];

export function SideNav({ activeSection }: SideNavProps) {
  const location = useLocation();
  const currentPath = location.pathname + location.hash;

  const isActive = (href: string) => {
    if (href.startsWith("/#")) {
      return currentPath === "/" && activeSection === href.replace("/#", "");
    }
    return location.pathname === href;
  };

  return (
    <nav className="sticky top-0 h-screen w-64 border-r border-border bg-sidebar p-6 flex flex-col">
      {/* Logo / Wordmark */}
      <Link to="/" className="mb-8 flex items-center gap-3">
        <img src={logo} alt="NonProfitAI" className="h-10 w-auto" />
      </Link>

      {/* Navigation Links */}
      <div className="flex-1 space-y-1">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={cn(
              "block px-3 py-2 text-sm rounded-md transition-colors duration-200",
              isActive(item.href)
                ? "bg-accent text-accent-foreground font-medium"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Trust Stats */}
      <div className="border-t border-border pt-6 mt-6 space-y-4">
        {trustStats.map((stat) => (
          <div key={stat.label} className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
              <stat.icon className="w-4 h-4 text-accent-foreground" />
            </div>
            <div>
              <div className="text-sm font-medium text-foreground">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.sublabel}</div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-6">
        <Button asChild className="w-full">
          <a href="https://demo.nonprofitai.software/login" target="_blank" rel="noopener noreferrer">
            Try Demo
          </a>
        </Button>
      </div>
    </nav>
  );
}

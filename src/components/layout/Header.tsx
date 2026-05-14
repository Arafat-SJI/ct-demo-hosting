import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/collabai-logo.png";

const navItems = [
  { label: "Features", href: "/#features" },
  { label: "Agents", href: "/agents" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Industries", href: "/#industries" },
  { label: "Resources", href: "/about" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    if (href.startsWith("/#")) return location.pathname === "/" && location.hash === href.replace("/", "");
    return location.pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <img src={logo} alt="CollabAI Control Tower" className="h-9 w-auto" />
            <span className="hidden sm:inline font-bold text-foreground">Control Tower</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              item.href.startsWith("/#") ? (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-bold rounded-md transition-colors",
                    isActive(item.href)
                      ? "text-foreground bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-bold rounded-md transition-colors",
                    isActive(item.href)
                      ? "text-foreground bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="font-bold" asChild>
              <a href="https://controltowerdemo.collabai.software" target="_blank" rel="noopener noreferrer">
                Sign In
              </a>
            </Button>
            <Button className="font-bold" asChild>
              <a href="https://controltowerdemo.collabai.software" target="_blank" rel="noopener noreferrer">
                Try Demo →
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button size="sm" className="font-bold" asChild>
              <a href="https://controltowerdemo.collabai.software" target="_blank" rel="noopener noreferrer">
                Demo
              </a>
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-200",
            isOpen ? "max-h-64 pb-4" : "max-h-0"
          )}
        >
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              item.href.startsWith("/#") ? (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 text-sm font-bold text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 text-sm font-bold text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

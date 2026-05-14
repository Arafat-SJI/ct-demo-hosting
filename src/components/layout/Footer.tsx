import { Link } from "react-router-dom";
import logo from "@/assets/collabai-logo.png";

const footerLinks = {
  product: [
    { label: "Features", href: "/#features" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Security", href: "/#security" },
    { label: "Demo", href: "https://controltowerdemo.collabai.software" },
  ],
  industries: [
    { label: "Healthcare", href: "/#industries" },
    { label: "Mortgage & Finance", href: "/#industries" },
    { label: "Property Management", href: "/#industries" },
    { label: "Regulated Enterprises", href: "/#industries" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "https://collabai.software/contact" },
    { label: "Privacy Policy", href: "https://collabai.software/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Support", href: "mailto:support@collabai.software" },
  ],
};

function renderLink(link: { label: string; href: string }) {
  if (link.href.startsWith("http") || link.href.startsWith("mailto")) {
    return (
      <a
        href={link.href}
        target={link.href.startsWith("mailto") ? undefined : "_blank"}
        rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
        className="text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        {link.label}
      </a>
    );
  }
  if (link.href.startsWith("/#")) {
    return (
      <a
        href={link.href}
        className="text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        {link.label}
      </a>
    );
  }
  return (
    <Link
      to={link.href}
      className="text-sm text-muted-foreground hover:text-primary transition-colors"
    >
      {link.label}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 py-10 lg:py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10 mb-10">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <img src={logo} alt="CollabAI Control Tower" className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground mb-2 font-bold">
              Control Tower
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Control Tower is a product by CollabAI — powering AI-first operations since 2019.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>{renderLink(link)}</li>
              ))}
            </ul>
          </div>

          {/* Industries Links */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4">Industries</h4>
            <ul className="space-y-2">
              {footerLinks.industries.map((link) => (
                <li key={link.label}>{renderLink(link)}</li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>{renderLink(link)}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} CollabAI by SJ Innovation. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">✓ HIPAA Ready</span>
              <span className="flex items-center gap-1">✓ Your Data, Your Servers</span>
              <span className="flex items-center gap-1">✓ Works With Your Existing Tools</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

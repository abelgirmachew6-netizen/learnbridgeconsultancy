import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

const socials = [
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/251991188656" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-navy-foreground">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold">LearnBridge</p>
          <p className="mt-3 max-w-xs text-sm text-navy-foreground/70">
            Clear, honest, step-by-step guidance for students who want to study abroad.
          </p>
        </div>

        <div>
          <p className="eyebrow text-navy-soft">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/80">
            <li>
              <Link to="/destinations" className="hover:text-navy-foreground">
                Destinations
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-navy-foreground">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-navy-foreground">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-navy-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-navy-soft">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/80">
            <li>Addis Ababa, Ethiopia</li>
            <li>
              <a
                href="https://wa.me/251991188656"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                +251 991188656 (WhatsApp)
              </a>
            </li>
            <li>
              <a
                href="mailto:learnbridgeconsultancy@gmail.com"
                className="break-all transition-colors hover:text-accent"
              >
                learnbridgeconsultancy@gmail.com
              </a>
            </li>
            <li>Mon–Fri: 8:30 AM – 6:00 PM</li>
            <li className="text-navy-foreground/60">Closed weekends &amp; public holidays</li>
          </ul>

          <div className="mt-5 flex items-center gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-navy-foreground/20 text-navy-foreground/80 transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10">
        <div className="section-shell py-5 text-xs text-navy-foreground/60">
          © 2025 Learn Bridge Consultancy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

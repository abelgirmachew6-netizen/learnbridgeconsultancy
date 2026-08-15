import { Link } from "@tanstack/react-router";

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
            <li>+251 991188656</li>
            <li>learnbridgeconsultancy@gmail.com</li>
            <li>Mon–Fri: 8:30 AM – 6:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10">
        <div className="section-shell py-5 text-xs text-navy-foreground/60">
          © {new Date().getFullYear()} LearnBridge Educational Consultancy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

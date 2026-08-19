import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { CalendarClock } from "lucide-react";

export function StickyCta() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setHidden(false);
    const target = document.getElementById("book");
    if (!target || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setHidden(Boolean(entry?.isIntersecting)),
      { threshold: 0.15 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [pathname]);

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (pathname !== "/contact") return;
    const target = document.getElementById("book");
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (hidden) return null;

  return (
    <Link
      to="/contact"
      hash="book"
      onClick={handleClick}
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-navy px-4 py-3 text-xs font-semibold text-navy-foreground shadow-lift transition-transform hover:scale-[1.03] hover:bg-navy-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/40 sm:bottom-5 sm:right-5 sm:px-5 sm:py-3.5 sm:text-sm"
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      <CalendarClock className="h-4 w-4" />
      Book 15-min call
    </Link>
  );
}

import { Link, useRouterState } from "@tanstack/react-router";
import { CalendarClock } from "lucide-react";

export function StickyCta() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (pathname !== "/contact") return;
    const target = document.getElementById("book");
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <Link
      to="/contact"
      hash="book"
      onClick={handleClick}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3.5 text-sm font-semibold text-navy-foreground shadow-lift transition-transform hover:scale-[1.03] hover:bg-navy-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/40"
    >
      <CalendarClock className="h-4 w-4" />
      Book 15-min call
    </Link>
  );
}

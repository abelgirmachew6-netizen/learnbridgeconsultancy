import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { destinations, SITE_URL } from "@/data/destinations";

export const Route = createFileRoute("/destinations/")({
  head: () => ({
    meta: [
      { title: "Study Destinations — Italy, Germany, UK & Canada | LearnBridge" },
      {
        name: "description",
        content:
          "Compare study destinations: Italy, Germany, the UK and Canada. Low tuition, scholarships and post-study work options explained.",
      },
      { property: "og:title", content: "Choose Your Study Destination | LearnBridge" },
      {
        property: "og:description",
        content: "Italy, Germany, the UK and Canada — tuition, scholarships and visa pathways compared.",
      },
      { property: "og:url", content: `${SITE_URL}/destinations` },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/destinations` }],
  }),
  component: DestinationsPage,
});

function DestinationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section className="bg-surface py-16">
          <div className="section-shell">
            <h1 className="text-4xl text-navy">Choose Your Study Destination</h1>
            <p className="mt-4 max-w-2xl text-sm text-navy/80">
              Italy, Germany, the UK and Canada — we compare tuition, scholarships and visa routes
              against your goals and budget.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="section-shell grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((d) => (
              <Link
                key={d.slug}
                to="/destinations/$country"
                params={{ country: d.slug }}
                className="flex flex-col overflow-hidden rounded-xl bg-card shadow-card transition-shadow hover:shadow-lift"
              >
                <div className="relative">
                  <img
                    src={d.card}
                    alt={`Map of ${d.name}`}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="h-64 w-full object-cover"
                  />
                  {d.featured && (
                    <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-accent-foreground">
                      Featured
                    </span>
                  )}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/95 to-transparent p-5 pt-14">
                    <h2 className="text-lg font-semibold text-navy-foreground">{d.name}</h2>
                    <p className="mt-1 text-xs text-navy-foreground/75">{d.blurb}</p>
                  </div>
                </div>
                <ul className="flex-1 space-y-2 p-5 text-sm text-muted-foreground">
                  {d.highlights.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="px-5 pb-5 text-sm font-semibold text-navy underline decoration-accent decoration-2 underline-offset-4">
                  Learn more about {d.name}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="pb-20">
          <div className="section-shell rounded-2xl bg-navy px-8 py-12 text-center text-navy-foreground">
            <h2 className="text-2xl">Not sure which country fits you?</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-navy-foreground/75">
              We match destinations to your goals, academic background, and budget in a free
              15-minute call.
            </p>
            <Link
              to="/contact"
              hash="book"
              className="mt-7 inline-flex rounded-md bg-navy-foreground px-6 py-3 text-sm font-semibold text-navy hover:opacity-90"
            >
              Book 15-min call
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

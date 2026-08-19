import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, ShieldCheck, TrendingUp } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { destinations, SITE_URL } from "@/data/destinations";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Learn Bridge Consultancy | Study Abroad & Visa Consultants" },
      {
        name: "description",
        content:
          "Expert guidance for university applications and visas to Italy, Germany, the UK, and Canada. Your bridge to global education.",
      },
      { property: "og:title", content: "Your Bridge to World-Class Education | Learn Bridge Consultancy" },
      {
        property: "og:description",
        content:
          "Expert guidance for university applications and visas to Italy, Germany, the UK, and Canada. Book a free 15-minute consultation.",
      },
      { property: "og:url", content: SITE_URL },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
  component: HomePage,
});

const stats = [
  { value: "98%", label: "Visa Success Rate" },
  { value: "10+", label: "Study Destinations" },
];

const services = [
  {
    icon: Compass,
    title: "University Applications",
    body: "We help you choose the right university, prepare strong applications, and increase your chances of acceptance.",
  },
  {
    icon: ShieldCheck,
    title: "Visa & Pre-Enrolment Assistance",
    body: "Universitaly pre-enrolment, declaration of value / CIMEA, and full visa support. Italy's window opens April–June — start now.",
  },
  {
    icon: TrendingUp,
    title: "Course & Career Guidance",
    body: "We help you choose the right course and career path based on your goals and future opportunities.",
  },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section className="bg-surface">
          <div className="section-shell flex min-h-[70vh] flex-col justify-center py-24">
            <h1 className="max-w-4xl text-4xl leading-[1.05] text-navy sm:text-5xl lg:text-6xl">
              Start Your Global Education Journey
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              At <span className="font-semibold text-navy">LearnBridge</span>, we help you choose the
              right university, apply with confidence, get accepted, and secure your visa — step by
              step.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact" hash="book"
                className="rounded-md bg-navy px-6 py-3 text-sm font-semibold text-navy-foreground shadow-card transition-colors hover:bg-navy-deep"
              >
                Book Free Consultation
              </Link>
              <Link
                to="/destinations"
                className="rounded-md bg-secondary px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-muted"
              >
                View Study Destinations
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-navy text-navy-foreground">
          <div className="section-shell grid grid-cols-1 gap-10 py-14 sm:grid-cols-2">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-4xl font-bold text-navy-soft">{s.value}</p>
                <p className="eyebrow mt-2 text-navy-foreground/70">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <div className="section-shell">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl text-navy">Choose Your Study Destination</h2>
                <p className="mt-3 text-sm text-navy/80">
                  Discover the best countries for your education, career, and future opportunities.
                </p>
              </div>
              <Link
                to="/destinations"
                className="text-sm font-semibold text-navy underline decoration-accent decoration-2 underline-offset-4"
              >
                View All Destinations
              </Link>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {destinations.map((d) => (
                <Link
                  key={d.name}
                  to="/destinations/$country"
                  params={{ country: d.slug }}
                  className="group relative block overflow-hidden rounded-xl shadow-card transition-shadow hover:shadow-lift"
                >
                  <img
                    src={d.card}
                    alt={`Map of ${d.name}`}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {d.featured && (
                    <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-accent-foreground">
                      Featured
                    </span>
                  )}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/95 to-transparent p-5 pt-16">
                    <h3 className="text-lg font-semibold text-navy-foreground">{d.name}</h3>
                    <p className="mt-1 text-xs text-navy-foreground/75">{d.blurb}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface py-20">
          <div className="section-shell">
            <h2 className="text-center text-3xl text-navy">Our Services</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {services.map((s) => (
                <article key={s.title} className="rounded-xl bg-card p-7 shadow-card">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-navy">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-navy">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="section-shell rounded-2xl bg-navy px-8 py-14 text-center text-navy-foreground shadow-lift">
            <h2 className="text-3xl">Ready to Start Your Journey?</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-navy-foreground/75">
              Book a free 15–20 minute consultation and take the first step toward studying abroad.
            </p>
            <Link
              to="/contact" hash="book"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-navy-foreground px-6 py-3 text-sm font-semibold text-navy transition-opacity hover:opacity-90"
            >
              Book Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

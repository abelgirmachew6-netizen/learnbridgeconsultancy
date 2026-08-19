import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { ArrowLeft, Award, BookOpen, Briefcase, GraduationCap, Check } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import graduatesImg from "@/assets/graduates.jpg";
import {
  destinationBySlug,
  retiredSlugs,
  SITE_URL,
  type IconKey,
} from "@/data/destinations";

const icons: Record<IconKey, typeof Award> = {
  award: Award,
  book: BookOpen,
  briefcase: Briefcase,
  cap: GraduationCap,
};

export const Route = createFileRoute("/destinations/$country")({
  loader: ({ params }) => {
    const slug = params.country.toLowerCase();
    if (retiredSlugs.includes(slug)) throw redirect({ to: "/destinations" });
    const data = destinationBySlug[slug];
    if (!data) throw notFound();
    return { slug: data.slug, name: data.name, title: data.title, intro: data.intro };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Destination unavailable — Learn Bridge Consultancy" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const c = loaderData;
    const url = `${SITE_URL}/destinations/${c.slug}`;
    return {
      meta: [
        { title: `${c.title} — Universities, Tuition & Visa | Learn Bridge` },
        {
          name: "description",
          content: `${c.intro} Learn Bridge Consultancy guides you through applications, scholarships and visas for ${c.name}.`,
        },
        { property: "og:title", content: `${c.title} | Learn Bridge Consultancy` },
        { property: "og:description", content: c.intro },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: CountryPage,
  notFoundComponent: UnknownDestination,
});

function UnknownDestination() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="section-shell flex min-h-[60vh] flex-col justify-center py-20">
        <p className="eyebrow text-accent">Destination not found</p>
        <h1 className="mt-3 text-3xl text-navy">We don't cover that destination yet</h1>
        <p className="mt-4 max-w-xl text-sm text-muted-foreground">
          Check the destinations we currently support, or talk to an advisor about where you want to
          study.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/destinations"
            className="rounded-md bg-navy px-6 py-3 text-sm font-semibold text-navy-foreground hover:bg-navy-deep"
          >
            View All Destinations
          </Link>
          <Link
            to="/contact"
            className="rounded-md bg-secondary px-6 py-3 text-sm font-semibold text-navy hover:bg-muted"
          >
            Talk to an Advisor
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function CountryPage() {
  const { slug } = Route.useLoaderData();
  const c = destinationBySlug[slug]!;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section className="relative">
          <img
            src={c.hero}
            alt={`University campus in ${c.name}`}
            width={1600}
            height={900}
            className="h-[60vh] min-h-[380px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-deep/70 to-navy-deep/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="section-shell text-navy-foreground">
              <Link
                to="/destinations"
                className="inline-flex items-center gap-2 text-xs font-semibold text-navy-foreground/80 hover:text-navy-foreground"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Destinations
              </Link>
              <h1 className="mt-5 max-w-3xl text-4xl sm:text-5xl">{c.title}</h1>
              <p className="mt-5 max-w-xl text-sm text-navy-foreground/80">{c.intro}</p>
              <p className="mt-3 max-w-xl text-sm font-semibold">{c.bold}</p>
              <Link
                to="/contact"
                hash="book"
                className="mt-8 inline-flex rounded-md bg-navy-foreground px-6 py-3 text-sm font-semibold text-navy hover:opacity-90"
              >
                Book 15-min call
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-surface py-16">
          <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl text-navy">Why Study in {c.name}?</h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {c.reasons.map((r) => {
                  const Icon = icons[r.icon];
                  return (
                    <div key={r.title}>
                      <Icon className="h-5 w-5 text-accent" />
                      <h3 className="mt-3 text-sm font-semibold text-navy">{r.title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{r.body}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lift">
              <img
                src={graduatesImg}
                alt={`Graduating students in ${c.name}`}
                loading="lazy"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-5 left-5 right-5 rounded-lg bg-card/95 p-5">
                <p className="font-display text-2xl font-bold text-navy">{c.stat.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{c.stat.label}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="section-shell">
            <h2 className="text-center text-3xl text-navy">Top Universities in {c.name}</h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground">
              We help you apply to leading universities based on your academic profile.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {c.universities.map((u) => (
                <article key={u.name} className="relative overflow-hidden rounded-xl shadow-card">
                  <img
                    src={c.card}
                    alt={`${u.name} in ${u.city}`}
                    loading="lazy"
                    width={800}
                    height={500}
                    className="h-52 w-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/95 to-transparent p-5 pt-14">
                    <h3 className="text-base font-semibold text-navy-foreground">{u.name}</h3>
                    <p className="mt-1 text-xs text-navy-foreground/70">{u.city}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface py-16">
          <div className="section-shell">
            <h2 className="text-3xl text-navy">Tuition & Scholarships</h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">{c.tuition}</p>
            <ul className="mt-8 space-y-4 border-t border-border pt-6">
              {c.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-navy">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {b}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">{c.note}</p>
          </div>
        </section>

        <section className="py-16">
          <div className="section-shell rounded-2xl bg-navy px-8 py-12 text-center text-navy-foreground shadow-lift">
            <h2 className="text-2xl">Not sure if {c.name} is right for you?</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-navy-foreground/75">
              Ask your questions and take the first step toward studying in {c.name}.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                hash="book"
                className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90"
              >
                Book 15-min call
              </Link>
              <Link
                to="/destinations"
                className="rounded-md border border-navy-foreground/30 px-6 py-3 text-sm font-semibold text-navy-foreground hover:bg-navy-deep"
              >
                View Other Destinations
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

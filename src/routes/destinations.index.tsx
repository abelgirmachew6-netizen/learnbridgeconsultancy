import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import usaImg from "@/assets/dest-usa.jpg";
import ukImg from "@/assets/dest-uk.jpg";
import ausImg from "@/assets/dest-australia.jpg";
import europeImg from "@/assets/dest-europe.jpg";

export const Route = createFileRoute("/destinations/")({
  head: () => ({
    meta: [
      { title: "Study Destinations — USA, UK, Australia & Europe | LearnBridge" },
      {
        name: "description",
        content:
          "Compare study destinations: the USA, UK, Australia and Europe. Find the best country for your education, career and budget.",
      },
      { property: "og:title", content: "Choose Your Study Destination | LearnBridge" },
      {
        property: "og:description",
        content: "Discover the best countries for your education, career, and future opportunities.",
      },
    ],
  }),
  component: DestinationsPage,
});

const destinations = [
  {
    slug: "usa",
    name: "USA",
    blurb: "Top universities & career opportunities",
    img: usaImg,
    points: ["World-ranked universities", "Optional Practical Training after graduation", "Broad scholarship options"],
  },
  {
    slug: "uk",
    name: "UK",
    blurb: "Shorter degrees with global recognition",
    img: ukImg,
    points: ["One-year master's programs", "Two-year graduate route visa", "Globally recognized degrees"],
  },
  {
    slug: "australia",
    name: "Australia",
    blurb: "High quality education & work opportunities",
    img: ausImg,
    points: ["Post-study work rights", "Part-time work while studying", "Strong student support systems"],
  },
  {
    slug: "europe",
    name: "Europe",
    blurb: "Affordable education & diverse cultures",
    img: europeImg,
    points: ["Low or no tuition options", "English-taught programs", "Schengen travel access"],
  },
];

function DestinationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section className="bg-surface py-16">
          <div className="section-shell">
            <h1 className="text-4xl text-navy">Choose Your Study Destination</h1>
            <p className="mt-4 max-w-2xl text-sm text-navy/80">
              Discover the best countries for your education, career, and future opportunities.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="section-shell grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((d) => (
              <Link
                key={d.name}
                to="/destinations/$country"
                params={{ country: d.slug }}
                className="block overflow-hidden rounded-xl bg-card shadow-card transition-shadow hover:shadow-lift"
              >
                <div className="relative">
                  <img
                    src={d.img}
                    alt={`Map of ${d.name}`}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="h-64 w-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/95 to-transparent p-5 pt-14">
                    <h2 className="text-lg font-semibold text-navy-foreground">{d.name}</h2>
                    <p className="mt-1 text-xs text-navy-foreground/75">{d.blurb}</p>
                  </div>
                </div>
                <ul className="space-y-2 p-5 text-sm text-muted-foreground">
                  {d.points.map((p) => (
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
              We match destinations to your goals, academic background, and budget.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex rounded-md bg-navy-foreground px-6 py-3 text-sm font-semibold text-navy hover:opacity-90"
            >
              Talk to an Advisor
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

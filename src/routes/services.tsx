import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, ShieldCheck, TrendingUp } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Applications, Visa Support & Guidance | LearnBridge" },
      {
        name: "description",
        content:
          "University applications, visa support, and course & career guidance for students planning to study abroad.",
      },
      { property: "og:title", content: "Our Services | LearnBridge" },
      {
        property: "og:description",
        content: "Application help, visa guidance, and career planning — handled step by step.",
      },
      { property: "og:url", content: "https://mock-render-viewer.lovable.app/services" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://mock-render-viewer.lovable.app/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Compass,
    title: "University Applications",
    body: "We help you choose the right university, prepare strong applications, and increase your chances of acceptance.",
    steps: ["Shortlist universities", "Prepare documents & essays", "Submit and track applications"],
  },
  {
    icon: ShieldCheck,
    title: "Visa Support",
    body: "We guide you through the entire visa process, ensuring your documents are complete and approved without delays.",
    steps: ["Document checklist review", "Financial evidence guidance", "Interview preparation"],
  },
  {
    icon: TrendingUp,
    title: "Course & Career Guidance",
    body: "We help you choose the right course and career path based on your goals and future opportunities.",
    steps: ["Goal and profile assessment", "Course comparison", "Career outcome planning"],
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section className="bg-surface py-16">
          <div className="section-shell text-center">
            <h1 className="text-4xl text-navy">Our Services</h1>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
              Everything you need between deciding to study abroad and boarding your flight.
            </p>
          </div>
        </section>

        <section className="bg-surface pb-20">
          <div className="section-shell grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <article key={s.title} className="rounded-xl bg-card p-7 shadow-card">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-navy">
                  <s.icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-lg font-semibold text-navy">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <ul className="mt-5 space-y-2 border-t border-border pt-5 text-sm text-muted-foreground">
                  {s.steps.map((step) => (
                    <li key={step} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {step}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="py-20">
          <div className="section-shell rounded-2xl bg-navy px-8 py-12 text-center text-navy-foreground">
            <h2 className="text-2xl">Start with a free consultation</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-navy-foreground/75">
              15–20 minutes, no commitment. We'll map out your next steps.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex rounded-md bg-navy-foreground px-6 py-3 text-sm font-semibold text-navy hover:opacity-90"
            >
              Book Free Consultation
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

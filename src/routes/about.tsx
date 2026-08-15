import { createFileRoute } from "@tanstack/react-router";
import { UserRound, FileCheck2, Globe2, HeartHandshake } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About LearnBridge — Study Abroad Consultancy" },
      {
        name: "description",
        content:
          "LearnBridge is an educational consultancy in Addis Ababa helping students study abroad with clear, honest, step-by-step guidance.",
      },
      { property: "og:title", content: "About LearnBridge" },
      {
        property: "og:description",
        content: "Helping students achieve their dream of studying abroad with personalized guidance.",
      },
    ],
  }),
  component: AboutPage,
});

const reasons = [
  {
    icon: UserRound,
    title: "Personalized Guidance",
    body: "Tailored advice based on your goals, background, and budget.",
  },
  {
    icon: FileCheck2,
    title: "Simple Application Process",
    body: "We make the entire application process clear, organized, and stress-free.",
  },
  {
    icon: Globe2,
    title: "Visa Support",
    body: "Step-by-step guidance to help you prepare and submit your visa successfully.",
  },
  {
    icon: HeartHandshake,
    title: "Trusted Advice",
    body: "Honest and realistic recommendations you can rely on throughout your journey.",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section className="bg-navy text-navy-foreground">
          <div className="section-shell py-20">
            <span className="eyebrow inline-block rounded-full bg-accent px-3 py-1 text-accent-foreground">
              Established in Addis Ababa
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl">About LearnBridge</h1>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-navy-soft">
              Helping students achieve their dream of studying abroad with clear and personalized
              guidance.
            </p>

            <h2 className="mt-16 text-2xl">Who We Are</h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-navy-foreground/80">
              LearnBridge is an educational consultancy focused on helping students achieve their goal
              of studying abroad. We provide clear, honest, and step-by-step guidance to make the
              entire process simple and stress-free.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="section-shell max-w-3xl">
            <h2 className="text-2xl text-navy">What We Do</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              From choosing the right university to securing your visa, we support students at every
              stage of their journey. We help you make informed decisions and guide you toward the best
              opportunities based on your goals, academic background, and budget.
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="section-shell max-w-3xl">
            <h2 className="text-2xl text-navy">Our Mission</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Our mission is to make global education accessible and achievable for every student
              through personalized guidance and support.
            </p>
          </div>
        </section>

        <section className="bg-surface py-20">
          <div className="section-shell">
            <h2 className="text-center text-2xl text-navy">Why Choose LearnBridge?</h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {reasons.map((r) => (
                <article key={r.title} className="rounded-xl bg-card p-6 shadow-card">
                  <r.icon className="h-6 w-6 text-accent" />
                  <h3 className="mt-5 text-base font-semibold text-navy">{r.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

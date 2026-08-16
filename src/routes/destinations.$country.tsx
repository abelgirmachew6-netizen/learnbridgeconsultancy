import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Award, BookOpen, Briefcase, GraduationCap, Check } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import graduatesImg from "@/assets/graduates.jpg";
import heroUsa from "@/assets/hero-usa.jpg";
import heroUk from "@/assets/hero-uk.jpg";
import heroAus from "@/assets/hero-australia.jpg";
import heroEurope from "@/assets/hero-europe.jpg";
import usaImg from "@/assets/dest-usa.jpg";
import ukImg from "@/assets/dest-uk.jpg";
import ausImg from "@/assets/dest-australia.jpg";
import europeImg from "@/assets/dest-europe.jpg";

type Country = {
  slug: string;
  name: string;
  title: string;
  intro: string;
  bold: string;
  hero: string;
  card: string;
  reasons: { icon: typeof Award; title: string; body: string }[];
  stat: { value: string; label: string };
  universities: { name: string; city: string }[];
  tuition: string;
  bullets: string[];
  note: string;
};

const countries: Record<string, Country> = {
  usa: {
    slug: "usa",
    name: "USA",
    title: "Study in the USA",
    intro:
      "Top universities, strong career pathways, and programs that fit almost every academic profile.",
    bold: "Quality education, research opportunities, and global career exposure.",
    hero: heroUsa,
    card: usaImg,
    reasons: [
      { icon: Award, title: "Top-Ranked Universities", body: "Home to many of the world's most respected institutions across every field of study." },
      { icon: Briefcase, title: "Work After Graduation", body: "Optional Practical Training lets you gain paid work experience in your field." },
      { icon: BookOpen, title: "Flexible Campus Life", body: "Change majors, choose electives, and build a degree around your strengths." },
      { icon: GraduationCap, title: "Scholarships & Aid", body: "Merit awards, assistantships, and need-based aid for international students." },
    ],
    stat: { value: "4,000+", label: "accredited universities and colleges" },
    universities: [
      { name: "Harvard University", city: "Cambridge, MA" },
      { name: "Stanford University", city: "Stanford, CA" },
      { name: "MIT", city: "Cambridge, MA" },
      { name: "Yale University", city: "New Haven, CT" },
    ],
    tuition:
      "Tuition fees vary depending on the university and program. Scholarships and financial aid may be available based on academic performance and eligibility.",
    bullets: [
      "Tuition varies by university and program",
      "Scholarships available for eligible students",
      "We help you find options that fit your budget",
    ],
    note: "We guide you step-by-step to choose affordable and realistic options.",
  },
  uk: {
    slug: "uk",
    name: "UK",
    title: "Study in the UK",
    intro: "Shorter degrees, globally recognized qualifications, and a clear post-study work route.",
    bold: "Finish faster, spend less, and graduate with a degree employers respect worldwide.",
    hero: heroUk,
    card: ukImg,
    reasons: [
      { icon: Award, title: "Globally Recognized Degrees", body: "UK qualifications are respected by employers and universities everywhere." },
      { icon: BookOpen, title: "One-Year Master's", body: "Most postgraduate programs finish in 12 months, reducing total cost." },
      { icon: Briefcase, title: "Graduate Route Visa", body: "Stay and work for two years after completing your degree." },
      { icon: GraduationCap, title: "Strong Student Support", body: "Dedicated international offices, housing help, and career services." },
    ],
    stat: { value: "160+", label: "universities and higher education institutions" },
    universities: [
      { name: "University of Oxford", city: "Oxford" },
      { name: "University of Cambridge", city: "Cambridge" },
      { name: "Imperial College London", city: "London" },
      { name: "University of Edinburgh", city: "Edinburgh" },
    ],
    tuition:
      "Tuition depends on the course and city. Many universities offer international scholarships that reduce fees significantly.",
    bullets: [
      "Shorter programs mean lower total cost",
      "International scholarships widely available",
      "Part-time work allowed during term",
    ],
    note: "We help you compare cities, courses and living costs before you apply.",
  },
  australia: {
    slug: "australia",
    name: "Australia",
    title: "Study in Australia",
    intro: "High quality education, safe cities, and excellent post-study work opportunities.",
    bold: "Study, work, and build experience in one of the world's most livable countries.",
    hero: heroAus,
    card: ausImg,
    reasons: [
      { icon: Award, title: "World-Class Institutions", body: "Australian universities rank highly for teaching and research quality." },
      { icon: Briefcase, title: "Post-Study Work Rights", body: "Work full-time for two to four years after graduating, depending on your degree." },
      { icon: BookOpen, title: "Work While Studying", body: "Part-time work rights help you support your living costs." },
      { icon: GraduationCap, title: "Student Protections", body: "Strong legal protections and support systems for international students." },
    ],
    stat: { value: "43", label: "universities across every major city" },
    universities: [
      { name: "University of Melbourne", city: "Melbourne" },
      { name: "University of Sydney", city: "Sydney" },
      { name: "Australian National University", city: "Canberra" },
      { name: "University of Queensland", city: "Brisbane" },
    ],
    tuition:
      "Fees differ by state and program. Living costs vary between major cities and regional areas, where scholarships are often larger.",
    bullets: [
      "Regional study can lower cost and extend visas",
      "Merit scholarships for strong applicants",
      "Work rights help cover living expenses",
    ],
    note: "We map your budget against cities and programs before you commit.",
  },
  europe: {
    slug: "europe",
    name: "Europe",
    title: "Study in Europe",
    intro: "Affordable tuition, English-taught programs, and access to a diverse continent.",
    bold: "Low-cost, high-quality education in the heart of Europe.",
    hero: heroEurope,
    card: europeImg,
    reasons: [
      { icon: Award, title: "Low or No Tuition", body: "Several countries charge little or nothing for public university programs." },
      { icon: BookOpen, title: "English-Taught Degrees", body: "Thousands of programs are delivered fully in English." },
      { icon: Briefcase, title: "Career Access", body: "Graduate job-search visas and strong demand in tech, engineering and health." },
      { icon: GraduationCap, title: "Schengen Travel", body: "Live in one country and travel freely across much of the continent." },
    ],
    stat: { value: "3,000+", label: "English-taught programs across Europe" },
    universities: [
      { name: "TU Munich", city: "Germany" },
      { name: "University of Amsterdam", city: "Netherlands" },
      { name: "KU Leuven", city: "Belgium" },
      { name: "Uppsala University", city: "Sweden" },
    ],
    tuition:
      "Public universities in several countries charge minimal tuition, with only administrative fees. Living costs are the main expense.",
    bullets: [
      "Tuition-free options in select countries",
      "Lower living costs than the US or UK",
      "Scholarships such as Erasmus+ available",
    ],
    note: "We help you target countries where your profile and budget fit best.",
  },
};

const SITE_URL = "https://project--b431bd4f-7887-4558-94e9-8488a27e23b2.lovable.app";

export const Route = createFileRoute("/destinations/$country")({
  loader: ({ params }) => {
    const data = countries[params.country.toLowerCase()];
    if (!data) throw notFound();
    return { slug: data.slug, name: data.name, title: data.title, intro: data.intro };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Destination unavailable — LearnBridge" }, { name: "robots", content: "noindex" }] };
    }
    const c = loaderData;
    const url = `${SITE_URL}/destinations/${c.slug}`;
    return {
      meta: [
        { title: `${c.title} — Universities, Tuition & Visa | LearnBridge` },
        { name: "description", content: `${c.intro} LearnBridge guides you through applications, scholarships and visas for ${c.name}.` },
        { property: "og:title", content: `${c.title} | LearnBridge` },
        { property: "og:description", content: c.intro },
        { property: "og:url", content: url },
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
  const c = countries[slug]!;

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
                to="/contact" hash="book"
                className="mt-8 inline-flex rounded-md bg-navy-foreground px-6 py-3 text-sm font-semibold text-navy hover:opacity-90"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-surface py-16">
          <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl text-navy">Why Study in {c.name}?</h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {c.reasons.map((r) => (
                  <div key={r.title}>
                    <r.icon className="h-5 w-5 text-accent" />
                    <h3 className="mt-3 text-sm font-semibold text-navy">{r.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{r.body}</p>
                  </div>
                ))}
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
                to="/contact" hash="book"
                className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90"
              >
                Book Free Consultation
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

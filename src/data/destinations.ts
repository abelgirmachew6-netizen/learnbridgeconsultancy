import italyCard from "@/assets/dest-italy.jpg";
import germanyCard from "@/assets/dest-germany.jpg";
import ukCard from "@/assets/dest-uk.jpg";
import canadaCard from "@/assets/dest-canada.jpg";
import italyHero from "@/assets/hero-italy.jpg";
import germanyHero from "@/assets/hero-germany.jpg";
import ukHero from "@/assets/hero-uk.jpg";
import canadaHero from "@/assets/hero-canada.jpg";

export type IconKey = "award" | "book" | "briefcase" | "cap";

export type Destination = {
  slug: string;
  name: string;
  title: string;
  featured?: boolean;
  blurb: string;
  intro: string;
  bold: string;
  card: string;
  hero: string;
  highlights: string[];
  reasons: { icon: IconKey; title: string; body: string }[];
  stat: { value: string; label: string };
  universities: { name: string; city: string }[];
  tuition: string;
  bullets: string[];
  note: string;
};

export const SITE_URL = "https://learnbridgeconsultancy.lovable.app";

export const destinations: Destination[] = [
  {
    slug: "italy",
    name: "Italy",
    title: "Study in Italy",
    featured: true,
    blurb: "Low tuition, DSU scholarships & early pre-enrolment",
    intro:
      "Public university tuition of roughly €500–€4,000 per year, generous DSU regional scholarships, and hundreds of English-taught degrees.",
    bold: "Pre-enrolment on Universitaly opens early (April–June) — start now to secure your place.",
    card: italyCard,
    hero: italyHero,
    highlights: [
      "Tuition €500–€4,000 per year at public universities",
      "DSU regional scholarships: tuition waiver, stipend, housing & meals",
      "Pre-enrolment runs April–June — early applicants get the best options",
    ],
    reasons: [
      { icon: "award", title: "Very Low Tuition", body: "Public universities charge about €500–€4,000 a year, often reduced further by income-based (ISEE) brackets." },
      { icon: "cap", title: "DSU Scholarships", body: "Regional DSU awards can cover tuition entirely and add a stipend plus free accommodation and meals." },
      { icon: "book", title: "English-Taught Degrees", body: "Hundreds of bachelor's and master's programs are delivered fully in English." },
      { icon: "briefcase", title: "Post-Study Stay", body: "A 12-month job-search permit lets graduates look for work after finishing their degree." },
    ],
    stat: { value: "April–June", label: "Universitaly pre-enrolment window — apply early" },
    universities: [
      { name: "University of Bologna", city: "Bologna" },
      { name: "Sapienza University of Rome", city: "Rome" },
      { name: "Politecnico di Milano", city: "Milan" },
      { name: "University of Padua", city: "Padua" },
    ],
    tuition:
      "Public universities in Italy charge roughly €500–€4,000 per year, and fees are scaled to family income. DSU regional scholarships can waive tuition completely and add a living stipend, housing and meals.",
    bullets: [
      "Tuition typically €500–€4,000 per year",
      "DSU scholarships: tuition waiver + stipend + housing & meals",
      "Pre-enrolment starts April–June — begin documents now",
    ],
    note: "We handle Universitaly pre-enrolment, declaration of value / CIMEA recognition and your visa file end to end.",
  },
  {
    slug: "germany",
    name: "Germany",
    title: "Study in Germany",
    blurb: "Tuition-free public universities & strong job market",
    intro:
      "Public universities charge little or no tuition, and engineering, IT and health graduates are in high demand.",
    bold: "World-class engineering education with almost no tuition fees.",
    card: germanyCard,
    hero: germanyHero,
    highlights: [
      "No tuition at most public universities — only a semester fee",
      "18-month job-search visa after graduation",
      "Strong demand for engineering, IT and health graduates",
    ],
    reasons: [
      { icon: "award", title: "No Tuition Fees", body: "Most public universities charge only a semester contribution of about €150–€350." },
      { icon: "book", title: "English Master's Programs", body: "Thousands of graduate programs are taught entirely in English." },
      { icon: "briefcase", title: "18-Month Job Search", body: "Graduates can stay 18 months to find work, leading to a work permit." },
      { icon: "cap", title: "Industry Links", body: "Universities partner closely with German industry for internships and thesis projects." },
    ],
    stat: { value: "400+", label: "public higher education institutions" },
    universities: [
      { name: "Technical University of Munich", city: "Munich" },
      { name: "RWTH Aachen University", city: "Aachen" },
      { name: "Heidelberg University", city: "Heidelberg" },
      { name: "Humboldt University", city: "Berlin" },
    ],
    tuition:
      "Public universities are tuition-free for most programs; you pay a semester contribution and cover living costs. A blocked account is required for the student visa.",
    bullets: [
      "Tuition-free public universities",
      "Blocked account requirement — we guide the process",
      "Part-time work allowed alongside studies",
    ],
    note: "We prepare your APS/uni-assist application, blocked account and visa documents together.",
  },
  {
    slug: "uk",
    name: "UK",
    title: "Study in the UK",
    blurb: "One-year master's & graduate route visa",
    intro:
      "Shorter degrees, globally recognised qualifications, and a two-year post-study work route.",
    bold: "Finish faster, spend less, and graduate with a degree employers respect worldwide.",
    card: ukCard,
    hero: ukHero,
    highlights: [
      "One-year master's programs reduce total cost",
      "Two-year graduate route work visa",
      "Globally recognised qualifications",
    ],
    reasons: [
      { icon: "award", title: "Globally Recognised Degrees", body: "UK qualifications are respected by employers and universities everywhere." },
      { icon: "book", title: "One-Year Master's", body: "Most postgraduate programs finish in 12 months, reducing total cost." },
      { icon: "briefcase", title: "Graduate Route Visa", body: "Stay and work for two years after completing your degree." },
      { icon: "cap", title: "Strong Student Support", body: "Dedicated international offices, housing help, and career services." },
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
  {
    slug: "canada",
    name: "Canada",
    title: "Study in Canada",
    blurb: "Post-graduation work permit & residency pathways",
    intro:
      "Safe, welcoming cities, respected universities, and a clear path from study to work to permanent residency.",
    bold: "Study, work, and build a long-term future in Canada.",
    card: canadaCard,
    hero: canadaHero,
    highlights: [
      "Post-graduation work permit up to 3 years",
      "Clear permanent residency pathways",
      "Work part-time while you study",
    ],
    reasons: [
      { icon: "award", title: "Respected Universities", body: "Canadian degrees are recognised across North America and beyond." },
      { icon: "briefcase", title: "Post-Graduation Work Permit", body: "Work in Canada for up to three years after graduating." },
      { icon: "cap", title: "Residency Pathways", body: "Canadian study and work experience count toward permanent residency." },
      { icon: "book", title: "Co-op Programs", body: "Many programs include paid work placements built into the curriculum." },
    ],
    stat: { value: "3 years", label: "maximum post-graduation work permit" },
    universities: [
      { name: "University of Toronto", city: "Toronto" },
      { name: "University of British Columbia", city: "Vancouver" },
      { name: "McGill University", city: "Montreal" },
      { name: "University of Alberta", city: "Edmonton" },
    ],
    tuition:
      "Tuition varies by province and program, and proof of funds (GIC) is required for the study permit. Scholarships and co-op earnings help offset costs.",
    bullets: [
      "Proof of funds / GIC — we walk you through it",
      "Entrance scholarships for strong applicants",
      "Paid co-op placements in many programs",
    ],
    note: "We match your budget and profile to provinces and programs with the best outcomes.",
  },
];

export const destinationBySlug: Record<string, Destination> = Object.fromEntries(
  destinations.map((d) => [d.slug, d]),
);

export const retiredSlugs = ["usa", "australia", "europe"];

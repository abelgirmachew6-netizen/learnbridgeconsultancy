const steps = [
  {
    n: "01",
    title: "Profile Assessment & University Selection",
    when: "Jan – Feb",
    body: "We review your academic background, budget and goals, then shortlist Italian universities and English-taught programs that fit you.",
  },
  {
    n: "02",
    title: "Document Preparation & CIMEA / DOV Requests",
    when: "Feb – March",
    body: "Transcripts, translations, legalisation, and the CIMEA statement of comparability or Declaration of Value — prepared early so nothing delays your file.",
  },
  {
    n: "03",
    title: "Official Pre-Enrolment via Universitaly",
    when: "April – June",
    body: "We complete your Universitaly pre-enrolment application and confirm your university choice within the official window.",
  },
  {
    n: "04",
    title: "Visa Application & DSU Scholarship Filing",
    when: "July – August",
    body: "Full study-visa preparation plus your DSU regional scholarship application for tuition waivers, stipends, housing and meals.",
  },
  {
    n: "05",
    title: "Enrollment & Departure",
    when: "September",
    body: "Residence permit guidance, accommodation, arrival checklist and final enrollment at your university.",
  },
];

const stats = [
  { value: "98%", label: "Visa Success Rate" },
  { value: "100%", label: "Admission Guidance" },
];

export function ItalyRoadmap() {
  return (
    <section id="roadmap" className="bg-surface py-20">
      <div className="section-shell">
        <div className="max-w-2xl">
          <span className="eyebrow inline-block rounded-full bg-accent/15 px-3 py-1 text-navy">
            Italy intake 2026/2027
          </span>
          <h2 className="mt-5 text-3xl text-navy">The Italy Success Roadmap</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            A clear, month-by-month plan from first assessment to departure — so you always know
            exactly what happens next.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:max-w-2xl">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-border bg-card px-6 py-5 shadow-card"
            >
              <p className="font-display text-3xl font-bold text-navy">{s.value}</p>
              <p className="eyebrow mt-1 text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        <ol className="relative mt-14 space-y-8 border-l border-border pl-8 sm:pl-12">
          {steps.map((s) => (
            <li key={s.n} className="relative">
              <span className="absolute -left-[2.6rem] flex h-9 w-9 items-center justify-center rounded-full bg-navy font-display text-xs font-bold text-navy-foreground sm:-left-[3.85rem] sm:h-11 sm:w-11 sm:text-sm">
                {s.n}
              </span>
              <div className="rounded-xl bg-card p-6 shadow-card">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-base font-semibold text-navy">{s.title}</h3>
                  <span className="rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-navy">
                    {s.when}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

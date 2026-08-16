import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ConsultationForm } from "@/components/consultation-form";
import heroImg from "@/assets/contact-hero.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact LearnBridge — Book a Free Consultation" },
      {
        name: "description",
        content:
          "Contact LearnBridge in Addis Ababa for personalized study abroad guidance. Free 15–20 minute consultation, no commitment.",
      },
      { property: "og:title", content: "Get in Touch | LearnBridge" },
      {
        property: "og:description",
        content: "Have questions or ready to start your study abroad journey? Contact our team.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section className="relative isolate overflow-hidden">
          <img
            src={heroImg}
            alt="Modern glass office building at dusk"
            width={1920}
            height={900}
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-navy-deep/75" />
          <div className="section-shell py-24 text-navy-foreground">
            <p className="eyebrow text-accent">Contact Us</p>
            <h1 className="mt-4 text-4xl sm:text-5xl">Get in Touch</h1>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-navy-foreground/85">
              Have questions or ready to start your study abroad journey?
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-navy-foreground/85">
              Contact us and get personalized guidance from our team.
            </p>
            
          </div>
        </section>

        <ConsultationForm />

        <section className="bg-surface pb-16">
          <div className="section-shell grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div className="rounded-xl bg-card p-8 shadow-card">
              <h2 className="text-2xl text-navy">Prefer to chat right now?</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Message us on WhatsApp and we'll reply during consultation hours.
              </p>
              <p className="mt-8 text-sm font-semibold text-navy">
                Limited free consultation slots available each week
              </p>
              <p className="mt-1 text-sm font-semibold text-destructive">
                Free 15–20 minute consultation • No commitment
              </p>
              <a
                href="https://wa.me/251991188656"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-deep"
              >
                Chat on WhatsApp <ArrowRight className="h-4 w-4" />
              </a>
            </div>


            <aside className="rounded-xl bg-navy p-8 text-navy-foreground shadow-lift">
              <h2 className="flex items-center gap-2 text-xl">
                <MapPin className="h-5 w-5 text-accent" />
                Contact Information
              </h2>

              <div className="mt-8 space-y-6 text-sm">
                <div>
                  <p className="eyebrow text-navy-soft">Address</p>
                  <p className="mt-1 font-semibold">Addis Ababa, Ethiopia</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="eyebrow text-navy-soft">WhatsApp</p>
                    <a href="https://wa.me/251991188656" className="mt-1 block hover:underline">
                      +251 991188656
                    </a>
                  </div>
                  <div>
                    <p className="eyebrow text-navy-soft">Email</p>
                    <a
                      href="mailto:learnbridgeconsultancy@gmail.com"
                      className="mt-1 block break-all underline underline-offset-4"
                    >
                      learnbridgeconsultancy@gmail.com
                    </a>
                  </div>
                </div>
                <div>
                  <p className="eyebrow text-navy-soft">Consultation Hours</p>
                  <p className="mt-1">Mon–Fri: 8:30 AM – 6:00 PM</p>
                  <p className="text-navy-foreground/60">Closed on Weekends &amp; Public Holidays</p>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

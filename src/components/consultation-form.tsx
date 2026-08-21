import { useState } from "react";
import { AlertTriangle, Mail, MapPin, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const destinations = ["Italy", "Germany", "UK", "Canada", "Not sure yet"];
const WEB3FORMS_ACCESS_KEY = "8572abb1-60ac-49ef-8737-f1e4fcfb0bc2";

export function ConsultationForm() {
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    const firstName = String(fd.get("firstName") ?? "").trim();
    const lastName = String(fd.get("lastName") ?? "").trim();
    const fullName = [firstName, lastName].filter(Boolean).join(" ");
    const email = String(fd.get("email") ?? "").trim();
    const destination = String(fd.get("destination") ?? "").trim();
    const goals = String(fd.get("goals") ?? "").trim();

    if (!firstName) {
      toast.error("Please enter your first name.");
      form.querySelector<HTMLInputElement>('input[name="firstName"]')?.focus();
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(email)) {
      toast.error("Please enter a valid email address, e.g. name@example.com");
      form.querySelector<HTMLInputElement>('input[name="email"]')?.focus();
      return;
    }
    if (submitting) return;

    setSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New Free Consultation Request",
          from_name: "LearnBridge Website",
          "Full Name": fullName,
          Email: email,
          Destination: destination || "Not specified",
          Goals: goals || "—",
        }),
      });
      const result = (await res.json().catch(() => null)) as { success?: boolean } | null;
      if (!res.ok || !result?.success) throw new Error("request failed");
      toast.success("Request received! We'll email you to arrange your free consultation.");
      form.reset();
    } catch {
      toast.error("Something went wrong. Please try WhatsApp instead: +251 991188656");
    } finally {
      setSubmitting(false);
    }
  }


  return (
    <section id="book" className="bg-surface">
      <div className="section-shell py-16">
        <div className="grid overflow-hidden rounded-xl shadow-lift lg:grid-cols-2">
          <div className="bg-navy-deep p-10 text-navy-foreground">
            <h2 className="font-display text-3xl font-bold">Start Your Journey</h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-soft">
              Ready to start your study abroad journey? Speak with our experts and get personalized
              guidance.
            </p>

            <p className="mt-10 flex items-center gap-2 text-sm font-semibold">
              <AlertTriangle className="h-4 w-4 text-accent" />
              Limited free consultation slots available each week
            </p>

            <div className="mt-8 space-y-6 text-sm">
              <p className="flex items-center gap-3 font-semibold">
                <MapPin className="h-4 w-4 text-accent" />
                Addis Ababa, Ethiopia
              </p>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-accent" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:learnbridgeconsultancy@gmail.com"
                    className="break-all underline underline-offset-4"
                  >
                    learnbridgeconsultancy@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 h-4 w-4 text-accent" />
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <a
                    href="https://wa.me/251991188656"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4"
                  >
                    +251 991188656
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="bg-surface p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="mb-1.5 block text-xs font-semibold text-navy">
                  First Name <span className="text-destructive">*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  required
                  autoComplete="given-name"
                  maxLength={80}
                  placeholder="e.g. Abel"
                  className="h-12 w-full rounded-md border border-border bg-card px-4 text-sm outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-navy/20"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="mb-1.5 block text-xs font-semibold text-navy">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  autoComplete="family-name"
                  maxLength={80}
                  placeholder="e.g. Girmachew"
                  className="h-12 w-full rounded-md border border-border bg-card px-4 text-sm outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-navy/20"
                />
              </div>
            </div>

            <label htmlFor="email" className="mb-1.5 mt-4 block text-xs font-semibold text-navy">
              Email Address <span className="text-destructive">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              inputMode="email"
              autoComplete="email"
              maxLength={255}
              placeholder="name@example.com"
              aria-describedby="email-hint"
              className="h-12 w-full rounded-md border border-border bg-card px-4 text-sm outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-navy/20"
            />
            <p id="email-hint" className="mt-1 text-xs text-muted-foreground">
              We'll reply here to arrange your consultation.
            </p>

            <label htmlFor="destination" className="mb-1.5 mt-4 block text-xs font-semibold text-navy">
              Preferred Study Destination
            </label>
            <select
              id="destination"
              name="destination"
              defaultValue=""
              className="h-12 w-full rounded-md border border-border bg-card px-4 text-sm outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-navy/20"
            >
              <option value="">Select a destination</option>
              {destinations.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>

            <label htmlFor="goals" className="mb-1.5 mt-4 block text-xs font-semibold text-navy">
              Tell us about your goals
            </label>
            <textarea
              id="goals"
              name="goals"
              rows={5}
              maxLength={2000}
              placeholder="What would you like to study, and where are you in the process?"
              className="w-full rounded-md border border-border bg-card p-4 text-sm outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-navy/20"
            /> 
            <div className="mt-4 flex items-center gap-2.5">
            <input
              type="checkbox"
              id="directApply"
              name="directApply"
              className="h-4 w-4 rounded border-border text-navy focus:ring-accent"
            />
            <label htmlFor="directApply" className="text-xs text-muted-foreground select-none cursor-pointer">
              I am ready to start my application immediately (skip the intro call)
            </label>
          </div>
            <button
              type="submit"
              disabled={submitting}
              aria-busy={submitting}
              className="mt-5 w-full rounded-md bg-navy px-6 py-3.5 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-deep active:bg-navy-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/40 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Submit"}
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Free 15–20 minute consultation • No commitment
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

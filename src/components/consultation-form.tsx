import { useState } from "react";
import { AlertTriangle, Mail, MapPin, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const destinations = ["USA", "UK", "Australia", "Europe", "Not sure yet"];

export function ConsultationForm() {
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    const payload = {
      firstName: String(fd.get("firstName") ?? "").trim(),
      lastName: String(fd.get("lastName") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      destination: String(fd.get("destination") ?? "").trim(),
      goals: String(fd.get("goals") ?? "").trim(),
    };

    if (!payload.firstName || !payload.email) {
      toast.error("Please enter your first name and email address.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/public/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("request failed");
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

          <form onSubmit={handleSubmit} className="bg-surface p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                name="firstName"
                required
                maxLength={80}
                placeholder="First Name"
                className="h-12 rounded-md border border-border bg-card px-4 text-sm outline-none focus:border-navy"
              />
              <input
                name="lastName"
                maxLength={80}
                placeholder="Last Name"
                className="h-12 rounded-md border border-border bg-card px-4 text-sm outline-none focus:border-navy"
              />
            </div>
            <input
              name="email"
              type="email"
              required
              maxLength={255}
              placeholder="Email Address"
              className="mt-4 h-12 w-full rounded-md border border-border bg-card px-4 text-sm outline-none focus:border-navy"
            />
            <select
              name="destination"
              defaultValue=""
              className="mt-4 h-12 w-full rounded-md border border-border bg-card px-4 text-sm text-muted-foreground outline-none focus:border-navy"
            >
              <option value="">Preferred Study Destination</option>
              {destinations.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
            <textarea
              name="goals"
              rows={5}
              maxLength={2000}
              placeholder="Tell us about your goals"
              className="mt-4 w-full rounded-md border border-border bg-card p-4 text-sm outline-none focus:border-navy"
            />
            <button
              type="submit"
              disabled={submitting}
              className="mt-4 w-full rounded-md bg-navy px-6 py-3.5 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-deep disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Book Free Consultation"}
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

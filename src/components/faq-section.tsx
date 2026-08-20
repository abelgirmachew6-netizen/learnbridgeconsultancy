import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I need to speak Italian to study in Italy?",
    a: "No. We focus on 1,200+ degree programs that are fully taught in English, so you can apply without Italian. Learning basic Italian helps with daily life, and we point you to free courses once you arrive.",
  },
  {
    q: "How much are the tuition fees?",
    a: "Public universities in Italy range from €500 to €4,000 per year, calculated on your family income. Many students in the lowest income brackets pay close to the minimum.",
  },
  {
    q: "Can I work while studying?",
    a: "Yes. Students in Italy and Germany can work up to 20 hours per week alongside their studies, which helps cover living costs.",
  },
  {
    q: "What is a DSU Scholarship?",
    a: "The DSU is a regional need-based scholarship in Italy. It can cover your tuition entirely and add a cash stipend, free or subsidised meals, and student housing.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-20">
      <div className="section-shell max-w-3xl">
        <h2 className="text-center text-3xl text-navy">Frequently Asked Questions</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground">
          The questions students ask us most before starting their application.
        </p>

        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="rounded-xl border border-border bg-card px-5 shadow-card"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-navy hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

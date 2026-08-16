import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().trim().min(1).max(80),
  lastName: z.string().trim().max(80).optional().default(""),
  email: z.string().trim().email().max(255),
  destination: z.string().trim().max(80).optional().default(""),
  goals: z.string().trim().max(2000).optional().default(""),
});

export const Route = createFileRoute("/api/public/consultation")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let payload: unknown;
        try {
          payload = await request.json();
        } catch {
          return Response.json({ error: "Invalid request" }, { status: 400 });
        }

        const parsed = schema.safeParse(payload);
        if (!parsed.success) {
          return Response.json(
            { error: "Please check the form fields and try again." },
            { status: 400 },
          );
        }
        const data = parsed.data;

        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const { data: row, error } = await supabaseAdmin
          .from("consultation_requests")
          .insert({
            first_name: data.firstName,
            last_name: data.lastName || null,
            email: data.email,
            destination: data.destination || null,
            goals: data.goals || null,
          })
          .select("id")
          .single();

        if (error) {
          console.error("consultation insert failed", error);
          return Response.json({ error: "Could not save your request." }, { status: 500 });
        }

        // Email notification is sent once the sender domain is verified.
        try {
          const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
          await sendTemplateEmail("consultation-request", "learnbridgeconsultancy@gmail.com", {
            templateData: {
              firstName: data.firstName,
              lastName: data.lastName,
              email: data.email,
              destination: data.destination,
              goals: data.goals,
            },
            idempotencyKey: `consultation-request-${row.id}`,
          });
        } catch (err) {
          console.error("consultation email failed", err);
        }

        return Response.json({ ok: true });
      },
    },
  },
});

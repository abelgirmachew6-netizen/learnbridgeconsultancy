# Learn Bridge Consultancy — Pre-Launch Overhaul

Goal: a clean, corporate blue-and-white site focused on study abroad, with Italy as the featured destination and a stronger path to booking a free 15-minute call.

## Destinations: Italy, Germany, UK, Canada

The site currently ships USA, UK, Australia and Europe. It will move to the four requested destinations:

- Keep: UK
- Add: Italy (featured), Germany, Canada
- Retire: USA, Australia, Europe (their pages redirect to the destinations list, so old shared links don't break)

New card and hero imagery will be generated for Italy, Germany and Canada.

Italy gets a "Featured" badge and highlights:
- Low tuition, roughly EUR 500–4,000 per year
- DSU regional scholarships (tuition waiver + stipend + housing/meals)
- Pre-enrolment opens early (April–June) — start now

## Home page

- Hero: badge "NOW OPEN: INTAKE 2026/2027", headline "Your Bridge to World-Class Education", supporting line emphasising the free 15-minute consultation, primary CTA "Book 15-min call" and secondary "View Destinations".
- Destinations grid: four professional cards, Italy first with the Featured ribbon and Italy-specific facts.
- Services preview updated to match the new service set.

## Services

Three services, with Italy detail called out:
1. University Applications
2. Visa & Pre-Enrolment Assistance — includes Universitaly pre-enrolment, declaration of value / CIMEA, and the April–June Italian timeline with a "start now" nudge
3. Course & Career Guidance

## UX and conversion

- Floating sticky "Book 15-min call" button, bottom-right on every page, scrolls to the contact form (jumps to /contact#book from other pages). Hidden while the form is on screen.
- Consultation form: Name, Email, Destination (Italy, Germany, UK, Canada, Not sure yet), Goals. Keeps the existing Web3Forms submission; verify loading state, full reset after submit, and success/error toasts.
- Navbar links get smooth scrolling and an offset for the sticky header.

## SEO and metadata

- Title: "Learn Bridge Consultancy | Study Abroad & Visa Consultants"
- Description: "Expert guidance for university applications and visas to Italy, Germany, the UK, and Canada. Your bridge to global education."
- Canonical and og:url on every page corrected to the live domain (they currently point at a placeholder domain).

## Footer and trust

Email learnbridgeconsultancy@gmail.com, WhatsApp +251 991188656, office address placeholder (Addis Ababa, Ethiopia — full address TBC), working hours, and "© 2025 Learn Bridge Consultancy. All rights reserved."

## Visuals

Blue-and-white corporate palette tightened in the design tokens (navy primary, light blue accents, white surfaces), consistent card and section spacing, and a responsiveness pass verified at mobile, tablet and desktop widths.

## Technical notes

- Destination data lives in the dynamic route `src/routes/destinations.$country.tsx` plus the grids in `index.tsx` and `destinations.index.tsx`; all three get the new four-country dataset, with a shared data module to avoid drift.
- Retired slugs handled by a redirect in the `$country` route's loader; unknown slugs keep the existing 404 page.
- Sticky CTA added as a component rendered in `__root.tsx`.
- New imagery via image generation into `src/assets`.

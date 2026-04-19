# Allegiant Home Care — Website

The public website for Allegiant Home Care, a home care provider serving Rochester, MN.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- `lucide-react` for icons
- `next/font` (Inter + Fraunces)
- Formspree for form submissions
- Google Tag Manager for analytics
- Deployed on Vercel

## Local development

```bash
npm install
cp .env.example .env.local   # fill in as needed
npm run dev
```

Open http://localhost:3000.

## Environment variables

See `.env.example` for the full list.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager container ID. Leave empty to disable. |
| `NEXT_PUBLIC_FORMSPREE_CARE_SEEKER_ID` | Formspree ID for the care-seeker form. |
| `NEXT_PUBLIC_FORMSPREE_CAREGIVER_ID` | Formspree ID for the caregiver application form. |
| `NEXT_PUBLIC_SOCIAL_*` | Instagram / Facebook / LinkedIn / YouTube URLs. Only render when set. |
| `NEXT_PUBLIC_HAS_LOGO` | Set to `1` once `/public/logo.svg` has been added. |

## Where the content lives

All site copy is kept in plain TypeScript files so it's easy to edit without touching component code.

| File | What it holds |
| --- | --- |
| `src/lib/site.ts` | Business name, phone, email, address, service area, nav items, social URLs |
| `src/lib/services.ts` | The 6 service entries (slug, name, card copy, overview, what's included, who it's for, service-specific FAQs) |
| `src/lib/faqs.ts` | The homepage FAQ list |
| `src/lib/resources.ts` | Family resource articles |
| `src/lib/schema.ts` | JSON-LD schema builders (LocalBusiness, Service, FAQPage) |

## How to add a new service

1. Add a new entry to the `SERVICES` array in `src/lib/services.ts` with the fields shown on existing services.
2. Pick an icon in `src/components/ServiceCard.tsx` and map it to the new slug.
3. That's it — the page, sitemap entry, schema, and footer link are generated automatically.

## How to add a new resource article

1. Add a new entry to `RESOURCES` in `src/lib/resources.ts`.
2. The page is generated automatically at `/resources/[slug]`.

## How to swap in the real logo

1. Drop the logo at `public/logo.svg` (SVG preferred) or `public/logo.png` + update `src/components/Logo.tsx`.
2. Set `NEXT_PUBLIC_HAS_LOGO=1` in `.env.local` and on Vercel.

## Forms

Both forms submit to Formspree. Each form fires a `dataLayer` event on submit attempt (with a `valid` flag) so GTM can capture conversions. Event names: `care_seeker_form_submit`, `caregiver_form_submit`. Phone/SMS/email clicks fire `phone_click`, `sms_click`, `email_click`.

On success, forms redirect to dedicated thank-you pages (`/thank-you/care-seeker` and `/thank-you/caregiver`) so conversions can be tied to a URL in GTM.

## Social icons

Social icons only render if their env var is set to a valid URL. Never fall back to placeholders — the existing Wix site's generic social links are the biggest trust issue, and we are not reintroducing them.

## Deployment

This repo is set up for Vercel:

1. Connect the GitHub repo to a Vercel project.
2. Production branch: `main`.
3. Preview deployments run automatically on every PR.
4. Set the environment variables in the Vercel dashboard (Project Settings → Environment Variables).

## Content rules

A few non-negotiables that are easy to forget when editing copy:

- Never name a specific hospital or medical institution. Use "Rochester's medical community."
- Never make medical claims or promise clinical outcomes.
- Never show pricing on the site.
- Never mention WhatsApp. SMS is the secondary channel.
- Care seekers and job seekers are two separate audiences with separate forms, CTAs, and thank-you pages.

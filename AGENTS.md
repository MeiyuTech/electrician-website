# Project Guide for Agents

## Overview

- Framework: Next.js App Router
- Entry: `app/page.tsx`
- Global styles: `app/globals.css`
- UI sections: `components/` (header, hero, services, pricing, contact, footer)
- Booking embed: `components/booking-modal.tsx` (Cal.com)

## Common Commands

- Dev server: `pnpm dev`
- Lint: `pnpm lint`
- Build: `pnpm build`
- Start: `pnpm start`

## Booking (Cal.com)

- Update `calUsername` and `eventType` in `components/booking-modal.tsx` to match live Cal.com slugs.
- If multiple event types are needed, add a selector or separate buttons before opening the modal.

## Content/Branding Notes

- Text content is Chinese and currently mentions "appliance repair".
- Domain and recent requirements mention "electrician" branding; keep wording consistent across sections.
- Theme color lives in `app/globals.css` as CSS variables.
  - Primary/accent/ring: `oklch(0.65 0.19 50)` (approx `#f18600`)
  - Secondary (hero background): `oklch(0.2 0 0)` (approx `#2b2b2b`)

## File Map

- `app/layout.tsx`: metadata, fonts, analytics, head tags
- `app/page.tsx`: page composition
- `components/booking-modal.tsx`: embedded booking UI
- `components/contact.tsx`: phone/email blocks and contact form fields

## Conventions

- Prefer edits via `components/` and `app/` rather than adding new pages.
- Keep phone/email as clickable `tel:`/`mailto:` links.

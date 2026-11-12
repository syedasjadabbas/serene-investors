# SERENE INVESTORS

Fictional fractional real estate marketing site. Layout and interaction take cues from public marketing patterns. Branding, copy, yields, and assets are original.

## Stack

React, TypeScript, Vite, Tailwind CSS, GSAP, ScrollTrigger, Lenis, Lucide React, React Router.

## Scripts

```bash
npm install
npm run dev
npm run build
```

## Inside the Serene Heights Group site (`/serene-investors`)

The site is built with `basePath: "/serene-investors"` so it can live at
**sereneheightsgroup.com/serene-investors** while staying its own repo and Vercel project
(Next.js Multi-Zones). The group site rewrites `/serene-investors` and `/serene-investors/:path*`
to this deployment (`INVESTORS_ORIGIN` in the group site's Vercel settings).

- `<Link>`, the router and `_next` assets get the prefix automatically.
- Plain `<img>` sources, plain internal `<a>` links and `fetch('/api/…')` go through `withBase()` in
  `src/lib/asset.ts` — use it for any new root-relative path.
- On this app's own domain, `/` redirects to `/serene-investors`.
- Set `NEXT_PUBLIC_BASE_PATH=` (empty) to run at the root again.
- OTP sign-in emails need `RESEND_API_KEY` (see `.env.example`).

## Docs

- `PRODUCT.md` - who it is for and what it claims
- `DESIGN.md` - tokens and visual rules
- `docs/SITE-PLAN.md` - reference analysis and implementation order

## Rule

Do not copy Stake branding, logo, proprietary copy, investment claims, or assets.

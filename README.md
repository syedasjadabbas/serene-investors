# SERENE INVESTORS

Fictional fractional real estate marketing site. Layout and interaction take cues from public marketing patterns. Branding, copy, yields, and assets are original.

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, GSAP + ScrollTrigger, Lenis, Lucide React,
zod, Resend.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Structure

```
src/
  app/                          # routes only; one folder per feature
    layout.tsx  globals.css  not-found.tsx
    (home)/  (auth)/login  (auth)/signup     # route groups: no URL segment
    <feature>/
      page.tsx                  # thin: renders the feature's page component
      [slug]/page.tsx
      _components/              # UI used only by this feature (incl. <Feature>Page.tsx)
      _hooks/  _lib/            # feature-only hooks, content data and helpers
    api/<area>/<action>/route.ts  # one line: export const POST = <module route>
  global/                       # shared by two or more features
    api/
      client.ts                 # apiPost(): base path, JSON, unwraps { success, message, data }
      endpoints/<area>Api.ts    # one object per area, e.g. authApi.sendOtp()
      types/                    # response types
    components/ui|layout|sections
    hooks/  lib/  data/  types/  styles/
    providers/                  # AppProviders, LenisProvider
    stores/                     # cross-page client state (auth)
    constants/api.ts            # API paths
  server/                       # server-only code, never imported by components
    config/env.ts               # every env var, with safe defaults
    lib/                        # AppError, responses, zod validation, defineRoute, mailer, stores
    modules/<area>/
      <area>.routes.ts          # validator + controller -> route handler
      <area>.validators.ts      # zod schemas
      <area>.controller.ts      # thin: call service, wrap response
      <area>.service.ts         # all logic; throws AppError
```

Rules:

- Something used by one feature lives in that feature's `_components`, `_hooks` or `_lib`. When a
  second feature needs it, move it to `global/`.
- Same-feature imports are relative (`./_components/X`, `../_components/X`); everything else uses
  `@/global/...` or `@/server/...`.
- Components never call `fetch`; they call `global/api/endpoints/*`.
- API request flow: `route.ts` → `defineRoute` (zod validation + the one error handler) →
  controller → service. Every response is `{ success, message, data }`; errors are thrown as
  `AppError(status, message)`.
- Config comes only from `server/config/env.ts`.

## Inner page kit

Every inner page is built from `src/global/components/page/` so pages look like one site:

| Component | Use |
| --- | --- |
| `PageHero` | Top of every page; renders its only `h1`. `tone="light"` (centred title on paper) or `"dark"` (rounded panel, optional photo). `highlight` colours one word. |
| `PageSection` | A band with standard padding and a 1240px column. `tone` paper/white/dark, `width` narrow for reading, `pad` to join two bands. |
| `SectionHeading` | Eyebrow pill + `h2` + supporting text at the top of a section. |
| `Card`, `Eyebrow`, `Highlighted` | Rounded content card, small pill label, accent-word helper. |
| `StatCards` | Row of big-number cards. |
| `StepRow` | "Step 01" text beside an image or visual in one rounded card; alternate `reverse` and `tone`. |
| `FeatureCards` | Icon + title + text grid. |
| `FaqAccordion` | Accessible question list. |
| `CtaBand` | Closing call to action; end pages with one. |

Buttons that lead somewhere are `PillLink` (`global/components/ui`). Colours come from the `sx-*`
Tailwind tokens in `globals.css` (`sx-ink`, `sx-card`, `sx-paper`, `sx-brand`, `sx-mint`,
`sx-forest`, `sx-sand`); don't write hex values in components. `cn()` only joins strings, so don't
pass a class to override a conflicting one — add a prop instead.

## Inside the Serene Heights Group site (`/serene-investors`)

The site is built with `basePath: "/serene-investors"` so it can live at
**sereneheightsgroup.com/serene-investors** while staying its own repo and Vercel project
(Next.js Multi-Zones). The group site rewrites `/serene-investors` and `/serene-investors/:path*`
to this deployment (`INVESTORS_ORIGIN` in the group site's Vercel settings).

- `<Link>`, the router and `_next` assets get the prefix automatically.
- Plain `<img>` sources, plain internal `<a>` links and `fetch('/api/…')` go through `withBase()` in
  `src/global/lib/asset.ts` — use it for any new root-relative path. The API client does this for you.
- On this app's own domain, `/` redirects to `/serene-investors`.
- Set `NEXT_PUBLIC_BASE_PATH=` (empty) to run at the root again.
- OTP sign-in emails need `RESEND_API_KEY` (see `.env.example`).

## Docs

- `PRODUCT.md` - who it is for and what it claims
- `DESIGN.md` - tokens and visual rules
- `docs/SITE-PLAN.md` - reference analysis and implementation order

## Rule

Do not copy Stake branding, logo, proprietary copy, investment claims, or assets.

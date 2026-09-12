# Site plan

Reference reviewed: [getstake.com](https://getstake.com/) plus `/properties` and `/about-us`. Used for structure and UX only. Cairn does not reuse Stake branding, copy, yields, property names, or assets.

Reading this as: a consumer marketing landing for cautious first-time property investors, with a photography-led catalogue language, leaning toward Tailwind tokens plus GSAP and Lenis.

---

## Reference analysis

### 1. Overall page structure

Long single-page marketing scroll. Promo strip, sticky header, hero with device collage, then a sequence of proof, process, product, money, trust, stories, and a closing app CTA. Footer is a sitemap plus legal blocks. The page sells the app more than it sells a single listing.

### 2. Navigation / header

Left wordmark. Center or mid-left product links: Investments (mega or dropdown), Automation with a NEW pill, Visa Programs, Sell, Learn. Right: Login (ghost) and Sign up (filled). Height stays compact. A campaign banner sits above the bar on some loads.

Cairn maps this to Offerings, How it works, Learn, Log in, Get started. No copied product names.

### 3. Hero section

Left-aligned headline and supporting line. One primary CTA. Right side is a phone or device frame with floating property cards, rent toasts, and yield pills. The collage is the product shot. Hero fills the first viewport.

### 4. Section ordering

1. Promo banner
2. Header
3. Hero
4. Press logo row
5. How it works (4 steps)
6. Floating or inline property examples
7. Platform stats
8. Properties vs funds split
9. How money is made
10. Rewards
11. Regulation / trust
12. Backed by
13. Testimonials
14. App download
15. Footer

### 5. Typography hierarchy

Geometric sans. Large confident H1, smaller section H2, short H3 inside steps and cards, small meta on cards and stats. Tight but not colliding tracking on display. Body stays short. Numbers in stats jump a full step larger than headings.

Cairn uses Mona Sans Variable with the scale in DESIGN.md.

### 6. Colors

Reference: white and near-white surfaces, near-black ink, one bright green for CTAs and positive yield, light grey rules, photo-led color. Dark text on white, white text on green.

Cairn does not use that green. Primary is title-deed crimson. Accent is ink-blue. Surfaces stay paper-white.

### 7. Spacing system

Large section padding (roughly 64-120px). Cards cluster tight. Hero and app CTA are the airiest. Content width is a wide marketing container, not full-bleed except photography.

Token scale: 4 / 8 / 12 / 16 / 24 / 32.

### 8. Cards and UI components

Property card: photo, location, name, occupancy pill, yield pill, price meta. Fund card: similar but market + return. Step tiles: index word + short title + body. Stat tiles: big number + label. Trust tiles: title + body + text link. Testimonial: quote + name + role + portrait. Promo toast: small floating receipt.

### 9. Image usage

Hero and close are collage-led. Listings use building photos. Testimonials use portraits. Press and backers are flat marks. The site never relies on illustration as the main story.

### 10. Buttons and CTAs

Primary filled pill (Sign up / Invest now). Secondary ghost or text (Login, Learn more). Campaign links in the top strip. One conversion intent repeated: start investing. We keep one label: Get started.

### 11. Scroll behavior

Long native-feeling scroll. Smooth easing. Horizontal snap or drag on card rows. No hard scroll-jack except possible light pinning on collages. Footer is a hard stop.

### 12. Animations and transitions

Header hairline after scroll. Card hover lift. Button press. Step and stat reveal. Optional count-up. Collage drift or float. Testimonial advance. All should degrade to static.

### 13. Sticky / fixed elements

Promo strip can pin or sit above. Header is sticky. Mobile menu is a sheet. Cookie or consent may overlay. No persistent bottom bar on desktop.

### 14. Responsive behavior

Desktop: split hero, 4-up stats, 3-4 card peek, 4-col footer. Tablet: 2-up. Mobile: single column, hamburger, snap carousels, stacked CTAs, full-width buttons.

Breakpoints: `sm 640`, `md 768`, `lg 1024`, `xl 1280`.

### 15. Mobile navigation

Hamburger replaces primary + utility. Full-width panel. Dropdown children become stacked links. Focus trap and escape to close when the sheet is built.

### 16. Investment / property presentation

Catalogue, not dashboard. Image first. Same fields on every card so comparison is possible. Status pills (available / funded / exited). Yield is a badge, not a chart. Horizontal peek implies more inventory.

### 17. Statistics sections

Two jobs: scale (users, buildings, markets) and money mechanics (rent, yield, exits). Big number, small label. Must stay sample-labeled on Cairn.

### 18. Testimonials

Portrait + short quote + name + role. Horizontal story row. Quote cap: 3 lines. Attribution uses a hyphen, not an em dash.

### 19. Footer

Multi-column sitemap, legal links, copyright, long risk copy, addresses. Cairn keeps the sitemap and a fictional-product disclaimer. No copied regulatory paragraphs.

### 20. Visual design language

Bright, photographic, app-led consumer fintech. White paper, one accent, rounded pills, soft cards, lots of air, phone as hero object. Trust is built with photos, numbers, and documents, not with dark-mode chrome.

---

## Technique map

| Concern | GSAP | ScrollTrigger | Lenis | CSS | React state | Reusable | Breakpoints |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Smooth wheel | | | yes | | | LenisProvider | off below `md` if janky |
| Header elevate | | | | yes | IntersectionObserver | SiteHeader | all |
| Mobile nav | | | | yes | `open` | SiteHeader | `<lg` |
| Offerings dropdown | | | | yes | `open` / hover | NavDropdown | `lg+` |
| Hero entrance | yes | optional | | | | HeroSection | reduce on mobile |
| Hero collage drift | yes | yes | | | | HeroCollage | `lg+` only |
| Press fade | | | | yes | | PressSection | all |
| How-it-works reveal | yes | yes | | | | Reveal | stagger `md+` |
| Property / fund rows | | optional | | snap | active index optional | HorizontalScroller, PropertyCard, FundCard | snap `<lg` |
| Stats count-up | yes | yes | | | | CountUp | once |
| Offerings split | | | | hover | | OfferingPanel | stack `<md` |
| Testimonials | | | | snap | index | TestimonialsSection | snap `<lg` |
| Buttons, pills | | | | hover / active | | Button, Badge | all |
| Route changes | | refresh | stop/start | | router | AppRouter | all |

Lenis syncs to the GSAP ticker. `prefers-reduced-motion` disables Lenis, pins, drift, and count-up.

---

## A. Site section map

Home, in order:

1. `SiteHeader` (sticky). Optional promo later.
2. `HeroSection`
3. `PressSection`
4. `HowItWorksSection`
5. `FeaturedHoldingsSection`
6. `PlatformStatsSection`
7. `OfferingsSplitSection`
8. `ReturnsExplainerSection`
9. `RewardsSection`
10. `TrustSection`
11. `BackersSection`
12. `TestimonialsSection`
13. `AppDownloadSection`
14. `SiteFooter`

Routes: `/` `/properties` `/funds` `/how-it-works` `/learn` `/about` `/login` `/get-started` `/legal/*`

---

## B. Component architecture

- `app/` providers and router
- `pages/` route compositions only
- `components/layout/` chrome
- `components/sections/` one folder per page
- `components/cards/` repeating units
- `components/ui/` primitives
- `components/motion/` GSAP / Lenis islands
- `data/` typed content
- `types/` shared contracts
- `hooks/` media, motion, header
- `lib/` gsap register, format, `cn`

App.tsx only mounts providers and the router.

---

## C. Animation plan

1. Lenis on desktop when motion is allowed.
2. Header border after the top sentinel exits.
3. Hero copy fade and collage drift, `lg+`.
4. One reveal treatment for steps and stats. Content stays visible without JS.
5. Count-up once per stat.
6. CSS only for buttons, cards, and nav.
7. At most one pinned sequence, and only if the collage needs it.
8. Snap rows on mobile instead of ScrollTrigger pin.

---

## D. Responsive strategy

- `sm`: type and padding
- `md`: 2-col stats, process, footer
- `lg`: desktop nav, split hero, 4-col stats, collage
- `xl`: wider photo crops

Hero uses `min-h-[100dvh]`. Mobile nav is a panel. Card rows snap horizontally under `lg`.

---

## E. Folder structure

```text
src/
  app/providers/ LenisProvider.tsx  AppProviders.tsx
  app/router.tsx
  pages/
  components/layout/  ui/  cards/  sections/home/  motion/
  data/
  types/
  hooks/
  lib/
  styles/tokens.css
  index.css
PRODUCT.md
DESIGN.md
docs/SITE-PLAN.md
```

---

## F. Implementation order

1. Tokens, type, header, footer (done at scaffold level)
2. Hero
3. Property card + featured row + properties page
4. How it works
5. Stats
6. Offerings split + funds page
7. Returns explainer
8. Rewards and trust
9. Testimonials
10. App download
11. Motion pass
12. Responsive and a11y pass

Stop after each section and check routes that share the same card or header.

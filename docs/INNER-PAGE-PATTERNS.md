# Inner page patterns

How Serene Investors' inner pages are laid out. The layouts follow the patterns of prypco.com's
inner pages (studied November 2026); the brand, copy, colours and images are Serene's own. Never
copy PRYPCO text, logos, figures or images.

All shared building blocks live in `src/global/components/page/` (see README, "Inner page kit").
`src/app/resort/_components/ResortPage.tsx` is the reference dark product page.

## Every page

- The shell (`AppShellClient`) puts each page on a paper sheet with rounded bottom corners over the
  dark footer, and adds the newsletter card (`NewsletterCard`) at the bottom of every page except
  login, signup and dashboard. **Pages must not render their own newsletter.**
- Content column: 1240px (`max-w-[1240px]`, `px-4 sm:px-8`). Cards: white, `rounded-[20px]`
  (big feature cards `rounded-[30px]`), no borders or heavy shadows.
- Section headings ~35px bold (`SectionHeading`); page titles 44px (`PageHeader`) or the big
  product hero (`ProductHero`).

## Pattern A: product page (Projects, Smart Property, How it works, Owner benefits, Trust & compliance, The resort)

1. `ProductHero` — full screen, pinned; everything after it goes inside `HeroCover`, which scrolls
   up over it with rounded top corners.
   - `tone="tint"`: pale mint gradient, dark text, a `visual` rising from the bottom edge (a photo
     card or mini UI). Projects (`/properties`), Smart Property (`/smart-property`), How it works
     (`/how-it-works`), Owner benefits (`/owner-benefits`).
   - `tone="dark"`: photo (or video) under a dark overlay, white text. The resort (`/resort`), Trust
     & compliance (`/security`). Pair with `HeroCover tone="dark"` and dark tones below.
2. `StatCards` — four big-number cards; numbers count up on scroll. Keep values short
   (≤ 8 characters, e.g. "PKR 2M", "13–15%", "28", "7,906 ft").
3. `StickySteps` — "Step 01 … Step 05": step texts scroll on the left, a pinned image on the
   right cross-fades to the active step.
4. `FeatureCarousel` — a row of wide cards (text left, image right) paged with arrows: "why us" /
   benefits.
5. `VideoExplainer` — a video or photo card beside rows that open on click: "how you earn".
6. A listings row or grid (feature-specific cards, e.g. projects or Smart Property programmes).
7. `CtaBand tone="brand"` — bright green CTA band, no image.
8. FAQ: two columns — `SectionHeading` left (sticky on desktop), `FaqAccordion` right.
9. `CtaBand tone="white"` with an image — the large closing card — or `tone="forest"`.

Not every product page needs every block; keep the order. Do not add invented reviews or testimonials.

## Pattern B: list or tool page (Payment plans calculator, Contact, FAQ, Glossary, Construction progress)

- `PageHeader` — 44px title left-aligned, one line under it, optional `aside` on the right.
- One main block:
  - Projects (`/properties`): two-column grid of project cards plus published Nathia Gali payment
    plans.
  - Payment plans calculator (`/calculator`): one large white card (`rounded-[30px]`, padding 24px)
    with a grid inside: published Nathia Gali plan selector or custom sq ft area on paper
    (`bg-sx-paper rounded-[16px]`), and dark summary tiles (ink and forest) with total price, 30%
    down payment and 36 monthly instalments in PKR.
  - Construction progress (`/progress`): dated Nathia Gali site-visit videos from the Serene
    Heights YouTube channel, click-to-play, newest first.
  - Contact (`/contact`): a split card — left half a dark photo panel, right half a white enquiry
    form (name, email, phone, interest, message, WhatsApp or email choice, consent, submit); below
    it the offices panel (Nathia Gali, Lahore, DM Consortium head office) and social links.
- Optional `CtaBand tone="brand"` after it.

## Pattern C: content pages (Journal, Article, About, Legal)

- Journal hub (`/learn`): centred `PageHeader`; a row of tall featured image cards for the latest
  Investment articles (photo fills the card, category pill + date + title over a dark gradient); then
  "All articles" — a filterable 3-column grid of white cards (16:9 photo, category · date, 22px
  title).
- Article (`/learn/[slug]`): a dark title band (`rounded-b-[30px]`, ~500px) with a back link
  ("← All articles"), category, 44px title, date and author; then two columns — a sticky summary
  and contents list on the left (~320px) and the reading column on the right (~720px, 18px text,
  relaxed line height, `text-sx-ink/75`); related articles as 3-column cards.
- About (`/about`): `PageHeader`, project photo and ownership model, leadership (`Fahad Masud Lone`)
  and 3-column philosophy cards, `DM Consortium` management cards, `StepRow`s for the two projects,
  completed work (`Serene Farms`), offices, and a `CtaBand` to Contact.
- Legal (`/legal/[privacy|terms|risks]`): two columns — title, updated date (when present) and
  contents list on the left (sticky), the document in a white card on the right.

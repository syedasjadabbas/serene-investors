# Inner page patterns

How Serene Investors' inner pages are laid out. The layouts follow the patterns of prypco.com's
inner pages (studied November 2026); the brand, copy, colours and images are Serene's own. Never
copy PRYPCO text, logos, figures or images.

All shared building blocks live in `src/global/components/page/` (see README, "Inner page kit").
`src/app/golden-visa/_components/GoldenVisaPage.tsx` is the reference product page.

## Every page

- The shell (`AppShellClient`) puts each page on a paper sheet with rounded bottom corners over the
  dark footer, and adds the newsletter card (`NewsletterCard`) at the bottom of every page except
  login, signup and dashboard. **Pages must not render their own newsletter.**
- Content column: 1240px (`max-w-[1240px]`, `px-4 sm:px-8`). Cards: white, `rounded-[20px]`
  (big feature cards `rounded-[30px]`), no borders or heavy shadows.
- Section headings ~35px bold (`SectionHeading`); page titles 44px (`PageHeader`) or the big
  product hero (`ProductHero`).

## Pattern A: product page (Properties, Funds, How it works, Rewards, Security, Golden Visa)

1. `ProductHero` — full screen, pinned; everything after it goes inside `HeroCover`, which scrolls
   up over it with rounded top corners.
   - `tone="tint"`: pale mint gradient, dark text, a `visual` rising from the bottom edge (a photo
     card or mini UI). Properties, Funds, How it works, Rewards.
   - `tone="dark"`: photo (or video) under a dark overlay, white text. Golden Visa, Security. Pair
     with `HeroCover tone="dark"` and dark tones below.
2. `StatCards` — four big-number cards; numbers count up on scroll. Keep values short
   (≤ 8 characters, e.g. "AED 2M", "12%", "4×").
3. `StickySteps` — "Step 01 … Step 04": step texts scroll on the left, a pinned image on the
   right cross-fades to the active step.
4. `FeatureCarousel` — a row of wide cards (text left, image right) paged with arrows: "why us" /
   benefits.
5. `VideoExplainer` — a video or photo card beside rows that open on click: "how you earn".
6. A listings row or grid (feature-specific cards).
7. `CtaBand tone="brand"` — bright green sign-up band, no image.
8. `ReviewStrip` — moving strip of sample reviews (`tone="dark"` on dark pages).
9. FAQ: two columns — `SectionHeading` left (sticky on desktop), `FaqAccordion` right.
10. `CtaBand tone="white"` with an image — the large "guide / handbook" card — or `tone="forest"`.

Not every product page needs every block; keep the order.

## Pattern B: list or tool page (Calculator, Contact, FAQ, Glossary, Market reports)

- `PageHeader` — 44px title left-aligned, one line under it, optional `aside` on the right.
- One main block:
  - Listings: two-column grid of big white listing cards (photo top, dark status pills top-right,
    grey "AREA ✦ TYPE" line, 26px title, label/value rows with icons).
  - Calculator: one large white card (`rounded-[30px]`, padding 24px) with a grid inside: input
    tiles on paper (`bg-sx-paper rounded-[16px]`), two dark result tiles (ink and forest) with big
    figures, and a chart tile on the right.
  - Contact: a split card — left half a dark photo panel, right half a white form (name, email,
    phone, message, consent, submit); below it an office card (white address card on a tinted
    panel).
- Optional `CtaBand tone="brand"` after it.

## Pattern C: content pages (Learn, Article, About, Legal)

- Learn hub: centred `PageHeader`; a row of tall featured image cards (photo fills the card, tag
  pill + date + title over a dark gradient); then "Latest guides" — a 3-column grid of white cards
  (16:9 photo, tag · date, 22px title).
- Article: a dark title band (`rounded-b-[30px]`, ~500px) with a back link ("← All guides"), tag,
  44px title and date; then two columns — a sticky summary on the left (~350px) and the reading
  column on the right (~700px, 18–20px text, relaxed line height, `text-sx-ink/70`); related guides
  as the 3-column cards.
- About: `PageHeader`, then the mission quote, a 3-column grid of principle cards, a
  `FeatureCarousel` or `StepRow`s, and a `CtaBand` to Contact.
- Legal: two columns — title and contents list on the left (sticky), the document in a white card
  on the right.

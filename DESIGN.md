# Design

## Theme

Confident, editorial real-estate platform. Near-black bands carry the big moments (hero, products,
footer); a warm light-grey "sheet" carries reading content. Rounded cards everywhere, one green
accent, building photography for atmosphere.

Layout patterns follow prypco.com (floating pill navbar with a full-screen menu, full-bleed hero with a
floating call-to-action bar, dark product cards, step rows, rounded light sheet over a dark footer).
Branding, colours, copy and imagery are Serene Investors' own; never copy PRYPCO text, logos or images.

Strategy: about 45% dark, 45% paper/white, 10% green. Green marks CTAs, highlights and active states.

## Colours

Tailwind tokens in `src/app/globals.css` (`@theme`). Use these, never hex values in components.

| Token | Value | Use |
| --- | --- | --- |
| `sx-ink` | `#0E100F` | Dark bands, primary text, dark buttons |
| `sx-card` | `#1A1C1B` | Cards on dark |
| `sx-card-2` | `#242725` | Hover / nested on dark |
| `sx-paper` | `#F3F3EF` | Light page background |
| white | `#FFFFFF` | Cards on paper |
| `sx-brand` | `#00A663` | Primary accent, CTAs, highlighted words on light |
| `sx-mint` | `#7EE2B0` | Highlighted words and pills on dark |
| `sx-forest` | `#0B3528` | Deep green panels (CTA band, What we do) |
| `sx-sand` | `#EFE3C8` | Secondary accent pills and arrows |

Older CSS files use `--bg`, `--ink`, `--primary` etc. in `src/global/styles/tokens.css`; those point at
the same palette. Do not add purple, lime or neon colours, or gradient text.

## Typography

Plus Jakarta Sans (Google Fonts) for everything; weight does the work.

| Role | Size | Weight | Tracking |
| --- | --- | --- | --- |
| Home hero | `2.4rem` → `4.5rem`, uppercase | 800 | `-0.03em` |
| Page title (`PageHero`) | `2.5rem` → `4.5rem` | 700 | `-0.035em` |
| Section (`SectionHeading`) | `1.875rem` → `2.75rem` | 700 | `-0.025em` |
| Card title | `1.25rem`–`1.875rem` | 600–700 | `-0.015em` |
| Body | `1rem`–`1.125rem` / relaxed | 400 | `0` |
| Eyebrow pill | `0.75rem` | 600 | `0` |

`text-balance` on headings. Body copy at 65% opacity of its background's text colour.

## Layout

Content column 1240px (`max-w-[1240px]`), wide bands 1400px, reading 880px. Side gutters 16px on
phones, 32px from `sm`. Section padding `py-16` / `sm:py-24`. Navbar floats 12–16px from the top;
inner pages start below it (`pt-24` on `main`).

## Components

- Navbar: floating rounded bar, logo centred (left on phones), Log in left, Sign up and a dark
  Menu pill right. Transparent over the home hero, white once scrolled. Menu opens a full-screen
  dark panel with every page grouped.
- Buttons: `PillLink`, a pill with a round arrow badge that turns on hover.
- Cards: `rounded-[20px]`, white on paper or `sx-card` on dark; no borders or heavy shadows.
- Pills: `rounded-full`, small, mint or sand.
- Footer: dark, link columns, legal text, giant outlined "serene" wordmark.
- Inner pages: the kit in `src/global/components/page/` (see README, "Inner page kit").

## Imagery

Building and city photography from `public/images` (served through `withBase()`). Small UI-style
visuals (activity rows, allocation bars) are fine inside cards; label any figures as samples.

## Motion

Lenis smooth scroll; GSAP ScrollTrigger reveals; the home mission quote fills in word by word; the
hero photo slowly zooms; the locations strip scrolls. Respect reduced motion: no zoom, marquee or
scroll-linked effects.

## Anti-patterns

No Stake or PRYPCO branding, copy or images. No invented regulators, partners or performance
figures presented as fact. No hex colours in components. No glass cards or gradient text.

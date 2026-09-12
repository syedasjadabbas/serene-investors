# Design

## Theme

Warm paper catalogue for a luxury real-estate investment brand. Color lives in a restrained botanical green, not in the surface. Photography of buildings does the atmosphere.

Scene: a quiet reception in a garden-side residence. Warm light, charcoal ink, one green seal.

Strategy: Restrained. Green occupies CTAs, yield pills, and active states. About 70% warm white, 20% charcoal and neutrals, 10% green.

Dials: variance 6, motion 6, density 4.

## Colors

| Token | Value | Use |
| --- | --- | --- |
| `--bg` | `#F7F5EF` | Page |
| `--bg-warm` | `#EFEDE5` | Recessed bands |
| `--surface` | `#FFFFFF` | Cards, header |
| `--ink` | `#182019` | Headings and body |
| `--muted` | `#5D665E` | Supporting copy |
| `--subtle` | `#8A918B` | Captions |
| `--primary` | `#315C45` | Primary CTA |
| `--primary-ink` | `#FFFFFF` | Text on primary |
| `--accent` | `#1F3D2E` | Footer, promo, hover |
| `--accent-ink` | `#F7F5EF` | Text on accent |
| `--soft` | `#DCE7DE` | Pills, NEW badge |
| `--soft-ink` | `#1F3D2E` | Text on soft |
| `--line` | `#D9DDD7` | Hairlines |

Do not use crimson, neon green, purple, or gradients.

## Typography

Family: Mona Sans Variable. One family, weight contrast.

| Role | Size | Weight | Tracking |
| --- | --- | --- | --- |
| Display | `clamp(2.75rem, 6vw, 5.15rem)` | 600 | `-0.03em` |
| Section | `clamp(2.35rem, 4.1vw, 3.75rem)` | 600 | `-0.03em` |
| Quote | `clamp(2rem, 4vw, 3.35rem)` | 500 italic | `-0.025em` |
| Card title | `1.35rem` | 560 | `-0.015em` |
| Body | `1.0625rem` / `1.7` | 400 | `0` |
| Label | `0.75rem` | 500 | `0.13em` uppercase |

Display tracking floor: `-0.04em`. Body measure: 65ch. `text-wrap: balance` on h1-h3.

## Layout

Max width 72-80rem. Header 68px. Hero `min-h-[100dvh]`, top padding capped at `pt-24`.

Section rhythm: 4 / 8 / 12 / 16 / 22. Homepage bands use `4rem` / `5.5rem`.

## Components

- Buttons: pill. Primary Serene green, secondary dark botanical, ghost charcoal.
- Cards: 12px radius, white fill, thin neutral border, light lift only.
- Yield and NEW pills: soft green, dark green text.
- Header: sticky white bar, tracked wordmark.
- Footer: dark botanical green, warm type.

## Imagery

Building photography first. No div-built fake app screens. Press marks are typographic.

## Motion

Lenis for wheel smoothing when motion is allowed. GSAP ScrollTrigger for hero collage drift and section reveals. Reduced motion: native scroll, no pin, no drift.

## Anti-patterns

No Stake branding. No crimson. No neon green. No three identical icon cards. No gradient text. No glass cards.

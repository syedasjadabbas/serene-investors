import { useRef } from 'react'
import type { LearnGuide } from '@/types'
import { useDepthParallax } from '@/hooks/useDepthParallax'
import { usePointerTilt } from '@/hooks/usePointerTilt'
import { useSectionReveal } from '@/hooks/useSectionReveal'

type Props = {
  guide: LearnGuide
}

export function LearnArticleHero({ guide }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef, { media: '[data-learn-article-image]' })
  usePointerTilt(rootRef, {
    layers: [{ selector: '[data-learn-article-image]', x: 7, y: 5, rotateX: 1.1, rotateY: 1.4 }],
  })
  useDepthParallax(rootRef, [{ selector: '[data-learn-article-image]', yPercent: 5 }])

  return (
    <header ref={rootRef} className="learn-article-hero">
      <div className="learn-article-hero__copy mx-auto max-w-[var(--container-wide)]">
        <p data-reveal-heading className="property-hero__mark">
          Illustrative sample
        </p>
        <p data-reveal-heading className="learn-kicker mt-5">
          {guide.category}
        </p>
        <h1
          data-reveal-heading
          className="mt-3 max-w-[14ch] text-[clamp(2.4rem,5vw,4.35rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-balance"
        >
          {guide.title}
        </h1>
        <p
          data-reveal-heading
          className="mt-5 max-w-[42ch] text-[1.05rem] leading-relaxed text-muted text-pretty"
        >
          {guide.description}
        </p>
      </div>

      <figure data-reveal-item data-depth-stage className="learn-article-hero__media m-0">
        <img
          data-learn-article-image
          src={guide.image}
          alt={guide.imageAlt}
          width={1600}
          height={1000}
          loading="eager"
          fetchPriority="high"
        />
      </figure>
    </header>
  )
}

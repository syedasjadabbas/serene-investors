import { useRef } from 'react'
import { learnIntro } from '@/data'
import { storyAssets } from '@/data/story-assets'
import { useDepthParallax } from '@/hooks/useDepthParallax'
import { usePointerTilt } from '@/hooks/usePointerTilt'
import { useSectionReveal } from '@/hooks/useSectionReveal'

export function LearnHero() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef, { media: '[data-learn-hero-image]' })
  usePointerTilt(rootRef, {
    layers: [{ selector: '[data-learn-hero-image]', x: 8, y: 5, rotateX: 1.2, rotateY: 1.5, invert: true }],
  })
  useDepthParallax(rootRef, [{ selector: '[data-learn-hero-image]', yPercent: 5 }])

  return (
    <section ref={rootRef} className="learn-hero" aria-labelledby="learn-heading">
      <div className="learn-hero__layout mx-auto max-w-[var(--container-wide)]">
        <div className="learn-hero__copy">
          <p data-reveal-heading className="property-hero__mark">
            Illustrative sample
          </p>
          <h1
            data-reveal-heading
            id="learn-heading"
            className="mt-6 max-w-[12ch] text-[clamp(2.6rem,5.4vw,4.6rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance"
          >
            {learnIntro.heading}
          </h1>
          <p
            data-reveal-heading
            className="mt-5 max-w-[40ch] text-[1.05rem] leading-relaxed text-muted text-pretty"
          >
            {learnIntro.body}
          </p>
          <div data-reveal-heading className="learn-hero__rule" />
        </div>

        <figure data-reveal-item data-depth-stage className="learn-hero__media m-0">
          <img
            data-learn-hero-image
            src={storyAssets.grow.src}
            alt={storyAssets.grow.alt}
            width={1600}
            height={1200}
            loading="eager"
            fetchPriority="high"
          />
        </figure>
      </div>
    </section>
  )
}

import { useRef } from 'react'
import { aboutIntro } from '@/data'
import { useDepthParallax } from '@/hooks/useDepthParallax'
import { usePointerTilt } from '@/hooks/usePointerTilt'
import { useSectionReveal } from '@/hooks/useSectionReveal'

export function AboutHero() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef, { media: '[data-about-hero-image]' })
  usePointerTilt(rootRef, {
    layers: [{ selector: '[data-about-hero-image]', x: 8, y: 5, rotateX: 1.2, rotateY: 1.5, invert: true }],
  })
  useDepthParallax(rootRef, [{ selector: '[data-about-hero-image]', yPercent: 6 }])

  return (
    <section ref={rootRef} className="about-hero" aria-labelledby="about-heading">
      <div className="about-hero__layout mx-auto max-w-[var(--container-wide)]">
        <div className="about-hero__copy">
          <p data-reveal-heading className="property-hero__mark">
            {aboutIntro.label}
          </p>
          <h1
            data-reveal-heading
            id="about-heading"
            className="mt-6 max-w-[11ch] text-[clamp(2.6rem,5.4vw,4.6rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance"
          >
            {aboutIntro.heading}
          </h1>
          <p
            data-reveal-heading
            className="mt-5 max-w-[40ch] text-[1.05rem] leading-relaxed text-muted text-pretty"
          >
            {aboutIntro.body}
          </p>
          <div data-reveal-heading className="about-hero__rule" />
        </div>

        <figure data-reveal-item data-depth-stage className="about-hero__media m-0">
          <img
            data-about-hero-image
            src={aboutIntro.image.src}
            alt={aboutIntro.image.alt}
            width={2000}
            height={1200}
            loading="eager"
            fetchPriority="high"
          />
        </figure>
      </div>
    </section>
  )
}

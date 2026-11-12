import { useRef } from 'react'
import { aboutIntro } from '@/data'
import { useDepthParallax } from '@/hooks/useDepthParallax'
import { usePointerTilt } from '@/hooks/usePointerTilt'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import { withBase } from '@/lib/asset'

export function AboutHero() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef, { media: '[data-about-hero-image]' })
  usePointerTilt(rootRef, {
    layers: [{ selector: '[data-about-hero-image]', x: 8, y: 5, rotateX: 1.2, rotateY: 1.5, invert: true }],
  })
  useDepthParallax(rootRef, [{ selector: '[data-about-hero-image]', yPercent: 6 }])

  return (
    <section ref={rootRef} className="about-hero pt-20 pb-12 px-6 lg:pt-24 lg:pb-16" aria-labelledby="about-heading">
      <div className="about-hero__layout max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-12 items-center">
        <div className="about-hero__copy flex flex-col justify-center">
          <p data-reveal-heading className="text-xs font-semibold uppercase tracking-[0.14em] text-muted m-0">
            {aboutIntro.label}
          </p>
          <h1
            data-reveal-heading
            id="about-heading"
            className="mt-4 max-w-[11ch] text-[clamp(2.6rem,5.4vw,4.6rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance text-ink"
          >
            {aboutIntro.heading}
          </h1>
          <p
            data-reveal-heading
            className="mt-5 max-w-[40ch] text-[1.05rem] leading-relaxed text-muted text-pretty"
          >
            {aboutIntro.body}
          </p>
          <div data-reveal-heading className="w-14 h-[1px] mt-8 bg-line" />
        </div>

        <figure data-reveal-item data-depth-stage className="about-hero__media m-0 overflow-hidden rounded-2xl bg-bg-warm">
          <img
            data-about-hero-image
            src={withBase(aboutIntro.image.src)}
            alt={aboutIntro.image.alt}
            width={2000}
            height={1200}
            loading="eager"
            fetchPriority="high"
            className="block w-full min-h-[22rem] lg:min-h-[32rem] object-cover rounded-2xl"
          />
        </figure>
      </div>
    </section>
  )
}

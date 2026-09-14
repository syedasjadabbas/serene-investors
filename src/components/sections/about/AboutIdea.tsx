import { useRef } from 'react'
import { aboutIdea } from '@/data'
import { useDepthParallax } from '@/hooks/useDepthParallax'
import { usePointerTilt } from '@/hooks/usePointerTilt'
import { useSectionReveal } from '@/hooks/useSectionReveal'

export function AboutIdea() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef, { media: '[data-about-idea-image]' })
  usePointerTilt(rootRef, {
    layers: [{ selector: '[data-about-idea-image]', x: 7, y: 4, rotateX: 1.1, rotateY: 1.3 }],
  })
  useDepthParallax(rootRef, [{ selector: '[data-about-idea-image]', yPercent: 4 }])

  return (
    <section ref={rootRef} className="about-idea" aria-labelledby="about-idea-heading">
      <div className="about-idea__layout mx-auto max-w-[var(--container-wide)]">
        <h2
          data-reveal-heading
          id="about-idea-heading"
          className="max-w-[14ch] text-[clamp(2.4rem,5.2vw,4.5rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-balance"
        >
          {aboutIdea.statement}
        </h2>
        <p
          data-reveal-heading
          className="mt-8 max-w-[46ch] text-[1.05rem] leading-relaxed text-muted text-pretty"
        >
          {aboutIdea.body}
        </p>
      </div>

      <figure data-reveal-item data-depth-stage className="about-idea__media m-0">
        <img
          data-about-idea-image
          src={aboutIdea.image.src}
          alt={aboutIdea.image.alt}
          width={1600}
          height={1000}
          loading="lazy"
          decoding="async"
        />
      </figure>
    </section>
  )
}

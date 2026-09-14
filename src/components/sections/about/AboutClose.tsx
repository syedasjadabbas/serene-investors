import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@/components/ui/Button'
import { aboutClose } from '@/data'
import { useSectionReveal } from '@/hooks/useSectionReveal'

export function AboutClose() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef)

  return (
    <section ref={rootRef} className="about-close" aria-labelledby="about-close-heading">
      <div className="mx-auto max-w-[var(--container-wide)]">
        <h2
          data-reveal-heading
          id="about-close-heading"
          className="max-w-[14ch] text-[clamp(2.4rem,5vw,4.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance"
        >
          {aboutClose.heading}
        </h2>
        <p
          data-reveal-heading
          className="mt-5 max-w-[42ch] text-[1.05rem] leading-relaxed text-muted text-pretty"
        >
          {aboutClose.body}
        </p>
        <div data-reveal-heading className="about-close__actions">
          <ButtonLink to="/properties" className="min-h-11 w-full gap-1.5 sm:w-auto">
            Explore properties
            <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </ButtonLink>
          <ButtonLink to="/learn" variant="ghost" className="min-h-11 w-full sm:w-auto">
            Learn more
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}

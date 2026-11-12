import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@/global/components/ui/Button'
import { useSectionReveal } from '@/global/hooks/useSectionReveal'

export function LearnArticleClose() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef)

  return (
    <section ref={rootRef} className="learn-cta py-20 px-6 bg-soft text-soft-ink" aria-labelledby="learn-article-close-heading">
      <div className="mx-auto max-w-7xl">
        <h2
          data-reveal-heading
          id="learn-article-close-heading"
          className="max-w-[12ch] text-[clamp(2.4rem,5vw,4.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance text-ink"
        >
          Continue on the platform.
        </h2>
        <p
          data-reveal-heading
          className="mt-5 max-w-[38ch] text-[1.05rem] leading-relaxed text-muted text-pretty"
        >
          Open a sample catalogue, or return to the four-step demonstration.
        </p>
        <div data-reveal-heading className="learn-cta__actions flex flex-col sm:flex-row items-center gap-4 mt-8">
          <ButtonLink href="/properties" className="min-h-11 w-full gap-1.5 sm:w-auto">
            Explore properties
            <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href="/funds" variant="ghost" className="min-h-11 w-full sm:w-auto">
            Explore funds
          </ButtonLink>
          <ButtonLink href="/how-it-works" variant="ghost" className="min-h-11 w-full sm:w-auto">
            How it works
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}

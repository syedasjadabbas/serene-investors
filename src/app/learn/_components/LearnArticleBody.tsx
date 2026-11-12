import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import type { LearnGuide } from '@/global/types/learn'
import { ButtonLink } from '@/global/components/ui/Button'
import { learnDisclaimer } from '../_lib/learn'
import { useSectionReveal } from '@/global/hooks/useSectionReveal'

type Props = {
  guide: LearnGuide
}

export function LearnArticleBody({ guide }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef)

  return (
    <section ref={rootRef} className="learn-article-body py-16 px-6">
      <div className="learn-article-body__measure max-w-3xl mx-auto space-y-6 text-lg leading-relaxed text-ink/80">
        {guide.paragraphs.map((paragraph, index) => (
          <p key={index} data-reveal-item>
            {paragraph}
          </p>
        ))}
        <p data-reveal-item className="learn-article-body__note pt-6 border-t border-line text-sm text-muted">
          {learnDisclaimer.body}
        </p>
        <div data-reveal-item className="learn-article-body__actions flex flex-col sm:flex-row items-center gap-4 pt-6">
          <ButtonLink href={guide.cta.href} className="min-h-11 gap-1.5 w-full sm:w-auto">
            {guide.cta.label}
            <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href="/learn" variant="ghost" className="min-h-11 w-full sm:w-auto">
            Back to Learn
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}

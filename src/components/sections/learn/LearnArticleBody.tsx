import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import type { LearnGuide } from '@/types'
import { ButtonLink } from '@/components/ui/Button'
import { learnDisclaimer } from '@/data'
import { useSectionReveal } from '@/hooks/useSectionReveal'

type Props = {
  guide: LearnGuide
}

export function LearnArticleBody({ guide }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef)

  return (
    <section ref={rootRef} className="learn-article-body">
      <div className="learn-article-body__measure">
        {guide.paragraphs.map((paragraph, index) => (
          <p key={index} data-reveal-item>
            {paragraph}
          </p>
        ))}
        <p data-reveal-item className="learn-article-body__note">
          {learnDisclaimer.body}
        </p>
        <div data-reveal-item className="learn-article-body__actions">
          <ButtonLink to={guide.cta.href} className="min-h-11 gap-1.5">
            {guide.cta.label}
            <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </ButtonLink>
          <ButtonLink to="/learn" variant="ghost" className="min-h-11">
            Back to Learn
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}

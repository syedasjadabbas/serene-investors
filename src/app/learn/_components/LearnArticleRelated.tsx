import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import type { LearnGuide } from '@/global/types/learn'
import { useRelatedGuides } from '../_hooks/useRelatedGuides'
import { LearnGuideCard } from './LearnGuideCard'

export function LearnArticleRelated({ guide }: { guide: LearnGuide }) {
  const related = useRelatedGuides(guide)

  if (related.length === 0) return null

  return (
    <PageSection tone="white" labelledBy="learn-related-heading">
      <SectionHeading id="learn-related-heading" eyebrow="Keep reading" title="Related guides." highlight="guides" />
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((item) => (
          <li key={item.id}>
            <LearnGuideCard guide={item} tone="paper" />
          </li>
        ))}
      </ul>
    </PageSection>
  )
}

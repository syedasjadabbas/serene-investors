import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import type { LearnGuide } from '@/global/types/learn'
import { useRelatedGuides } from '../_hooks/useRelatedGuides'
import { LearnGuideCard } from './LearnGuideCard'

/** "Related guides" in the same 3-column card grid as the hub. */
export function LearnArticleRelated({ guide }: { guide: LearnGuide }) {
  const related = useRelatedGuides(guide)

  if (related.length === 0) return null

  return (
    <PageSection labelledBy="learn-related-heading" pad="top">
      <SectionHeading id="learn-related-heading" title="Related guides" />
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((item) => (
          <li key={item.id}>
            <LearnGuideCard guide={item} />
          </li>
        ))}
      </ul>
    </PageSection>
  )
}

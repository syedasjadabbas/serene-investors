import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { relatedJournal } from '../_lib/journal'
import { JournalCard } from './JournalCard'

/** "Related articles": same category first, in the hub's 3-column card grid. */
export function ArticleRelated({ slug }: { slug: string }) {
  const related = relatedJournal(slug)
  if (related.length === 0) return null

  return (
    <PageSection labelledBy="learn-related-heading" pad="top">
      <SectionHeading id="learn-related-heading" title="Related articles" />
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((entry) => (
          <li key={entry.slug}>
            <JournalCard entry={entry} />
          </li>
        ))}
      </ul>
    </PageSection>
  )
}

import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { PillLink } from '@/global/components/ui/PillLink'
import { funds } from '@/global/data/funds'
import type { Fund } from '@/global/types/fund'
import { useRelatedFunds } from '../_hooks/useRelatedFunds'
import { FundCard } from './FundCard'

export function FundRelated({ fund }: { fund: Fund }) {
  const related = useRelatedFunds(fund, funds)

  if (related.length === 0) return null

  return (
    <PageSection labelledBy="related-funds-heading" pad="none">
      <SectionHeading
        id="related-funds-heading"
        eyebrow="Keep exploring"
        title="Other sample funds."
        highlight="sample funds"
        action={
          <PillLink href="/funds" variant="outline">
            All funds
          </PillLink>
        }
      />
      <ul className="mt-10 grid gap-4 md:grid-cols-2">
        {related.slice(0, 2).map((item) => (
          <li key={item.id}>
            <FundCard fund={item} />
          </li>
        ))}
      </ul>
    </PageSection>
  )
}

import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { fundsNotice } from '@/global/data/funds'
import type { Fund } from '@/global/types/fund'
import { FundCard } from './FundCard'

type Props = {
  items: Fund[]
}

export function FundCollection({ items }: Props) {
  return (
    <PageSection id="fund-collection" labelledBy="fund-collection-heading" className="scroll-mt-20">
      <SectionHeading
        id="fund-collection-heading"
        eyebrow="The collection"
        title="Choose a sample fund."
        highlight="sample fund"
        body="Each fund gathers several sample properties under one theme, with one sample minimum."
      />

      <ul className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
        {items.map((fund) => (
          <li key={fund.id}>
            <FundCard fund={fund} />
          </li>
        ))}
      </ul>

      <p className="mt-8 max-w-2xl text-sm leading-relaxed text-sx-ink/55">{fundsNotice.body}</p>
    </PageSection>
  )
}

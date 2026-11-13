import { PageHero } from '@/global/components/page/PageHero'
import { fundSampleStatus } from '@/global/data/funds'
import { formatFundType } from '@/global/lib/format'
import type { Fund } from '@/global/types/fund'

type Props = {
  fund: Fund
}

export function FundHero({ fund }: Props) {
  return (
    <PageHero
      tone="dark"
      align="left"
      image={{ src: fund.image, alt: fund.imageAlt }}
      eyebrow={`Sample fund · ${formatFundType(fund.type)}`}
      title={fund.name}
      body={
        <p>
          {fund.market} · {fund.portfolioLabel}. {fund.propertyCount} sample properties under one allocation.{' '}
          <span className="text-white/55">{fundSampleStatus}.</span>
        </p>
      }
      actions={[
        { label: 'Continue with this fund', href: `/get-started?intent=fund&id=${fund.id}` },
        { label: 'Explore funds', href: '/funds' },
      ]}
    />
  )
}

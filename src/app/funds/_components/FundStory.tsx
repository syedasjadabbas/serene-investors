import { Eyebrow, PageSection } from '@/global/components/page/PageSection'
import { withBase } from '@/global/lib/asset'
import { formatFundType } from '@/global/lib/format'
import type { Fund } from '@/global/types/fund'

type Props = {
  fund: Fund
}

export function FundStory({ fund }: Props) {
  return (
    <PageSection labelledBy="fund-story-heading">
      <article className="grid gap-6 rounded-[24px] bg-white p-4 sm:p-5 md:grid-cols-2">
        <div className="relative min-h-[260px] overflow-hidden rounded-[16px] bg-sx-sand sm:min-h-[360px]">
          <img
            src={withBase(fund.image)}
            alt={fund.imageAlt}
            width={1400}
            height={1050}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-4 p-4 sm:p-8 lg:p-12">
          <Eyebrow tone="sand">About the fund</Eyebrow>
          <h2 id="fund-story-heading" className="font-heading text-3xl font-bold leading-[1.08] tracking-[-0.025em] sm:text-4xl">
            One theme, one allocation.
          </h2>
          <p className="max-w-md text-base leading-relaxed text-sx-ink/65">
            {fund.name} is presented as a {fund.portfolioLabel.toLowerCase()} across {fund.market.toLowerCase()}. The sample
            collection holds {fund.propertyCount} sample properties under one allocation.
          </p>
          <p className="text-sm text-sx-ink/50">
            {formatFundType(fund.type)} · {fund.market}
          </p>
        </div>
      </article>
    </PageSection>
  )
}

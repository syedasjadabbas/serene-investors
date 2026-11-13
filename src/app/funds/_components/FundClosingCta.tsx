import { CtaBand } from '@/global/components/page/CtaBand'
import { fundStageAssets } from '@/global/data/fund-stage-assets'
import { sampleFundMinimum } from '@/global/data/funds'
import { formatSampleAmount } from '@/global/lib/format'
import type { Fund } from '@/global/types/fund'

type Props = {
  fund: Fund
}

export function FundClosingCta({ fund }: Props) {
  return (
    <CtaBand
      title="Explore the allocation."
      highlight="allocation"
      body={`${fund.name}, sample minimum ${formatSampleAmount(sampleFundMinimum)}. Walk the demonstration onboarding with this fund selected.`}
      actions={[
        { label: 'Continue with this fund', href: `/get-started?intent=fund&id=${fund.id}` },
        { label: 'Back to funds', href: '/funds' },
      ]}
      image={{ src: fundStageAssets.field.src, alt: fundStageAssets.field.alt }}
    />
  )
}

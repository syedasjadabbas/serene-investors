import type { Fund } from '@/types'
import { formatPercent } from '@/lib/format'

type Props = {
  fund: Fund
}

export function FundCard({ fund }: Props) {
  return (
    <article data-fund-id={fund.id} className="rounded-md bg-surface p-4">
      <p className="text-sm text-muted">{fund.market}</p>
      <h3 className="mt-1 text-lg tracking-tight">{fund.name}</h3>
      <p className="mt-2 text-sm">Sample return {formatPercent(fund.sampleReturnPct)}</p>
    </article>
  )
}

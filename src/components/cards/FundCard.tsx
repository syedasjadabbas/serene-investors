import { Link } from 'react-router-dom'
import type { Fund } from '@/types'
import { formatPercent } from '@/lib/format'

type Props = {
  fund: Fund
}

export function FundCard({ fund }: Props) {
  return (
    <article id={fund.id} data-fund-id={fund.id} className="scroll-mt-[calc(var(--header-h)+var(--promo-h)+1.5rem)]">
      <Link
        to={`/get-started?intent=fund&id=${fund.id}`}
        aria-label={`Review sample fund ${fund.name}`}
        className="block rounded-md bg-surface p-4 transition-transform duration-[var(--duration-med)] ease-[var(--ease-out-quart)] hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      >
        <p className="text-sm text-muted">{fund.market}</p>
        <h3 className="mt-1 text-lg tracking-tight">{fund.name}</h3>
        <p className="mt-2 text-sm">Sample return {formatPercent(fund.sampleReturnPct)}</p>
        <p className="mt-3 text-sm font-medium">Continue with this sample fund</p>
      </Link>
    </article>
  )
}

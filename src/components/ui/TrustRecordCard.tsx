import type { TrustRecord } from '@/types'

type Props = {
  record: TrustRecord
}

export function TrustRecordCard({ record }: Props) {
  return (
    <aside data-trust-record className="trust-record">
      <p className="home-kicker text-primary">{record.eyebrow}</p>
      <p className="mt-3 text-xl font-medium tracking-tight">{record.name}</p>
      <p className="mt-1 text-[length:var(--type-meta)] text-muted">{record.meta}</p>
      <dl className="mt-4 space-y-2 border-t border-line pt-4 text-[length:var(--type-meta)]">
        <div className="flex items-baseline justify-between gap-4">
          <dt className="text-muted">{record.recordLabel}</dt>
          <dd className="font-medium tabular-nums tracking-tight">{record.recordValue}</dd>
        </div>
        <div className="flex items-baseline justify-between gap-4">
          <dt className="text-muted">{record.statusLabel}</dt>
          <dd className="font-medium">{record.statusValue}</dd>
        </div>
        <div className="flex items-baseline justify-between gap-4">
          <dt className="text-muted">{record.documentationLabel}</dt>
          <dd className="font-medium">{record.documentationValue}</dd>
        </div>
      </dl>
    </aside>
  )
}

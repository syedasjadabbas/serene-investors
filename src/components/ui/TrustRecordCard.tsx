import type { TrustRecord } from '@/types'

type Props = {
  record: TrustRecord
}

export function TrustRecordCard({ record }: Props) {
  return (
    <aside data-trust-record className="trust-record">
      <p className="trust-record__kicker">{record.eyebrow}</p>
      <p className="trust-record__name">{record.name}</p>
      <p className="trust-record__meta">{record.meta}</p>
      <dl className="trust-record__list">
        <div className="trust-record__row">
          <dt>{record.recordLabel}</dt>
          <dd className="trust-record__value--id">{record.recordValue}</dd>
        </div>
        <div className="trust-record__row">
          <dt>{record.statusLabel}</dt>
          <dd>{record.statusValue}</dd>
        </div>
        <div className="trust-record__row">
          <dt>{record.documentationLabel}</dt>
          <dd>{record.documentationValue}</dd>
        </div>
      </dl>
    </aside>
  )
}

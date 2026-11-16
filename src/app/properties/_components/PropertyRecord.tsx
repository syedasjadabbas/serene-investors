import type { Property } from '@/global/types/property'
import { Card, PageSection, SectionHeading } from '@/global/components/page/PageSection'

export function PropertyRecord({ property }: { property: Property }) {
  const record = property.documentation
  const rows = [
    { label: record.recordLabel, value: record.recordValue },
    { label: record.ownershipLabel, value: record.ownershipValue },
    { label: record.documentsLabel, value: record.documentsValue },
    { label: record.statusLabel, value: record.statusValue },
  ]

  return (
    <PageSection labelledBy="record-heading" pad="bottom">
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <SectionHeading
          id="record-heading"
          eyebrow="Property record"
          title={property.city}
          body={`${property.neighborhood}. The ownership and documentation behind this sample listing.`}
        />
        <Card>
          <dl className="grid gap-3 sm:grid-cols-2">
            {rows.map((row) => (
              <div key={row.label} className="rounded-[14px] bg-sx-paper p-4">
                <dt className="text-xs font-semibold text-sx-ink/60">{row.label}</dt>
                <dd className="mt-1 text-base font-semibold text-sx-ink">{row.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-xs leading-relaxed text-sx-ink/60">{record.note}</p>
        </Card>
      </div>
    </PageSection>
  )
}

import type { Property } from '@/global/types/property'
import { Card, PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { formatPropertyMeta } from '@/global/lib/format'

export function PropertyOverview({ property }: { property: Property }) {
  const paragraphs = property.overview.length > 0 ? property.overview : [property.description]
  const [lead, ...rest] = paragraphs

  const facts = [
    { label: 'Property type', value: property.type },
    { label: 'Location', value: formatPropertyMeta(property.neighborhood, property.city) },
    { label: 'Size', value: property.beds > 0 ? `${property.areaLabel} · ${property.beds} bed sample plan` : property.areaLabel },
    { label: 'Units', value: property.unitsLabel },
    { label: 'Completion', value: property.completion },
    { label: 'Management', value: property.management },
    { label: 'Occupancy', value: property.occupancyLabel },
    { label: 'Sample value', value: property.sampleValueLabel },
  ]

  return (
    <PageSection id="property-overview" labelledBy="overview-heading">
      <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:gap-16">
        <div>
          <SectionHeading id="overview-heading" eyebrow="Overview" title={`About ${property.name}`} body={lead} />
          {rest.map((paragraph) => (
            <p key={paragraph} className="mt-4 max-w-2xl text-base leading-relaxed text-sx-ink/65 sm:text-lg">
              {paragraph}
            </p>
          ))}

          {property.features.length > 0 && (
            <>
              <h3 className="mt-10 text-sm font-semibold text-sx-ink">Highlights</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {property.features.map((feature) => (
                  <li key={feature.id} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-sx-ink">
                    {feature.title}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        <Card className="h-fit">
          <h3 className="font-heading text-xl font-bold tracking-[-0.015em]">Key facts</h3>
          <dl className="mt-4 divide-y divide-sx-ink/10">
            {facts.map((fact) => (
              <div key={fact.label} className="flex items-baseline justify-between gap-4 py-3">
                <dt className="text-sm text-sx-ink/60">{fact.label}</dt>
                <dd className="text-right text-sm font-semibold">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Card>
      </div>
    </PageSection>
  )
}

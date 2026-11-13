import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { StepRow } from '@/global/components/page/StepRow'
import { PillLink } from '@/global/components/ui/PillLink'
import { catalogueFeatured, propertiesFeaturedBand } from '@/global/data/properties'
import { formatPercent, formatPropertyMeta, formatSampleAmount, formatStatus } from '@/global/lib/format'

export function FeaturedPropertyBand() {
  const property = catalogueFeatured
  const figures = [
    { label: 'Sample yield', value: formatPercent(property.sampleYieldPct) },
    { label: 'Sample minimum', value: formatSampleAmount(property.sampleMinInvestment) },
  ]

  return (
    <PageSection labelledBy="featured-property-heading" tone="white">
      <SectionHeading
        id="featured-property-heading"
        eyebrow={propertiesFeaturedBand.eyebrow}
        title={propertiesFeaturedBand.heading}
        highlight="opportunity"
        align="center"
      />
      <div className="mt-12">
        <StepRow
          id="featured-property-name"
          tone="dark"
          step={`${property.type} · ${formatStatus(property.status)}`}
          title={property.name}
          image={{ src: property.image, alt: property.imageAlt }}
          body={
            <>
              <p className="font-semibold text-white">{formatPropertyMeta(property.neighborhood, property.city)}</p>
              <p className="mt-3">{property.description}</p>
              <dl className="mt-6 grid grid-cols-2 gap-3">
                {figures.map((figure) => (
                  <div key={figure.label} className="rounded-[14px] bg-sx-card-2 p-4">
                    <dt className="text-sm text-white/60">{figure.label}</dt>
                    <dd className="mt-1 font-heading text-2xl font-bold tabular-nums text-white">{figure.value}</dd>
                  </div>
                ))}
              </dl>
            </>
          }
          action={
            <PillLink href={`/properties/${property.id}`} variant="light" className="mt-2 w-fit">
              {propertiesFeaturedBand.cta}
            </PillLink>
          }
        />
      </div>
    </PageSection>
  )
}

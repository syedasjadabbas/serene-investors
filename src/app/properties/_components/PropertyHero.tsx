import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import type { Property } from '@/global/types/property'
import { PageHeader } from '@/global/components/page/PageHeader'
import { PillLink } from '@/global/components/ui/PillLink'
import { formatPropertyMeta } from '@/global/lib/format'
import { PropertyGallery } from './PropertyGallery'

/** Title block for a listing: back link, plain header with the invest action, then the gallery card. */
export function PropertyHero({ property }: { property: Property }) {
  return (
    <>
      <PageHeader
        back={
          <Link
            href="/properties"
            className="inline-flex min-h-11 w-fit items-center gap-2 rounded-full text-sm font-semibold text-sx-ink/65 transition-colors hover:text-sx-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sx-brand"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            All properties
          </Link>
        }
        eyebrow={`Sample listing · ${property.type}`}
        title={property.name}
        body={
          <>
            <p className="font-semibold text-sx-ink">{formatPropertyMeta(property.neighborhood, property.city)}</p>
            <p className="mt-2">{property.description}</p>
          </>
        }
        aside={
          <PillLink href={`/get-started?intent=property&id=${property.id}`} variant="dark">
            Invest in this property
          </PillLink>
        }
      />
      <section aria-label={`${property.name} photos`} className="px-4 sm:px-8">
        <div className="mx-auto max-w-[1240px]">
          <PropertyGallery property={property} />
        </div>
      </section>
    </>
  )
}

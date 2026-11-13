import type { Property } from '@/global/types/property'
import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { PillLink } from '@/global/components/ui/PillLink'
import { properties } from '@/global/data/properties'
import { useRelatedProperties } from '../_hooks/useRelatedProperties'
import { CatalogueCard } from './CatalogueCard'

export function PropertyRelated({ property }: { property: Property }) {
  const related = useRelatedProperties(property, properties)

  if (related.length === 0) return null

  return (
    <PageSection labelledBy="related-heading" pad="top">
      <SectionHeading
        id="related-heading"
        eyebrow="Keep exploring"
        title="Other sample listings."
        action={
          <PillLink href="/properties" variant="outline" className="w-fit">
            All properties
          </PillLink>
        }
      />
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((item) => (
          <li key={item.id} className="flex">
            <CatalogueCard property={item} />
          </li>
        ))}
      </ul>
    </PageSection>
  )
}

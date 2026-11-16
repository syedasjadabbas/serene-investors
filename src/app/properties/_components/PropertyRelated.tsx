import type { Property } from '@/global/types/property'
import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { PillLink } from '@/global/components/ui/PillLink'
import { properties } from '@/global/data/properties'
import { useRelatedProperties } from '../_hooks/useRelatedProperties'
import { CatalogueCard } from './CatalogueCard'

export function PropertyRelated({ property }: { property: Property }) {
  // Two big listing cards, matching the two-column collection grid.
  const related = useRelatedProperties(property, properties, 2)

  if (related.length === 0) return null

  return (
    <PageSection labelledBy="related-heading" pad="none">
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
      <ul className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5">
        {related.map((item) => (
          <li key={item.id} className="flex">
            <CatalogueCard property={item} />
          </li>
        ))}
      </ul>
    </PageSection>
  )
}

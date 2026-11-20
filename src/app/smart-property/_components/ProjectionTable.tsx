import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { PillLink } from '@/global/components/ui/PillLink'
import { smartUnit } from '@/global/data/serene'

/** The client's own projection for one Smart Property Unit, always shown with its note. */
export function ProjectionTable({ id = 'spu-projection' }: { id?: string }) {
  const headingId = `${id}-heading`
  return (
    <PageSection id={id} labelledBy={headingId} pad="bottom">
      <div className="grid gap-4 rounded-[30px] bg-white p-6 sm:p-10 md:grid-cols-[1fr_1.2fr] md:gap-10">
        <div className="flex flex-col gap-5">
          <SectionHeading
            id={headingId}
            eyebrow="Published projection"
            title="What one unit could earn."
            highlight="could earn"
            body="The projection Serene Heights publishes for one Smart Property Unit in Nathia Gali."
          />
          <PillLink href="/calculator" variant="outline" className="self-start">
            Open the calculator
          </PillLink>
        </div>
        <div className="flex flex-col gap-3">
          <dl className="flex flex-col gap-2">
            {smartUnit.projection.map((row) => (
              <div key={row.label} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 rounded-[16px] bg-sx-paper px-5 py-4">
                <dt className="text-sm text-sx-ink/65">{row.label}</dt>
                <dd className="font-heading text-xl font-bold tabular-nums text-sx-ink">{row.value}</dd>
              </div>
            ))}
          </dl>
          <p className="text-sm leading-relaxed text-sx-ink/65">{smartUnit.projectionNote}</p>
        </div>
      </div>
    </PageSection>
  )
}

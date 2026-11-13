import { PillLink } from '@/global/components/ui/PillLink'
import { withBase } from '@/global/lib/asset'
import type { HeroAction } from './PageHero'
import { Highlighted } from './PageSection'

type Props = {
  title: string
  highlight?: string
  body?: string
  actions: HeroAction[]
  image?: { src: string; alt: string }
}

/** Closing call to action: dark rounded panel, text left, optional photo right. End most pages with one. */
export function CtaBand({ title, highlight, body, actions, image }: Props) {
  return (
    <section className="px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-[1240px] overflow-hidden rounded-[24px] bg-sx-forest text-white md:grid-cols-2">
        <div className="flex flex-col justify-center gap-5 p-8 sm:p-12 lg:p-16">
          <h2 className="text-balance font-heading text-3xl font-bold leading-[1.08] tracking-[-0.025em] sm:text-[2.75rem]">
            <Highlighted title={title} highlight={highlight} className="text-sx-mint" />
          </h2>
          {body && <p className="max-w-md text-base leading-relaxed text-white/75 sm:text-lg">{body}</p>}
          <div className="mt-2 flex flex-wrap gap-3">
            {actions.map((action, index) => (
              <PillLink key={action.href + action.label} href={action.href} variant={action.variant ?? (index === 0 ? 'light' : 'outline')}>
                {action.label}
              </PillLink>
            ))}
          </div>
        </div>
        {image && (
          <div className="relative min-h-[260px]">
            <img src={withBase(image.src)} alt={image.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        )}
      </div>
    </section>
  )
}

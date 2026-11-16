import { PillLink } from '@/global/components/ui/PillLink'
import { withBase } from '@/global/lib/asset'
import { cn } from '@/global/lib/cn'
import type { HeroAction } from './PageHero'
import { Highlighted } from './PageSection'

type Props = {
  title: string
  highlight?: string
  body?: string
  actions: HeroAction[]
  image?: { src: string; alt: string }
  /**
   * forest: deep green closing panel (default).
   * brand: bright green "download / sign up" band, no image needed.
   * white: large white "handbook" style card with the image as an inset rounded panel.
   */
  tone?: 'forest' | 'brand' | 'white'
}

const TONE = {
  forest: { shell: 'bg-sx-forest text-white', body: 'text-white/75', accent: 'text-sx-mint', first: 'light', second: 'outline' },
  brand: { shell: 'bg-sx-brand text-white', body: 'text-white', accent: 'text-sx-ink', first: 'dark', second: 'light' },
  white: { shell: 'bg-white text-sx-ink', body: 'text-sx-ink/65', accent: 'text-sx-brand', first: 'dark', second: 'brand' },
} as const

/** Closing call to action. End most pages with one. */
export function CtaBand({ title, highlight, body, actions, image, tone = 'forest' }: Props) {
  const t = TONE[tone]
  return (
    <section className="px-4 py-16 sm:px-8 sm:py-24">
      <div
        className={cn(
          'mx-auto grid max-w-[1240px] overflow-hidden',
          tone === 'white' ? 'gap-4 rounded-[30px] p-3 sm:p-5' : 'rounded-[24px]',
          image && 'md:grid-cols-2',
          t.shell,
        )}
      >
        <div className="flex flex-col justify-center gap-5 p-8 sm:p-12 lg:p-16">
          <h2 className="text-balance font-heading text-3xl font-bold leading-[1.08] tracking-[-0.025em] sm:text-[2.75rem]">
            <Highlighted title={title} highlight={highlight} className={t.accent} />
          </h2>
          {body && <p className={cn('max-w-md text-base leading-relaxed sm:text-lg', t.body)}>{body}</p>}
          <div className="mt-2 flex flex-wrap gap-3">
            {actions.map((action, index) => (
              <PillLink key={action.href + action.label} href={action.href} variant={action.variant ?? (index === 0 ? t.first : t.second)}>
                {action.label}
              </PillLink>
            ))}
          </div>
        </div>
        {image && (
          <div className={cn('relative min-h-[260px] overflow-hidden', tone === 'white' && 'min-h-[320px] rounded-[20px] md:min-h-[560px]')}>
            <img src={withBase(image.src)} alt={image.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        )}
      </div>
    </section>
  )
}

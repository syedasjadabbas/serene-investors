import type { ReactNode } from 'react'
import { withBase } from '@/global/lib/asset'
import { cn } from '@/global/lib/cn'
import { Eyebrow } from './PageSection'

type Props = {
  step?: string
  title: string
  body: ReactNode
  /** An image, or any visual (a card, a mini UI). */
  image?: { src: string; alt: string }
  visual?: ReactNode
  /** Put the visual on the left. Alternate rows for rhythm. */
  reverse?: boolean
  action?: ReactNode
  tone?: 'white' | 'dark'
  id?: string
}

/** Text beside a visual inside one rounded card ("Step 01 / Browse" rows, feature explainers). */
export function StepRow({ step, title, body, image, visual, reverse = false, action, tone = 'white', id }: Props) {
  const dark = tone === 'dark'
  return (
    <article
      aria-labelledby={id}
      className={cn('grid gap-6 rounded-[24px] p-4 sm:p-5 md:grid-cols-2', dark ? 'bg-sx-card text-white' : 'bg-white text-sx-ink')}
    >
      <div className={cn('flex flex-col justify-center gap-4 p-4 sm:p-8 lg:p-12', reverse && 'md:order-2')}>
        {step && <Eyebrow tone={dark ? 'mint' : 'sand'}>{step}</Eyebrow>}
        <h3 id={id} className="font-heading text-3xl font-bold leading-[1.08] tracking-[-0.025em] sm:text-4xl">
          {title}
        </h3>
        <div className={cn('max-w-md text-base leading-relaxed', dark ? 'text-white/70' : 'text-sx-ink/65')}>{body}</div>
        {action}
      </div>
      <div className="relative min-h-[260px] overflow-hidden rounded-[16px] sm:min-h-[340px]">
        {image ? (
          <img src={withBase(image.src)} alt={image.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          visual
        )}
      </div>
    </article>
  )
}

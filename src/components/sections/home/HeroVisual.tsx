import { heroVisual } from '@/data'

export function HeroVisual() {
  const { image, listing, yieldPill, receipt } = heroVisual

  return (
    <div data-hero-visual className="hero-visual relative order-1 w-full lg:order-2">
      <div data-hero-frame data-depth-stage className="relative isolate">
        <img
          data-hero-image
          data-depth="back"
          src={image.src}
          alt={image.alt}
          width={2000}
          height={2500}
          fetchPriority="high"
          className="hero-image aspect-[4/5] h-auto w-full rounded-[var(--radius-lg)] object-cover sm:aspect-[5/6] lg:aspect-auto"
        />

        <article
          data-hero-card="property"
          data-depth="mid"
          className="hero-card stage-card absolute bottom-4 left-4 w-[min(19rem,calc(100%-2rem))] px-5 py-4"
        >
          <p className="home-kicker text-muted">{listing.type}</p>
          <p className="mt-2 text-xl font-medium tracking-tight">{listing.place}</p>
          <p className="mt-3 text-sm font-medium text-primary">{listing.yieldLabel}</p>
          <p className="text-sm text-muted">{listing.priceLabel}</p>
          <p className="mt-1 text-xs text-muted">{listing.sampleLabel}</p>
        </article>

        <p
          data-hero-pill
          data-depth="front"
          className="absolute right-4 top-4 rounded-pill bg-soft px-3 py-1.5 text-xs font-medium text-soft-ink lg:right-[8%] lg:top-7"
        >
          {yieldPill.label}
        </p>

        <aside
          data-hero-card="receipt"
          data-depth="front"
          className="hero-receipt stage-card absolute right-4 top-16 w-[min(13.5rem,calc(100%-2rem))] px-3.5 py-3"
        >
          <p className="flex items-baseline justify-between gap-2 text-sm">
            <span>{receipt.title}</span>
            <span className="text-base font-semibold tabular-nums">{receipt.amount}</span>
          </p>
          <p className="mt-1 text-xs text-muted">{receipt.detail}</p>
          <p className="text-xs text-muted">{receipt.sampleLabel}</p>
        </aside>
      </div>
    </div>
  )
}

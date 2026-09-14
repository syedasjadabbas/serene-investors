import { Link } from 'react-router-dom'
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

        <Link
          to="/properties/courtyard-residences"
          data-hero-card="property"
          data-depth="mid"
          aria-label={`View sample listing for ${listing.place}`}
          className="hero-card stage-card absolute bottom-4 left-4 w-[min(19rem,calc(100%-2rem))] px-5 py-4"
        >
          <p className="home-kicker text-muted">{listing.type}</p>
          <p className="mt-2 text-xl font-medium tracking-tight">{listing.place}</p>
          <p className="mt-3 text-sm font-medium text-primary">{listing.yieldLabel}</p>
          <p className="text-sm text-muted">{listing.priceLabel}</p>
          <p className="mt-1 text-xs text-muted">{listing.sampleLabel}</p>
        </Link>

        <p
          data-hero-pill
          data-depth="front"
          className="absolute right-4 top-4 rounded-pill bg-soft px-3 py-1.5 text-xs font-medium text-soft-ink lg:right-[8%] lg:top-7"
        >
          {yieldPill.label}
        </p>

        <Link
          to="/properties/cedar-court"
          data-hero-card="receipt"
          data-depth="front"
          aria-label={`View sample listing for ${receipt.detail}`}
          className="hero-receipt stage-card absolute right-4 top-16 w-[min(13.5rem,calc(100%-2rem))] px-3.5 py-3"
        >
          <p className="flex items-baseline justify-between gap-2 text-sm">
            <span>{receipt.title}</span>
            <span className="text-base font-semibold tabular-nums">{receipt.amount}</span>
          </p>
          <p className="mt-1 text-xs text-muted">{receipt.detail}</p>
          <p className="text-xs text-muted">{receipt.sampleLabel}</p>
        </Link>
      </div>
    </div>
  )
}

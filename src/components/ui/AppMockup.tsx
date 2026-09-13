import { Link } from 'react-router-dom'
import type { AppDownloadContent } from '@/types'

type Props = {
  content: AppDownloadContent
}

export function AppMockup({ content }: Props) {
  return (
    <div className="app-devices" data-depth-stage>
      <Link
        to="/properties/cedar-court"
        data-app-float
        data-depth="front"
        aria-label={`View sample listing for ${content.featured.name}`}
        className="app-float app-float--yield stage-card px-3.5 py-3"
      >
        <p className="home-kicker text-muted">Sample property</p>
        <p className="mt-2 text-lg font-semibold tracking-tight">{content.featured.name}</p>
        <p className="mt-1 text-xs text-muted">{content.featured.yieldLabel}</p>
      </Link>

      <article data-app-phone-side data-depth="back" className="app-phone app-phone--side" aria-hidden="true">
        <div className="app-phone__screen px-3.5 pb-4 pt-2">
          <div className="app-phone__island" />
          <p className="brand-label mt-4 text-muted">{content.brand}</p>
          <p className="mt-4 text-lg font-semibold tracking-tight">{content.holdings.title}</p>
          <p className="mt-1 text-sm text-muted">{content.holdings.countLabel}</p>
          <p className="mt-5 text-[11px] uppercase tracking-[0.12em] text-subtle">
            {content.holdings.valueLabel}
          </p>
          <p className="mt-1 text-2xl font-semibold tabular-nums tracking-tight">
            {content.holdings.value}
          </p>
          <ul className="mt-5 border-t border-line">
            {content.holdings.holdings.map((holding) => (
              <li key={holding.id} className="border-b border-line py-2.5">
                <p className="text-sm font-medium tracking-tight">{holding.name}</p>
                <p className="text-xs text-muted">{holding.meta}</p>
              </li>
            ))}
          </ul>
        </div>
      </article>

      <article data-app-phone-main data-depth="mid" className="app-phone app-phone--main" aria-hidden="true">
        <div className="app-phone__screen">
          <div className="px-3.5 pt-2">
            <div className="app-phone__island" />
            <p className="brand-label mt-4 text-muted">{content.brand}</p>
            <p className="mt-4 text-sm text-muted">{content.featured.eyebrow}</p>
          </div>
          <img
            src={content.featured.image}
            alt=""
            width={900}
            height={720}
            loading="lazy"
            decoding="async"
            className="app-phone__photo mt-3"
          />
          <div className="px-3.5 pb-5 pt-3">
            <p className="text-xl font-semibold tracking-tight">{content.featured.name}</p>
            <p className="mt-0.5 text-sm text-muted">{content.featured.meta}</p>
            <p className="mt-3 inline-block rounded-pill bg-soft px-2 py-0.5 text-[11px] font-medium text-soft-ink">
              {content.featured.yieldLabel}
            </p>
            <p className="mt-3 text-sm text-muted">{content.featured.priceLabel}</p>
          </div>
        </div>
      </article>

      <aside data-app-float data-depth="front" className="app-float app-float--value stage-card px-3.5 py-3">
        <p className="home-kicker text-muted">Sample portfolio</p>
        <p className="mt-2 text-xl font-semibold tabular-nums tracking-tight">{content.holdings.value}</p>
        <p className="mt-1 text-xs text-muted">{content.holdings.countLabel}</p>
      </aside>
    </div>
  )
}

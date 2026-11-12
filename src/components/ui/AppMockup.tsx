import { Link } from '@/components/ui/Link'
import type { AppDownloadContent } from '@/types'
import { withBase } from '@/lib/asset'

type Props = {
  content: AppDownloadContent
}

export function AppMockup({ content }: Props) {
  return (
    <div className="relative grid justify-items-center min-h-[34rem] lg:min-h-[48rem]" data-depth-stage>
      <Link
        href="/properties/cedar-court"
        data-app-float
        data-depth="front"
        aria-label={`View sample listing for ${content.featured.name}`}
        className="max-lg:relative max-lg:top-auto max-lg:right-auto max-lg:mt-4 max-lg:w-full lg:absolute lg:right-0 lg:top-[4%] lg:w-[min(12.5rem,calc(100%-2rem))] lg:rotate-[2.5deg] z-[3] rounded-2xl border border-white/70 bg-white/90 px-3.5 py-3 text-ink shadow-[0_18px_40px_rgb(24_32_25/0.14)] backdrop-blur-md transition-all duration-300 hover:z-50 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl"
      >
        <p className="home-kicker text-muted">Sample property</p>
        <p className="mt-2 text-lg font-semibold tracking-tight">{content.featured.name}</p>
        <p className="mt-1 text-xs text-muted">{content.featured.yieldLabel}</p>
      </Link>

      <article
        data-app-phone-side
        data-depth="back"
        className="relative z-[1] -mt-28 mr-20 w-[min(15rem,72%)] rounded-[1.7rem] bg-accent p-2 shadow-[0_18px_40px_rgb(24_32_25/0.14)] lg:absolute lg:left-0 lg:top-[8%] lg:m-0 lg:w-[18rem]"
        aria-hidden="true"
      >
        <div className="overflow-hidden rounded-[1.25rem] bg-bg px-3.5 pb-4 pt-2">
          <div className="mx-auto mt-[0.55rem] h-[0.7rem] w-[5.5rem] rounded-full bg-accent" />
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

      <article
        data-app-phone-main
        data-depth="mid"
        className="relative z-[2] w-[min(20rem,100%)] rounded-[1.7rem] bg-accent p-2 shadow-[0_18px_40px_rgb(24_32_25/0.14)] lg:ml-[16%] lg:w-[24rem]"
        aria-hidden="true"
      >
        <div className="overflow-hidden rounded-[1.25rem] bg-bg">
          <div className="px-3.5 pt-2">
            <div className="mx-auto mt-[0.55rem] h-[0.7rem] w-[5.5rem] rounded-full bg-accent" />
            <p className="brand-label mt-4 text-muted">{content.brand}</p>
            <p className="mt-4 text-sm text-muted">{content.featured.eyebrow}</p>
          </div>
          <img
            src={withBase(content.featured.image)}
            alt=""
            width={900}
            height={720}
            loading="lazy"
            decoding="async"
            className="mt-3 block aspect-[5/4] w-full object-cover [object-position:50%_30%]"
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

      <aside
        data-app-float
        data-depth="front"
        className="max-lg:relative max-lg:bottom-auto max-lg:left-auto max-lg:mt-4 max-lg:w-full lg:absolute lg:bottom-[6%] lg:left-[2%] lg:w-[min(12.5rem,calc(100%-2rem))] lg:-rotate-[2.5deg] z-[3] rounded-2xl border border-white/70 bg-white/90 px-3.5 py-3 text-ink shadow-[0_18px_40px_rgb(24_32_25/0.14)] backdrop-blur-md transition-all duration-300 hover:z-50 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl"
      >
        <p className="home-kicker text-muted">Sample portfolio</p>
        <p className="mt-2 text-xl font-semibold tabular-nums tracking-tight">{content.holdings.value}</p>
        <p className="mt-1 text-xs text-muted">{content.holdings.countLabel}</p>
      </aside>
    </div>
  )
}

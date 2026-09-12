import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { AppMockup } from '@/components/ui/AppMockup'
import { ButtonLink } from '@/components/ui/Button'
import { appDownload } from '@/data'
import { useAppReveal } from '@/hooks/useAppReveal'
import { usePointerTilt } from '@/hooks/usePointerTilt'

export function AppDownloadSection() {
  const rootRef = useRef<HTMLElement>(null)
  useAppReveal(rootRef)
  usePointerTilt(rootRef, {
    layers: [
      { selector: '[data-app-phone-side]', x: 10, y: 0, rotateX: 2, rotateY: 2.4, z: -28 },
      { selector: '[data-app-phone-main]', x: 12, y: 0, rotateX: 2.4, rotateY: 3, z: 20 },
      { selector: '[data-app-float]', x: 16, y: 0, rotateX: 2, rotateY: 2.6, z: 48 },
    ],
  })

  return (
    <section
      ref={rootRef}
      id="app"
      className="home-band home-band--stage overflow-x-clip bg-bg-warm"
      aria-labelledby="app-heading"
    >
      <div className="mx-auto grid max-w-[var(--container-wide)] items-center gap-12 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-12">
        <div className="max-w-xl">
          <p data-reveal-heading className="home-kicker text-muted">
            {appDownload.eyebrow}
          </p>
          <h2
            data-reveal-heading
            id="app-heading"
            className="home-heading mt-3 max-w-[10ch]"
          >
            {appDownload.heading}
          </h2>
          <p
            data-reveal-heading
            className="mt-5 inline-block rounded-pill bg-soft px-2.5 py-1 text-xs font-medium text-soft-ink"
          >
            {appDownload.sampleLabel}
          </p>

          <div data-app-cta className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
            <ButtonLink to={appDownload.primary.href} className="home-cta gap-1.5">
              {appDownload.primary.label}
              <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
            </ButtonLink>
            <ButtonLink to={appDownload.secondary.href} variant="ghost" className="home-cta gap-1.5 px-0">
              {appDownload.secondary.label}
              <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>

        <AppMockup content={appDownload} />
      </div>
    </section>
  )
}

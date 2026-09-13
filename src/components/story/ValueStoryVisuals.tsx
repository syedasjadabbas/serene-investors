import { useLayoutEffect, useRef } from 'react'
import { appDownload, longTermValue, returnsIllustration } from '@/data'
import { storyAssets, storyHoldingThumb } from '@/data/story-assets'
import { DEPTH_QUERY } from '@/lib/motion'
import { gsap, registerGsapPlugins } from '@/lib/gsap'

export function ValueReceiveVisual() {
  const rental = returnsIllustration.components.find((item) => item.id === 'rental')

  return (
    <div className="story-visual-state story-value-receive">
      <img
        className="story-visual-state__image"
        data-depth="back"
        src={storyAssets.valueWalk.src}
        alt={storyAssets.valueWalk.alt}
        width={1400}
        height={1867}
      />
      <aside className="story-value-receive__card story-value-receive__card--invest stage-card" data-depth="front">
        <p className="story-overlay__title">{returnsIllustration.investmentValue}</p>
        <p className="story-overlay__meta">{returnsIllustration.investmentLabel}</p>
      </aside>
      {rental ? (
        <aside className="story-value-receive__card story-value-receive__card--rent stage-card" data-depth="front">
          <p className="story-overlay__title story-overlay__title--accent">{rental.value}</p>
          <p className="story-overlay__meta">{rental.label}</p>
        </aside>
      ) : null}
    </div>
  )
}

export function ValueBuildVisual() {
  const rootRef = useRef<HTMLDivElement>(null)
  const rental = returnsIllustration.components.find((item) => item.id === 'rental')
  const movement = returnsIllustration.components.find((item) => item.id === 'value')

  useLayoutEffect(() => {
    const root = rootRef.current
    const section = root?.closest('section')
    if (!root || !section) return

    registerGsapPlugins()
    const media = gsap.matchMedia()

    media.add(DEPTH_QUERY, () => {
      const ctx = gsap.context(() => {
        const field = root.querySelector('[data-build-field]')
        const deck = root.querySelector('[data-build-deck]')
        if (field) {
          gsap.fromTo(
            field,
            { yPercent: -6 },
            {
              yPercent: 6,
              ease: 'none',
              force3D: true,
              scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.85,
              },
            },
          )
        }
        if (deck) {
          gsap.fromTo(
            deck,
            { y: 16 },
            {
              y: -12,
              ease: 'none',
              force3D: true,
              scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.85,
              },
            },
          )
        }
      }, root)

      return () => ctx.revert()
    })

    return () => media.revert()
  }, [])

  return (
    <div ref={rootRef} className="story-visual-state story-build">
      <img
        className="story-build__field"
        data-build-field
        data-depth="back"
        src={storyAssets.choose.src}
        alt=""
        width={1400}
        height={1867}
      />
      <div className="story-build__aura" aria-hidden="true" />

      <div className="story-build__deck" data-build-deck>
        <div className="story-build__pose">
          <div className="story-build__plate" aria-hidden="true" />
          <article className="story-canvas story-statement" data-build-panel data-depth="mid">
          <header className="story-statement__head" data-build-head data-depth="front">
            <img src={storyAssets.choose.src} alt="" width={72} height={54} />
            <div>
              <p className="story-overlay__kicker">{returnsIllustration.figureLabel}</p>
              <p className="story-statement__property">{returnsIllustration.propertyName}</p>
            </div>
          </header>

          <div className="story-statement__row story-statement__row--base">
            <p className="story-statement__label">{returnsIllustration.investmentLabel}</p>
            <p className="story-statement__value">{returnsIllustration.investmentValue}</p>
          </div>

          <div className="story-statement__metrics">
            {rental ? (
              <div className="story-statement__row story-statement__row--accent">
                <p className="story-statement__label">{rental.label}</p>
                <p className="story-statement__value" data-build-figure>
                  {rental.value}
                </p>
              </div>
            ) : null}
            {movement ? (
              <div className="story-statement__row story-statement__row--accent">
                <p className="story-statement__label">{movement.label}</p>
                <p className="story-statement__value" data-build-figure>
                  {movement.value}
                </p>
              </div>
            ) : null}
          </div>

          <div className="story-statement__total">
            <div className="story-statement__row story-statement__row--total">
              <p className="story-statement__label">{returnsIllustration.total.label}</p>
              <p className="story-statement__value" data-build-figure>
                {returnsIllustration.total.value}
              </p>
            </div>
            <div className="story-statement__row story-statement__row--rate">
              <p className="story-statement__label">{returnsIllustration.rate.label}</p>
              <p className="story-statement__value" data-build-figure>
                {returnsIllustration.rate.value}
              </p>
            </div>
          </div>

          <p className="story-statement__disclaimer">{returnsIllustration.disclaimer}</p>
          </article>
        </div>
      </div>
    </div>
  )
}

export function ValueGrowVisual() {
  const { brand, holdings } = appDownload

  return (
    <div className="story-visual-state story-grow" data-grow-stage>
      <img
        className="story-grow__backdrop"
        data-depth="back"
        data-grow-layer="backdrop"
        src={storyAssets.grow.src}
        alt={storyAssets.grow.alt}
        width={1400}
        height={1867}
      />
      <article className="story-grow__phone app-phone" aria-hidden="true" data-depth="mid" data-float-layer="phone" data-grow-layer="phone">
        <div className="app-phone__screen story-holdings__screen">
          <div className="app-phone__island" />
          <p className="brand-label story-holdings__brand">{brand}</p>
          <p className="story-holdings__title">{holdings.title}</p>
          <p className="story-holdings__count">{holdings.countLabel}</p>
          <p className="story-holdings__value-label">{longTermValue.valueCard.label}</p>
          <p className="story-holdings__value">{longTermValue.valueCard.value}</p>
          <ul className="story-holdings__list">
            {holdings.holdings.map((holding) => {
              const thumb = storyHoldingThumb(holding.id)
              return (
                <li key={holding.id}>
                  <img src={thumb.src} alt="" width={72} height={54} />
                  <div>
                    <p>{holding.name}</p>
                    <p>{holding.meta}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </article>

      <aside className="story-grow__float story-grow__float--one stage-card" data-depth="front" data-float-layer="card" data-grow-layer="value">
        <p className="story-overlay__kicker">{longTermValue.valueCard.label}</p>
        <p className="story-overlay__title">{longTermValue.valueCard.value}</p>
      </aside>
      <aside className="story-grow__float story-grow__float--two stage-card" data-depth="front" data-float-layer="card" data-grow-layer="gain">
        <p className="story-overlay__kicker">{longTermValue.appreciationCard.label}</p>
        <p className="story-overlay__title story-overlay__title--accent">
          {longTermValue.appreciationCard.value}
        </p>
      </aside>
    </div>
  )
}

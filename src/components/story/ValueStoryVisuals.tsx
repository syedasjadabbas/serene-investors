import { appDownload, longTermValue, returnsIllustration } from '@/data'
import { storyAssets, storyHoldingThumb } from '@/data/story-assets'

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
  const rental = returnsIllustration.components.find((item) => item.id === 'rental')
  const movement = returnsIllustration.components.find((item) => item.id === 'value')

  return (
    <article className="story-canvas story-statement" data-depth="mid">
      <header className="story-statement__head">
        <img src={storyAssets.choose.src} alt="" width={72} height={54} />
        <div>
          <p className="story-overlay__kicker">{returnsIllustration.figureLabel}</p>
          <p className="story-statement__property">{returnsIllustration.propertyName}</p>
        </div>
      </header>

      <div className="story-statement__row" data-depth="mid">
        <p className="story-statement__value">{returnsIllustration.investmentValue}</p>
        <p className="story-statement__label">{returnsIllustration.investmentLabel}</p>
      </div>
      {rental ? (
        <div className="story-statement__row story-statement__row--accent">
          <p className="story-statement__value">{rental.value}</p>
          <p className="story-statement__label">{rental.label}</p>
        </div>
      ) : null}
      {movement ? (
        <div className="story-statement__row story-statement__row--accent">
          <p className="story-statement__value">{movement.value}</p>
          <p className="story-statement__label">{movement.label}</p>
        </div>
      ) : null}

      <div className="story-statement__total" data-depth="front">
        <div className="story-statement__row story-statement__row--total">
          <p className="story-statement__value">{returnsIllustration.total.value}</p>
          <p className="story-statement__label">{returnsIllustration.total.label}</p>
        </div>
        <div className="story-statement__row story-statement__row--rate">
          <p className="story-statement__value">{returnsIllustration.rate.value}</p>
          <p className="story-statement__label">{returnsIllustration.rate.label}</p>
        </div>
      </div>

      <p className="story-statement__disclaimer">{returnsIllustration.disclaimer}</p>
    </article>
  )
}

export function ValueGrowVisual() {
  const { brand, holdings } = appDownload

  return (
    <div className="story-visual-state story-grow">
      <img
        className="story-grow__backdrop"
        data-depth="back"
        src={storyAssets.grow.src}
        alt={storyAssets.grow.alt}
        width={1400}
        height={1867}
      />
      <article className="story-grow__phone app-phone" aria-hidden="true" data-depth="mid" data-float-layer="phone">
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

      <aside className="story-grow__float story-grow__float--one stage-card" data-depth="front" data-float-layer="card">
        <p className="story-overlay__kicker">{longTermValue.valueCard.label}</p>
        <p className="story-overlay__title">{longTermValue.valueCard.value}</p>
      </aside>
      <aside className="story-grow__float story-grow__float--two stage-card" data-depth="front" data-float-layer="card">
        <p className="story-overlay__kicker">{longTermValue.appreciationCard.label}</p>
        <p className="story-overlay__title story-overlay__title--accent">
          {longTermValue.appreciationCard.value}
        </p>
      </aside>
    </div>
  )
}

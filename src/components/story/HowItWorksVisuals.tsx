import { appDownload, properties } from '@/data'
import { storyAssets, storyHoldingThumb } from '@/data/story-assets'
import { formatPercent, formatSampleAmount } from '@/lib/format'

function requireCedar() {
  const cedar = properties.find((item) => item.id === 'cedar-court')
  if (!cedar) {
    throw new Error('Missing sample record: cedar-court')
  }
  return cedar
}

export function HowItWorksVisual({ id }: { id: string }) {
  switch (id) {
    case 'choose':
      return <HowItWorksChooseVisual />
    case 'invest':
      return <HowItWorksInvestVisual />
    case 'track':
      return <HowItWorksTrackVisual />
    case 'receive':
      return <HowItWorksReceiveVisual />
    default:
      return null
  }
}

export function HowItWorksChooseVisual() {
  const cedar = requireCedar()

  return (
    <div className="story-visual-state story-choose">
      <img
        className="story-visual-state__image"
        data-depth="back"
        src={storyAssets.choose.src}
        alt={storyAssets.choose.alt}
        width={1400}
        height={1867}
      />
      <div className="story-property__card stage-card" data-depth="front">
        <p className="story-overlay__kicker">{cedar.name}</p>
        <p className="story-overlay__meta">{cedar.neighborhood}</p>
        <dl className="story-overlay__list">
          <div>
            <dt>Sample yield</dt>
            <dd>{formatPercent(cedar.sampleYieldPct)}</dd>
          </div>
          <div>
            <dt>From</dt>
            <dd>{formatSampleAmount(cedar.sampleMinInvestment)}</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

export function HowItWorksInvestVisual() {
  const cedar = requireCedar()

  return (
    <article className="story-visual-state story-invest" data-depth="mid">
      <p className="story-overlay__kicker">Sample investment</p>
      <p className="story-invest__value">{formatSampleAmount(cedar.sampleMinInvestment)}</p>
      <p className="story-invest__label">Investment amount</p>

      <div className="story-invest__alloc" aria-hidden="true">
        <span className="story-invest__alloc-bar" />
      </div>

      <div className="story-invest__property" data-depth="front">
        <img
          src={storyAssets.choose.src}
          alt=""
          width={160}
          height={120}
        />
        <div>
          <p className="story-overlay__kicker">Allocation</p>
          <p className="story-overlay__title">{cedar.name}</p>
        </div>
      </div>

      <dl className="story-invest__meta">
        <div>
          <dt>Sample yield</dt>
          <dd>{formatPercent(cedar.sampleYieldPct)}</dd>
        </div>
        <div>
          <dt>Investment amount</dt>
          <dd>{formatSampleAmount(cedar.sampleMinInvestment)}</dd>
        </div>
      </dl>
      <p className="story-invest__note">Illustrative sample only</p>
    </article>
  )
}

export function HowItWorksTrackVisual() {
  const { brand, holdings } = appDownload
  const cedar = requireCedar()

  return (
    <div className="story-visual-state story-track">
      <article className="story-holdings app-phone" data-depth="mid" data-float-layer="phone">
        <div className="app-phone__screen story-holdings__screen">
          <div className="app-phone__island" />
          <p className="brand-label story-holdings__brand">{brand}</p>
          <p className="story-holdings__title">{holdings.title}</p>
          <p className="story-holdings__count">{holdings.countLabel}</p>
          <p className="story-holdings__value-label">{holdings.valueLabel}</p>
          <p className="story-holdings__value">{holdings.value}</p>
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

      <aside className="story-track__float story-track__float--one stage-card" data-depth="front" data-float-layer="card">
        <p className="story-overlay__kicker">Sample portfolio value</p>
        <p className="story-overlay__title">{holdings.value}</p>
      </aside>
      <aside className="story-track__float story-track__float--two stage-card" data-depth="front" data-float-layer="card">
        <p className="story-overlay__kicker">{cedar.name}</p>
        <p className="story-overlay__meta">{formatPercent(cedar.sampleYieldPct)} sample yield</p>
      </aside>
    </div>
  )
}

export function HowItWorksReceiveVisual() {
  const cedar = requireCedar()

  return (
    <div className="story-visual-state story-receipt">
      <img
        className="story-visual-state__image"
        data-depth="back"
        src={storyAssets.receive.src}
        alt={storyAssets.receive.alt}
        width={1400}
        height={1867}
      />
      <aside className="story-receipt__card" data-depth="front">
        <p className="story-overlay__kicker">Rent posted</p>
        <p className="story-receipt__property">{cedar.name}</p>
        <p className="story-receipt__amount">+$214</p>
        <p className="story-receipt__detail">Sample distribution</p>
        <p className="story-receipt__note">Sample monthly distribution</p>
      </aside>
    </div>
  )
}

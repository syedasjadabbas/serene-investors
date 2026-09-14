import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import {
  appDownload,
  catalogueFeaturedFund,
  heroVisual,
  properties,
  sampleFundMinimum,
} from '@/data'
import { storyAssets, storyHoldingThumb } from '@/data/story-assets'
import { formatPercent, formatSampleAmount } from '@/lib/format'

function requireCedar() {
  const cedar = properties.find((item) => item.id === 'cedar-court')
  if (!cedar) {
    throw new Error('Missing sample record: cedar-court')
  }
  return cedar
}

export function HowPageVisual({ id }: { id: string }) {
  switch (id) {
    case 'choose':
      return <HowPageChooseVisual />
    case 'invest':
      return <HowPageInvestVisual />
    case 'track':
      return <HowPageTrackVisual />
    case 'receive':
      return <HowPageReceiveVisual />
    default:
      return null
  }
}

export function HowPageChooseVisual() {
  const cedar = requireCedar()
  const fund = catalogueFeaturedFund

  return (
    <div className="how-choose">
      <img
        data-how-choose-image
        data-depth="back"
        src={storyAssets.choose.src}
        alt={storyAssets.choose.alt}
        width={1400}
        height={1867}
      />

      <Link
        to={`/properties/${cedar.id}`}
        className="how-choose__card how-choose__card--property"
        data-depth="front"
        aria-label={`View sample listing for ${cedar.name}`}
      >
        <p className="how-kicker">Sample property</p>
        <p className="how-choose__name">{cedar.name}</p>
        <p className="how-choose__meta">{cedar.neighborhood}</p>
        <p className="how-choose__figures">
          Sample yield {formatPercent(cedar.sampleYieldPct)}
          <span> · From {formatSampleAmount(cedar.sampleMinInvestment)}</span>
        </p>
        <span className="how-choose__action">
          View property
          <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
        </span>
      </Link>

      <Link
        to={`/funds/${fund.id}`}
        className="how-choose__card how-choose__card--fund"
        data-depth="front"
        aria-label={`View sample fund ${fund.name}`}
      >
        <img src={fund.image} alt="" width={640} height={400} />
        <div>
          <p className="how-kicker">Sample fund</p>
          <p className="how-choose__name">{fund.name}</p>
          <p className="how-choose__meta">
            {fund.market} · {fund.propertyCount} sample properties
          </p>
          <span className="how-choose__action">
            View fund
            <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </span>
        </div>
      </Link>
    </div>
  )
}

export function HowPageInvestVisual() {
  const cedar = requireCedar()
  const fund = catalogueFeaturedFund

  return (
    <article className="how-invest" data-depth="mid">
      <p className="how-kicker">Sample allocation</p>
      <p
        data-how-amount
        data-how-amount-target={cedar.sampleMinInvestment}
        className="how-invest__amount tabular-nums"
      >
        {formatSampleAmount(cedar.sampleMinInvestment)}
      </p>
      <p className="how-invest__label">Investment amount</p>

      <div className="how-invest__alloc" aria-hidden="true">
        <span data-how-alloc className="how-invest__bar" />
      </div>

      <div data-how-invest-bit className="how-invest__pick">
        <img src={storyAssets.choose.src} alt="" width={160} height={120} />
        <div>
          <p className="how-kicker">Selected sample</p>
          <p className="how-invest__pick-name">{cedar.name}</p>
          <Link to={`/properties/${cedar.id}`} className="how-invest__link">
            View property
            <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <p data-how-invest-bit className="how-invest__alt">
        Or allocate to a fund:{' '}
        <Link to={`/funds/${fund.id}`}>
          {fund.name}, from {formatSampleAmount(sampleFundMinimum)}
        </Link>
      </p>

      <dl data-how-invest-bit className="how-invest__meta">
        <div>
          <dt>Sample yield</dt>
          <dd>{formatPercent(cedar.sampleYieldPct)}</dd>
        </div>
        <div>
          <dt>Investment amount</dt>
          <dd>{formatSampleAmount(cedar.sampleMinInvestment)}</dd>
        </div>
      </dl>
      <p data-how-invest-bit className="how-invest__note">
        Illustrative sample only
      </p>
    </article>
  )
}

export function HowPageTrackVisual() {
  const { brand, holdings } = appDownload
  const cedar = requireCedar()

  return (
    <div className="how-track">
      <article className="how-track__phone app-phone" data-depth="mid" data-float-layer="phone">
        <div className="app-phone__screen how-track__screen">
          <div className="app-phone__island" />
          <p className="brand-label how-track__brand">{brand}</p>
          <p className="how-track__title">{holdings.title}</p>
          <p className="how-track__count">{holdings.countLabel}</p>
          <p className="how-track__value-label">{holdings.valueLabel}</p>
          <p className="how-track__value tabular-nums">{holdings.value}</p>
          <ul className="how-track__list">
            {holdings.holdings.map((holding) => {
              const thumb = storyHoldingThumb(holding.id)
              return (
                <li key={holding.id}>
                  <Link to={`/properties/${holding.id}`}>
                    <img src={thumb.src} alt="" width={72} height={54} />
                    <div>
                      <p>{holding.name}</p>
                      <p>{holding.meta}</p>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </article>

      <aside
        className="how-track__float how-track__float--value"
        data-depth="front"
        data-float-layer="card"
      >
        <p className="how-kicker">Sample portfolio value</p>
        <p className="how-track__float-value tabular-nums">{holdings.value}</p>
        <p className="how-track__float-meta">{holdings.countLabel}</p>
      </aside>

      <Link
        to={`/properties/${cedar.id}`}
        className="how-track__float how-track__float--holding"
        data-depth="front"
        data-float-layer="card"
        aria-label={`View sample listing for ${cedar.name}`}
      >
        <p className="how-kicker">{cedar.name}</p>
        <p className="how-track__float-meta">
          Sample yield {formatPercent(cedar.sampleYieldPct)}
        </p>
      </Link>
    </div>
  )
}

export function HowPageReceiveVisual() {
  const cedar = requireCedar()
  const receipt = heroVisual.receipt

  return (
    <div className="how-receive">
      <img
        data-depth="back"
        src={storyAssets.receive.src}
        alt={storyAssets.receive.alt}
        width={1400}
        height={1867}
      />
      <Link
        to={`/properties/${cedar.id}`}
        className="how-receive__card"
        data-how-receipt
        data-depth="front"
        aria-label={`Sample distribution for ${cedar.name}. View property.`}
      >
        <p className="how-kicker">{receipt.title}</p>
        <p className="how-receive__property">{receipt.detail}</p>
        <p className="how-receive__amount tabular-nums">{receipt.amount}</p>
        <p className="how-receive__meta">Sample distribution</p>
        <p className="how-receive__note">{receipt.sampleLabel} monthly figure</p>
      </Link>
    </div>
  )
}

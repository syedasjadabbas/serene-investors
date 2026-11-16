import type { FaqItem } from '@/global/components/page/FaqAccordion'
import type { FeatureSlide } from '@/global/components/page/FeatureCarousel'
import type { Step } from '@/global/components/page/StickySteps'
import { funds, fundsNotice, sampleFundMinimum } from '@/global/data/funds'
import { formatPercent, formatSampleAmount } from '@/global/lib/format'

// Copy and figures for the /funds product page. Every figure comes from the sample fund data.

const totalProperties = funds.reduce((total, fund) => total + fund.propertyCount, 0)
const topYield = Math.max(...funds.map((fund) => fund.sampleReturnPct))

export const fundsStats = [
  { value: String(funds.length), label: 'Sample funds in the collection' },
  { value: String(totalProperties), label: 'Sample properties across the funds' },
  { value: formatSampleAmount(sampleFundMinimum), label: 'Sample minimum per fund' },
  { value: formatPercent(topYield), label: 'Highest sample yield' },
]

export const fundsStatsCaption = 'Sample figures for this demonstration. They are not a forecast, a record of performance or an offer.'

export const fundsSteps: Step[] = [
  {
    step: 'Step 01',
    title: 'Choose a fund',
    body: 'Each fund is built around one theme and one market. Compare the sample yield, the number of properties and the minimum before you pick.',
    image: { src: '/images/story/grow-townhouses.png', alt: 'A quiet row of contemporary townhouses' },
  },
  {
    step: 'Step 02',
    title: 'Invest',
    body: 'Choose an amount from the fund’s sample minimum. One allocation covers every property the fund holds.',
    image: { src: '/images/story/choose-cedar-court.png', alt: 'Pale residential court with planted walks and simple geometric facades' },
  },
  {
    step: 'Step 03',
    title: 'Spread across buildings',
    body: 'Your allocation is shared across the fund’s properties, so no single building carries all of it.',
    image: { src: '/images/journey/residential.jpg', alt: 'Low-rise family homes with planted terraces' },
  },
  {
    step: 'Step 04',
    title: 'Receive quarterly reports',
    body: 'Each quarter your account shows a sample report of the fund’s holdings and distributions.',
    image: { src: '/images/story/receive-cedar-court.png', alt: 'Warm afternoon light on a pale contemporary house and planted front garden' },
  },
]

export const fundsSlides: FeatureSlide[] = [
  {
    title: 'Many buildings, one decision',
    body: 'A fund gathers several sample properties under one allocation, so you choose once instead of building by building.',
    image: { src: '/images/story/value-cedar-walk.png', alt: 'A planted walk between two pale residential wings' },
  },
  {
    title: 'One clear minimum',
    body: `Every fund in the collection uses the same sample minimum of ${formatSampleAmount(sampleFundMinimum)}, shown on its card before you start.`,
    image: { src: '/images/story/marble-house.png', alt: 'A pale stone townhouse on a quiet street' },
  },
  {
    title: 'A theme you can read',
    body: 'Each fund names its market and its type, residential or mixed, so you know what kind of buildings it holds.',
    image: { src: '/images/story/pines-loft.png', alt: 'A narrow loft building with tall windows' },
  },
  {
    title: 'Followed in one account',
    body: 'Funds sit beside any single properties you hold, with their sample figures in the same account view.',
    image: { src: '/images/journey/tower-pool.jpg', alt: 'A rooftop pool beside a residential tower' },
  },
]

export const fundsFaq: FaqItem[] = [
  {
    q: 'What is a fund on Serene Investors?',
    a: 'A fund groups several sample properties under one theme and one market. You make one allocation and it is shared across every property in the fund.',
  },
  {
    q: 'How is a fund different from a single property?',
    a: 'With a single property you own a share of one named building. With a fund your allocation is spread across all of the fund’s buildings.',
  },
  {
    q: 'What is the minimum for a fund?',
    a: `Every fund in this collection uses the same sample minimum of ${formatSampleAmount(sampleFundMinimum)}. It is an illustrative figure for this demonstration.`,
  },
  {
    q: 'How are the yields shown?',
    a: 'Each card shows a sample yield. These are demonstration figures: they are not forecasts, not guaranteed and not a record of past performance.',
  },
  {
    q: 'What is in a quarterly report?',
    a: 'In the demonstration account, a quarterly report lists the fund’s sample holdings and the sample distributions posted for that quarter.',
  },
  {
    q: 'Are these funds real?',
    a: fundsNotice.body,
  },
]

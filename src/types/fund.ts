export type FundType = 'residential' | 'commercial' | 'mixed'

export type Fund = {
  id: string
  name: string
  market: string
  image: string
  imageAlt: string
  type: FundType
  sampleReturnPct: number
  propertyCount: number
  portfolioLabel: string
}

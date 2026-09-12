export type PropertyStatus = 'open' | 'funding' | 'funded' | 'exited'

export type PropertyType = 'Residential' | 'Hospitality' | 'Commercial'

export type PropertyImage = {
  src: string
  alt: string
}

export type PropertyFeature = {
  id: string
  title: string
}

export type PropertyInvestmentExample = {
  amountLabel: string
  amountNote: string
  rental: {
    label: string
    value: string
    amount: number
  }
  valueChange: {
    label: string
    value: string
    amount: number
  }
  total: {
    label: string
    value: string
  }
  rate: {
    label: string
    value: string
  }
  disclaimer: string
}

export type PropertyDocumentation = {
  recordLabel: string
  recordValue: string
  ownershipLabel: string
  ownershipValue: string
  documentsLabel: string
  documentsValue: string
  statusLabel: string
  statusValue: string
  note: string
}

export type Property = {
  id: string
  name: string
  neighborhood: string
  city: string
  type: PropertyType
  image: string
  imageAlt: string
  beds: number
  areaLabel: string
  status: PropertyStatus
  occupancyLabel: string
  sampleYieldPct: number
  sampleNetYieldPct: number
  samplePriceLabel: string
  sampleMinInvestment: number
  fundedPct?: number
  description: string
  overview: string[]
  sampleValueLabel: string
  unitsLabel: string
  completion: string
  management: string
  features: PropertyFeature[]
  gallery: PropertyImage[]
  investmentExample: PropertyInvestmentExample
  documentation: PropertyDocumentation
}

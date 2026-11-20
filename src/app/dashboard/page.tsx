import type { Metadata } from 'next'
import { DashboardPage } from './_components/DashboardPage'

export const metadata: Metadata = {
  title: 'Sample portfolio | Serene Investors',
  description: 'A demonstration investor portfolio built from published Serene Heights Nathia Gali payment plans, in PKR.',
}

export default function Page() {
  return <DashboardPage />
}

import type { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { LenisProvider } from './LenisProvider'

type Props = {
  children: ReactNode
}

export function AppProviders({ children }: Props) {
  return (
    <BrowserRouter>
      <LenisProvider>{children}</LenisProvider>
    </BrowserRouter>
  )
}

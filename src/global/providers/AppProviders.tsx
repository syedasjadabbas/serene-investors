'use client'

import type { ReactNode } from 'react'
import { AuthProvider } from '@/global/stores/auth'
import { LenisProvider } from './LenisProvider'

type Props = {
  children: ReactNode
}

export function AppProviders({ children }: Props) {
  return (
    <AuthProvider>
      <LenisProvider>{children}</LenisProvider>
    </AuthProvider>
  )
}

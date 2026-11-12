'use client'

import { Suspense } from 'react'
import { AuthPage } from '../_components/AuthPage'

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-[50vh]" />}>
      <AuthPage title="Login" />
    </Suspense>
  )
}

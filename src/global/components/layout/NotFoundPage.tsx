'use client'

import React from 'react'
import Link from 'next/link'
import { Home, Building2 } from 'lucide-react'

export function NotFoundPage() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center py-20 px-6 bg-white">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#E8FAF0] px-3.5 py-1 text-xs font-bold text-[#00A663] border border-[#00A663]/25">
          <span>Error 404</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
          Page not found
        </h1>

        <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-md mx-auto">
          The page you are looking for doesn’t exist or has been relocated. You can return to the home page or browse available properties.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-[#0F172A] px-6 py-3.5 text-sm font-bold text-white shadow-xs hover:bg-[#1E293B] transition-colors"
          >
            <Home size={16} />
            <span>Back to Home</span>
          </Link>

          <Link
            href="/properties"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-bold text-[#0F172A] shadow-2xs hover:bg-gray-50 transition-colors"
          >
            <Building2 size={16} />
            <span>Browse Properties</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

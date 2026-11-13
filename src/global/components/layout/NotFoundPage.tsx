'use client'

import { PageHero } from '@/global/components/page/PageHero'

export function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] items-center">
      <div className="w-full">
        <PageHero
          eyebrow="Error 404"
          title="Page not found."
          highlight="not found"
          body="The page you are looking for doesn’t exist or has moved. Head back to the home page or browse available properties."
          actions={[
            { label: 'Back to home', href: '/' },
            { label: 'Browse properties', href: '/properties' },
          ]}
        />
      </div>
    </div>
  )
}

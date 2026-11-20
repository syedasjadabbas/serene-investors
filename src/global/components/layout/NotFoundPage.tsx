'use client'

import { Eyebrow, Highlighted } from '@/global/components/page/PageSection'
import { PillLink } from '@/global/components/ui/PillLink'

/** 404: a centred PageHeader-scale title with two ways back, on the paper sheet. */
export function NotFoundPage() {
  return (
    <section className="flex min-h-[60vh] items-center px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-5 text-center">
        <Eyebrow>Error 404</Eyebrow>
        <h1 className="max-w-3xl text-balance font-heading text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-sx-ink sm:text-[2.75rem]">
          <Highlighted title="Page not found." highlight="not found" className="text-sx-brand" />
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-sx-ink/60 sm:text-lg">
          The page you are looking for doesn’t exist or has moved. Head back to the home page or see Serene Heights Nathia Gali and Serene Heights Lahore.
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <PillLink href="/">Back to home</PillLink>
          <PillLink href="/properties" variant="brand">
            See the projects
          </PillLink>
        </div>
      </div>
    </section>
  )
}

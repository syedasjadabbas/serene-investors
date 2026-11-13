'use client'

import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { newsletter } from '../_lib/home'

/** Sends the visitor to sign-up with their email filled in. There is no separate mailing list yet. */
export function Newsletter() {
  const router = useRouter()
  const [email, setEmail] = useState('')

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    router.push(`/signup?email=${encodeURIComponent(email.trim())}`)
  }

  return (
    <section aria-labelledby="newsletter-heading" className="px-4 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-[1240px] gap-6 rounded-[20px] bg-white p-6 sm:p-10 md:grid-cols-2 md:items-center">
        <div>
          <h2 id="newsletter-heading" className="font-heading text-3xl font-bold tracking-[-0.02em] text-sx-ink">
            {newsletter.heading}
          </h2>
          <p className="mt-2 text-base text-sx-ink/65">{newsletter.body}</p>
        </div>
        <form onSubmit={onSubmit} className="flex flex-col gap-3">
          <label htmlFor="newsletter-email" className="text-sm font-medium text-sx-ink">
            Email
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={newsletter.placeholder}
            className="rounded-[12px] bg-sx-paper px-4 py-3 text-base text-sx-ink outline-none ring-sx-brand placeholder:text-sx-ink/40 focus:ring-2"
          />
          <button
            type="submit"
            className="rounded-[12px] bg-sx-ink py-3 text-base font-semibold text-white transition-colors hover:bg-sx-forest"
          >
            {newsletter.button}
          </button>
        </form>
      </div>
    </section>
  )
}

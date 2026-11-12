'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useLenisControl } from '@/global/providers/LenisProvider'

const HASH_WAIT_MS = 4000

function stickyOffset() {
  const sticky = document.querySelector<HTMLElement>('[data-site-sticky]')
  if (!sticky) return -96
  return -(sticky.getBoundingClientRect().height + 24)
}

export function useScrollToHash() {
  const pathname = usePathname()
  const { scrollTo } = useLenisControl()

  useEffect(() => {
    const hash = typeof window !== 'undefined' ? window.location.hash : ''
    const id = hash.replace(/^#/, '')
    if (!id) {
      scrollTo(0)
      return
    }

    let cancelled = false
    let frame = 0
    let timer = 0
    const started = Date.now()

    const tryScroll = () => {
      if (cancelled) return
      const node = document.getElementById(id)
      if (node) {
        scrollTo(node, { duration: 0.65, offset: stickyOffset() })
        return
      }
      if (Date.now() - started < HASH_WAIT_MS) {
        timer = window.setTimeout(() => {
          frame = window.requestAnimationFrame(tryScroll)
        }, 50)
      }
    }

    frame = window.requestAnimationFrame(tryScroll)
    return () => {
      cancelled = true
      window.cancelAnimationFrame(frame)
      window.clearTimeout(timer)
    }
  }, [pathname, scrollTo])
}

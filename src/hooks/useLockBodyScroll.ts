import { useEffect } from 'react'
import { useLenisControl } from '@/app/providers/LenisProvider'

export function useLockBodyScroll(locked: boolean) {
  const lenis = useLenisControl()

  useEffect(() => {
    if (!locked) return

    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    lenis?.stop()

    return () => {
      document.body.style.overflow = previous
      lenis?.start()
    }
  }, [locked, lenis])
}

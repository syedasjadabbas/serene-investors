import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLenisControl } from '@/app/providers/LenisProvider'

export function useScrollToHash() {
  const { pathname, hash } = useLocation()
  const { scrollTo } = useLenisControl()

  useEffect(() => {
    const id = hash.replace(/^#/, '')
    if (!id) {
      scrollTo(0)
      return
    }

    const frame = window.requestAnimationFrame(() => {
      const node = document.getElementById(id)
      if (node) {
        scrollTo(node, { duration: 0.65 })
        return
      }
      scrollTo(0)
    })

    return () => window.cancelAnimationFrame(frame)
  }, [hash, pathname, scrollTo])
}

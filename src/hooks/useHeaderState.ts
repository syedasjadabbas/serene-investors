import { useEffect, useState, type RefObject } from 'react'

export function useHeaderState(sentinelRef: RefObject<HTMLElement | null>) {
  const [elevated, setElevated] = useState(false)

  useEffect(() => {
    const node = sentinelRef.current
    if (!node) return

    const observer = new IntersectionObserver(([entry]) => {
      setElevated(!entry.isIntersecting)
    })

    observer.observe(node)
    return () => observer.disconnect()
  }, [sentinelRef])

  return { elevated }
}

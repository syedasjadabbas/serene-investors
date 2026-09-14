import { useEffect, useState } from 'react'

export function useActiveSection(ids: readonly string[]) {
  const key = ids.join('|')
  const [activeId, setActiveId] = useState(ids[0] ?? '')

  useEffect(() => {
    const list = key.split('|').filter(Boolean)
    const nodes = list
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node))

    if (nodes.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        const id = visible[0]?.target.id
        if (id) setActiveId(id)
      },
      { rootMargin: '-18% 0px -68% 0px', threshold: 0.05 },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [key])

  return activeId
}

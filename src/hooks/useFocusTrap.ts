import { useEffect, type RefObject } from 'react'

const SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

export function useFocusTrap(
  active: boolean,
  containerRef: RefObject<HTMLElement | null>,
  onEscape: () => void,
  extrasSelector?: string,
) {
  useEffect(() => {
    if (!active) return
    const root = containerRef.current
    if (!root) return

    const previous = document.activeElement
    const getItems = () => {
      const inRoot = Array.from(root.querySelectorAll<HTMLElement>(SELECTOR)).filter(
        (node) => !node.hasAttribute('disabled') && node.getAttribute('aria-hidden') !== 'true',
      )
      const extra = extrasSelector
        ? document.querySelector<HTMLElement>(extrasSelector)
        : null
      return extra ? [extra, ...inRoot.filter((node) => node !== extra)] : inRoot
    }

    const items = getItems()
    items[0]?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onEscape()
        return
      }

      if (event.key !== 'Tab') return

      const list = getItems()
      if (list.length === 0) return

      const first = list[0]
      const last = list[list.length - 1]
      const current = document.activeElement

      if (event.shiftKey && current === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && current === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      if (previous instanceof HTMLElement) previous.focus()
    }
  }, [active, containerRef, extrasSelector, onEscape])
}

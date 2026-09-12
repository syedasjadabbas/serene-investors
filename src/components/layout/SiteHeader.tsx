import { useEffect, type MouseEvent } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useLenisControl } from '@/app/providers/LenisProvider'
import { primaryNav, site, utilityNav } from '@/data'
import { Badge } from '@/components/ui/Badge'
import { ButtonLink } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

type Props = {
  elevated: boolean
  menuOpen: boolean
  onMenuToggle: () => void
  onMenuClose: () => void
}

export function SiteHeader({ elevated, menuOpen, onMenuToggle, onMenuClose }: Props) {
  const location = useLocation()
  const navigate = useNavigate()
  const { scrollTo } = useLenisControl()

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)')
    const onChange = () => {
      if (media.matches) onMenuClose()
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [onMenuClose])

  function goToTop(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    onMenuClose()
    if (location.pathname !== '/') {
      navigate('/')
    }
    scrollTo(0)
    requestAnimationFrame(() => scrollTo(0))
  }

  const login = utilityNav.find((item) => item.id === 'login')
  const start = utilityNav.find((item) => item.id === 'start')

  return (
    <header
      className={cn(
        'border-b bg-surface transition-colors duration-[var(--duration-fast)] ease-[var(--ease-out-quart)]',
        elevated ? 'border-line' : 'border-transparent',
      )}
    >
      <div className="relative mx-auto flex h-[var(--header-h)] max-w-[var(--container-wide)] items-center justify-between px-5 md:px-8 lg:px-10">
        <Link
          to="/"
          onClick={goToTop}
          className="relative z-10 whitespace-nowrap text-[0.62rem] font-semibold tracking-[0.16em] sm:text-[0.72rem]"
        >
          {site.name}
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex"
          aria-label="Primary"
        >
          {primaryNav.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              className="site-nav-link inline-flex items-center gap-1.5 text-sm text-ink transition-colors duration-[var(--duration-fast)] hover:text-primary"
            >
              {item.label}
              {item.badge ? <Badge>{item.badge}</Badge> : null}
            </Link>
          ))}
        </nav>

        <div className="relative z-10 flex items-center gap-5">
          {login ? (
            <Link
              to={login.href}
              className="site-nav-link max-lg:hidden text-sm text-ink transition-colors duration-[var(--duration-fast)] hover:text-primary"
            >
              {login.label}
            </Link>
          ) : null}
          {start ? (
            <ButtonLink to={start.href} className="max-lg:hidden px-4 py-2">
              {start.label}
            </ButtonLink>
          ) : null}

          <button
            type="button"
            className="flex size-11 items-center justify-center lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={onMenuToggle}
          >
            {menuOpen ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>
    </header>
  )
}

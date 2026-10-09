'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  ChevronDown,
  Globe,
  Menu,
  X,
  Building2,
  PieChart,
  HelpCircle,
  Calculator,
  Award,
  ShieldCheck,
  Percent,
  BookOpen,
  FileText,
  Bookmark,
  Check,
} from 'lucide-react'
import { TopBanner } from './TopBanner'
import { useAuth } from '@/context/AuthContext'
import { UserProfileDropdown } from '@/components/layout/UserProfileDropdown'

/* =========================================================================
   STAKE OFFICIAL LOGO COMPONENT
   1:1 match to Stake brand wordmark with emerald accent on 'k'
   ========================================================================= */
export function StakeLogo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" aria-label="Stake Home" className={`inline-flex items-center select-none group ${className}`}>
      <span className="font-heading text-[27px] font-black tracking-[-0.035em] text-[#0D1117] leading-none flex items-center">
        <span>sta</span>
        <span className="relative inline-flex items-center">
          <span className="text-[#0D1117]">k</span>
          {/* Stake signature emerald green diagonal accent on lower leg of 'k' */}
          <span className="absolute bottom-[2.5px] -right-[1.5px] w-[5.5px] h-[3.8px] bg-[#00A663] rounded-[1px] transform rotate-[18deg] group-hover:scale-110 transition-transform" />
        </span>
        <span>e</span>
      </span>
    </Link>
  )
}

/* =========================================================================
   NAVIGATION DROPDOWN DATA
   ========================================================================= */
const INVEST_ITEMS = [
  {
    title: 'Properties',
    desc: 'Buy shares in premium pre-vetted residential rentals',
    href: '/properties',
    icon: Building2,
    badge: null,
  },
  {
    title: 'Funds',
    desc: 'Diversify instantly across managed real estate portfolios',
    href: '/funds',
    icon: PieChart,
    badge: 'New',
  },
  {
    title: 'How it works',
    desc: 'The complete step-by-step digital investment journey',
    href: '/how-it-works',
    icon: HelpCircle,
    badge: null,
  },
  {
    title: 'Investment Calculator',
    desc: 'Calculate estimated rental income and capital appreciation',
    href: '/properties',
    icon: Calculator,
    badge: null,
  },
]

const BENEFITS_ITEMS = [
  {
    title: 'Golden Visa',
    desc: 'Qualify for long-term UAE residency through real estate',
    href: '/golden-visa',
    icon: Award,
  },
  {
    title: 'Stake Rewards',
    desc: 'Earn tier upgrades, cash bonuses and referral perks',
    href: '/rewards',
    icon: Percent,
  },
  {
    title: 'Safety & Regulation',
    desc: 'Regulated by the DFSA (Dubai) and CMA (Saudi Arabia)',
    href: '/security',
    icon: ShieldCheck,
  },
]

const CONTENT_ITEMS = [
  {
    title: 'Blog & Insights',
    desc: 'Market deep dives, investor guides and quarterly reports',
    href: '/learn',
    icon: BookOpen,
  },
  {
    title: 'FAQs',
    desc: 'Find clear answers to all your property investment questions',
    href: '/faq',
    icon: HelpCircle,
  },
  {
    title: 'Real Estate Glossary',
    desc: 'Master property investing terminology simply',
    href: '/glossary',
    icon: Bookmark,
  },
  {
    title: 'Market Reports',
    desc: 'Quarterly institutional data on Dubai and Riyadh yields',
    href: '/market-reports',
    icon: FileText,
  },
]

/* =========================================================================
   MAIN 1:1 STAKE NAVBAR COMPONENT
   ========================================================================= */
export function Navbar() {
  const pathname = usePathname()
  const { isAuthenticated, user, isLoaded, logout } = useAuth()
  const [activeDropdown, setActiveDropdown] = useState<'invest' | 'benefits' | 'content' | null>(null)
  const [langMenuOpen, setLangMenuOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedLang, setSelectedLang] = useState<'English' | 'العربية'>('English')
  const [isNavHidden, setIsNavHidden] = useState(false)
  
  const navRef = useRef<HTMLDivElement>(null)

  // Auto-hide navbar when locked in Scrollytelling Journey or scrolling downwards
  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > 120 && currentScrollY > lastScrollY + 15) {
        setIsNavHidden(true)
      } else if (currentScrollY < lastScrollY - 10 || currentScrollY <= 80) {
        setIsNavHidden(false)
      }

      lastScrollY = currentScrollY
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [pathname])

  // Close menus on outside click or Escape
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
        setLangMenuOpen(false)
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setActiveDropdown(null)
        setLangMenuOpen(false)
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  return (
    <div
      ref={navRef}
      className={`sticky top-0 z-[1000] w-full select-none transition-all duration-500 ease-in-out ${
        isNavHidden
          ? '-translate-y-full opacity-0 pointer-events-none'
          : 'translate-y-0 opacity-100 pointer-events-auto'
      }`}
      data-site-sticky
    >
      {/* 1. Optional Top Notification Banner */}
      <TopBanner />

      {/* 2. 1:1 Stake Header Bar */}
      <header className="relative w-full border-b border-black/[0.06] bg-white transition-all shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-8">
          
          {/* ================= LEFT GROUP: LOGO + NAV LINKS ================= */}
          <div className="flex items-center">
            {/* Stake Logo */}
            <StakeLogo />

            {/* Nav Menu Items directly adjacent to Logo */}
            <nav className="hidden lg:flex items-center gap-7 ml-10" aria-label="Primary Navigation">
              
              {/* --- 1. INVEST DROPDOWN --- */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('invest')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() => setActiveDropdown(activeDropdown === 'invest' ? null : 'invest')}
                  aria-expanded={activeDropdown === 'invest'}
                  className={`flex items-center gap-1.5 text-[14.5px] font-medium transition-colors py-2 cursor-pointer ${
                    activeDropdown === 'invest' ? 'text-[#00A663]' : 'text-[#0D1117] hover:text-[#00A663]'
                  }`}
                >
                  <span>Invest</span>
                  <ChevronDown
                    size={14}
                    strokeWidth={2.2}
                    className={`text-gray-500 transition-transform duration-200 ${
                      activeDropdown === 'invest' ? 'rotate-180 text-[#00A663]' : ''
                    }`}
                  />
                </button>

                {activeDropdown === 'invest' && (
                  <div className="absolute left-0 top-[calc(100%+2px)] z-50 w-84 origin-top-left rounded-2xl border border-black/[0.08] bg-white p-3 shadow-xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150">
                    <div className="space-y-1">
                      {INVEST_ITEMS.map((item) => {
                        const Icon = item.icon
                        return (
                          <Link
                            key={item.title}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-gray-50 group"
                          >
                            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-700 group-hover:bg-[#E8F8F0] group-hover:text-[#00A663] transition-colors">
                              <Icon size={18} />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2">
                                <span className="text-[13.5px] font-bold text-[#0D1117] group-hover:text-[#00A663] transition-colors">
                                  {item.title}
                                </span>
                                {item.badge && (
                                  <span className="rounded-full bg-[#00A663] px-2 py-0.2 text-[9px] font-bold text-white uppercase tracking-wider">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[11.5px] text-gray-500 leading-snug mt-0.5">{item.desc}</p>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* --- 2. BENEFITS DROPDOWN --- */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('benefits')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() => setActiveDropdown(activeDropdown === 'benefits' ? null : 'benefits')}
                  aria-expanded={activeDropdown === 'benefits'}
                  className={`flex items-center gap-1.5 text-[14.5px] font-medium transition-colors py-2 cursor-pointer ${
                    activeDropdown === 'benefits' ? 'text-[#00A663]' : 'text-[#0D1117] hover:text-[#00A663]'
                  }`}
                >
                  <span>Benefits</span>
                  <ChevronDown
                    size={14}
                    strokeWidth={2.2}
                    className={`text-gray-500 transition-transform duration-200 ${
                      activeDropdown === 'benefits' ? 'rotate-180 text-[#00A663]' : ''
                    }`}
                  />
                </button>

                {activeDropdown === 'benefits' && (
                  <div className="absolute left-0 top-[calc(100%+2px)] z-50 w-80 origin-top-left rounded-2xl border border-black/[0.08] bg-white p-3 shadow-xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150">
                    <div className="space-y-1">
                      {BENEFITS_ITEMS.map((item) => {
                        const Icon = item.icon
                        return (
                          <Link
                            key={item.title}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-gray-50 group"
                          >
                            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-700 group-hover:bg-[#E8F8F0] group-hover:text-[#00A663] transition-colors">
                              <Icon size={18} />
                            </div>
                            <div className="min-w-0 flex-1">
                              <span className="text-[13.5px] font-bold text-[#0D1117] group-hover:text-[#00A663] transition-colors">
                                {item.title}
                              </span>
                              <p className="text-[11.5px] text-gray-500 leading-snug mt-0.5">{item.desc}</p>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* --- 3. CONTENT HUB DROPDOWN --- */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('content')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() => setActiveDropdown(activeDropdown === 'content' ? null : 'content')}
                  aria-expanded={activeDropdown === 'content'}
                  className={`flex items-center gap-1.5 text-[14.5px] font-medium transition-colors py-2 cursor-pointer ${
                    activeDropdown === 'content' ? 'text-[#00A663]' : 'text-[#0D1117] hover:text-[#00A663]'
                  }`}
                >
                  <span>Content Hub</span>
                  <ChevronDown
                    size={14}
                    strokeWidth={2.2}
                    className={`text-gray-500 transition-transform duration-200 ${
                      activeDropdown === 'content' ? 'rotate-180 text-[#00A663]' : ''
                    }`}
                  />
                </button>

                {activeDropdown === 'content' && (
                  <div className="absolute left-0 top-[calc(100%+2px)] z-50 w-84 origin-top-left rounded-2xl border border-black/[0.08] bg-white p-3 shadow-xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150">
                    <div className="space-y-1">
                      {CONTENT_ITEMS.map((item) => {
                        const Icon = item.icon
                        return (
                          <Link
                            key={item.title}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-gray-50 group"
                          >
                            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-700 group-hover:bg-[#E8F8F0] group-hover:text-[#00A663] transition-colors">
                              <Icon size={18} />
                            </div>
                            <div className="min-w-0 flex-1">
                              <span className="text-[13.5px] font-bold text-[#0D1117] group-hover:text-[#00A663] transition-colors">
                                {item.title}
                              </span>
                              <p className="text-[11.5px] text-gray-500 leading-snug mt-0.5">{item.desc}</p>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>

            </nav>
          </div>

          {/* ================= RIGHT GROUP: LANGUAGE + LOGIN + SIGN UP ================= */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* 1. Language Selector Pill Button */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                aria-expanded={langMenuOpen}
                className="flex items-center gap-1.5 sm:gap-2 rounded-xl border border-gray-200 bg-white px-2.5 sm:px-3.5 py-2 min-h-[44px] text-[13px] sm:text-[13.5px] font-semibold text-[#0D1117] hover:border-gray-300 hover:bg-gray-50/60 transition-all cursor-pointer shadow-2xs active:scale-98"
              >
                {/* Emerald Green Globe Icon matching screenshot */}
                <Globe size={16} strokeWidth={2.2} className="text-[#00A663]" />
                <span className="hidden sm:inline">{selectedLang}</span>
                <span className="sm:hidden">{selectedLang === 'English' ? 'EN' : 'AR'}</span>
                <ChevronDown
                  size={13}
                  strokeWidth={2.2}
                  className={`text-gray-400 transition-transform duration-200 ${
                    langMenuOpen ? 'rotate-180 text-[#00A663]' : ''
                  }`}
                />
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 top-[calc(100%+6px)] z-50 w-36 origin-top-right rounded-xl border border-black/[0.08] bg-white p-1.5 shadow-xl animate-in fade-in zoom-in-95 duration-150">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedLang('English')
                      setLangMenuOpen(false)
                    }}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${
                      selectedLang === 'English' ? 'bg-[#E8F8F0] text-[#00A663]' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span>English</span>
                    {selectedLang === 'English' && <Check size={13} />}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedLang('العربية')
                      setLangMenuOpen(false)
                    }}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${
                      selectedLang === 'العربية' ? 'bg-[#E8F8F0] text-[#00A663]' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span>العربية</span>
                    {selectedLang === 'العربية' && <Check size={13} />}
                  </button>
                </div>
              )}
            </div>

            {/* Authenticated User Profile Dropdown OR Login/Signup */}
            {isLoaded && isAuthenticated && user ? (
              <div className="flex items-center gap-2.5">
                <Link
                  href="/dashboard"
                  className="hidden md:inline-flex min-h-[44px] items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-3.5 py-2 text-[13px] font-semibold text-[#0D1117] hover:border-gray-300 hover:bg-gray-50 transition-all shadow-2xs active:scale-98"
                >
                  <span>Dashboard</span>
                </Link>
                <UserProfileDropdown user={user} />
              </div>
            ) : (
              <>
                {/* 2. Login Button */}
                <Link
                  href="/login"
                  className="hidden md:flex min-h-[44px] items-center justify-center rounded-xl border border-gray-200 bg-white px-4 sm:px-5 py-2 text-[13.5px] font-semibold text-[#0D1117] hover:border-gray-300 hover:bg-gray-50 transition-all shadow-2xs active:scale-98"
                >
                  Login
                </Link>

                {/* 3. Sign Up Button */}
                <Link
                  href="/signup"
                  className="hidden md:flex min-h-[44px] items-center justify-center rounded-xl bg-[#0D1117] px-4.5 sm:px-5 py-2 text-[13.5px] font-semibold text-white hover:bg-gray-900 transition-all shadow-xs active:scale-98"
                >
                  Sign up
                </Link>
              </>
            )}

            {/* Mobile Menu Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex size-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-gray-200 text-gray-700 lg:hidden hover:bg-gray-50 active:scale-95 ml-1 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

          </div>

        </div>

        {/* ================= MOBILE MENU DRAWER ================= */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-5 py-6 space-y-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            {/* Primary Mobile Links */}
            <div className="space-y-4">
              {/* Invest Accordion */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Invest</p>
                <div className="space-y-1 pl-1">
                  {INVEST_ITEMS.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between py-2 text-sm font-semibold text-gray-900 hover:text-[#00A663]"
                    >
                      <span>{item.title}</span>
                      {item.badge && (
                        <span className="rounded-full bg-[#00A663] px-2 py-0.5 text-[9px] font-bold text-white">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Benefits Accordion */}
              <div className="border-t border-gray-100 pt-3">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Benefits</p>
                <div className="space-y-1 pl-1">
                  {BENEFITS_ITEMS.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm font-semibold text-gray-900 hover:text-[#00A663]"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Content Hub Accordion */}
              <div className="border-t border-gray-100 pt-3">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Content Hub</p>
                <div className="space-y-1 pl-1">
                  {CONTENT_ITEMS.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm font-semibold text-gray-900 hover:text-[#00A663]"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile CTAs */}
            <div className="pt-2 border-t border-gray-100 flex flex-col gap-2.5">
              {isLoaded && isAuthenticated && user ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-3 rounded-2xl bg-gray-50 p-3.5 border border-gray-100">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#00A663] font-mono text-sm font-bold text-white shadow-xs">
                      {user.name ? user.name.slice(0, 2).toUpperCase() : 'YK'}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-bold text-gray-900">{user.name}</p>
                      <p className="truncate text-xs text-gray-500">{user.email}</p>
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#00A663] mt-0.5">
                        <ShieldCheck size={11} />
                        {user.investorType === 'institutional' ? 'Institutional' : 'Individual'} Investor
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/dashboard"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full min-h-[44px] flex items-center justify-center text-center py-2.5 rounded-xl bg-[#00A663] text-sm font-bold text-white hover:bg-[#008f55] transition-colors shadow-xs active:scale-[0.99]"
                  >
                    Portfolio / Dashboard
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false)
                      logout()
                    }}
                    className="w-full min-h-[44px] flex items-center justify-center text-center py-2 rounded-xl border border-red-200 text-xs font-bold text-red-600 hover:bg-red-50 transition-colors cursor-pointer active:scale-[0.99]"
                  >
                    Log out
                  </button>
                </div>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full min-h-[44px] flex items-center justify-center text-center py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-900 hover:bg-gray-50 active:scale-[0.99] transition-all"
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full min-h-[44px] flex items-center justify-center text-center py-2.5 rounded-xl bg-[#0D1117] text-sm font-semibold text-white hover:bg-gray-900 active:scale-[0.99] transition-all shadow-xs"
                  >
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </header>
    </div>
  )
}

export default Navbar

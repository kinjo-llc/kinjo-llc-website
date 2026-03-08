'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navLinks, navCta, siteConfig } from '@/content/site-config'
import MobileNav, { KinjoMark } from './mobile-nav'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-30',
          'transition-all duration-300',
          scrolled
            ? 'bg-background/92 backdrop-blur-md border-b border-border/50'
            : 'bg-background/60 backdrop-blur-sm border-b border-transparent'
        )}
      >
        {/* Nav height = 80px (h-20) */}
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-10 h-20 flex items-center justify-between">

          {/* ── Logo ─────────────────────────────────────────────────── */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
            aria-label={`${siteConfig.name} — home`}
          >
            <KinjoMark />
            <span className="text-[0.95rem] leading-none font-bold tracking-widest text-foreground group-hover:text-foreground transition-colors">
              KINJO
            </span>
          </Link>

          {/* ── Desktop nav links ─────────────────────────────────────── */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative text-sm font-medium transition-colors duration-200',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-0.5 py-1',
                    isActive ? 'text-foreground' : 'text-muted hover:text-foreground'
                  )}
                >
                  {link.label}
                  {/* Active underline indicator */}
                  <span
                    className={cn(
                      'absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full transition-all duration-200',
                      isActive ? 'bg-accent opacity-100' : 'opacity-0 bg-accent'
                    )}
                    aria-hidden="true"
                  />
                </Link>
              )
            })}
          </nav>

          {/* ── Right-side actions ────────────────────────────────────── */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <Link
              href={navCta.href}
              className={cn(
                'hidden md:inline-flex items-center justify-center',
                'bg-accent text-[#03131A] font-semibold rounded-full px-5 py-2.5 text-sm',
                'transition-all duration-200',
                'hover:bg-accent-light hover:-translate-y-px hover:shadow-btn-accent',
                'active:translate-y-0 active:bg-accent-dark',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background'
              )}
            >
              {navCta.label}
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setDrawerOpen(true)}
              className={cn(
                'md:hidden p-2 rounded-md',
                'text-muted hover:text-foreground transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent'
              )}
              aria-label="Open navigation menu"
              aria-expanded={drawerOpen}
              aria-controls="mobile-nav-drawer"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile navigation drawer */}
      <MobileNav
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        pathname={pathname}
      />
    </>
  )
}

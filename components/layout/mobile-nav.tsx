'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { navLinks, navCta, siteConfig } from '@/content/site-config'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  pathname: string
}

export default function MobileNav({ isOpen, onClose, pathname }: MobileNavProps) {
  // Lock body scroll while drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ── Backdrop ───────────────────────────────────────────────── */}
          <motion.div
            key="mobile-nav-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background/70 backdrop-blur-sm z-40"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* ── Drawer ─────────────────────────────────────────────────── */}
          <motion.div
            key="mobile-nav-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280, mass: 0.9 }}
            className="fixed right-0 top-0 bottom-0 w-72 bg-surface border-l border-border z-50 flex flex-col"
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <Link
                href="/"
                onClick={onClose}
                className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                aria-label={`${siteConfig.name} — home`}
              >
                <KinjoMark />
                <span className="text-[0.95rem] font-bold tracking-widest text-foreground">
                  KINJO
                </span>
              </Link>

              <button
                onClick={onClose}
                className="p-2 text-muted hover:text-foreground transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Close navigation menu"
              >
                <X size={18} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 flex flex-col gap-1 px-4 py-5" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    'px-4 py-3 rounded-md text-sm font-medium transition-colors',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                    pathname === link.href
                      ? 'text-foreground bg-primary'
                      : 'text-muted hover:text-foreground hover:bg-primary/60'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="px-6 py-5 border-t border-border">
              <Link
                href={navCta.href}
                onClick={onClose}
                className={cn(
                  'flex items-center justify-center w-full rounded-full py-3 text-sm font-semibold',
                  'bg-accent text-[#03131A] transition-all',
                  'hover:bg-accent-light',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface'
                )}
              >
                {navCta.label}
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// ─── Shared emblem mark (used in Navbar, MobileNav, and Footer) ──────────────
export function KinjoMark({ size = 36 }: { size?: number }) {
  return (
    <Image
      src="/kinjo-emblem.png"
      alt="Kinjo LLC emblem showing Shuri Castle and Akagi trees representing leadership, resilience, and mission."
      width={size}
      height={size}
      className="shrink-0 object-contain"
    />
  )
}

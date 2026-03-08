import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/ui/container'
import { navLinks, siteConfig } from '@/content/site-config'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border/40">
      <Container>
        {/* ── Main columns ───────────────────────────────────────────── */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-8">

          {/* Brand — emblem stacked above name and blurb */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link
              href="/"
              className="inline-flex flex-col items-start gap-3 mb-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
              aria-label={`${siteConfig.name} — home`}
            >
              <Image
                src="/kinjo-emblem.png"
                alt="Kinjo LLC emblem showing Shuri Castle and Akagi trees representing leadership, resilience, and mission."
                width={56}
                height={56}
                className="object-contain opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <span className="text-[0.95rem] font-bold tracking-widest text-foreground">
                KINJO
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed max-w-[280px]">
              {siteConfig.footerBlurb}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-caption font-mono tracking-caption uppercase text-muted mb-4">
              Navigation
            </p>
            <nav
              className="flex flex-col gap-2.5"
              aria-label="Footer navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted hover:text-foreground transition-colors w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-caption font-mono tracking-caption uppercase text-muted mb-4">
              Contact
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-muted hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
            >
              {siteConfig.email}
            </a>
            <p className="text-sm text-muted mt-3 leading-relaxed">
              Response within 1–2 business days
            </p>
          </div>
        </div>

        {/* ── Bottom bar ─────────────────────────────────────────────── */}
        <div className="py-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-muted">
            © {year} Kinjo LLC. All rights reserved.
          </p>
          <p className="text-sm text-muted">
            {siteConfig.tagline}
          </p>
        </div>
      </Container>
    </footer>
  )
}

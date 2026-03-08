import { CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Section from '@/components/ui/section'
import Container from '@/components/ui/container'
import AnimateIn from '@/components/ui/animate-in'
import { AnimateStagger, AnimateItem } from '@/components/ui/animate-in'
import { founderTeaserContent } from '@/content/pages'

export default function FounderTeaser() {
  return (
    <Section className="bg-surface">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: copy ──────────────────────────────────────────────────── */}
          <AnimateIn direction="left">
            <p className="text-caption font-mono tracking-caption uppercase text-accent mb-4">
              {founderTeaserContent.eyebrow}
            </p>
            <h2 className="text-h2 font-bold text-foreground tracking-h2 text-balance mb-5">
              {founderTeaserContent.headline}
            </h2>
            <p className="text-body-lg text-muted leading-relaxed mb-8">
              {founderTeaserContent.body}
            </p>
            <Link
              href={founderTeaserContent.ctaLink.href}
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors group"
            >
              {founderTeaserContent.ctaLink.label}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </AnimateIn>

          {/* ── Right: credentials card ──────────────────────────────────────── */}
          <AnimateIn delay={0.12}>
            <div className="card-glass rounded-lg p-8">
              <p className="text-caption font-mono tracking-caption uppercase text-accent/70 mb-6">
                Founder Background
              </p>
              <AnimateStagger className="flex flex-col gap-4">
                {founderTeaserContent.points.map((point) => (
                  <AnimateItem key={point}>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                      <p className="text-sm text-foreground/90 leading-snug">{point}</p>
                    </div>
                  </AnimateItem>
                ))}
              </AnimateStagger>

              {/* Subtle divider */}
              <div className="mt-8 pt-6 border-t border-border/40">
                <p className="text-xs text-muted/60 leading-relaxed">
                  Kinjo LLC is a founder-operated organization — the founder's expertise is at the core of every engagement.
                </p>
              </div>
            </div>
          </AnimateIn>

        </div>
      </Container>
    </Section>
  )
}

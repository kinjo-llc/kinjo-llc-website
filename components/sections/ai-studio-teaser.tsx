import { CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Section from '@/components/ui/section'
import Container from '@/components/ui/container'
import AnimateIn from '@/components/ui/animate-in'
import { AnimateStagger, AnimateItem } from '@/components/ui/animate-in'
import { aiStudioTeaserContent } from '@/content/pages'

export default function AiStudioTeaser() {
  return (
    <Section className="bg-surface">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: copy ──────────────────────────────────────────────────── */}
          <AnimateIn direction="left">
            <p className="text-caption font-mono tracking-caption uppercase text-accent mb-4">
              {aiStudioTeaserContent.eyebrow}
            </p>
            <h2 className="text-h2 font-bold text-foreground tracking-h2 text-balance mb-5">
              {aiStudioTeaserContent.headline}
            </h2>
            <p className="text-body-lg text-muted leading-relaxed mb-8">
              {aiStudioTeaserContent.body}
            </p>
            <Link
              href={aiStudioTeaserContent.ctaLink.href}
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors group"
            >
              {aiStudioTeaserContent.ctaLink.label}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </AnimateIn>

          {/* ── Right: points list ──────────────────────────────────────────── */}
          <AnimateIn delay={0.12}>
            <div className="card-glass rounded-lg p-8">
              <p className="text-caption font-mono tracking-caption uppercase text-accent/70 mb-6">
                Studio Model
              </p>
              <AnimateStagger className="flex flex-col gap-4">
                {aiStudioTeaserContent.points.map((point) => (
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
                  Human leadership retains final authority and accountability over all AI-assisted outputs.
                </p>
              </div>
            </div>
          </AnimateIn>

        </div>
      </Container>
    </Section>
  )
}

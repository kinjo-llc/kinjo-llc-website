import Container from '@/components/ui/container'
import Button from '@/components/ui/button'
import AnimateIn from '@/components/ui/animate-in'
import { finalCtaContent } from '@/content/pages'

export default function FinalCta() {
  return (
    <section className="relative bg-hero-glow border-t border-border/40 overflow-hidden">
      {/* Soft central glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at 50% 60%, rgba(201,168,76,0.06) 0%, transparent 65%)',
        }}
      />

      <Container className="relative z-10 py-20 md:py-28">
        <AnimateIn className="max-w-2xl mx-auto text-center">
          <h2 className="text-h2 font-bold text-foreground tracking-h2 text-balance mb-4">
            {finalCtaContent.headline}
          </h2>
          <p className="text-body-lg text-muted leading-relaxed mb-10">
            {finalCtaContent.body}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href={finalCtaContent.primaryButton.href} size="lg">
              {finalCtaContent.primaryButton.label}
            </Button>
            <Button href={finalCtaContent.secondaryButton.href} variant="secondary" size="lg">
              {finalCtaContent.secondaryButton.label}
            </Button>
          </div>
        </AnimateIn>
      </Container>
    </section>
  )
}

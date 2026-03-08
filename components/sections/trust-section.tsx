import { Shield, Target, Globe, Cpu } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Section from '@/components/ui/section'
import Container from '@/components/ui/container'
import AnimateIn from '@/components/ui/animate-in'
import { AnimateStagger, AnimateItem } from '@/components/ui/animate-in'
import { trustContent } from '@/content/pages'

const iconMap: Record<string, LucideIcon> = { Shield, Target, Globe, Cpu }

export default function TrustSection() {
  return (
    <Section className="bg-background">
      <Container>
        <AnimateIn className="mb-10">
          <p className="text-caption font-mono tracking-caption uppercase text-accent/80 mb-3">
            How Kinjo Operates
          </p>
          <h2 className="text-h2 font-bold text-foreground tracking-h2">
            {trustContent.headline}
          </h2>
        </AnimateIn>

        <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {trustContent.items.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <AnimateItem key={item.title}>
                <div className="flex items-start gap-4 p-6 rounded-lg border border-border/70 bg-surface/50 hover:border-border transition-colors duration-200 h-full">
                  {Icon && (
                    <div className="w-9 h-9 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-accent" aria-hidden="true" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              </AnimateItem>
            )
          })}
        </AnimateStagger>
      </Container>
    </Section>
  )
}

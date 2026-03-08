import Section from '@/components/ui/section'
import Container from '@/components/ui/container'
import { whyKinjoContent } from '@/content/pages'

export default function WhyKinjo() {
  return (
    <Section className="bg-background">
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="text-h2 font-bold text-foreground tracking-h2 text-balance mb-4">
            {whyKinjoContent.headline}
          </h2>
          <p className="text-body-lg text-muted leading-relaxed">
            {whyKinjoContent.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whyKinjoContent.items.map((item, i) => (
            <div
              key={item.title}
              className="relative p-6 rounded-lg border border-border bg-surface/60"
            >
              <span className="block text-caption font-mono tracking-caption uppercase text-accent/60 mb-3">
                0{i + 1}
              </span>
              <h3 className="text-h5 font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

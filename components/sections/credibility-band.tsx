import Container from '@/components/ui/container'

const items = [
  'Veteran-Led',
  '20+ Years Experience',
  'SIGINT & Language',
  'Mission-Oriented Technology',
  'U.S.–Japan Operations',
]

export default function CredibilityBand() {
  return (
    <div
      className="w-full border-y border-border/40 bg-surface/60"
      aria-label="Company credentials"
    >
      <Container className="py-0">
        <div className="flex flex-wrap items-center justify-center gap-0 divide-x divide-border/40 overflow-hidden">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 px-6 py-4 text-xs font-mono tracking-widest uppercase text-muted/70 whitespace-nowrap"
            >
              <span
                className="w-1 h-1 rounded-full bg-accent/50 shrink-0"
                aria-hidden="true"
              />
              {item}
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

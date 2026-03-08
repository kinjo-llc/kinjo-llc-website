// Purely decorative CSS/SVG composition — no JS, no images.
// Renders layered glass cards over a grid-line background with cyan glow accents.

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-[480px] aspect-square select-none" aria-hidden="true">

      {/* ── Base: grid background + glow ───────────────────────────────────── */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden bg-surface border border-border/60">
        {/* Dot/grid lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.08]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="hero-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#94A3B8" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>

        {/* Radial glow — top-right */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 70% 30%, rgba(201,168,76,0.10) 0%, transparent 65%)',
          }}
        />
        {/* Radial glow — bottom-left */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 20% 80%, rgba(201,168,76,0.06) 0%, transparent 55%)',
          }}
        />
      </div>

      {/* ── Card 1 — back layer ──────────────────────────────────────────────── */}
      <div
        className="card-glass absolute rounded-lg p-4 w-52"
        style={{ bottom: '14%', right: '6%', transform: 'rotate(-2.5deg)' }}
      >
        <div className="flex gap-1.5 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-error/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-warning/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-success/60" />
        </div>
        <p className="text-[10px] font-mono text-muted mb-2.5 tracking-wide">
          analysis.pipeline
        </p>
        <div className="space-y-1.5">
          <div className="h-1.5 rounded-full bg-accent/25 w-full" />
          <div className="h-1.5 rounded-full bg-accent/15 w-4/5" />
          <div className="h-1.5 rounded-full bg-white/8 w-3/5" />
        </div>
      </div>

      {/* ── Card 2 — mid layer ───────────────────────────────────────────────── */}
      <div
        className="card-glass absolute rounded-lg p-4 w-56"
        style={{
          top: '34%',
          left: '50%',
          transform: 'translateX(-48%) rotate(1.5deg)',
        }}
      >
        <div className="flex gap-1.5 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-error/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-warning/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-success/60" />
        </div>
        <p className="text-[10px] font-mono text-accent mb-2.5 tracking-wide">
          intel.workflow → active
        </p>
        <div className="space-y-1.5">
          <div className="h-1.5 rounded-full bg-accent/35 w-full" />
          <div className="h-1.5 rounded-full bg-accent/20 w-3/4" />
        </div>
      </div>

      {/* ── Card 3 — foreground ──────────────────────────────────────────────── */}
      <div
        className="card-glass absolute rounded-lg p-5 w-52"
        style={{ top: '7%', left: '8%' }}
      >
        <div className="flex gap-1.5 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-error/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-warning/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-success/60" />
        </div>
        <p className="text-[10px] font-mono text-muted mb-1 tracking-wide">system.status</p>
        <p className="text-[10px] font-mono text-accent mb-3.5 tracking-wide">↳ operational</p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse shrink-0" />
          <p className="text-[10px] font-mono text-muted">4 agents active</p>
        </div>
      </div>

      {/* ── Soft cyan bloom ─────────────────────────────────────────────────── */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 140,
          height: 140,
          bottom: '18%',
          left: '12%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.10) 0%, transparent 70%)',
          filter: 'blur(10px)',
        }}
      />
    </div>
  )
}

import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

// Node runtime lets us read the emblem from the filesystem
export const runtime = 'nodejs'
export const alt = 'Kinjo LLC — Veteran-Led Mission Support, Language Expertise, and Technology.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  // Read emblem and encode as base64 data URI
  const emblemBuffer = readFileSync(join(process.cwd(), 'public', 'kinjo-emblem.png'))
  const emblemSrc = `data:image/png;base64,${emblemBuffer.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '80px 96px',
          background: '#020617',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Grid lines overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Emblem — right side, large, low opacity */}
        <img
          src={emblemSrc}
          style={{
            position: 'absolute',
            right: 60,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 340,
            height: 340,
            opacity: 0.13,
          }}
        />

        {/* Bottom-right glow */}
        <div
          style={{
            position: 'absolute',
            bottom: '-120px',
            right: '-80px',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,168,76,0.10) 0%, transparent 70%)',
          }}
        />

        {/* Top-left subtle glow */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '-80px',
            width: '480px',
            height: '480px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
          }}
        />

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0', position: 'relative', maxWidth: '740px' }}>
          {/* Eyebrow */}
          <div
            style={{
              color: '#C9A84C',
              fontSize: '16px',
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              marginBottom: '28px',
              fontFamily: 'sans-serif',
            }}
          >
            KINJO
          </div>

          {/* Headline */}
          <div
            style={{
              color: '#E5EEF7',
              fontSize: '64px',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginBottom: '32px',
              fontFamily: 'sans-serif',
            }}
          >
            Veteran-Led Mission Support, Language Expertise, and Technology
          </div>

          {/* Description */}
          <div
            style={{
              color: '#94A3B8',
              fontSize: '20px',
              lineHeight: 1.5,
              fontFamily: 'sans-serif',
            }}
          >
            U.S.–Japan Operations · SIGINT & Language · AI Development
          </div>
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #A8842A 0%, #C9A84C 100%)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}

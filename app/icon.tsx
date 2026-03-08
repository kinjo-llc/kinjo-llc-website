import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#020617',
          borderRadius: 6,
          border: '1.5px solid rgba(6,182,212,0.35)',
        }}
      >
        <span
          style={{
            color: '#06B6D4',
            fontSize: 20,
            fontWeight: 800,
            fontFamily: 'sans-serif',
            lineHeight: 1,
            letterSpacing: '-0.03em',
          }}
        >
          K
        </span>
      </div>
    ),
    { ...size }
  )
}

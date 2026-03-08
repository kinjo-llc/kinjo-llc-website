import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import '../styles/globals.css'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'KINJO | Veteran-Led Mission Support, Language Expertise, and Technology',
    template: '%s | KINJO',
  },
  description:
    'Kinjo LLC is a veteran-led consulting and technology firm specializing in U.S.–Japan operational support, language and SIGINT expertise, mission advisory, and AI-enabled software development.',
  metadataBase: new URL('https://kinjollc.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kinjollc.com',
    siteName: 'Kinjo LLC',
    title: 'Kinjo LLC | Veteran-Led Mission Support and Technology',
    description:
      'Kinjo LLC delivers veteran-led mission support, language and SIGINT expertise, U.S.–Japan operational coordination, and AI-enabled technology development for government and commercial organizations.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Kinjo LLC — Veteran-Led Mission Support, Language Expertise, and Technology.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kinjo LLC | Veteran-Led Mission Support and Technology',
    description:
      'Kinjo LLC delivers veteran-led mission support, language and SIGINT expertise, U.S.–Japan operational coordination, and AI-enabled technology development.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-background text-foreground font-sans antialiased">
        {/* Skip-to-content link for keyboard/screen-reader users */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        {/* pt-20 offsets the fixed 80px navbar */}
        <div id="main-content" className="pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}

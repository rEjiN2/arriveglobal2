import type { Metadata } from 'next'
import {
  Space_Grotesk,
  Hanken_Grotesk,
  Barlow_Condensed,
  JetBrains_Mono,
} from 'next/font/google'
import { Header, Footer, SmoothScroll } from '@/components/layout'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton/WhatsAppButton'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-space',
  display: 'swap',
})

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-hanken',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-barlow',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Arrives Global — Private Chauffeur Service',
    template: '%s | Arrives Global',
  },
  description:
    'Fixed fares, flight-tracked pickups, and a driver already there when you land. Private chauffeur service across 18 cities worldwide.',
  keywords: ['chauffeur', 'private car service', 'airport transfer', 'luxury transport'],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Arrives Global',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${hankenGrotesk.variable} ${barlowCondensed.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <SmoothScroll />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}

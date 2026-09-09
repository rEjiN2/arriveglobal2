import type { Metadata } from 'next'
import {
  Space_Grotesk,
  Hanken_Grotesk,
  Barlow_Condensed,
  JetBrains_Mono,
  Playfair_Display,
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

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Arrives Global — Beyond Transit · Elite Excursion',
    template: '%s | Arrives Global',
  },
  description:
    'Luxury chauffeur services worldwide, spanning more than 400 destinations across six continents — VIP meet-and-greet, a curated fleet, and 24/7 concierge support.',
  keywords: ['chauffeur', 'VVIP travel', 'airport transfer', 'luxury transport', 'meet and greet'],
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
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${hankenGrotesk.variable} ${barlowCondensed.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable}`}
    >
      <head>
        {/* Apply a saved ivory-theme preference before hydration, so returning
            visitors on non-home pages don't see a flash of the dark theme. */}
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `try {
              if (localStorage.getItem('ag-ivory-theme') === '1' && location.pathname !== '/') {
                document.documentElement.setAttribute('data-theme', 'ivory');
              }
            } catch (e) {}`,
          }}
        />
      </head>
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

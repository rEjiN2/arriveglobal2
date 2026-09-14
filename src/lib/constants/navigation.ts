import type { NavigationItem } from '@/lib/types'

export const NAV_ITEMS: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Airport Transfers', href: '/services#airport' },
      { label: 'Disposal Services', href: '/services#disposal' },
      { label: 'Point to Point Transfers', href: '/services#point-to-point' },
      { label: 'Meet and Assist Airport', href: '/services#meet-and-assist' },
    ],
  },
  { label: 'Fleet', href: '/selection' },
  { label: 'Contact Us', href: '/contact' },
]

import type { ServiceItem } from '@/lib/types'

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    slug: 'airport-transfers',
    title: 'Airport transfers',
    description: 'Flight-tracked pickups with wait time built in.',
    tag: 'Most booked',
    featured: true,
    image:
      'https://images.pexels.com/photos/18346530/pexels-photo-18346530.jpeg?auto=compress&cs=tinysrgb&w=300',
    imageAlt: 'Airport transfers',
  },
  {
    id: 2,
    slug: 'hourly-hire',
    title: 'Hourly hire',
    description: 'A driver on standby for meetings or a full day of stops.',
    tag: '2–24 hrs',
    image:
      'https://images.pexels.com/photos/8052210/pexels-photo-8052210.jpeg?auto=compress&cs=tinysrgb&w=300',
    imageAlt: 'Hourly hire',
  },
  {
    id: 3,
    slug: 'city-to-city',
    title: 'City to city',
    description: 'Door-to-door transfers between towns, no terminal.',
    tag: 'Fixed fare',
    image:
      'https://images.pexels.com/photos/16705973/pexels-photo-16705973.jpeg?auto=compress&cs=tinysrgb&w=300',
    imageAlt: 'City to city transfers',
  },
  {
    id: 4,
    slug: 'corporate-accounts',
    title: 'Corporate accounts',
    description: 'One invoice, one standard, for your whole team.',
    tag: 'Business',
    image:
      'https://images.pexels.com/photos/8052216/pexels-photo-8052216.jpeg?auto=compress&cs=tinysrgb&w=300',
    imageAlt: 'Corporate accounts',
  },
]

import type { ServiceItem } from '@/lib/types'

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    slug: 'airport-transfers',
    title: 'Transfers To & From Airport',
    description:
      'Our professional service ensures a stress-free journey to the airport or to your preferred destination.',
    tag: 'Airport',
    featured: true,
    image:
      'https://images.pexels.com/photos/18346530/pexels-photo-18346530.jpeg?auto=compress&cs=tinysrgb&w=300',
    imageAlt: 'Airport transfers',
  },
  {
    id: 2,
    slug: 'personal-family-gateway',
    title: 'Personal & Family Gateway',
    description:
      'At-your-disposal services for family getaways or business trips, delivering a comfortable, unforgettable experience.',
    tag: 'Personal & Family',
    image:
      'https://images.pexels.com/photos/8052210/pexels-photo-8052210.jpeg?auto=compress&cs=tinysrgb&w=300',
    imageAlt: 'Personal and family gateway service',
  },
  {
    id: 3,
    slug: 'point-to-point-transfers',
    title: 'Point to Point Transfers',
    description:
      'Travel safely and comfortably from one destination to another, with a chauffeur dedicated to your itinerary.',
    tag: 'Point to Point',
    image:
      'https://images.pexels.com/photos/16705973/pexels-photo-16705973.jpeg?auto=compress&cs=tinysrgb&w=300',
    imageAlt: 'Point to point transfers',
  },
  {
    id: 4,
    slug: 'arrival-meet-assist',
    title: 'Arrival Meet & Assist Services',
    description:
      'A dedicated agent meets you at the gate with a personalized name-board and escorts you through to your vehicle.',
    tag: 'Arrival',
    image: '/image9.jpeg',
    imageAlt: 'Arrival meet and assist services',
  },
  {
    id: 5,
    slug: 'departure-meet-assist',
    title: 'Departure Meet & Assist Services',
    description:
      'A representative meets you at the terminal and guides you through check-in, security, and to the gate.',
    tag: 'Departure',
    image: '/image12.jpeg',
    imageAlt: 'Departure meet and assist services',
  },
]

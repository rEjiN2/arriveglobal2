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
    slug: 'meet-and-greet',
    title: 'Meet & Greet Services',
    description:
      'Let us take care of your airport arrival and departure, for a seamless, hassle-free journey every time.',
    tag: 'Meet & Greet',
    image:
      'https://images.pexels.com/photos/8052216/pexels-photo-8052216.jpeg?auto=compress&cs=tinysrgb&w=300',
    imageAlt: 'Meet and greet services',
  },
]

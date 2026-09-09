import type { ServiceItem } from '@/lib/types'

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    slug: 'airport-transfers',
    title: 'Transfers To & From Airport',
    description:
      'Our professional chauffeurs ensure an effortless and refined journey to the airport, where every detail is handled with the utmost care. Book your transfer today and travel in exceptional comfort, confidence, and complete peace of mind.',
    tag: 'Airport',
    featured: true,
    image:
      'https://images.pexels.com/photos/18346530/pexels-photo-18346530.jpeg?auto=compress&cs=tinysrgb&w=300',
    imageAlt: 'Airport transfers',
  },
  {
    id: 2,
    slug: 'disposal-services',
    title: 'Chauffeur Disposal Services',
    description:
      'Enjoy the ultimate flexibility with our Half-Day and Full-Day Disposal Services, designed for both business and personal travel. Your professional chauffeur and premium vehicle remain at your disposal, providing seamless transportation for meetings, appointments, events, shopping, sightseeing, or a personalised itinerary. Travel on your schedule with exceptional comfort, privacy, and convenience wherever your day takes you.',
    tag: 'Disposal',
    image:
      'https://images.pexels.com/photos/8052210/pexels-photo-8052210.jpeg?auto=compress&cs=tinysrgb&w=300',
    imageAlt: 'Personal and family gateway service',
  },
  {
    id: 3,
    slug: 'point-to-point-transfers',
    title: 'Point to Point Transfers',
    description:
      'Experience a journey defined by elegance, comfort, and discretion with our premium point-to-point transfers. From the moment you depart to your final destination, our professional multilingual chauffeurs deliver a seamless travel experience tailored to the highest standards of luxury and service.',
    tag: 'Point to Point',
    image: '/banner4.jpg',
    imageAlt: 'Chauffeur with a car, point to point transfers',
  },
  {
    id: 4,
    slug: 'airport-meet-assist',
    title: 'Airport Meet and Assist Services',
    description:
      'Experience a seamless airport journey with our dedicated Meet and Greet service. From the moment you step off the aircraft whether on the tarmac or at the aerobridge, your personal airport escort will be by your side, providing discreet, personalized assistance and guiding you effortlessly through every stage of your arrival or departure.',
    tag: 'Meet & Assist',
    image: '/image3.jpeg',
    imageAlt: 'Airport meet and assist services',
  },
]

import type { VehicleCard } from '@/lib/types'

export const VEHICLES: VehicleCard[] = [
  {
    id: 1,
    slug: 'standard-cars',
    name: 'Standard Cars',
    category: 'Business Class · Executive Sedan · First Class Sedan',
    description: 'Discreet, comfortable saloons for daily transfers and business travel.',
    image: '/fleet/standard-sedan.png',
    featured: true,
    themeColor: '42 55% 32%',
  },
  {
    id: 2,
    slug: 'suv',
    name: 'SUV',
    category: 'Premium SUV · Luxury SUV · Full-Size Luxury SUV',
    description: 'Commanding presence and space, suited to executive and family travel alike.',
    image: '/fleet/suv.png',
    themeColor: '212 42% 28%',
  },
  {
    id: 3,
    slug: 'mpv',
    name: 'MPV',
    category: 'Business MPV · Luxury MPV',
    description: 'Generous cabin comfort for small groups travelling together in style.',
    image: '/fleet/standard-mpv.png',
    themeColor: '350 40% 28%',
  },
  {
    id: 4,
    slug: 'mini-vans',
    name: 'Mini Vans',
    category: 'Standard Mini Van · VIP Mini Van',
    description: 'Flexible, well-appointed transport for groups of up to seven.',
    image: '/fleet/luxury-mini-van.png',
    themeColor: '155 38% 24%',
  },
]

import type { City } from '@/lib/types'

export const CITIES: City[] = [
  // Middle East
  { name: 'Dubai', code: 'UAE', region: 'Middle East' },
  { name: 'Abu Dhabi', code: 'UAE', region: 'Middle East' },
  { name: 'Sharjah', code: 'HQ', region: 'Middle East', isHQ: true },
  { name: 'Doha', code: 'QAT', region: 'Middle East' },
  { name: 'Riyadh', code: 'KSA', region: 'Middle East' },
  { name: 'Jeddah', code: 'KSA', region: 'Middle East' },
  { name: 'Kuwait City', code: 'KWT', region: 'Middle East' },
  { name: 'Manama', code: 'BHR', region: 'Middle East' },
  { name: 'Muscat', code: 'OMN', region: 'Middle East' },
  { name: 'Beirut', code: 'LBN', region: 'Middle East' },
  { name: 'Amman', code: 'JOR', region: 'Middle East' },

  // Europe
  { name: 'London', code: 'UK', region: 'Europe' },
  { name: 'Paris', code: 'FR', region: 'Europe' },
  { name: 'Rome', code: 'IT', region: 'Europe' },
  { name: 'Milan', code: 'IT', region: 'Europe' },
  { name: 'Geneva', code: 'CH', region: 'Europe' },
  { name: 'Zurich', code: 'CH', region: 'Europe' },
  { name: 'Monaco', code: 'MC', region: 'Europe' },
  { name: 'Madrid', code: 'ES', region: 'Europe' },
  { name: 'Barcelona', code: 'ES', region: 'Europe' },
  { name: 'Vienna', code: 'AT', region: 'Europe' },
  { name: 'Frankfurt', code: 'DE', region: 'Europe' },
  { name: 'Munich', code: 'DE', region: 'Europe' },
  { name: 'Amsterdam', code: 'NL', region: 'Europe' },
  { name: 'Istanbul', code: 'TR', region: 'Europe' },

  // Asia Pacific
  { name: 'Singapore', code: 'SG', region: 'Asia Pacific' },
  { name: 'Hong Kong', code: 'HK', region: 'Asia Pacific' },
  { name: 'Tokyo', code: 'JP', region: 'Asia Pacific' },
  { name: 'Shanghai', code: 'CN', region: 'Asia Pacific' },
  { name: 'Beijing', code: 'CN', region: 'Asia Pacific' },
  { name: 'Bangkok', code: 'TH', region: 'Asia Pacific' },
  { name: 'Kuala Lumpur', code: 'MY', region: 'Asia Pacific' },
  { name: 'Seoul', code: 'KR', region: 'Asia Pacific' },
  { name: 'Mumbai', code: 'IN', region: 'Asia Pacific' },
  { name: 'New Delhi', code: 'IN', region: 'Asia Pacific' },
  { name: 'Jakarta', code: 'ID', region: 'Asia Pacific' },
  { name: 'Manila', code: 'PH', region: 'Asia Pacific' },

  // Americas
  { name: 'New York', code: 'US', region: 'Americas' },
  { name: 'Los Angeles', code: 'US', region: 'Americas' },
  { name: 'Miami', code: 'US', region: 'Americas' },
  { name: 'Chicago', code: 'US', region: 'Americas' },
  { name: 'Toronto', code: 'CA', region: 'Americas' },
  { name: 'Vancouver', code: 'CA', region: 'Americas' },
  { name: 'Mexico City', code: 'MX', region: 'Americas' },
  { name: 'São Paulo', code: 'BR', region: 'Americas' },
  { name: 'Buenos Aires', code: 'AR', region: 'Americas' },

  // Africa & Oceania
  { name: 'Cairo', code: 'EG', region: 'Africa & Oceania' },
  { name: 'Casablanca', code: 'MA', region: 'Africa & Oceania' },
  { name: 'Johannesburg', code: 'ZA', region: 'Africa & Oceania' },
  { name: 'Cape Town', code: 'ZA', region: 'Africa & Oceania' },
  { name: 'Nairobi', code: 'KE', region: 'Africa & Oceania' },
  { name: 'Lagos', code: 'NG', region: 'Africa & Oceania' },
  { name: 'Sydney', code: 'AU', region: 'Africa & Oceania' },
  { name: 'Melbourne', code: 'AU', region: 'Africa & Oceania' },
  { name: 'Auckland', code: 'NZ', region: 'Africa & Oceania' },
]

export const CITY_REGIONS = ['Middle East', 'Europe', 'Asia Pacific', 'Americas', 'Africa & Oceania'] as const

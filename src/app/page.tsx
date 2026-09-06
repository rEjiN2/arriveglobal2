import type { Metadata } from 'next'
import {
  ParallaxIntro,
  CityStrip,
  ServiceDirectory,
  MostBooked,
  WorldCoverage,
  PromoSplit,
  QuoteBand,
  Newsletter,
} from '@/components/sections'

export const metadata: Metadata = {
  title: 'Arrives Global — Beyond Transit · Elite Excursion',
  description:
    'Luxury chauffeur services worldwide, spanning more than 400 destinations across six continents — VIP meet-and-greet, a curated fleet, and 24/7 concierge support.',
}

export default function HomePage() {
  return (
    <>
      <ParallaxIntro />
      <CityStrip />
      <ServiceDirectory />
      <MostBooked />
      <WorldCoverage />
      <PromoSplit />
      <QuoteBand
        quote="Beyond Transit. Elite Excursion. This is more than our tagline — it is our approach to every journey we deliver."
        attribution="Arrives Global"
      />
      <Newsletter />
    </>
  )
}

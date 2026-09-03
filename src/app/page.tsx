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
  title: 'Arrives Global — Private Chauffeur Service',
  description:
    'Fixed fares, flight-tracked pickups, and a driver already there when you land. Nothing left to guesswork.',
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
        quote="The car was outside before I'd even collected my bags. That's the whole pitch, really."
        attribution="Regular client, corporate account"
      />
      <Newsletter />
    </>
  )
}

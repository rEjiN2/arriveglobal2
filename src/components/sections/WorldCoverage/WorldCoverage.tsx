'use client'

import dynamic from 'next/dynamic'
import { CITIES } from '@/lib/constants/cities'
import styles from './WorldCoverage.module.css'

const WorldMap = dynamic(() => import('./WorldMap').then((m) => m.WorldMap), {
  ssr: false,
  loading: () => <div className={styles.mapLoading} />,
})

// Approximate coordinates for every city in CITIES — keyed by name so a
// missing entry fails loudly (via the non-null assertion below) rather than
// silently dropping a city from the map.
const COORDS: Record<string, { lat: number; lng: number }> = {
  // Middle East
  Dubai: { lat: 25.2, lng: 55.27 },
  'Abu Dhabi': { lat: 24.45, lng: 54.38 },
  UAE: { lat: 25.35, lng: 55.42 },
  Doha: { lat: 25.29, lng: 51.53 },
  Riyadh: { lat: 24.71, lng: 46.68 },
  Jeddah: { lat: 21.54, lng: 39.17 },
  'Kuwait City': { lat: 29.38, lng: 47.99 },
  Manama: { lat: 26.23, lng: 50.59 },
  Muscat: { lat: 23.59, lng: 58.38 },
  Beirut: { lat: 33.89, lng: 35.5 },
  Amman: { lat: 31.95, lng: 35.93 },

  // Europe
  London: { lat: 51.51, lng: -0.13 },
  Paris: { lat: 48.86, lng: 2.35 },
  Rome: { lat: 41.9, lng: 12.5 },
  Milan: { lat: 45.46, lng: 9.19 },
  Geneva: { lat: 46.2, lng: 6.14 },
  Zurich: { lat: 47.37, lng: 8.54 },
  Monaco: { lat: 43.74, lng: 7.42 },
  Madrid: { lat: 40.42, lng: -3.7 },
  Barcelona: { lat: 41.39, lng: 2.17 },
  Vienna: { lat: 48.21, lng: 16.37 },
  Frankfurt: { lat: 50.11, lng: 8.68 },
  Munich: { lat: 48.14, lng: 11.58 },
  Amsterdam: { lat: 52.37, lng: 4.9 },
  Istanbul: { lat: 41.01, lng: 28.98 },

  // Asia Pacific
  Singapore: { lat: 1.35, lng: 103.82 },
  'Hong Kong': { lat: 22.32, lng: 114.17 },
  Tokyo: { lat: 35.69, lng: 139.69 },
  Shanghai: { lat: 31.23, lng: 121.47 },
  Beijing: { lat: 39.9, lng: 116.41 },
  Bangkok: { lat: 13.76, lng: 100.5 },
  'Kuala Lumpur': { lat: 3.14, lng: 101.69 },
  Seoul: { lat: 37.57, lng: 126.98 },
  Mumbai: { lat: 19.08, lng: 72.88 },
  'New Delhi': { lat: 28.61, lng: 77.21 },
  Jakarta: { lat: -6.21, lng: 106.85 },
  Manila: { lat: 14.6, lng: 120.98 },

  // Americas
  'New York': { lat: 40.71, lng: -74.01 },
  'Los Angeles': { lat: 34.05, lng: -118.24 },
  Miami: { lat: 25.76, lng: -80.19 },
  Chicago: { lat: 41.88, lng: -87.63 },
  Toronto: { lat: 43.65, lng: -79.38 },
  Vancouver: { lat: 49.28, lng: -123.12 },
  'Mexico City': { lat: 19.43, lng: -99.13 },
  'São Paulo': { lat: -23.55, lng: -46.63 },
  'Buenos Aires': { lat: -34.6, lng: -58.38 },

  // Africa & Oceania
  Cairo: { lat: 30.04, lng: 31.24 },
  Casablanca: { lat: 33.57, lng: -7.59 },
  Johannesburg: { lat: -26.2, lng: 28.05 },
  'Cape Town': { lat: -33.92, lng: 18.42 },
  Nairobi: { lat: -1.29, lng: 36.82 },
  Lagos: { lat: 6.52, lng: 3.38 },
  Sydney: { lat: -33.87, lng: 151.21 },
  Melbourne: { lat: -37.81, lng: 144.96 },
  Auckland: { lat: -36.85, lng: 174.76 },
}

const HQ_CITY = CITIES.find((c) => c.isHQ)!
const HQ_COORDS = COORDS[HQ_CITY.name]!

// Every city gets a persistent name label on the map, not just a curated subset.
const MAP_ROUTES = CITIES.filter((c) => !c.isHQ).map((city, i) => {
  const coords = COORDS[city.name]!
  return {
    start: {
      lat: HQ_COORDS.lat,
      lng: HQ_COORDS.lng,
      label: i === 0 ? HQ_CITY.name : undefined,
      name: HQ_CITY.name,
    },
    end: {
      lat: coords.lat,
      lng: coords.lng,
      label: city.name,
    },
  }
})

const STATS = [
  { num: '400+', label: 'Destinations worldwide' },
  { num: '6', label: 'Continents' },
  { num: '24/7', label: 'Concierge support' },
  { num: '100%', label: 'VVIP focused' },
]

export function WorldCoverage() {
  return (
    <section className={styles.section}>
      <div className="wrap">
        <div className={styles.head}>
          <div className="kicker" style={{ justifyContent: 'center', color: 'var(--gold)' }}>
            Where we operate
          </div>
          <h2>A global network,<br />destination by destination.</h2>
          <p>Every pin marks a destination served through our worldwide network of contracted chauffeur partners.</p>
        </div>

        <div className={styles.mapWrap}>
          <WorldMap dots={MAP_ROUTES} />
        </div>

        <p className={styles.tagline}>
          &ldquo;Wherever you are. Wherever you want to go. We&rsquo;ll take you there.&rdquo;
        </p>

        <div className={styles.statsBar}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.stat}>
              <b className={styles.statNum}>{s.num}</b>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import dynamic from 'next/dynamic'
import { CITIES } from '@/lib/constants/cities'
import styles from './WorldCoverage.module.css'

const WorldMap = dynamic(() => import('./WorldMap').then((m) => m.WorldMap), {
  ssr: false,
  loading: () => <div className={styles.mapSkeleton} aria-busy="true" />,
})

const CITY_MARKERS = [
  { name: 'Sharjah', code: 'HQ', lat: 25.35, lng: 55.42, isHQ: true },
  { name: 'Dubai', code: 'UAE', lat: 25.2, lng: 55.27 },
  { name: 'London', code: 'UK', lat: 51.51, lng: -0.13 },
  { name: 'New York', code: 'US', lat: 40.71, lng: -74.01 },
  { name: 'Singapore', code: 'SG', lat: 1.35, lng: 103.82 },
  { name: 'Toronto', code: 'CA', lat: 43.65, lng: -79.38 },
  { name: 'Sydney', code: 'AU', lat: -33.87, lng: 151.21 },
  { name: 'Tokyo', code: 'JP', lat: 35.69, lng: 139.69 },
  { name: 'Paris', code: 'FR', lat: 48.86, lng: 2.35 },
]

const STATS = [
  { num: '9', label: 'Cities served' },
  { num: '4', label: 'Continents' },
  { num: '24/7', label: 'Live dispatch' },
  { num: '4.9★', label: 'Avg. rating' },
]

// Flight-path arcs radiating out from HQ to every city we serve.
const HQ = CITY_MARKERS.find((c) => c.isHQ)!
const MAP_ROUTES = CITY_MARKERS.filter((c) => !c.isHQ).map((city) => ({
  start: { lat: HQ.lat, lng: HQ.lng, label: HQ.name },
  end: { lat: city.lat, lng: city.lng, label: city.name },
}))

export function WorldCoverage() {
  return (
    <section className={styles.section}>
      <div className="wrap">
        <div className={styles.head}>
          <div className="kicker" style={{ justifyContent: 'center', color: 'var(--gold)' }}>
            Where we operate
          </div>
          <h2>A global standard,<br />city by city.</h2>
          <p>Every dot is a dispatched fleet, a vetted chauffeur, and a fixed fare.</p>
        </div>

        <div className={styles.mapWrap}>
          <WorldMap dots={MAP_ROUTES} />
        </div>

        <div className={styles.cityList}>
          {CITIES.map((city) => (
            <div key={city.code} className={styles.cityPill}>
              <span className={`${styles.pillDot}${city.isHQ ? ` ${styles.pillDotHQ}` : ''}`} />
              <span className={styles.pillName}>{city.name}</span>
              <span className={styles.pillCode}>{city.code}</span>
            </div>
          ))}
        </div>

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

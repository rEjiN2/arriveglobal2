import type { CSSProperties } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { VEHICLES } from '@/lib/constants/vehicles'
import styles from './MostBooked.module.css'

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export function MostBooked() {
  return (
    <section className={styles.section}>
      <div className="wrap">
        <div className={styles.top}>
          <div>
            <div className="kicker">The fleet</div>
            <h2>A class for every<br />occasion.</h2>
          </div>
          <Link href="/selection" className={styles.viewAll}>
            View the full fleet <ArrowIcon />
          </Link>
        </div>

        <div className={styles.grid}>
          {VEHICLES.map((vehicle) => (
            <div
              key={vehicle.slug}
              className={styles.card}
              style={{ '--theme-color': vehicle.themeColor } as CSSProperties}
            >
              <Link
                href="/contact"
                className={styles.cardLink}
                aria-label={`Enquire about ${vehicle.name}`}
              >
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className={styles.image}
                  sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 25vw"
                />

                <div className={styles.overlay} />

                <div className={styles.body}>
                  <span className={styles.meta}>{vehicle.category}</span>
                  <h3>{vehicle.name}</h3>
                  <p className={styles.desc}>{vehicle.description}</p>

                  <div className={styles.cta}>
                    <span>Get a quote</span>
                    <ArrowIcon />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

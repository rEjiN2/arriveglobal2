import Image from 'next/image'
import Link from 'next/link'
import { VEHICLES } from '@/lib/constants/vehicles'
import styles from './MostBooked.module.css'

const StarIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2l3 7h7l-5.5 4.5L18.5 21 12 16.8 5.5 21l2-7.5L2 9h7z" />
  </svg>
)

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
            <div className="kicker">Most booked this month</div>
            <h2>Choose the right<br />way to arrive.</h2>
          </div>
          <Link href="/selection" className={styles.viewAll}>
            View all rides <ArrowIcon />
          </Link>
        </div>

        <div className={styles.grid}>
          {VEHICLES.map((vehicle, index) => (
            <article key={vehicle.slug} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className={styles.image}
                  sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 25vw"
                />
                <span className={styles.rank}>{String(index + 1).padStart(2, '0')}</span>
                {vehicle.featured && <span className={styles.badge}>Top choice</span>}
              </div>
              <div className={styles.body}>
                <div className={styles.meta}>
                  <span>{vehicle.category}</span>
                  <span className={styles.rating}><StarIcon /> {vehicle.rating}</span>
                </div>
                <h3>{vehicle.name}</h3>
                <div className={styles.bottom}>
                  <div className={styles.price}>
                    <strong>From ${vehicle.price}</strong>
                    <span>per {vehicle.unit}</span>
                  </div>
                  <Link href="/contact" className={styles.bookLink} aria-label={`Book ${vehicle.name}`}>
                    <ArrowIcon />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

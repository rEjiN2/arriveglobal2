import Image from 'next/image'
import Link from 'next/link'
import { VEHICLES } from '@/lib/constants/vehicles'
import { cn } from '@/lib/utils/cn'
import styles from './MostBooked.module.css'

const StarIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 2l3 7h7l-5.5 4.5L18.5 21 12 16.8 5.5 21l2-7.5L2 9h7z" />
  </svg>
)

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24">
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
            <h2>
              The rides people are
              <br />
              actually booking
            </h2>
          </div>
          <Link href="/selection" className={styles.viewAll}>
            View all rides →
          </Link>
        </div>

        <div className={styles.grid}>
          {VEHICLES.map((vehicle, i) => (
            <div
              key={vehicle.slug}
              className={cn(styles.card, vehicle.featured && styles.featured)}
            >
              <Image
                src={vehicle.image}
                alt={vehicle.name}
                fill
                className={styles.cardImg}
                sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 25vw"
              />
              <div className={styles.cardOverlay} />

              <span className={styles.idx}>
                {String(i + 1).padStart(2, '0')}
                {vehicle.featured ? ' — MOST BOOKED' : ''}
              </span>

              <span className={styles.rating}>
                <StarIcon />
                {vehicle.rating}
              </span>

              <div className={styles.content}>
                <div className={styles.category}>{vehicle.category}</div>
                <div className={styles.name}>{vehicle.name}</div>
                <div className={styles.desc}>{vehicle.description}</div>
                <div className={styles.row}>
                  <span className={styles.priceNote}>Get a quote →</span>
                  <button className={styles.bookBtn} type="button">
                    Book <ArrowIcon />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

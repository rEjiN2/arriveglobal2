import Link from 'next/link'
import styles from './PromoSplit.module.css'

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export function PromoSplit() {
  return (
    <section className={styles.section}>
      <div className={`wrap ${styles.split}`}>
        <div className={styles.copy}>
          <div className="kicker">The Arrives way</div>
          <h2>
            Built on one standard,
            <br />
            city after city.
          </h2>
          <p>
            Arrives Global began with a single fleet in one city. Today it&apos;s a vetted network
            of independent chauffeurs who share the same standard, so the ride feels the same whether
            you&apos;re in <b>Dubai</b> or <b>Toronto</b> — one dispatch team, one fare structure,
            one bar for quality.
          </p>
          <div className={styles.links}>
            <Link href="/about" className={styles.primaryBtn}>
              Read our story <ArrowIcon />
            </Link>
            <Link href="/contact" className={styles.secondaryLink}>
              Become a partner
            </Link>
          </div>
        </div>

        <div className={styles.collage}>
          <div
            className={`${styles.img} ${styles.tall}`}
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800&auto=format&fit=crop')",
            }}
          >
            <div className={styles.stat}>
              <div className={styles.statNum}>40+</div>
              <div className={styles.statLabel}>Cities worldwide</div>
            </div>
          </div>

          <div
            className={`${styles.img} ${styles.topRight}`}
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1519643381401-22c77e60520e?q=80&w=800&auto=format&fit=crop')",
            }}
          />

          <div
            className={`${styles.img} ${styles.bottomRight}`}
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800&auto=format&fit=crop')",
            }}
          />
        </div>
      </div>
    </section>
  )
}

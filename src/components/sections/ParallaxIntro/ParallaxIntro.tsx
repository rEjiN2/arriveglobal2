import Image from 'next/image'
import Link from 'next/link'
import { CalendarCheck } from 'lucide-react'
import { IconSteeringWheel, IconShieldCheck, IconClock } from '@tabler/icons-react'
import styles from './ParallaxIntro.module.css'

const FEATURES = [
  { icon: IconSteeringWheel, label: 'Professional\ndrivers' },
  { icon: IconShieldCheck, label: 'Safe &\nreliable' },
  { icon: IconClock, label: 'Punctual\nevery time.' },
]

export function ParallaxIntro() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <Image
          src="/new-banner.png"
          alt="Arrives Global chauffeur, Dubai skyline"
          fill
          priority
          className={styles.bgImg}
          sizes="100vw"
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <div className={styles.copy}>
          <p className={`${styles.reveal} ${styles.kicker}`} style={{ animationDelay: '0.1s' }}>
            Beyond Transit Elite excursion
          </p>

          <h1 className={`${styles.reveal} ${styles.heading}`} style={{ animationDelay: '0.22s' }}>
            Driven by Excellence.
            <br />
            Dedicated to You.
          </h1>

          <p className={`${styles.reveal} ${styles.lede}`} style={{ animationDelay: '0.42s' }}>
            World-class chauffeur service for VVIP clients, vetted professional drivers, a
            curated luxury fleet, and meticulous care across 400+ destinations worldwide.
          </p>

          <div className={`${styles.reveal} ${styles.ctaRow}`} style={{ animationDelay: '0.54s' }}>
            <Link href="/contact" className={styles.btnSolid}>
              <CalendarCheck size={16} strokeWidth={2.25} />
              Book now
            </Link>
            <Link href="/services" className={styles.btnOutline}>
              Our services
            </Link>
          </div>

          <div className={`${styles.reveal} ${styles.features}`} style={{ animationDelay: '0.66s' }}>
            {FEATURES.map(({ icon: Icon, label }) => (
              <div key={label} className={styles.feature}>
                <span className={styles.featureBadge}>
                  <Icon size={20} stroke={1.75} className={styles.featureIcon} />
                </span>
                <span>
                  {label.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i === 0 && <br />}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

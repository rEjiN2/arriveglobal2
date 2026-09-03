import Image from 'next/image'
import Link from 'next/link'
import { CalendarCheck, UserCheck, ShieldCheck, Clock } from 'lucide-react'
import styles from './ParallaxIntro.module.css'

const FEATURES = [
  { icon: UserCheck, label: 'Professional\ndrivers' },
  { icon: ShieldCheck, label: 'Safe &\nreliable' },
  { icon: Clock, label: 'Punctual\nevery time.' },
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
            Travel in comfort. Arrive in style.
          </p>

          <h1 className={`${styles.reveal} ${styles.heading}`} style={{ animationDelay: '0.22s' }}>
            Driven by Excellence.
            <br />
            Dedicated to You.
          </h1>

          <div className={`${styles.reveal} ${styles.rule}`} style={{ animationDelay: '0.36s' }} />

          <p className={`${styles.reveal} ${styles.lede}`} style={{ animationDelay: '0.42s' }}>
            Experience premium chauffeur service with professional drivers, luxury vehicles, and
            unmatched attention to detail.
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
                <Icon size={22} strokeWidth={1.75} className={styles.featureIcon} />
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

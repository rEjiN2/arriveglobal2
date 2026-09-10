import Image from 'next/image'
import Link from 'next/link'
import { CalendarCheck } from 'lucide-react'
import styles from './ParallaxIntro.module.css'

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
          <h1 className={`${styles.reveal} ${styles.kicker}`} style={{ animationDelay: '0.1s' ,  marginTop: '2.5rem' }}>
            Beyond Transit Elite Excursion
          </h1>

          <p className={`${styles.reveal} ${styles.lede}`} style={{ animationDelay: '0.42s' , marginBottom: '3.5rem' , marginTop: '1.5rem'}}>
            World-class chauffeur service for VVIP clients, vetted professional drivers, a
            curated luxury fleet, and meticulous care across 400+ destinations worldwide.
          </p>

          <div className={`${styles.reveal} ${styles.ctaRow}`} style={{ animationDelay: '0.54s' }}>
            <Link href="/contact" className={styles.btnSolid}>
              <CalendarCheck size={16} strokeWidth={2.25} />
              Book Now
            </Link>
            <Link href="/services" className={styles.btnOutline}>
              Our services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

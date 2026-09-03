import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.main}>

          {/* ── Brand ── */}
          <div className={styles.brand}>
            <Link href="/" aria-label="Arrives Global — home">
              <Image
                src="/logo.svg"
                alt="Arrives Global"
                width={110}
                height={52}
                className={styles.logoImg}
              />
            </Link>
            <p className={styles.tagline}>
              Private chauffeur service operating across<br />
              9 cities and 4 continents. Discreet,<br />
              punctual, uncompromising.
            </p>
            <span className={styles.location}>Sharjah, United Arab Emirates</span>
          </div>

          {/* ── Link groups ── */}
          <div className={styles.cols}>
            <div className={styles.col}>
              <p className={styles.colLabel}>Company</p>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/selection">The Selection</Link>
              <Link href="/contact">Contact</Link>
            </div>

            <div className={styles.col}>
              <p className={styles.colLabel}>Services</p>
              <Link href="/services#airport">Airport Transfers</Link>
              <Link href="/services#hourly">Hourly Hire</Link>
              <Link href="/services#corporate">Corporate Account</Link>
              <Link href="/services#events">Events &amp; Occasions</Link>
            </div>

            <div className={styles.col}>
              <p className={styles.colLabel}>Legal</p>
              <Link href="/terms">Terms &amp; Conditions</Link>
              <Link href="/privacy">Privacy Policy</Link>
            </div>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className={styles.bar}>
          <p className={styles.copy}>© {year} Arrives Global. All rights reserved.</p>
          <div className={styles.barLinks}>
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

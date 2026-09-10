import Image from 'next/image'
import Link from 'next/link'
import { IconBrandInstagram, IconBrandFacebook } from '@tabler/icons-react'
import styles from './Footer.module.css'

const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://www.instagram.com/arrivesglobal/', Icon: IconBrandInstagram },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61594081861634', Icon: IconBrandFacebook },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.main}>

          {/* ── Brand ── */}
          <div className={styles.brand}>
            <Link href="/" aria-label="Arrives Global home">
              <Image
                src="/logo.svg"
                alt="Arrives Global"
                width={110}
                height={47}
                className={styles.logoImg}
              />
            </Link>
            <p className={styles.tagline}>
              Beyond Transit · Elite Excursion. Luxury chauffeur services across 400+
              destinations and six continents, backed by 24/7 concierge support.
            </p>
            <span className={styles.location}>UAE</span>

            <div className={styles.social}>
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={styles.socialLink}
                >
                  <Icon size={17} stroke={1.75} />
                </a>
              ))}
            </div>
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
              <Link href="/services#disposal">Disposal Services</Link>
              <Link href="/services#point-to-point">Point to Point Transfers</Link>
              <Link href="/services#meet-and-assist">Meet and Assist Airport</Link>
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

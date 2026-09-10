import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ClipRevealImage } from '@/components/ui/ClipRevealImage/ClipRevealImage'
import { ImageMarquee } from '@/components/ui/ImageMarquee/ImageMarquee'
import { ScrambleButton } from '@/components/ui/ScrambleButton/ScrambleButton'
import styles from './page.module.css'

const FLEET_ROW_1 = [
  { src: '/buisness-class.jpg', alt: 'Business class vehicle' },
  { src: '/executive-suv.jpg', alt: 'Executive SUV' },
  { src: '/luxury-sedan.jpg', alt: 'Luxury sedan' },
  { src: '/standard-sedan.jpg', alt: 'Standard sedan' },
]

const FLEET_ROW_2 = [
  { src: '/built1.jpg', alt: 'Chauffeur fleet detail' },
  { src: '/built2.jpg', alt: 'Chauffeur fleet detail' },
  { src: '/built3.jpg', alt: 'Chauffeur fleet detail' },
  { src: '/car1.jpg', alt: 'Chauffeur fleet detail' },
]

export const metadata: Metadata = {
  title: 'About',
  description:
    'Arrives Global is a global chauffeur and VVIP travel company operating a non-asset network of vetted partners across more than 400 destinations worldwide.',
}

const STATS = [
  { value: '400+', label: 'Destinations worldwide' },
  { value: '24/7', label: 'Concierge & customer support' },
  { value: 'Latest models', label: 'Premium vehicles worldwide' },
  { value: 'Experienced', label: 'Professional chauffeurs' },
]

export default function AboutPage() {
  return (
    <div className={styles.page}>

      {/* ── Page Header ── */}
      <section className={styles.pageHeader}>
        <div className={styles.headerBg}>
          <Image
            src="/banner.png"
            alt="Arrives Global private chauffeur"
            fill
            priority
            className={styles.headerBgImg}
            sizes="100vw"
          />
          <div className={styles.headerOverlay} />
        </div>

        <div className={styles.headerContent}>
          <div className="wrap">
            <div className={styles.headerCopy}>
              <p className={`${styles.reveal} ${styles.headerKicker}`} style={{ animationDelay: '0.1s' }}>
                Our purpose
              </p>
              <h1 className={`${styles.reveal} ${styles.headerTitle}`} style={{ animationDelay: '0.22s' }}>
                Redefining<br />global luxury<br />travel.
              </h1>
              <p className={`${styles.reveal} ${styles.headerLead}`} style={{ animationDelay: '0.38s' }}>
                ARRIVES Global provides VVIP clients with premium chauffeur services, elite event
                transportation, and seamless meet-and-greet care worldwide. Operating a non-asset
                network, we accept complete accountability for our clients&rsquo; absolute comfort,
                safety, and prestige at every destination.
              </p>
              <p className={`${styles.reveal} ${styles.headerSub}`} style={{ animationDelay: '0.5s' }}>
                Our vision: to redefine the standards of global luxury travel through flawless,
                secure, and prestigious end-to-end orchestration.
              </p>
              <div className={`${styles.reveal} ${styles.headerMetaRow}`} style={{ animationDelay: '0.62s' }}>
                <div className={styles.headerRule} />
                <p className={styles.headerMeta}>UAE &nbsp;·&nbsp; Global chauffeur &amp; VVIP travel network</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <div className={styles.statsStrip}>
        <div className="wrap">
          <div className={styles.statsGrid}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.statItem}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Origin story split ── */}
      <section className={styles.split}>
        <div className="wrap">
          <div className={styles.splitGrid}>
            <div className={styles.splitText}>
              <div className="kicker">Who we are</div>
              <h2>Every arrival should feel effortless, secure, and exceptional.</h2>
              <div className={styles.splitBar} />
              <p>
                ARRIVES GLOBAL UAE is a global chauffeur and VVIP travel company founded on one
                belief: arriving anywhere in the world should be seamless, safe, and elevated. We
                don&rsquo;t just move people: we deliver an experience worthy of the moment.
              </p>
              <p>
                Through a non-asset network of carefully vetted, professional partners spanning
                over 400 destinations worldwide, we bring together premium chauffeured vehicles,
                highly trained chauffeurs, and experienced on-ground event specialists, all held
                to one uncompromising standard of service.
              </p>
              <p>
                Our clients include discerning individuals, corporate leaders, and event
                organisers who expect nothing less than precision at every touchpoint, from
                touchdown to takeoff. We take the friction out of travel: managing every
                logistical detail, anticipating needs before they arise, and ensuring that
                comfort, security, and prestige accompany our clients wherever their journey
                takes them.
              </p>
              <Link href="/contact" className={styles.splitCta}>
                Get in touch →
              </Link>
            </div>

            <ClipRevealImage
              src="/about1.webp"
              alt="Arrives Global chauffeur opening car door"
              badgeLabel="UAE"
            />
          </div>
        </div>
      </section>

      {/* ── Full-width quote with banner ── */}
      <section className={styles.quoteBreak}>
        <Image
          src="/banner.png"
          alt="Arrives Global fleet"
          fill
          className={styles.quoteImg}
          sizes="100vw"
        />
        <div className={styles.quoteOverlay} />
        <div className={`wrap ${styles.quoteContent}`}>
          <blockquote className={styles.quote}>
            &ldquo;Beyond Transit.<br />
            Elite Excursion.&rdquo;
          </blockquote>
          <p className={styles.quoteAttr}>
            This is more than our tagline: it is our approach to every journey we deliver.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className="wrap">
          <div className={styles.ctaGrid}>
            <div className={styles.ctaCopy}>
              <div className="kicker">Ready to ride</div>
              <h2>Experience the standard<br />for yourself.</h2>
              <p className={styles.ctaLede}>
                One request. One dedicated chauffeur.
                <br />
                All-inclusive pricing, confirmed upfront.
              </p>
              <div className={styles.ctaActions}>
                <ScrambleButton href="/contact" text="Book a ride" />
                <Link href="/services" className={styles.ctaLink}>
                  View services →
                </Link>
              </div>
            </div>

            <div className={styles.ctaMarquee}>
              <ImageMarquee images={FLEET_ROW_1} reverse speed={30} />
              <ImageMarquee images={FLEET_ROW_2} speed={30} />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

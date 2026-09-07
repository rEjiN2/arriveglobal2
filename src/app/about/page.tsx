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

const VALUES = [
  {
    num: '01',
    title: '24/7 Customer Care',
    body: 'A concierge team on call around the clock, wherever your journey takes you.',
  },
  {
    num: '02',
    title: 'Multilingual Chauffeurs',
    body: 'Professionals fluent across languages, at ease with every clientele.',
  },
  {
    num: '03',
    title: 'Complete Cleanliness',
    body: 'Every vehicle presented to an immaculate, hospital-grade standard.',
  },
  {
    num: '04',
    title: 'All-Inclusive Pricing',
    body: 'Transparent rates with no hidden fees — clarity from booking to arrival.',
  },
  {
    num: '05',
    title: 'Punctuality',
    body: 'Precise timing, every time — because your schedule is the standard we hold.',
  },
  {
    num: '06',
    title: 'Flight Tracking',
    body: 'Live monitoring of arrivals so your chauffeur is always exactly on time.',
  },
  {
    num: '07',
    title: 'Uniformed Chauffeurs',
    body: 'Polished, professional presentation befitting every VVIP occasion.',
  },
]

export default function AboutPage() {
  return (
    <div className={styles.page}>

      {/* ── Page Header ── */}
      <section className={styles.pageHeader}>
        <div className={styles.headerBg}>
          <Image
            src="/banner.jpg"
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
                Arrives Global UAE is a global chauffeur and VVIP travel company built on a
                single principle: that every arrival should feel effortless, secure, and
                exceptional.
              </p>
              <p>
                Operating a non-asset network of vetted, professional partners across more than
                400 destinations, we bring together the world&rsquo;s finest chauffeured
                vehicles, trained chauffeurs, and on-ground event specialists under one
                consistent standard of service.
              </p>
              <p>
                We work with discerning individuals, corporate leaders, and event organisers who
                expect precision at every touchpoint — from the moment a flight lands to the
                final point of departure. Our role is to remove the friction of travel entirely:
                coordinating logistics, anticipating needs, and ensuring that comfort, safety, and
                prestige travel with our clients wherever they go.
              </p>
              <Link href="/contact" className={styles.splitCta}>
                Get in touch →
              </Link>
            </div>

            <ClipRevealImage
              src="/about1.jpg"
              alt="Arrives Global chauffeur opening car door"
              badgeLabel="UAE"
            />
          </div>
        </div>
      </section>

      {/* ── Values grid ── */}
      <section className={styles.values}>
        <div className="wrap">
          <div className={styles.valuesHead}>
            <div className="kicker">The Arrives standard</div>
            <h2>Why choose us.</h2>
            <p>Seven commitments that define every journey, wherever in the world it takes place.</p>
          </div>
          <div className={styles.valuesGrid}>
            {VALUES.map((v, i) => (
              <div
                key={v.num}
                className={`${styles.pinCard} ${i % 2 === 0 ? styles.pinTiltLeft : styles.pinTiltRight}`}
              >
                <div className={styles.pinCardFrame}>
                  <svg
                    className={styles.pinIcon}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M16 3a1 1 0 0 1 .117 1.993l-.117 .007v4.764l1.894 3.789a1 1 0 0 1 .1 .331l.006 .116v2a1 1 0 0 1 -.883 .993l-.117 .007h-4v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-4h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-2a1 1 0 0 1 .06 -.34l.046 -.107l1.894 -3.791v-4.762a1 1 0 0 1 -.117 -1.993l.117 -.007h8z" />
                  </svg>
                  <div className={styles.pinPanel}>
                    <span className={styles.valueNum}>{v.num}</span>
                    <h3 className={styles.valueTitle}>{v.title}</h3>
                    <p className={styles.valueBody}>{v.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full-width quote with banner ── */}
      <section className={styles.quoteBreak}>
        <Image
          src="/banner.jpg"
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
            This is more than our tagline — it is our approach to every journey we deliver.
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

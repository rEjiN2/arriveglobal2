import type { Metadata } from 'next'
import Link from 'next/link'
import { ImageAccordion } from '@/components/ui/ImageAccordion/ImageAccordion'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Fleet',
  description:
    'A curated range of vehicle classes — Standard Cars, SUV, MPV, and Mini Vans — sourced through our trusted partner network and matched precisely to the occasion.',
}

const FLEET = [
  {
    slug: 'standard-cars',
    category: 'Business Class · Executive Sedan · First Class Sedan',
    name: 'Standard Cars',
    body: [
      'Discreet, comfortable saloons for daily transfers and business travel.',
    ],
    features: ['Uniformed, professional chauffeur', 'All-inclusive, transparent pricing', 'Live flight tracking on airport routes', 'Complete cleanliness, every journey'],
    image: '/standard-sedan.jpg',
  },
  {
    slug: 'suv',
    category: 'Premium SUV · Luxury SUV · Full-Size Luxury SUV',
    name: 'SUV',
    body: [
      'Commanding presence and space, suited to executive and family travel alike.',
    ],
    features: ['Multilingual chauffeurs', 'Uniformed, professional presentation', 'All-inclusive, transparent pricing', 'Available across 400+ destinations'],
    image: '/executive-suv.jpg',
  },
  {
    slug: 'mpv',
    category: 'Business MPV · Luxury MPV',
    name: 'MPV',
    body: [
      'Generous cabin comfort for small groups travelling together in style.',
    ],
    features: ['Complete cleanliness, hospital-grade standard', 'Punctual, precisely timed pickups', '24/7 concierge coordination', 'Curated luxury fleet'],
    image: '/luxury-sedan.jpg',
  },
  {
    slug: 'mini-vans',
    category: 'Standard Mini Van · VIP Mini Van',
    name: 'Mini Vans',
    body: [
      'Flexible, well-appointed transport for groups of up to seven.',
    ],
    features: ['Uniformed, professional chauffeur', 'All-inclusive, transparent pricing', 'Available across 400+ destinations', 'Punctuality, every time'],
    image: '/buisness-class.jpg',
  },
]

const EVENT_FLEET = [
  {
    num: '01',
    title: 'Luxury Vans',
    body: 'Executive Van · VIP Sprinter — boardroom-grade interiors for VVIP groups and roadshow travel.',
  },
  {
    num: '02',
    title: 'Mini Buses',
    body: '14-seater · 22-seater — comfortable group mobility for delegations, crews, and events.',
  },
  {
    num: '03',
    title: 'Coaches',
    body: 'Standard Coach · Luxury Motor Coach — full-size coaches for conferences, large events, and group logistics.',
  },
]

export default function SelectionPage() {
  return (
    <div className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={`wrap ${styles.heroGrid}`}>

          <div className={styles.heroLeft}>
            <p className={styles.heroKicker}>The fleet</p>
            <h1 className={styles.heroTitle}>
              Every class.<br />One standard.
            </h1>
            <p className={styles.heroLead}>
              A curated range of vehicle classes sourced through our trusted partner network,
              matched precisely to the occasion.
            </p>
            <div className={styles.heroLinks}>
              {FLEET.map((v) => (
                <a key={v.slug} href={`#${v.slug}`} className={styles.heroLink}>
                  {v.name}
                </a>
              ))}
            </div>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}><b>4</b><span>vehicle classes</span></div>
              <div className={styles.heroStat}><b>400+</b><span>destinations</span></div>
              <div className={styles.heroStat}><b>24/7</b><span>concierge</span></div>
            </div>
          </div>

          <div className={styles.heroRight}>
            <ImageAccordion
              items={FLEET.map((v) => ({ slug: v.slug, title: v.name, image: v.image }))}
            />
          </div>

        </div>
        <div className={styles.heroDivider} />
      </section>

      {/* ── Vehicle classes — pinned cards ── */}
      <section className={styles.fleetSection}>
        <div className="wrap">
          <div className={styles.fleetHead}>
            <div className="kicker">Choose your class</div>
            <h2>Four classes, one standard.</h2>
            <p>Every class built on the same standard of chauffeur, care, and pricing.</p>
          </div>

          <div className={styles.fleetGrid}>
            {FLEET.map((v, i) => (
              <Link
                key={v.slug}
                id={v.slug}
                href="/contact"
                className={`${styles.fleetCard} ${i % 2 === 0 ? styles.fleetTiltLeft : styles.fleetTiltRight}`}
              >
                <div className={styles.fleetCardFrame}>
                  <svg
                    className={styles.fleetPinIcon}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M16 3a1 1 0 0 1 .117 1.993l-.117 .007v4.764l1.894 3.789a1 1 0 0 1 .1 .331l.006 .116v2a1 1 0 0 1 -.883 .993l-.117 .007h-4v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-4h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-2a1 1 0 0 1 .06 -.34l.046 -.107l1.894 -3.791v-4.762a1 1 0 0 1 -.117 -1.993l.117 -.007h8z" />
                  </svg>
                  <div className={styles.fleetPanel}>
                    <span className={styles.fleetNum}>{String(i + 1).padStart(2, '0')}</span>
                    <h3 className={styles.fleetTitle}>{v.name}</h3>
                    <p className={styles.fleetDesc}>{v.body[0]}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Group & event fleet ── */}
      <section className={styles.guarantees}>
        <div className="wrap">
          <div className={styles.guaranteesHead}>
            <div className="kicker">Group &amp; event fleet</div>
            <h2>From boardroom-grade vans<br />to full-size coaches.</h2>
          </div>
          <div className={styles.guaranteesGrid}>
            {EVENT_FLEET.map((g) => (
              <div key={g.num} className={styles.guaranteeCard}>
                <span className={styles.guaranteeNum}>{g.num}</span>
                <h3 className={styles.guaranteeTitle}>{g.title}</h3>
                <p className={styles.guaranteeBody}>{g.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className="wrap">
          <div className={styles.ctaInner}>
            <div>
              <div className="kicker">Book your class</div>
              <h2>Tell us your trip.<br />We&rsquo;ll quote you.</h2>
            </div>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.ctaPrimary}>Request a quote</Link>
              <Link href="/services" className={styles.ctaOutline}>Our services</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

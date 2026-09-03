import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'The Selection',
  description:
    'Browse the Arrives Global fleet — Standard Sedan to Business Class. Every vehicle vetted, insured, and fixed-fare.',
}

const FLEET = [
  {
    slug: 'standard-sedan',
    category: 'Everyday standard',
    name: 'Standard Sedan',
    tag: 'Most booked',
    headline: 'Reliable, quiet, always on time.',
    body: [
      'The Standard Sedan is our most-booked class for a reason. Clean, punctual, and professionally driven — ideal for airport transfers, city runs, and solo business travel.',
      'Every Standard Sedan in our fleet is no older than five years, fully insured, and inspected monthly. The driver arrives early. That is the one thing we never compromise on.',
    ],
    specs: [
      { label: 'Passengers', value: 'Up to 3' },
      { label: 'Luggage', value: '2 large bags' },
      { label: 'In-car WiFi', value: 'Included' },
      { label: 'Climate control', value: 'Full dual-zone' },
    ],
    features: ['Flight tracking on airport pickups', 'Fixed fare, booked in advance', 'Name-board meet & greet available', 'Child seat on request'],
    image: '/standard-sedan.jpg',
    flip: false,
    rating: '4.9',
  },
  {
    slug: 'executive-suv',
    category: 'Groups & luggage',
    name: 'Executive SUV',
    tag: 'Groups',
    headline: 'Space for the whole team.',
    body: [
      'When the party is bigger — or the luggage is — the Executive SUV handles both without compromise. Three rows of seating, extended boot space, and the same fixed fare regardless of how many bags you bring.',
      'Popular for group airport transfers, corporate team travel, and any journey where the standard sedan simply is not large enough.',
    ],
    specs: [
      { label: 'Passengers', value: 'Up to 6' },
      { label: 'Luggage', value: '4 large bags' },
      { label: 'In-car WiFi', value: 'Included' },
      { label: 'Extra legroom', value: 'Standard' },
    ],
    features: ['Ideal for airport group transfers', 'Extended boot space', 'No surcharge for extra bags', 'Refreshments available on request'],
    image: '/executive-suv.jpg',
    flip: true,
    rating: '4.8',
  },
  {
    slug: 'luxury-sedan',
    category: 'Flagship class',
    name: 'Luxury Sedan',
    tag: 'Premium',
    headline: 'For the trips that matter most.',
    body: [
      'The Luxury Sedan is reserved for occasions where the journey itself is part of the experience. Premium marques — typically Mercedes S-Class, BMW 7 Series, or equivalent — driven by a senior chauffeur with a minimum of five years on the network.',
      'Every detail is attended to before you board. The vehicle is presented immaculately. The driver is briefed on your preferences. Nothing is left to chance.',
    ],
    specs: [
      { label: 'Passengers', value: 'Up to 3' },
      { label: 'Luggage', value: '2 large bags' },
      { label: 'In-car WiFi', value: 'High-speed' },
      { label: 'Amenities', value: 'Premium full kit' },
    ],
    features: ['Senior chauffeur — 5+ yrs on network', 'Premium marque (S-Class / 7 Series)', 'Complimentary water & refreshments', 'Discretion protocol on request'],
    image: '/luxury-sedan.jpg',
    flip: false,
    rating: '4.9',
  },
  {
    slug: 'business-class',
    category: 'Regular travel',
    name: 'Business Class',
    tag: 'Frequent travellers',
    headline: 'Everyday comfort, every time.',
    body: [
      'The Business Class sits between the Standard Sedan and Luxury tier — a step up in comfort and amenities without the flagship price point. Suited to frequent corporate travellers and extended airport routes.',
      'Leather seating, in-car refreshments, and a driver familiar with your preferred route. A strong choice for weekly or biweekly business travel.',
    ],
    specs: [
      { label: 'Passengers', value: 'Up to 4' },
      { label: 'Luggage', value: '3 large bags' },
      { label: 'In-car WiFi', value: 'Included' },
      { label: 'Leather seating', value: 'Full cabin' },
    ],
    features: ['Ideal for frequent weekly travel', 'Leather seating throughout', 'Refreshments & newspaper included', 'Corporate account billing available'],
    image: '/buisness-class.jpg',
    flip: true,
    rating: '4.8',
  },
]

const GUARANTEES = [
  { num: '01', title: 'Inspected monthly', body: 'Every vehicle undergoes a full mechanical and presentation inspection on a 30-day cycle.' },
  { num: '02', title: 'No older than 5 years', body: 'Fleet age is capped. No exceptions. You will never ride in an ageing vehicle.' },
  { num: '03', title: 'Fully licensed & insured', body: 'Every vehicle and driver holds the correct commercial licence and insurance for your journey.' },
  { num: '04', title: 'Vetted chauffeur every time', body: 'Background checked, service audited, and personally approved before their first booking.' },
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
              Four vehicle classes. Every one handpicked, insured, and driven
              by a vetted chauffeur. Fixed fares agreed before you book.
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
              <div className={styles.heroStat}><b>5yr</b><span>max fleet age</span></div>
              <div className={styles.heroStat}><b>4.9★</b><span>avg rating</span></div>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.heroPanel}>
              <Image
                src="/luxury-sedan.jpg"
                alt="Arrives Global luxury sedan"
                fill
                className={styles.heroPanelImg}
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
              />
              <div className={styles.heroPanelOverlay} />
              <div className={styles.heroPanelBadge}>
                <span className={styles.heroBadgeDot} />
                4 classes available
              </div>
            </div>
          </div>

        </div>
        <div className={styles.heroDivider} />
      </section>

      {/* ── Vehicle detail sections ── */}
      {FLEET.map((v) => (
        <section
          key={v.slug}
          id={v.slug}
          className={`${styles.vehicle} ${v.flip ? styles.vehicleFlip : ''}`}
        >
          <div className="wrap">
            <div className={styles.vehicleGrid}>

              <div className={styles.vehicleImgWrap}>
                <div className={styles.vehiclePanel}>
                  <Image
                    src={v.image}
                    alt={v.name}
                    fill
                    className={styles.vehiclePanelImg}
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                  <div className={styles.vehiclePanelOverlay} />
                  <div className={styles.vehicleRating}>
                    <svg viewBox="0 0 24 24" className={styles.ratingStar}>
                      <path d="M12 2l3 7h7l-5.5 4.5L18.5 21 12 16.8 5.5 21l2-7.5L2 9h7z" />
                    </svg>
                    {v.rating}
                  </div>
                  <span className={styles.vehicleTag}>{v.tag}</span>
                </div>
              </div>

              <div className={styles.vehicleText}>
                <div className="kicker">{v.category}</div>
                <h2 className={styles.vehicleName}>{v.name}</h2>
                <p className={styles.vehicleHeadline}>{v.headline}</p>
                {v.body.map((p, i) => (
                  <p key={i} className={styles.vehicleBody}>{p}</p>
                ))}

                <div className={styles.specsGrid}>
                  {v.specs.map((s) => (
                    <div key={s.label} className={styles.specItem}>
                      <span className={styles.specLabel}>{s.label}</span>
                      <span className={styles.specValue}>{s.value}</span>
                    </div>
                  ))}
                </div>

                <ul className={styles.featureList}>
                  {v.features.map((f) => (
                    <li key={f} className={styles.featureItem}>
                      <span className={styles.featureDot} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className={styles.vehicleLink}>
                  Get a quote for this class →
                </Link>
              </div>

            </div>
          </div>
        </section>
      ))}

      {/* ── Fleet guarantees ── */}
      <section className={styles.guarantees}>
        <div className="wrap">
          <div className={styles.guaranteesHead}>
            <div className="kicker">Fleet standards</div>
            <h2>Every vehicle in our fleet<br />meets the same bar.</h2>
          </div>
          <div className={styles.guaranteesGrid}>
            {GUARANTEES.map((g) => (
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
              <h2>Tell us your trip.<br />We quote the fare.</h2>
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

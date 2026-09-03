import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Arrives Global began with a single fleet in one city. Today it is a vetted network of chauffeurs across 18 cities worldwide.',
}

const STATS = [
  { value: '9+', label: 'Cities worldwide' },
  { value: '4', label: 'Continents served' },
  { value: '24/7', label: 'Live dispatch' },
  { value: '4.9★', label: 'Average rating' },
]

const VALUES = [
  {
    num: '01',
    title: 'Fixed fares, always.',
    body: 'No surge pricing, no surprises. Every route has a published fare agreed before you book — regardless of traffic, time of day, or demand.',
  },
  {
    num: '02',
    title: 'Flight-tracked pickups.',
    body: 'Our dispatch monitors your flight in real time. Land early, land late — your chauffeur adjusts automatically. No calls required.',
  },
  {
    num: '03',
    title: 'Vetted, not aggregated.',
    body: 'Every chauffeur passes a background check, vehicle inspection, and service audit before their first booking. We do not operate a marketplace.',
  },
  {
    num: '04',
    title: 'One point of contact.',
    body: 'One dispatch team handles every city. One number, one standard, one accountability. Not a franchise, not a referral network.',
  },
  {
    num: '05',
    title: 'Discreet by design.',
    body: 'No conversation unless you start it. No unnecessary updates. Your privacy and time are treated as defaults, not features.',
  },
  {
    num: '06',
    title: 'Global reach, local knowledge.',
    body: 'Each city fleet is managed locally. Our drivers know the roads, the terminals, the shortcuts — and the standards we hold them to.',
  },
]

export default function AboutPage() {
  return (
    <div className={styles.page}>

      {/* ── Page Header ── */}
      <section className={styles.pageHeader}>
        <div className="wrap">
          <div className={styles.headerGrid}>

            {/* Left — text */}
            <div className={styles.headerLeft}>
              <p className={styles.headerKicker}>Our story</p>
              <h1 className={styles.headerTitle}>
                Built on one<br />standard,<br />city after city.
              </h1>
              <p className={styles.headerLead}>
                Arrives Global began with a single fleet in Sharjah, UAE.
                Today it&rsquo;s a vetted network of independent chauffeurs
                who share the same standard — one dispatch team, one fare
                structure, one bar for quality.
              </p>
              <p className={styles.headerSub}>
                We are not a platform. We are not an aggregator.
                We are an operator accountable for every single ride.
              </p>
              <div className={styles.headerRule} />
              <p className={styles.headerMeta}>Est. Sharjah, UAE &nbsp;·&nbsp; Operating since 2019</p>
            </div>

            {/* Right — image panel */}
            <div className={styles.headerImageWrap}>
              <div className={styles.headerPanel}>
                <Image
                  src="/banner.jpg"
                  alt="Arrives Global private chauffeur"
                  fill
                  className={styles.headerPanelImg}
                  priority
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
                <div className={styles.headerPanelOverlay} />
                <div className={styles.headerPanelBadge}>
                  <span className={styles.headerBadgeDot} />
                  Dispatch open now
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className={styles.headerBottom} />
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
            <div className={styles.splitImages}>
              <div className={styles.imgPrimary}>
                <Image
                  src="/banner1.jpg"
                  alt="Arrives Global chauffeur opening car door"
                  fill
                  className={styles.img}
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
                <div className={styles.imgOverlay} />
              </div>
              <div className={styles.imgBadge}>
                <span className={styles.badgeDot} />
                <span>Est. Sharjah, UAE</span>
              </div>
            </div>

            <div className={styles.splitText}>
              <div className="kicker">Where it began</div>
              <h2>One city. One rule. The car arrives first.</h2>
              <p>
                We started with three vehicles and a single non-negotiable: the
                chauffeur is always there before the passenger needs to leave.
                Not on time — early. That standard was set in Sharjah and has
                never been relaxed in any city since.
              </p>
              <p>
                City by city, we expanded not by lowering our bar but by finding
                drivers who already held it. Today, the same promise made in
                Sharjah is delivered in London, New York, Singapore, and six
                other cities across four continents.
              </p>
              <p>
                Every chauffeur in our network is independently assessed,
                not crowd-rated. We inspect the vehicle, verify the licence,
                and ride the route before a driver carries a single passenger.
              </p>
              <Link href="/contact" className={styles.splitCta}>
                Get in touch →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values grid ── */}
      <section className={styles.values}>
        <div className="wrap">
          <div className={styles.valuesHead}>
            <div className="kicker">How we operate</div>
            <h2>Six commitments we<br />don&rsquo;t negotiate on.</h2>
            <p>Every one of these applies to every city, every driver, every ride — without exception.</p>
          </div>
          <div className={styles.valuesGrid}>
            {VALUES.map((v) => (
              <div key={v.num} className={styles.valueCard}>
                <span className={styles.valueNum}>{v.num}</span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueBody}>{v.body}</p>
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
            &ldquo;The car is already there.<br />
            That&rsquo;s the whole point.&rdquo;
          </blockquote>
          <p className={styles.quoteAttr}>— Arrives Global, operating standard</p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className="wrap">
          <div className={styles.ctaInner}>
            <div>
              <div className="kicker">Ready to ride</div>
              <h2>Experience the standard<br />for yourself.</h2>
            </div>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.ctaBtnPrimary}>
                Book a ride
              </Link>
              <Link href="/services" className={styles.ctaBtnOutline}>
                View services
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

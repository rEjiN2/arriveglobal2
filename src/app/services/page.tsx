import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'From airport transfers to corporate accounts — every Arrives Global service is fixed-fare and flight-tracked.',
}

const SERVICES = [
  {
    id: 'airport',
    tag: 'Most booked',
    title: 'Airport Transfers',
    headline: 'The car is there before you land.',
    body: [
      'We track your flight in real time. If your flight is delayed, the pickup moves with it — no calls, no charges, no stress. Your chauffeur monitors the board and adjusts automatically.',
      'Every airport pickup includes complimentary waiting time, name-board meet-and-greet at arrivals, and help with luggage. Fixed fare agreed at booking. No surprises at the end.',
    ],
    image: '/about1.jpg',
    flip: false,
    features: ['Flight tracking included', 'Fixed fare — no surcharges', 'Name-board meet & greet', '60 min complimentary wait'],
  },
  {
    id: 'hourly',
    tag: '2 – 24 hrs',
    title: 'Hourly Hire',
    headline: 'A driver on call, for as long as you need.',
    body: [
      'Whether you have back-to-back meetings across a city or a full day of appointments, hourly hire puts a vetted chauffeur at your disposal with no meter running between stops.',
      'Book from two hours to a full day. The vehicle waits while you work. You move when you are ready — not when a driver can get back to you.',
    ],
    image: '/about2.jpg',
    flip: true,
    features: ['From 2 hrs, up to 24 hrs', 'Driver waits between stops', 'No extra charge for detours', 'Available in all 9 cities'],
  },
  {
    id: 'corporate',
    tag: 'Business',
    title: 'Corporate Accounts',
    headline: 'One account. Every city your team travels to.',
    body: [
      'Centralise your company\'s ground transport under a single account. One invoice per billing cycle, one contact for dispatch, and the same standard of vehicle and driver across all your locations.',
      'Dashboard access for travel managers, per-department cost codes, and dedicated account support. Designed for companies that move people at scale without sacrificing standards.',
    ],
    image: '/about3.jpg',
    flip: false,
    features: ['Consolidated monthly invoicing', 'Per-team cost codes', 'Dedicated account manager', 'Multi-city coverage'],
  },
  {
    id: 'events',
    tag: 'Special occasions',
    title: 'Events & Occasions',
    headline: 'Arrivals that match the moment.',
    body: [
      'Weddings, galas, private dinners, conference transfers — occasions where the journey is part of the experience. We coordinate multi-vehicle logistics so every guest arrives on time and in the right car.',
      'Full event planning support, vehicle selection from our fleet, and a single point of contact for coordination. No last-minute scrambles. Everything scheduled, confirmed, and tracked.',
    ],
    image: '/about4.jpg',
    flip: true,
    features: ['Multi-vehicle coordination', 'Fleet selection assistance', 'Single contact for all logistics', 'Weddings, galas & conferences'],
  },
]

const STEPS = [
  { num: '01', title: 'Request a quote', body: 'Tell us your route, date, and vehicle preference. We respond with a fixed fare — no hidden add-ons.' },
  { num: '02', title: 'Confirm & relax', body: 'Booking confirmed by email. Your chauffeur is assigned and briefed on your preferences ahead of time.' },
  { num: '03', title: 'Your driver is ready', body: 'Chauffeur arrives early, tracks your flight if needed, and handles everything from the kerb inward.' },
]

export default function ServicesPage() {
  return (
    <div className={styles.page}>

      {/* ── Hero — matches home page layout ── */}
      <section className={styles.hero}>
        <div className={`wrap ${styles.heroGrid}`}>

          {/* Left — text */}
          <div className={styles.heroLeft}>
            <p className={styles.heroKicker}>What we offer</p>
            <h1 className={styles.heroTitle}>
              Every trip,<br />covered.
            </h1>
            <p className={styles.heroLead}>
              Four service types. One standard across all of them — fixed fares,
              vetted chauffeurs, and a dispatch team accountable for every ride.
            </p>
            <div className={styles.heroNav}>
              {SERVICES.map((s) => (
                <a key={s.id} href={`#${s.id}`} className={styles.heroNavLink}>
                  {s.title}
                </a>
              ))}
            </div>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <b>9+</b>
                <span>cities covered</span>
              </div>
              <div className={styles.heroStat}>
                <b>4</b>
                <span>continents</span>
              </div>
              <div className={styles.heroStat}>
                <b>24/7</b>
                <span>dispatch</span>
              </div>
            </div>
          </div>

          {/* Right — image panel */}
          <div className={styles.heroRight}>
            <div className={styles.heroPanel}>
              <Image
                src="/about1.jpg"
                alt="Arrives Global airport transfer service"
                fill
                className={styles.heroPanelImg}
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
              />
              <div className={styles.heroPanelOverlay} />
              <div className={styles.heroPanelBadge}>
                <span className={styles.heroBadgeDot} />
                Fixed fares, always
              </div>
            </div>
          </div>

        </div>
        <div className={styles.heroDivider} />
      </section>

      {/* ── Service sections ── */}
      {SERVICES.map((s) => (
        <section
          key={s.id}
          id={s.id}
          className={`${styles.service} ${s.flip ? styles.serviceFlip : ''}`}
        >
          <div className="wrap">
            <div className={styles.serviceGrid}>

              <div className={styles.serviceImg}>
                <div className={styles.servicePanel}>
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className={styles.panelImg}
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                  <div className={styles.panelOverlay} />
                  <span className={styles.panelTag}>{s.tag}</span>
                </div>
              </div>

              <div className={styles.serviceText}>
                <div className="kicker">{s.title}</div>
                <h2 className={styles.serviceHeadline}>{s.headline}</h2>
                {s.body.map((p, i) => (
                  <p key={i} className={styles.serviceBody}>{p}</p>
                ))}
                <ul className={styles.featureList}>
                  {s.features.map((f) => (
                    <li key={f} className={styles.featureItem}>
                      <span className={styles.featureDot} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={styles.serviceLink}>
                  Get a quote →
                </Link>
              </div>

            </div>
          </div>
        </section>
      ))}

      {/* ── How it works ── */}
      <section className={styles.howItWorks}>
        <div className="wrap">
          <div className={styles.howHead}>
            <div className="kicker">How it works</div>
            <h2>Simple from the first message.</h2>
          </div>
          <div className={styles.stepsGrid}>
            {STEPS.map((step) => (
              <div key={step.num} className={styles.step}>
                <span className={styles.stepNum}>{step.num}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepBody}>{step.body}</p>
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
              <div className="kicker">Ready to book</div>
              <h2>Get a fixed fare<br />for your next ride.</h2>
            </div>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.ctaPrimary}>
                Request a quote
              </Link>
              <Link href="/about" className={styles.ctaOutline}>
                About us
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

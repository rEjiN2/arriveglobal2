import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Globe2, Clock } from 'lucide-react'
import styles from './page.module.css'

const HERO_STATS = [
  { value: '400+', label: 'Destinations', icon: MapPin },
  { value: '6', label: 'Continents', icon: Globe2 },
  { value: '24/7', label: 'Concierge', icon: Clock },
]

const HERO_IMAGES = [
  { src: '/image8.jpeg', alt: 'Luxury chauffeur vehicle' },
  { src: '/image21.jpg', alt: 'Premium fleet vehicle' },
  { src: '/bmw-banner.jpg', alt: 'BMW fleet vehicle' },
]

const FLEET_EXTRAS = [
  {
    id: 'luxury-vans',
    tag: 'Luxury Vans',
    category: 'Executive Van · VIP Sprinter',
    headline: 'Boardroom-grade interiors for VVIP groups and roadshow travel.',
    image: '/car1.jpg',
  },
  {
    id: 'mini-buses',
    tag: 'Mini Buses',
    category: '14-Seater · 22-Seater',
    headline: 'Comfortable group mobility for delegations, crews, and events.',
    image: '/about2.jpg',
  },
  {
    id: 'coaches',
    tag: 'Coaches',
    category: 'Standard Coach · Luxury Motor Coach',
    headline: 'Full-size coaches for conferences, large events, and group logistics.',
    image: '/image6.jpeg',
  },
]

export const metadata: Metadata = {
  title: 'Services',
  description:
    'World-class chauffeur service for VVIP clients — airport transfers, personal & family travel, point to point transfers, and arrival & departure meet & assist, across 400+ destinations.',
}

const SERVICES = [
  {
    id: 'airport',
    tag: 'Airport',
    title: 'Transfers To & From Airport',
    headline: 'A stress-free journey, every time you land.',
    image: '/about1.jpg',
    features: ['Live flight tracking', 'Uniformed, professional chauffeurs', '24/7 concierge support', 'All-inclusive, transparent pricing'],
  },
  {
    id: 'family',
    tag: 'Personal & Family',
    title: 'Personal & Family Gateway',
    headline: 'At your disposal, for the trips that matter.',
    image: '/about2.jpg',
    features: ['Multilingual chauffeurs', 'Immaculately presented vehicles', 'Flexible, at-your-disposal scheduling', 'Curated luxury fleet'],
  },
  {
    id: 'point-to-point',
    tag: 'Point to Point',
    title: 'Point to Point Transfers',
    headline: 'One chauffeur, dedicated to your itinerary.',
    image: '/about3.jpg',
    features: ['Dedicated chauffeur for your route', 'Available across 400+ destinations', 'Punctual, precisely timed pickups', 'All-inclusive fixed pricing'],
  },
  {
    id: 'arrival-meet-assist',
    tag: 'Arrival',
    title: 'Arrival Meet & Assist Services',
    headline: 'A dedicated welcome, from the gate to your vehicle.',
    image: '/image9.jpeg',
    features: [
      'Personalized name-board meet at the gate or arrival bridge',
      'Fast-tracked VIP immigration & customs clearance',
      'Baggage porter assistance, where available',
      'Personal escort to your waiting vehicle or onward transfer',
      'Optional chauffeur service on request, T&Cs apply',
    ],
  },
  {
    id: 'departure-meet-assist',
    tag: 'Departure',
    title: 'Departure Meet & Assist Services',
    headline: 'A seamless send-off, from curbside to the gate.',
    image: '/image12.jpeg',
    features: [
      'Optional chauffeur service on request',
      'Representative meet at the terminal drop-off zone',
      'Priority check-in escort, porter assistance where available',
      'Expedited security screening',
      'Personal gate escort through to boarding, T&Cs apply',
    ],
  },
]

const STEPS = [
  { num: '01', title: 'Tell us your trip', body: 'Share your route, date, and vehicle preference. Our concierge team responds with transparent, all-inclusive pricing.' },
  { num: '02', title: 'Confirm & relax', body: 'Booking confirmed by our concierge team. Your chauffeur is briefed and assigned ahead of time.' },
  { num: '03', title: 'Your chauffeur is ready', body: 'A uniformed, professional chauffeur arrives early, tracks your flight if needed, and takes it from there.' },
]

export default function ServicesPage() {
  return (
    <div className={styles.page}>

      {/* ── Hero — collage layout ── */}
      <section className={styles.hero}>
        <div className={`wrap ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <p className={`kicker ${styles.reveal}`} style={{ animationDelay: '0.1s' }}>
              What we offer
            </p>
            <h1 className={`${styles.reveal} ${styles.heroTitle}`} style={{ animationDelay: '0.22s' }}>
              Every leg,<br />handled with<br />precision.
            </h1>
            <p className={`${styles.reveal} ${styles.heroLead}`} style={{ animationDelay: '0.36s' }}>
              From the moment you land to the moment you depart, every leg of the journey is
              handled with precision.
            </p>

            <div className={`${styles.reveal} ${styles.heroActions}`} style={{ animationDelay: '0.48s' }}>
              <Link href="/contact" className={styles.heroActionPrimary}>
                Request a quote
              </Link>
              <Link href="/selection" className={styles.heroActionOutline}>
                View our fleet
              </Link>
            </div>

            <div className={`${styles.reveal} ${styles.heroStatsRow}`} style={{ animationDelay: '0.6s' }}>
              {HERO_STATS.map(({ value, label, icon: Icon }) => (
                <div key={label} className={styles.heroStatItem}>
                  <span className={styles.heroStatIcon}>
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className={styles.heroStatValue}>{value}</p>
                    <p className={styles.heroStatLabel}>{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.heroCollage}>
            <span className={`${styles.heroShape} ${styles.heroShapeOne}`} />
            <span className={`${styles.heroShape} ${styles.heroShapeTwo}`} />
            <span className={`${styles.heroShape} ${styles.heroShapeThree}`} />

            <div className={`${styles.heroImg} ${styles.heroImgOne}`}>
              <Image src={HERO_IMAGES[0].src} alt={HERO_IMAGES[0].alt} fill className={styles.heroImgPic} priority sizes="280px" />
            </div>
            <div className={`${styles.heroImg} ${styles.heroImgTwo}`}>
              <Image src={HERO_IMAGES[1].src} alt={HERO_IMAGES[1].alt} fill className={styles.heroImgPic} sizes="240px" />
            </div>
            <div className={`${styles.heroImg} ${styles.heroImgThree}`}>
              <Image src={HERO_IMAGES[2].src} alt={HERO_IMAGES[2].alt} fill className={styles.heroImgPic} sizes="200px" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Service list — rolling reveal ── */}
      <section className={styles.rollSection}>
        <div className="wrap">
          <p className={styles.rollKicker}>Our services</p>

          <div className={styles.rollList}>
            {SERVICES.map((s) => (
              <div key={s.id} id={s.id} className={styles.rollRow}>
                <div className={styles.rollWrap}>
                  <div className={styles.rollInner}>
                    <div className={styles.rollLine}>
                      <h2 className={styles.rollTitle}>{s.tag}</h2>
                    </div>
                    <div className={styles.rollLine}>
                      <h2 className={`${styles.rollTitle} ${styles.rollTitleHover}`}>{s.tag}</h2>
                    </div>
                  </div>
                </div>

                <span className={styles.rollCategory}>{s.title}</span>
                <p className={styles.rollHeadline}>{s.headline}</p>

                <ul className={styles.rollFeatures}>
                  {s.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                <div className={styles.rollReveal}>
                  <div className={styles.rollRevealImg}>
                    <Image src={s.image} alt={s.title} fill className={styles.rollRevealPic} sizes="140px" />
                    <div className={styles.rollRevealTint} />
                  </div>
                  <div className={styles.rollRevealText}>
                    <p className={styles.rollRevealHeadline}>{s.headline}</p>
                    <ul className={styles.rollRevealFeatures}>
                      {s.features.slice(0, 3).map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                    <Link href="/contact" className={styles.rollRevealCta}>
                      Get a quote →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Group & Event Fleet — extra services ── */}
      <section className={`${styles.rollSection} ${styles.fleetSection}`}>
        <div className="wrap">
          <p className={styles.rollKicker}>The fleet</p>
          <h2 className={styles.fleetHeading}>Group &amp; Event Fleet</h2>
          <p className={styles.fleetSub}>
            From boardroom-grade vans to full-size coaches, built for delegations, crews, and
            large-scale events.
          </p>

          <div className={styles.rollList}>
            {FLEET_EXTRAS.map((f) => (
              <div key={f.id} id={f.id} className={styles.rollRow}>
                <div className={styles.rollWrap}>
                  <div className={styles.rollInner}>
                    <div className={styles.rollLine}>
                      <h2 className={styles.rollTitle}>{f.tag}</h2>
                    </div>
                    <div className={styles.rollLine}>
                      <h2 className={`${styles.rollTitle} ${styles.rollTitleHover}`}>{f.tag}</h2>
                    </div>
                  </div>
                </div>

                <span className={styles.rollCategory}>{f.category}</span>
                <p className={styles.rollHeadline}>{f.headline}</p>

                <div className={styles.rollReveal}>
                  <div className={styles.rollRevealImg}>
                    <Image src={f.image} alt={f.tag} fill className={styles.rollRevealPic} sizes="140px" />
                    <div className={styles.rollRevealTint} />
                  </div>
                  <div className={styles.rollRevealText}>
                    <p className={styles.rollRevealHeadline}>{f.headline}</p>
                    <Link href="/contact" className={styles.rollRevealCta}>
                      Get a quote →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              <h2>Get a quote<br />for your next ride.</h2>
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

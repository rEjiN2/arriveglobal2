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
    image: '/fleet/luxury-mini-van.png',
  },
  {
    id: 'mini-buses',
    tag: 'Mini Buses',
    category: '14-Seater · 22-Seater',
    headline: 'Comfortable group mobility for delegations, crews, and events.',
    image: '/fleet/mini-coach.png',
  },
  {
    id: 'coaches',
    tag: 'Coaches',
    category: 'Standard Coach · Luxury Motor Coach',
    headline: 'Full-size coaches for conferences, large events, and group logistics.',
    image: '/fleet/luxury-coach.png',
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
    headline: 'Professional chauffeurs, ready and waiting from touchdown.',
    image: '/about1.webp',
    description: [
      'Experience peace of mind knowing you’re in good hands with ARRIVES GLOBAL. Our drivers are highly professional, well dressed, and drive very comfortable and clean cars. You can expect exceptional service from us. Your driver will be waiting for you in the main arrivals hall of the airport, holding a sign with your name.',
      'Punctuality is essential for us. We send constant notifications to remind you of your reservation and notify you via WhatsApp or email when the driver is arriving at the pick-up point and until you reach your final destination.',
    ],
  },
  {
    id: 'disposal',
    tag: 'Disposal',
    title: 'Disposal Services',
    headline: 'Your chauffeur and vehicle, entirely at your disposal.',
    image: '/about2.jpg',
    description: [
      'Experience complete flexibility and personalised luxury with ARRIVES GLOBAL’s Chauffeur Disposal Service. Whether for business engagements, executive meetings, shopping, sightseeing, special occasions, or a full day of personal travel, your dedicated chauffeur and premium vehicle remain exclusively at your disposal throughout your booking.',
      'Available in Half-Day and Full-Day options, our disposal service allows you to travel entirely on your own schedule, without the need to arrange separate transfers for every destination. Your professional chauffeur will be ready whenever and wherever you need, providing a seamless and effortless journey from one engagement to the next.',
      'Designed for executives, VIPs, families, and discerning travellers, this service offers the perfect combination of privacy, flexibility, comfort, and convenience. From a carefully planned itinerary to last-minute changes, every journey is handled with discretion and attention to detail.',
      'Wherever your day takes you, your dedicated chauffeur is ready to take you there—in comfort, style, and complete peace of mind.',
    ],
  },
  {
    id: 'point-to-point',
    tag: 'Point to Point',
    title: 'Point to Point Transfers',
    headline: 'One dedicated chauffeur, for your exact itinerary.',
    image: '/about3.jpg',
    description: [
      'Enjoy a seamless and refined journey from one destination to another with ARRIVES GLOBAL’s Point-to-Point Transfer Service. Whether travelling for business, leisure, an airport transfer, or a special occasion, our professional chauffeurs ensure every journey is smooth, comfortable, and perfectly timed.',
      'From the moment you are collected until you arrive at your destination, every detail is handled with discretion, precision, and exceptional care. With a premium vehicle and experienced chauffeur at your service, you can relax and enjoy a journey defined by comfort, privacy, and reliability.',
      'Wherever your journey begins and wherever it takes you, ARRIVES GLOBAL ensures you arrive in comfort, style, and complete peace of mind.',
    ],
  },
  {
    id: 'meet-and-assist',
    tag: 'Meet & Assist',
    title: 'Meet and Assist Airport',
    headline: 'A dedicated escort, from arrival to departure.',
    image: '/image9.jpeg',
    description: [
      'Experience a seamless airport journey with ARRIVES GLOBAL’s dedicated Meet & Assist service, designed to provide personalised support from arrival to departure.',
      'On arrival, you will be welcomed by your dedicated airport escort directly at the tarmac or aerobridge, where available, and personally guided through every stage of the airport journey. From arrival formalities and baggage assistance to your onward transfer, every detail is carefully coordinated for a smooth and effortless experience.',
      'On departure, your dedicated escort will accompany you through the airport, providing personalised assistance from the moment you arrive until you reach your departure gate or aircraft, where available.',
      'Designed for VIPs, executives, families, and discerning travellers, our service delivers exceptional comfort, discretion, efficiency, and personalised attention at every stage of your journey.',
      'From aircraft to destination, and from arrival to departure, we ensure every airport experience is seamless and effortlessly refined.',
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

                <div className={styles.rollDescription}>
                  {s.description.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <div className={styles.rollReveal}>
                  <div className={styles.rollRevealImg}>
                    <Image src={s.image} alt={s.title} fill className={styles.rollRevealPic} sizes="140px" />
                    <div className={styles.rollRevealTint} />
                  </div>
                  <div className={styles.rollRevealText}>
                    <p className={styles.rollRevealHeadline}>{s.headline}</p>
                    <p className={styles.rollRevealExcerpt}>{s.description[0]}</p>
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

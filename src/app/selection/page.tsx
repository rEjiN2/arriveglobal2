import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Users,
  Briefcase,
  Armchair,
  Sparkles,
  Shuffle,
  Star,
  UsersRound,
  Package,
  Smile,
  ShieldCheck,
  Crown,
  Gem,
  Navigation,
  Calendar,
  ArrowRight,
} from 'lucide-react'
import { ImageAccordion } from '@/components/ui/ImageAccordion/ImageAccordion'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Fleet',
  description:
    'A curated range of vehicle classes, Standard Cars, SUV, MPV, and Mini Vans, sourced through our trusted partner network and matched precisely to the occasion.',
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
    images: [
      '/fleet/fleet-banner-1.png',
    ],
  },
  {
    slug: 'suv',
    category: 'Premium SUV · Luxury SUV · Full-Size Luxury SUV',
    name: 'SUV',
    body: [
      'Commanding presence and space, suited to executive and family travel alike.',
    ],
    features: ['Multilingual chauffeurs', 'Uniformed, professional presentation', 'All-inclusive, transparent pricing', 'Available across 400+ destinations'],
    images: ['/fleet/fleet-banner-2.png'],
  },
  {
    slug: 'mpv',
    category: 'Business MPV · Luxury MPV',
    name: 'MPV',
    body: [
      'Generous cabin comfort for small groups travelling together in style.',
    ],
    features: ['Complete cleanliness, hospital-grade standard', 'Punctual, precisely timed pickups', '24/7 concierge coordination', 'Curated luxury fleet'],
    images: ['/fleet/fleet-banner-3.png'],
  },
  {
    slug: 'mini-vans',
    category: 'Standard Mini Van · VIP Mini Van',
    name: 'Mini Vans',
    body: [
      'Flexible, well-appointed transport for groups of up to seven.',
    ],
    features: ['Uniformed, professional chauffeur', 'All-inclusive, transparent pricing', 'Available across 400+ destinations', 'Punctuality, every time'],
    images: ['/fleet/fleet-banner-4.png'],
  },
]

interface FleetTag {
  Icon: typeof Users
  label: string
}

interface FleetClass {
  id: string
  num: string
  name: string
  suffix?: string
  passengers: string
  luggage: string
  image: string
  description: string
  models?: string[]
  tags: FleetTag[]
}

const FLEET_CLASSES: FleetClass[] = [
  {
    id: 'standard-cars',
    num: '01',
    name: 'Sedan',
    passengers: '3',
    luggage: '2-4 Luggage',
    image: '/fleet/standard-sedan-home.png',
    description:
      'Refined and comfortable travel for up to three passengers, with generous luggage capacity for up to four small suitcases or two large and one small suitcase.',
    models: ['Lexus ES 300/350 (UAE)', 'Mercedes-Benz E-Class (EU)', 'Tesla Model Y/X (EU)', 'Ford Taurus', 'Honda Accord', 'Hyundai Sonata', 'Cadillac XTS/XT6', 'Lincoln Town Car', 'BMW 5 Series'],
    tags: [
      { Icon: Armchair, label: 'Comfort' },
      { Icon: Sparkles, label: 'Style' },
      { Icon: Briefcase, label: 'Business & Leisure' },
    ],
  },
  {
    id: 'suv',
    num: '02',
    name: 'SUV',
    passengers: '5',
    luggage: '4-6 Luggage',
    image: '/fleet/suv-home.png',
    description:
      'Spacious and sophisticated SUV for up to five passengers with generous room for both passengers and luggage. Perfect for airport transfers, business, family and leisure journeys.',
    models: ['BMW', 'Cadillac Escalade', 'Lexus', 'Chevrolet Tahoe', 'GMC Yukon'],
    tags: [
      { Icon: Shuffle, label: 'Spacious' },
      { Icon: Star, label: 'Versatile' },
      { Icon: Gem, label: 'Premium Comfort' },
    ],
  },
  {
    id: 'mpv',
    num: '03',
    name: 'Standard Minivan',
    passengers: '06',
    luggage: '04-05 Luggage',
    image: '/fleet/standard-mpv-home.png',
    description:
      'Spacious and comfortable transportation for families, small groups, and travellers with additional luggage. Designed for practicality and smooth journeys.',
    models: ['Hyundai H1', 'Hyundai Staria Lounge', 'Kia Carnival'],
    tags: [
      { Icon: UsersRound, label: 'Group Travel' },
      { Icon: Package, label: 'Large Luggage' },
      { Icon: Smile, label: 'Comfortable' },
    ],
  },
  {
    id: 'mini-vans',
    num: '04',
    name: 'Luxury Minivan',
    suffix: 'Van',
    passengers: '6-7',
    luggage: '6-8 Luggage',
    image: '/fleet/luxury-mini-van-home.png',
    description:
      'Premium vans offering exceptional space, comfort, and convenience for groups, families, and corporate teams.',
    models: ['Mercedes-Benz V-Class', 'Mercedes-Benz Sprinter', 'Ford Transit', 'Other Premium People Carriers'],
    tags: [
      { Icon: Shuffle, label: 'Premium Space' },
      { Icon: UsersRound, label: 'Group Comfort' },
      { Icon: ShieldCheck, label: 'Convenience' },
    ],
  },
  {
    id: 'luxury-sedan',
    num: '05',
    name: 'Luxury Sedan',
    passengers: '3',
    luggage: '2-3 Luggage',
    image: '/fleet/luxury-sedan-home.png',
    description:
      'The highest standard of chauffeured travel with elegance, privacy, and uncompromising comfort for executive travel, VIP transfers, special occasions, and exclusive events.',
    models: ['Mercedes-Benz S-Class', 'BMW 7 Series', 'Audi A8', 'Range Rover', 'Bentley', 'Rolls-Royce', 'Other Luxury Models'],
    tags: [
      { Icon: Crown, label: 'First Class' },
      { Icon: Briefcase, label: 'Executive' },
      { Icon: Gem, label: 'Ultimate Comfort' },
    ],
  },
  {
    id: 'mini-bus',
    num: '06',
    name: 'Mini Bus',
    passengers: '12-20',
    luggage: '10-20 Luggage',
    image: '/fleet/mini-coach-home.png',
    description:
      'Comfortable and efficient transportation for larger groups, families, corporate teams, and event guests. Ideal for airport transfers, group travel, business events, and leisure journeys.',
    tags: [
      { Icon: UsersRound, label: 'Large Groups' },
      { Icon: Package, label: 'Ample Space' },
      { Icon: ShieldCheck, label: 'Reliable Travel' },
    ],
  },
  {
    id: 'coach',
    num: '07',
    name: 'Coach',
    passengers: '20-50',
    luggage: 'Large Luggage',
    image: '/fleet/luxury-coach-home.png',
    description:
      'Elevated group travel with exceptional space, premium comfort, and refined service. Perfect for corporate delegations, VIP groups, events, tours, and long-distance journeys.',
    tags: [
      { Icon: Star, label: 'Premium Comfort' },
      { Icon: Navigation, label: 'Long Distance' },
      { Icon: Crown, label: 'VIP Service' },
    ],
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
              items={FLEET.map((v) => ({ slug: v.slug, title: v.name, images: v.images }))}
            />
          </div>

        </div>
        <div className={styles.heroDivider} />
      </section>

      {/* ── Premium fleet — full class breakdown ── */}
      <section className={styles.fleetSection}>
        <div className="wrap">
          <div className={styles.fleetHead}>
            <p className={styles.fleetKicker}>
              <span className={styles.fleetKickerMark}>✦</span> Our fleet <span className={styles.fleetKickerMark}>✦</span>
            </p>
            <h2 className={styles.fleetHeading}>Premium Fleet. Perfect for Every Journey.</h2>
            <p className={styles.fleetSub}>
              Choose the ideal vehicle from our diverse fleet, crafted to deliver comfort, style,
              and an exceptional travel experience.
            </p>
          </div>

          <div className={styles.classGrid}>
            {FLEET_CLASSES.map((item) => (
              <div key={item.id} id={item.id} className={styles.classCard}>
                <div className={styles.classHeadRow}>
                  <span className={styles.classNum}>{item.num}</span>
                  <div className={styles.classHeadText}>
                    <h3 className={styles.classTitle}>
                      {item.name}
                      {item.suffix && <span className={styles.classSuffix}> ({item.suffix})</span>}
                    </h3>
                    <div className={styles.classMeta}>
                      <span>
                        <Users size={12} strokeWidth={1.75} /> {item.passengers} Passengers
                      </span>
                      <span>
                        <Briefcase size={12} strokeWidth={1.75} /> {item.luggage}
                      </span>
                    </div>
                  </div>
                </div>

                <div className={styles.classImgWrap}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className={styles.classImg}
                    sizes="(max-width: 900px) 90vw, 320px"
                  />
                  <div className={styles.classImgOverlay} />
                </div>

                <p className={styles.classDesc}>{item.description}</p>

                {item.models && (
                  <div className={styles.classModels}>
                    <p className={styles.classModelsLabel}>Popular Models:</p>
                    <p className={styles.classModelsList}>{item.models.join(' · ')}</p>
                  </div>
                )}

                <div className={styles.classDivider} />

                <div className={styles.classTags}>
                  {item.tags.map(({ Icon, label }) => (
                    <span key={label} className={styles.classTag}>
                      <Icon size={13} strokeWidth={1.75} />
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.fleetCtaBar}>
            <div className={styles.fleetCtaLeft}>
              <span className={styles.fleetCtaIcon}>
                <Calendar size={20} strokeWidth={1.75} />
              </span>
              <div>
                <p className={styles.fleetCtaTitle}>Ready to Book Your Ride?</p>
                <p className={styles.fleetCtaSub}>
                  Choose your preferred vehicle and enjoy a seamless journey with comfort and style.
                </p>
              </div>
            </div>
            <Link href="/contact" className={styles.fleetCtaBtn}>
              Book Now <ArrowRight size={16} strokeWidth={2} />
            </Link>
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

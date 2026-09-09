import Image from 'next/image'
import styles from './WhyChooseUs.module.css'

interface Feature {
  image: string
  title: string
  body: string
}

const LEFT_ITEMS: Feature[] = [
  { image: '/image17.jpeg', title: 'Guaranteed Punctuality', body: 'On-time pickups, every time. Because your time matters.' },
  { image: '/image3.jpeg', title: 'Personalised Service', body: 'From preferences to routes, we tailor every detail for you.' },
  { image: '/about4.jpg', title: 'Uniformed Drivers', body: 'Professional, courteous and trained for your comfort.' },
]

const RIGHT_ITEMS: Feature[] = [
  { image: '/image9.jpeg', title: 'All-Inclusive Pricing', body: 'No hidden charges. What you see is what you pay.' },
  { image: '/image16.jpeg', title: 'Multilingual Drivers', body: 'Communicate with ease in your language.' },
  { image: '/car1.jpg', title: '24/7 Personalized Support', body: "We're here, round the clock, for a smooth experience." },
]

function FeatureCard({ image, title, body, side }: Feature & { side: 'left' | 'right' }) {
  return (
    <div className={`${styles.card} ${side === 'left' ? styles.cardLeft : styles.cardRight}`}>
      <span className={styles.cardIcon}>
        <Image src={image} alt="" fill sizes="50px" className={styles.cardIconImg} />
      </span>
      <span className={styles.cardText}>
        <span className={styles.cardTitle}>{title}</span>
        <span className={styles.cardBody}>{body}</span>
      </span>
      <span className={styles.cardDot} aria-hidden="true" />
    </div>
  )
}

export function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <div className="wrap">
        <div className={styles.head}>
          <span className={styles.badge}>Why choose us</span>
          <h2 className={styles.heading}>
            Beyond Rides. <span className={styles.gold}>Better Every Time.</span>
          </h2>
          <p className={styles.sub}>
            We go the extra mile to make every journey seamless, safe, and tailored just for you.
          </p>
        </div>

        <div className={styles.diagram}>
          <svg
            className={styles.connectors}
            viewBox="0 0 1200 620"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <path className={styles.wire} d="M 382 109.7 H 440 L 490 220" />
            <path className={styles.wire} d="M 382 310 H 455" />
            <path className={styles.wire} d="M 382 510.3 H 440 L 490 400" />
            <path className={styles.wire} d="M 818 109.7 H 760 L 710 220" />
            <path className={styles.wire} d="M 818 310 H 745" />
            <path className={styles.wire} d="M 818 510.3 H 760 L 710 400" />

            <circle className={styles.dot} cx="490" cy="220" r="6" />
            <circle className={styles.dot} cx="455" cy="310" r="6" />
            <circle className={styles.dot} cx="490" cy="400" r="6" />
            <circle className={styles.dot} cx="710" cy="220" r="6" />
            <circle className={styles.dot} cx="745" cy="310" r="6" />
            <circle className={styles.dot} cx="710" cy="400" r="6" />
          </svg>

          <div className={styles.center}>
            <span className={styles.glow} aria-hidden="true" />
            <span className={styles.ringDashed} aria-hidden="true" />
            <span className={styles.ring} aria-hidden="true" />
            <div className={styles.centerImg}>
              <Image
                src="/image18.jpeg"
                alt="Arrives Global chauffeur vehicle"
                fill
                sizes="(max-width: 900px) 220px, 320px"
                style={{ objectPosition: '50% 28%' }}
              />
            </div>
          </div>

          <div className={styles.colLeft}>
            {LEFT_ITEMS.map((item) => (
              <FeatureCard key={item.title} {...item} side="left" />
            ))}
          </div>
          <div className={styles.colRight}>
            {RIGHT_ITEMS.map((item) => (
              <FeatureCard key={item.title} {...item} side="right" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

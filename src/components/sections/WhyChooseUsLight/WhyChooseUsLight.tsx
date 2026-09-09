import Image from 'next/image'
import styles from './WhyChooseUsLight.module.css'

interface Item {
  image: string
  title: string
  body: string
}

const ITEMS: Item[] = [
  { image: '/about4.jpg', title: 'Uniformed Drivers', body: 'Professional, courteous and fully trained chauffeurs.' },
  { image: '/image9.jpeg', title: 'All-Inclusive Pricing', body: 'Transparent prices with no hidden charges.' },
  { image: '/image16.jpeg', title: 'Multilingual Drivers', body: 'Communicate with ease in your language.' },
  { image: '/image17.jpeg', title: 'Guaranteed Punctuality', body: 'On-time pickups, every time.' },
  { image: '/image3.jpeg', title: 'Personalised Service', body: 'Tailored to your preferences and requirements.' },
]

export function WhyChooseUsLight() {
  return (
    <section className={styles.section}>
      <div className="wrap">
        <div className={styles.head}>
          <p className={styles.kicker}>Why choose us?</p>
          <div className={styles.divider}>
            <span className={styles.dividerLine} />
            <span className={styles.dividerIcon} aria-hidden="true" />
            <span className={styles.dividerLine} />
          </div>
          <h2 className={styles.heading}>
            Excellence <span className={styles.gold}>in Every Journey</span>
          </h2>
          <p className={styles.sub}>
            We go the extra mile to deliver a seamless, safe, and personalised travel
            experience you can rely on.
          </p>
        </div>

        <div className={styles.grid}>
          {ITEMS.map(({ image, title, body }) => (
            <div className={styles.card} key={title}>
              <span className={styles.iconWrap}>
                <Image src={image} alt="" fill sizes="88px" className={styles.icon} />
              </span>
              <h3 className={styles.cardTitle}>{title}</h3>
              <span className={styles.cardRule} aria-hidden="true" />
              <p className={styles.cardBody}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

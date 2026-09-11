import Image from 'next/image'
import styles from './WhyChooseUsLight.module.css'

interface Item {
  image: string
  title: string
  body: string
}

const ITEMS: Item[] = [
  { image: '/why-choose/personal-service.png', title: 'Personalised Service', body: 'Dedicated support tailored to your needs.' },
  { image: '/why-choose/uniformed-driver.png', title: 'Uniformed Drivers', body: 'Professional, courteous and fully trained chauffeurs.' },
  { image: '/why-choose/all-inclusive-pricing.png', title: 'All-Inclusive Pricing', body: 'Transparent prices with no hidden charges.' },
  { image: '/why-choose/multi-lingual.png', title: 'Multilingual Drivers', body: 'Communicate with ease in your language.' },
  { image: '/why-choose/guaranteed-punctuality.png', title: 'Guaranteed Punctuality', body: 'On-time pickups, every time.' },
  { image: '/why-choose/24n7-suppot.png', title: '24/7 Support', body: 'We are always here, whenever you need us.' },
]

export function WhyChooseUsLight() {
  return (
    <section className={styles.section}>
      <div className="wrap">
        <div className={styles.head}>
          <div className={styles.kickerRow}>
            <span className={styles.kickerLine} />
            <p className={styles.kicker}>Why choose us</p>
            <span className={styles.kickerLine} />
          </div>
          <h2 className={styles.heading}>
            Why <span className={styles.gold}>Choose</span> Us?
          </h2>
          <p className={styles.sub}>
            We are committed to providing a seamless, reliable and premium experience for every
            customer. Here&rsquo;s what sets us apart.
          </p>
        </div>
      </div>

      <div className={styles.marqueeViewport}>
        <div className={styles.marqueeTrack}>
          {[...ITEMS, ...ITEMS].map(({ image, title, body }, i) => (
            <div className={styles.item} key={`${title}-${i}`}>
              <span className={styles.iconWrap}>
                <Image src={image} alt="" fill sizes="88px" quality={90} className={styles.icon} />
              </span>
              <h3 className={styles.itemTitle}>{title}</h3>
              <p className={styles.itemBody}>{body}</p>
              <span className={styles.itemRule} aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import {
  IconSteeringWheel,
  IconCoin,
  IconLanguage,
  IconClockCheck,
  IconBellRinging,
} from '@tabler/icons-react'
import styles from './WhyChooseUs.module.css'

const ITEMS = [
  { label: 'Uniformed\nDrivers', Icon: IconSteeringWheel },
  { label: 'All-Inclusive\nPricing', Icon: IconCoin },
  { label: 'Multilingual\nDrivers', Icon: IconLanguage },
  { label: 'Guaranteed\nPunctuality', Icon: IconClockCheck },
  { label: 'Personalised\nService', Icon: IconBellRinging },
]

export function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <div className="wrap">
        <div className={styles.head}>
          <h2>Why choose us?</h2>
          <span className={styles.rule} aria-hidden="true" />
        </div>
      </div>

      <div className={styles.track}>
        <div className={styles.marquee}>
          {[...ITEMS, ...ITEMS].map(({ label, Icon }, i) => (
            <div className={styles.item} key={`${label}-${i}`}>
              <span className={styles.badge}>
                <Icon size={30} stroke={1.5} />
              </span>
              <span className={styles.label}>
                {label.split('\n').map((line, j) => (
                  <span key={j}>
                    {line}
                    {j === 0 && <br />}
                  </span>
                ))}
              </span>
              <span className={styles.dash} aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

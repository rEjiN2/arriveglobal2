import Image from 'next/image'
import Link from 'next/link'
import { SERVICES } from '@/lib/constants/services'
import { cn } from '@/lib/utils/cn'
import styles from './ServiceDirectory.module.css'

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export function ServiceDirectory() {
  return (
    <section className={styles.section}>
      <div className="wrap">
        <div className={`section-head ${styles.head}`}>
          <div className="kicker">Built around how you travel</div>
          <h2>Explore our services.</h2>
          <p>
            From the moment you land to the moment you depart, every leg of the journey is
            handled with precision.
          </p>
        </div>

        <div className={styles.directory}>
          {SERVICES.map((service, i) => (
            <div
              key={service.slug}
              className={cn(styles.row, service.featured && styles.featured)}
            >
              <span className={styles.numGhost} aria-hidden="true">
                0{i + 1}
              </span>

              <Link href="/services" className={styles.rowLink}>
                <div className={styles.num}>0{i + 1}</div>

                <div className={styles.thumb}>
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className={styles.thumbImg}
                    sizes="120px"
                  />
                </div>

                <div className={styles.text}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </Link>

              <Link href="/contact" className={styles.tag}>
                {service.tag}
              </Link>

              <Link href="/services" className={styles.arrow}>
                <ArrowIcon />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

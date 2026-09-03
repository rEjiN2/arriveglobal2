import Image from 'next/image'
import styles from './PageHero.module.css'

interface PageHeroProps {
  image: string
  alt?: string
  kicker: string
  title: React.ReactNode
  position?: string
}

export function PageHero({ image, alt = '', kicker, title, position = 'center 40%' }: PageHeroProps) {
  return (
    <div className={styles.hero}>
      <Image
        src={image}
        alt={alt}
        fill
        className={styles.img}
        priority
        sizes="100vw"
        style={{ objectPosition: position }}
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className="wrap">
          <p className={styles.kicker}>{kicker}</p>
          <h1 className={styles.title}>{title}</h1>
        </div>
      </div>
      <div className={styles.fade} />
    </div>
  )
}

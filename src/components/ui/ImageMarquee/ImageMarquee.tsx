import Image from 'next/image'
import styles from './ImageMarquee.module.css'

interface ImageMarqueeProps {
  images: { src: string; alt: string }[]
  reverse?: boolean
  speed?: number
}

export function ImageMarquee({ images, reverse = false, speed = 32 }: ImageMarqueeProps) {
  const track = [...images, ...images]

  return (
    <div className={styles.wrap}>
      <div
        className={`${styles.track} ${reverse ? styles.reverse : ''}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {track.map((img, i) => (
          <div key={i} className={styles.tile}>
            <Image src={img.src} alt={img.alt} fill className={styles.img} sizes="180px" />
          </div>
        ))}
      </div>
    </div>
  )
}

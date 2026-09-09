'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from './ClipRevealImage.module.css'

interface ClipRevealImageProps {
  src: string
  alt: string
  badgeLabel?: string
  sizes?: string
}

export function ClipRevealImage({
  src,
  alt,
  badgeLabel,
  sizes = '(max-width: 900px) 100vw, 50vw',
}: ClipRevealImageProps) {
  return (
    <motion.div
      className={styles.wrap}
      initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
      animate={{ clipPath: 'polygon(16% 0, 100% 0, 100% 100%, 0% 100%)' }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Image src={src} alt={alt} fill className={styles.img} sizes={sizes} />
      <div className={styles.overlay} />
      {badgeLabel && (
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          <span>{badgeLabel}</span>
        </div>
      )}
    </motion.div>
  )
}

'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from './PromoSplit.module.css'

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

const GALLERY_PHOTOS = [
  { src: '/built1.jpg', alt: 'Executive fleet vehicle', rotation: -13, left: '4%', top: '32%', width: '40%', zIndex: 10 },
  { src: '/built2.jpg', alt: 'Luxury chauffeur car', rotation: -2, left: '30%', top: '8%', width: '44%', zIndex: 20 },
  { src: '/built3.jpg', alt: 'Premium sedan interior', rotation: 13, left: '54%', top: '30%', width: '40%', zIndex: 30 },
] as const

export function PromoSplit() {
  return (
    <section className={styles.section}>
      <div className={`wrap ${styles.split}`}>
        <div className={styles.copy}>
          <div className="kicker">Who we are</div>
          <h2>
            Beyond transit.
            <br />
            Elite excursion.
          </h2>
          <p>
            ARRIVES GLOBAL is a global chauffeur and VVIP travel company built on a single
            principle: that every arrival should feel effortless, secure, and exceptional.
            Operating a non-asset network of vetted, professional partners, we bring together the
            world&apos;s finest chauffeured vehicles, trained chauffeurs, and on-ground event
            specialists across more than <b>400 destinations</b>, under one consistent standard
            of service.
          </p>
          <div className={styles.links}>
            <Link href="/about" className={styles.primaryBtn}>
              Read our story <ArrowIcon />
            </Link>
            <Link href="/contact" className={styles.secondaryLink}>
              Become a partner
            </Link>
          </div>
        </div>

        <div className={styles.collage}>
          {GALLERY_PHOTOS.map((photo) => (
            <motion.div
              key={photo.src}
              className={styles.photoCard}
              style={{ left: photo.left, top: photo.top, width: photo.width, zIndex: photo.zIndex }}
              initial={{ opacity: 0, scale: 0.9, rotate: photo.rotation }}
              whileInView={{ opacity: 1, scale: 1, rotate: photo.rotation }}
              viewport={{ once: true, margin: '-80px' }}
              whileHover={{
                scale: 1.06,
                y: -14,
                rotate: photo.rotation * 0.6,
                zIndex: 50,
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <Image src={photo.src} alt={photo.alt} fill className={styles.photoImg} sizes="240px" />
            </motion.div>
          ))}

          <div className={styles.stat}>
            <div className={styles.statNum}>400+</div>
            <div className={styles.statLabel}>Destinations worldwide</div>
          </div>
        </div>
      </div>
    </section>
  )
}

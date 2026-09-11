'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './FadeBanner.module.css'

interface FadeBannerImage {
  src: string
  alt: string
}

interface FadeBannerProps {
  images: FadeBannerImage[]
  intervalMs?: number
  className?: string
  sizes?: string
}

export function FadeBanner({ images, intervalMs = 5000, className, sizes = '100vw' }: FadeBannerProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, intervalMs)
    return () => clearInterval(id)
  }, [images.length, intervalMs])

  return (
    <>
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          priority={i === 0}
          className={`${className ?? ''} ${styles.slide} ${i === index ? styles.active : ''}`}
          sizes={sizes}
        />
      ))}
    </>
  )
}

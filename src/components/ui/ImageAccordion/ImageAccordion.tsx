'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './ImageAccordion.module.css'

interface AccordionItem {
  slug: string
  title: string
  images: string[]
}

interface ImageAccordionProps {
  items: AccordionItem[]
  defaultActive?: number
  rotateMs?: number
}

export function ImageAccordion({ items, defaultActive = 0, rotateMs = 2600 }: ImageAccordionProps) {
  const [active, setActive] = useState(defaultActive)

  return (
    <div className={styles.row}>
      {items.map((item, i) => {
        const isActive = i === active
        return (
          <div
            key={item.slug}
            className={`${styles.panel} ${isActive ? styles.panelActive : ''}`}
            onMouseEnter={() => setActive(i)}
          >
            <PanelImages
              images={item.images}
              title={item.title}
              isActive={isActive}
              rotateMs={rotateMs}
            />
            <div className={styles.panelTint} />
            <span className={styles.panelCaption}>{item.title}</span>
          </div>
        )
      })}
    </div>
  )
}

function PanelImages({
  images,
  title,
  isActive,
  rotateMs,
}: {
  images: string[]
  title: string
  isActive: boolean
  rotateMs: number
}) {
  const [index, setIndex] = useState(0)
  const rotating = images.length > 1

  useEffect(() => {
    if (!rotating) return
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), rotateMs)
    return () => clearInterval(id)
  }, [rotating, images.length, rotateMs])

  return (
    <>
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={title}
          fill
          priority={i === 0}
          className={`${styles.panelImg} ${rotating ? styles.panelImgFade : ''} ${i === index ? styles.panelImgVisible : ''}`}
          sizes={isActive ? '320px' : '48px'}
        />
      ))}
      {rotating && isActive && (
        <div className={styles.panelDots}>
          {images.map((src, i) => (
            <span key={src} className={`${styles.panelDot} ${i === index ? styles.panelDotActive : ''}`} />
          ))}
        </div>
      )}
    </>
  )
}

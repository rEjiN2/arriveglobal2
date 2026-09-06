'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './ImageAccordion.module.css'

interface AccordionItem {
  slug: string
  title: string
  image: string
}

interface ImageAccordionProps {
  items: AccordionItem[]
  defaultActive?: number
}

export function ImageAccordion({ items, defaultActive = 0 }: ImageAccordionProps) {
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
            <Image
              src={item.image}
              alt={item.title}
              fill
              className={styles.panelImg}
              sizes={isActive ? '320px' : '48px'}
            />
            <div className={styles.panelTint} />
            <span className={styles.panelCaption}>{item.title}</span>
          </div>
        )
      })}
    </div>
  )
}

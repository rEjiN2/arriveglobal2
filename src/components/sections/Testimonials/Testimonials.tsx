'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/constants/testimonials'
import styles from './Testimonials.module.css'

const getInitials = (name: string) =>
  name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const total = TESTIMONIALS.length
  const current = TESTIMONIALS[index]

  const goTo = (next: number) => setIndex((next + total) % total)

  return (
    <section className={styles.section}>
      <div className="wrap">
        <div className={styles.kickerRow}>
          <span className={styles.kickerLine} />
          <p className={styles.kicker}>What clients say</p>
          <span className={styles.kickerLine} />
        </div>
        <div className={styles.slider}>
          <button
            type="button"
            className={styles.nav}
            onClick={() => goTo(index - 1)}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} strokeWidth={1.75} />
          </button>

          <div className={styles.card} key={index}>
            <p className={styles.quote}>{current.quote}</p>
            <div className={styles.avatar} aria-hidden="true">
              {getInitials(current.name)}
            </div>
            <div className={styles.attribution}>
              <span className={styles.name}>{current.name}</span>
              <span className={styles.role}>{current.role}</span>
            </div>
          </div>

          <button
            type="button"
            className={styles.nav}
            onClick={() => goTo(index + 1)}
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} strokeWidth={1.75} />
          </button>
        </div>

        <div className={styles.dots}>
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.name + i}
              type="button"
              className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

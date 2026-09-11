'use client'

import type { CSSProperties } from 'react'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, User } from 'lucide-react'
import { VEHICLES } from '@/lib/constants/vehicles'
import styles from './MostBooked.module.css'

const AUTO_ADVANCE_MS = 2000
const TOTAL = VEHICLES.length
// Three copies so the track can slide one card at a time in either direction
// without ever running out of neighbours; once a slide finishes just outside
// the middle copy, we snap silently back into it.
const LOOP = [...VEHICLES, ...VEHICLES, ...VEHICLES]

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export function MostBooked() {
  const [pos, setPos] = useState(TOTAL)
  const [smooth, setSmooth] = useState(true)
  const pausedRef = useRef(false)
  const trackRef = useRef<HTMLDivElement>(null)

  const step = (dir: 1 | -1) => {
    setSmooth(true)
    setPos((p) => p + dir)
  }

  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) step(1)
    }, AUTO_ADVANCE_MS)
    return () => clearInterval(id)
  }, [])

  // Once a slide carries the track outside the middle copy, wait for the
  // transition to finish, then jump back into the middle copy instantly.
  useEffect(() => {
    if (pos >= TOTAL && pos < TOTAL * 2) return
    const el = trackRef.current
    if (!el) return

    const settle = () => {
      setSmooth(false)
      setPos((p) => TOTAL + (((p - TOTAL) % TOTAL) + TOTAL) % TOTAL)
    }
    el.addEventListener('transitionend', settle, { once: true })
    return () => el.removeEventListener('transitionend', settle)
  }, [pos])

  // Re-enable the transition on the next frame after a silent jump.
  useEffect(() => {
    if (smooth) return
    const id = requestAnimationFrame(() => setSmooth(true))
    return () => cancelAnimationFrame(id)
  }, [smooth])

  return (
    <section className={styles.section}>
      <div className="wrap">
        <div className={styles.top}>
          <div className={styles.kickerRow}>
            <span className={styles.kickerLine} />
            <span className={styles.kicker}>The fleet</span>
            <span className={styles.kickerLine} />
          </div>
          <h2>A class for every<br />occasion.</h2>
          <Link href="/selection" className={styles.viewAll}>
            View the full fleet <ArrowIcon />
          </Link>
        </div>

        <div
          className={styles.carousel}
          onMouseEnter={() => { pausedRef.current = true }}
          onMouseLeave={() => { pausedRef.current = false }}
        >
          <button
            type="button"
            className={styles.navBtn}
            onClick={() => step(-1)}
            aria-label="Previous vehicles"
          >
            <ChevronLeft size={20} strokeWidth={2} />
          </button>

          <div className={styles.viewport}>
            <div
              ref={trackRef}
              className={`${styles.track} ${!smooth ? styles.trackJump : ''}`}
              style={{ '--pos': pos } as CSSProperties}
            >
              {LOOP.map((vehicle, i) => (
                <div className={styles.slide} key={`${vehicle.slug}-${i}`}>
                  <div className={styles.card}>
                    <Link
                      href="/contact"
                      className={styles.cardLink}
                      aria-label={`Enquire about ${vehicle.name}`}
                    >
                      <div className={styles.imgWrap}>
                        <span className={styles.badge}>
                          <span className={styles.badgeIcon}>
                            <User size={11} strokeWidth={2.25} />
                          </span>
                          {vehicle.passengers}
                        </span>
                        <Image
                          src={vehicle.image}
                          alt={vehicle.name}
                          fill
                          className={styles.image}
                          sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 25vw"
                        />
                      </div>

                      <span className={styles.meta}>{vehicle.category}</span>
                      <span className={styles.divider} />
                      <h3>{vehicle.name}</h3>
                      <p className={styles.desc}>{vehicle.description}</p>

                      <div className={styles.cta}>
                        <span>Get a quote</span>
                        <ArrowIcon />
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className={styles.navBtn}
            onClick={() => step(1)}
            aria-label="Next vehicles"
          >
            <ChevronRight size={20} strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  )
}

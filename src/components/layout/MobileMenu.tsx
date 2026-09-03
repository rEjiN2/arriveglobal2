'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import Image from 'next/image'
import { NAV_ITEMS } from '@/lib/constants/navigation'
import styles from './MobileMenu.module.css'

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Needed so createPortal doesn't run on SSR
  useEffect(() => { setMounted(true) }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  const overlay = (
    <div className={`${styles.panel} ${open ? styles.panelOpen : ''}`} aria-hidden={!open}>
      {/* Top bar inside overlay */}
      <div className={styles.panelTop}>
        <Link href="/" onClick={close} className={styles.panelLogo}>
          <Image src="/logo.svg" alt="Arrives Global" width={96} height={40} />
        </Link>
        <div className={styles.panelTopRight}>
          <button
            className={styles.closeBtn}
            onClick={close}
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Nav links */}
      <nav className={styles.panelNav}>
        {NAV_ITEMS.map((item, i) => (
          <Link
            key={item.href}
            href={item.href}
            className={styles.panelLink}
            onClick={close}
            style={{ transitionDelay: open ? `${i * 55 + 80}ms` : '0ms' }}
          >
            <span className={styles.linkNum}>0{i + 1}</span>
            <span className={styles.linkLabel}>{item.label}</span>
            <span className={styles.linkArrow}>→</span>
          </Link>
        ))}
      </nav>

      {/* Footer strip */}
      <div className={styles.panelFoot}>
        <Link href="/contact" className={styles.panelCta} onClick={close}>
          Book a ride
        </Link>
        <span className={styles.panelDispatch}>
          <span className={styles.dispatchDot} />
          Dispatch open 24 / 7
        </span>
      </div>
    </div>
  )

  return (
    <>
      {/* Hamburger — lives inside the header */}
      <button
        className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        <span className={styles.b1} />
        <span className={styles.b2} />
        <span className={styles.b3} />
      </button>

      {/* Overlay portaled to body — escapes header stacking context */}
      {mounted && createPortal(overlay, document.body)}
    </>
  )
}

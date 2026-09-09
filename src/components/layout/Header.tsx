'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Sun, Moon } from 'lucide-react'
import { NAV_ITEMS } from '@/lib/constants/navigation'
import { MobileMenu } from './MobileMenu'
import { TopBar } from './TopBar'
import styles from './Header.module.css'

const IVORY_STORAGE_KEY = 'ag-ivory-theme'

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [ivory, setIvory] = useState(false)

  // The home hero is a full-bleed dark image the header can sit over transparently.
  // Everywhere else — and once you've scrolled past it — the header goes solid.
  const isHome = pathname === '/'

  useEffect(() => {
    if (!isHome) return

    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  // Restore the visitor's preference once, on mount.
  useEffect(() => {
    setIvory(localStorage.getItem(IVORY_STORAGE_KEY) === '1')
  }, [])

  // Apply it to every page except home — and keep it in sync as the visitor
  // navigates, without needing to re-click the toggle each time.
  useEffect(() => {
    if (ivory && !isHome) {
      document.documentElement.setAttribute('data-theme', 'ivory')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }, [ivory, isHome])

  function toggleIvory() {
    setIvory((prev) => {
      const next = !prev
      localStorage.setItem(IVORY_STORAGE_KEY, next ? '1' : '0')
      return next
    })
  }

  const transparent = isHome && !scrolled

  return (
    <header className={`${styles.header} ${transparent ? styles.transparent : ''}`}>
      <nav className={styles.nav}>
        {/* Logo */}
        <Link href="/" aria-label="Arrives Global — home" className={styles.logoLink}>
          <Image
            src="/logo.svg"
            alt="Arrives Global"
            width={140}
            height={62}
            priority
            className={styles.logoImg}
          />
        </Link>

        {/* Desktop nav links — hidden on mobile */}
        <ul className={styles.navList}>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.navRight}>
          {/* Ivory theme toggle — every page except home */}
          {!isHome && (
            <button
              type="button"
              onClick={toggleIvory}
              className={styles.themeToggle}
              aria-label={ivory ? 'Switch to dark theme' : 'Switch to ivory theme'}
              aria-pressed={ivory}
            >
              {ivory ? <Moon size={16} strokeWidth={2.25} /> : <Sun size={16} strokeWidth={2.25} />}
            </button>
          )}

          {/* Desktop phone badge — hidden on mobile */}
          <a href="tel:+18000000000" className={styles.phoneBadge}>
            <Phone size={14} strokeWidth={2.25} />
            +1 (800) 000-0000
          </a>

          {/* Mobile hamburger + full-screen overlay (portaled to body) */}
          <MobileMenu />
        </div>
      </nav>

      <TopBar />
    </header>
  )
}

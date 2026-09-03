'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { NAV_ITEMS } from '@/lib/constants/navigation'
import { MobileMenu } from './MobileMenu'
import styles from './Header.module.css'

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

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
          {/* Desktop phone badge — hidden on mobile */}
          <a href="tel:+18000000000" className={styles.phoneBadge}>
            <Phone size={14} strokeWidth={2.25} />
            +1 (800) 000-0000
          </a>

          {/* Mobile hamburger + full-screen overlay (portaled to body) */}
          <MobileMenu />
        </div>
      </nav>
    </header>
  )
}

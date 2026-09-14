'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { NAV_ITEMS } from '@/lib/constants/navigation'
import { MobileMenu } from './MobileMenu'
import { TopBar } from './TopBar'
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
        <Link href="/" aria-label="Arrives Global home" className={styles.logoLink}>
          <Image
            src="/logo.svg"
            alt="Arrives Global"
            width={140}
            height={60}
            priority
            className={styles.logoImg}
          />
        </Link>

        {/* Desktop nav links — hidden on mobile */}
        <ul className={styles.navList}>
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href
            const hasChildren = !!item.children?.length

            return (
              <li key={item.href} className={hasChildren ? styles.navItemDropdown : undefined}>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                  aria-haspopup={hasChildren ? 'true' : undefined}
                >
                  {item.label}
                  {hasChildren && <ChevronDown size={13} strokeWidth={2.25} className={styles.navChevron} />}
                </Link>

                {hasChildren && (
                  <ul className={styles.dropdown}>
                    {item.children!.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} className={styles.dropdownLink}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>

        <div className={styles.navRight}>
          {/* Mobile hamburger + full-screen overlay (portaled to body) */}
          <MobileMenu />
        </div>
      </nav>

      <TopBar />
    </header>
  )
}

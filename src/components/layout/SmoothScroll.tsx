'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let lenisInstance: Lenis | null = null

/** The shared Lenis instance, once mounted — used to scroll on route/hash changes. */
export function getLenis() {
  return lenisInstance
}

/** Scrolls to the element matching the current URL hash, or to the top if there is none. */
export function scrollToHashOrTop() {
  const hash = window.location.hash
  const target = hash ? document.querySelector(hash) : null

  if (target) {
    const header = document.querySelector('header')
    const offset = (header?.getBoundingClientRect().height ?? 0) + 16
    if (lenisInstance) {
      lenisInstance.scrollTo(target as HTMLElement, { offset: -offset, immediate: true })
    } else {
      const y = target.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo(0, y)
    }
    return
  }

  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate: true })
  } else {
    window.scrollTo(0, 0)
  }
}

export function SmoothScroll() {
  const pathname = usePathname()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const lenis = new Lenis()
    lenisInstance = lenis
    lenis.on('scroll', ScrollTrigger.update)

    const tick = (time: number) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
      lenisInstance = null
    }
  }, [])

  // Every route change: jump to the top of the new page, or to its hash target
  // if the link already carried one (e.g. a footer/nav link to /services#airport).
  useEffect(() => {
    const id = requestAnimationFrame(scrollToHashOrTop)

    // Same-page anchor clicks (pathname unchanged) don't re-run this effect,
    // so also react to the hash itself changing.
    window.addEventListener('hashchange', scrollToHashOrTop)

    return () => {
      cancelAnimationFrame(id)
      window.removeEventListener('hashchange', scrollToHashOrTop)
    }
  }, [pathname])

  // Belt-and-braces for same-page anchor links: Next.js's client-side router
  // doesn't reliably fire a native hashchange for same-pathname hash links, so
  // catch the click directly and re-run the scroll once the URL has updated.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest('a[href*="#"]') as HTMLAnchorElement | null
      if (!anchor) return

      let url: URL
      try {
        url = new URL(anchor.href, window.location.href)
      } catch {
        return
      }

      if (url.pathname === window.location.pathname && url.hash) {
        requestAnimationFrame(() => requestAnimationFrame(scrollToHashOrTop))
      }
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return null
}

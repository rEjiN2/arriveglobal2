'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import styles from './ScrambleButton.module.css'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

interface ScrambleButtonProps {
  href: string
  text: string
}

export function ScrambleButton({ href, text }: ScrambleButtonProps) {
  const [displayText, setDisplayText] = useState(text)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  function scramble() {
    if (intervalRef.current) return

    let iteration = 0
    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((letter, index) => {
            if (letter === ' ') return ' '
            if (index < iteration) return text[index]
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join('')
      )

      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current)
        intervalRef.current = null
        setDisplayText(text)
      }

      iteration += 1 / 3
    }, 30)
  }

  return (
    <Link href={href} className={styles.btn} onMouseEnter={scramble}>
      {displayText}
    </Link>
  )
}

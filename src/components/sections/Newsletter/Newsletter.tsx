'use client'

import { useState, type FormEvent } from 'react'
import { useNewsletter } from '@/hooks/useNewsletter'
import { cn } from '@/lib/utils/cn'
import styles from './Newsletter.module.css'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const { status, message, subscribe } = useNewsletter()

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email) return
    await subscribe(email)
    if (status !== 'error') setEmail('')
  }

  return (
    <div className={styles.section}>
      <div className={`wrap ${styles.inner}`}>
        <div className={`kicker ${styles.kicker}`}>Stay in the loop</div>
        <h2 className={styles.heading}>First access to new cities.</h2>
        <p className={styles.sub}>New routes, seasonal offers, and the occasional travel note. No noise.</p>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <input
            type="email"
            className={styles.input}
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
          <button
            type="submit"
            className={styles.submitBtn}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending…' : 'Notify me'}
          </button>
        </form>

        {message && (
          <p className={cn(styles.message, status === 'success' ? styles.success : styles.error)}>
            {message}
          </p>
        )}
      </div>
    </div>
  )
}

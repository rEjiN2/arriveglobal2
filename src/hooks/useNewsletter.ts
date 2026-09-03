'use client'

import { useState } from 'react'
import type { ApiResponse } from '@/lib/types'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function useNewsletter() {
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  async function subscribe(email: string): Promise<void> {
    setStatus('loading')
    setMessage('')

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data: ApiResponse = await res.json()

      if (data.success) {
        setStatus('success')
        setMessage("You're in. Watch for new cities.")
      } else {
        throw new Error(data.error ?? 'Something went wrong.')
      }
    } catch (err) {
      setStatus('error')
      setMessage(err instanceof Error ? err.message : 'Please try again.')
    }
  }

  return { status, message, subscribe }
}

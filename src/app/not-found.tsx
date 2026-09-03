import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page not found',
}

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        padding: '80px 40px',
        textAlign: 'center',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-mono), monospace',
          fontSize: '11px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
        }}
      >
        404
      </p>
      <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>Page not found</h1>
      <p style={{ color: 'var(--ink-dim)', maxWidth: '360px' }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        style={{
          background: 'var(--ink)',
          color: '#fff',
          padding: '13px 28px',
          borderRadius: '999px',
          fontWeight: 600,
          fontSize: '14px',
          marginTop: '8px',
        }}
      >
        Back to home
      </Link>
    </div>
  )
}

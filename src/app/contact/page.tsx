import type { Metadata } from 'next'
import { ContactForm } from '@/components/ui/ContactForm/ContactForm'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Contact & Book',
  description: 'Book a ride or get in touch with the Arrives Global dispatch team. Fixed fares, confirmed in minutes.',
}

const CHANNELS = [
  {
    label: 'Email',
    value: 'hello@arrivesglobal.com',
    note: 'For quotes & general enquiries',
    href: 'mailto:hello@arrivesglobal.com',
  },
  {
    label: 'WhatsApp',
    value: '+1 (800) 000-0000',
    note: 'Fastest response, live dispatch',
    href: 'https://wa.me/18000000000',
  },
  {
    label: 'Dispatch hours',
    value: '24 / 7',
    note: 'Live team, always available',
    href: null,
  },
]

export default function ContactPage() {
  return (
    <div className={styles.page}>

      {/* ── Hero + form ── */}
      <section className={styles.hero}>
        <div className="wrap">
          <div className={styles.heroGrid}>

            {/* Left — copy + contact info */}
            <div className={styles.heroLeft}>
              <p className={styles.kicker}>Get in touch</p>
              <h1 className={styles.title}>Book a ride or<br />partner with us.</h1>
              <p className={styles.lead}>
                Our dispatch team is live 24/7. Send us your trip details and we will
                confirm a fixed fare within minutes, no back and forth.
              </p>

              <p className={styles.infoLabel}>Reach us directly</p>

              <div className={styles.channels}>
                {CHANNELS.map((c) => (
                  <div key={c.label} className={styles.channel}>
                    <span className={styles.channelLabel}>{c.label}</span>
                    {c.href ? (
                      <a href={c.href} className={styles.channelValue}>{c.value}</a>
                    ) : (
                      <span className={styles.channelValue}>{c.value}</span>
                    )}
                    <span className={styles.channelNote}>{c.note}</span>
                  </div>
                ))}
              </div>

              <div className={styles.whatToExpect}>
                <p className={styles.expectTitle}>What happens next</p>
                <ul className={styles.expectList}>
                  <li>We review your trip details</li>
                  <li>We send you a fixed fare quote</li>
                  <li>You confirm, no payment until booking is locked</li>
                  <li>Your chauffeur is assigned and briefed</li>
                </ul>
              </div>

              <div className={styles.responseTime}>
                <span className={styles.responseDot} />
                <span>Response within <strong>15 min</strong> during business hours</span>
              </div>
            </div>

            {/* Right — form */}
            <div className={styles.heroRight}>
              <div className={styles.formCard}>
                <p className={styles.formCardTitle}>Send a booking request</p>
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

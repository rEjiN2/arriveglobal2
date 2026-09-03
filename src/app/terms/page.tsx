import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Terms & Conditions — Arrives Global',
  description: 'Terms and conditions for using Arrives Global private chauffeur services.',
}

export default function TermsPage() {
  return (
    <main className={styles.main}>
      <div className={`wrap ${styles.inner}`}>
        <nav className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Terms &amp; Conditions</span>
        </nav>

        <header className={styles.header}>
          <div className="kicker">Legal</div>
          <h1>Terms &amp; Conditions</h1>
          <p className={styles.updated}>Last updated: January 2026</p>
        </header>

        <article className={styles.body}>
          <section>
            <h2>1. Introduction</h2>
            <p>
              Welcome to Arrives Global (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;).
              These Terms and Conditions govern your use of our private chauffeur services,
              website, and any related platforms. By booking a service or using our website,
              you agree to be bound by these terms in full. If you disagree with any part,
              you must not use our services.
            </p>
          </section>

          <section>
            <h2>2. Booking &amp; Reservations</h2>
            <p>
              All bookings are subject to availability and are confirmed only upon receipt of
              a written or electronic confirmation from Arrives Global. We reserve the right
              to refuse or cancel any booking at our sole discretion. Fare estimates provided
              at the time of booking are fixed unless the journey materially deviates from the
              agreed itinerary.
            </p>
          </section>

          <section>
            <h2>3. Cancellation Policy</h2>
            <p>
              Cancellations made more than 24 hours before the scheduled pickup time are
              eligible for a full refund. Cancellations within 24 hours but more than
              6 hours prior to pickup will incur a 50% charge. Cancellations within
              6 hours of the scheduled pickup, or no-shows, will be charged in full.
            </p>
          </section>

          <section>
            <h2>4. Passenger Conduct</h2>
            <p>
              Passengers are expected to conduct themselves in a manner that is respectful
              to the chauffeur and the vehicle. We reserve the right to terminate a journey
              without refund if a passenger&rsquo;s behaviour is deemed unsafe, abusive, or
              otherwise unacceptable. Smoking, alcohol consumption, and carrying prohibited
              substances are strictly forbidden.
            </p>
          </section>

          <section>
            <h2>5. Liability</h2>
            <p>
              Arrives Global carries appropriate professional liability insurance.
              However, we are not liable for loss, damage, or injury arising from
              circumstances beyond our reasonable control, including but not limited to
              traffic delays, severe weather, or acts of third parties. Passengers&rsquo;
              personal property remains their own responsibility at all times.
            </p>
          </section>

          <section>
            <h2>6. Intellectual Property</h2>
            <p>
              All content on the Arrives Global website — including text, graphics, logos,
              and software — is the property of Arrives Global and is protected by applicable
              intellectual property laws. You may not reproduce, distribute, or create
              derivative works without our express written consent.
            </p>
          </section>

          <section>
            <h2>7. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the United Arab Emirates.
              Any disputes arising from these Terms shall be subject to the exclusive
              jurisdiction of the courts of Sharjah, UAE.
            </p>
          </section>

          <section>
            <h2>8. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. The date at the top of this page
              indicates when they were last revised. Continued use of our services after any
              changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2>9. Contact</h2>
            <p>
              For questions about these Terms, please{' '}
              <Link href="/contact">contact us</Link>.
            </p>
          </section>
        </article>
      </div>
    </main>
  )
}

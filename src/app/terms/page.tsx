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
          <p className={styles.updated}>Last updated: September 2026</p>
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
              <strong>Standard Policy:</strong> Free cancellations up to 24 hours prior to
              the scheduled service. Exact conditions depend on your selected location,
              service type, and vehicle class.
            </p>
            <p>
              <strong>Special Events:</strong> Standard cancellation windows may be altered
              during high-demand event periods.
            </p>
            <p>
              Please always verify the exact terms and conditions attached to the official
              quote sent by our reservations team before confirming your booking.
            </p>
          </section>

          <section>
            <h2>4. Chauffeur Details</h2>
            <p>
              Chauffeur names and contact information are typically shared 24 hours prior
              to your service, depending on the location and booking date. Please note that
              these details are subject to change at short notice, based on operational
              dispatch adjustments.
            </p>
            <p>
              If you require chauffeur details earlier — for security clearance or peace of
              mind — we are happy to provide them well in advance upon request.
            </p>
          </section>

          <section>
            <h2>5. Payment to Chauffeurs</h2>
            <p>
              Chauffeurs are strictly prohibited from accepting direct payments from clients
              or guests at any point. All bookings, extensions, and financial transactions
              must be handled directly through the company.
            </p>
            <p>
              Guests and clients are not permitted to make direct service arrangements with
              the chauffeur; all scheduling updates must go through our official
              reservations team.
            </p>
            <p>
              While direct business transactions are strictly prohibited, guests are
              welcome to offer a voluntary tip to their chauffeur as a gesture of gratitude
              for excellent service.
            </p>
          </section>

          <section>
            <h2>6. Liability</h2>
            <p>
              Arrives Global carries appropriate professional liability insurance.
              However, we are not liable for loss, damage, or injury arising from
              circumstances beyond our reasonable control, including but not limited to
              traffic delays, severe weather, or acts of third parties. Passengers&rsquo;
              personal property remains their own responsibility at all times.
            </p>
          </section>

          <section>
            <h2>7. Intellectual Property</h2>
            <p>
              All content on the Arrives Global website — including text, graphics, logos,
              and software — is the property of Arrives Global and is protected by applicable
              intellectual property laws. You may not reproduce, distribute, or create
              derivative works without our express written consent.
            </p>
          </section>

          <section>
            <h2>8. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the United Arab Emirates.
              Any disputes arising from these Terms shall be subject to the exclusive
              jurisdiction of the courts of the UAE.
            </p>
          </section>

          <section>
            <h2>9. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. The date at the top of this page
              indicates when they were last revised. Continued use of our services after any
              changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2>10. Contact</h2>
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

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
            <h2>1. Legal Framework</h2>
            <p>
              In compliance with current regulations, the entity ARRIVES GLOBAL, which operates
              through the internet from this website www.arrivesglobal.com, details below the
              general terms and conditions of contracting the products and/or services offered
              through the same and which generate the rights and obligations of the parties.
            </p>
          </section>

          <section>
            <h2>2. Identification</h2>
            <p>
              These General Terms and Conditions of Contract (hereinafter &ldquo;Terms&rdquo;)
              are intended to regulate the relationship between ARRIVES GLOBAL (hereinafter the
              &ldquo;Provider&rdquo;) and the customers (hereinafter the &ldquo;User&rdquo;)
              regarding all transactions carried out through the online store&rsquo;s website.
            </p>
          </section>

          <section>
            <h2>3. The Customer</h2>
            <p>
              A customer is understood to be the internet user who acquires this condition by
              accessing the website, being responsible for the accuracy of the personal data
              provided to the provider.
            </p>
          </section>

          <section>
            <h2>4. Acceptance</h2>
            <p>By accepting these Terms, the customer declares:</p>
            <ul>
              <li>That they are a person with the capacity to contract according to current regulations.</li>
              <li>That they have read and accept these Terms.</li>
            </ul>
          </section>

          <section>
            <h2>5. Booking &amp; Reservations</h2>
            <p>
              All bookings are subject to availability and are confirmed only upon receipt of
              a written or electronic confirmation from Arrives Global. We reserve the right
              to refuse or cancel any booking at our sole discretion. Fare estimates provided
              at the time of booking are fixed unless the journey materially deviates from the
              agreed itinerary.
            </p>
          </section>

          <section>
            <h2>6. Cancellation Policy</h2>
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
            <h2>7. Chauffeur Details</h2>
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
            <h2>8. Payment to Chauffeurs</h2>
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
            <h2>9. Purpose of the Contract</h2>
            <p>
              This contract aims to regulate the contractual relationship of purchase and sale
              between the provider and the user at the moment the user accepts the purchase
              during the online contracting process through the mechanisms set out below. The
              contractual purchase relationship entails the delivery, in exchange for a
              determined and publicly displayed price through the website, of one or several
              specific products. Each of these products may be subject to specific regulations
              through their particular contracting conditions, which will be detailed in the
              warranty, returns, withdrawal section, or in the product&rsquo;s technical sheet,
              due to the different formats in which the products are marketed, their
              packaging, or their own nature.
            </p>
          </section>

          <section>
            <h2>10. Liability</h2>
            <p>
              Arrives Global carries appropriate professional liability insurance.
              However, we are not liable for loss, damage, or injury arising from
              circumstances beyond our reasonable control, including but not limited to
              traffic delays, severe weather, or acts of third parties. Passengers&rsquo;
              personal property remains their own responsibility at all times.
            </p>
          </section>

          <section>
            <h2>11. Intellectual Property</h2>
            <p>
              All content on the Arrives Global website — including text, graphics, logos,
              and software — is the property of Arrives Global and is protected by applicable
              intellectual property laws. You may not reproduce, distribute, or create
              derivative works without our express written consent.
            </p>
          </section>

          <section>
            <h2>12. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the United Arab Emirates.
              Any disputes arising from these Terms shall be subject to the exclusive
              jurisdiction of the courts of the UAE.
            </p>
          </section>

          <section>
            <h2>13. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. The date at the top of this page
              indicates when they were last revised. Continued use of our services after any
              changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2>14. Contact</h2>
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

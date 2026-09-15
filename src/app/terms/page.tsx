import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Terms & Conditions: Arrives Global',
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
              ARRIVES GLOBAL LLC shall not be held responsible for loss or inconvenience
              arising from delays in journey durations attributable to traffic or weather
              conditions, or a breakdown of another vehicle (for the avoidance of doubt, a
              breakdown of a vehicle that does not belong to ARRIVES GLOBAL LLC).
            </p>
          </section>

          <section>
            <h2>6. Cancellation Policy</h2>
            <p>
              ARRIVES GLOBAL LLC shall communicate the applicable cancellation policies to the
              User in writing at the time of issuing the quotation.
            </p>
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
              Chauffeur names and contact details are typically provided within 24 hours
              to the scheduled service, depending on the destination and booking date.
              Please note that these details may be subject to change at short notice due to
              operational or dispatch requirements.
            </p>
            <p>
              Should you require chauffeur details in advance for security clearance or
              personal reassurance, we will be pleased to provide them earlier upon request,
              subject to operational availability.
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
            <h2>9. Chauffeur and Transfers</h2>
            <p>
              The Vehicle may only be driven by the assigned Chauffeur, and no other person
              is permitted to operate it.
            </p>
            <p>
              In the event of a vehicle breakdown, ARRIVES GLOBAL LLC will use its best
              efforts to arrange a suitable replacement vehicle at the earliest possible
              opportunity, ensuring the prompt continuation of the Services.
            </p>
            <p>
              The User acknowledges and agrees that the Chauffeur reserves the absolute right
              to refuse transportation to any Passenger who is under the influence of drugs
              or alcohol and whose behaviour reasonably poses a risk or threat to the
              Chauffeur, the Vehicle, or any other Passenger.
            </p>
            <p>
              ARRIVES GLOBAL LLC reserves the right to instruct the Chauffeur to refuse the
              carriage of any luggage that, in the Chauffeur&rsquo;s reasonable opinion, is
              excessive in weight or volume.
            </p>
            <p>
              The User shall be responsible for and shall indemnify ARRIVES GLOBAL LLC
              against any damage caused by a Passenger to the interior or exterior of the
              Vehicle. The Buyer shall also be liable for any additional cleaning or valet
              costs incurred where a Passenger causes the Vehicle to be left in a condition
              below its standard of cleanliness at the time of pick-up, excluding normal
              wear and tear or any damage caused by ARRIVES GLOBAL LLC. All applicable
              charges shall be paid by the User within thirty (30) days of the date of a
              valid invoice issued by ARRIVES GLOBAL LLC, without set-off or deduction.
            </p>
          </section>

          <section>
            <h2>10. Gratuities</h2>
            <p>
              Gratuities for guides, drivers, porters, camp staff, ship crew and Tour
              Managers are not included and are at the discretion of the traveller.
            </p>
          </section>

          <section>
            <h2>11. Liability</h2>
            <p>
              ARRIVES GLOBAL carries appropriate professional liability insurance.
              However, we are not liable for loss, damage, or injury arising from
              circumstances beyond our reasonable control, including but not limited to
              traffic delays, severe weather, or acts of third parties. Passengers&rsquo;
              personal property remains their own responsibility at all times.
            </p>
          </section>

          <section>
            <h2>12. Intellectual Property</h2>
            <p>
              All content on the ARRIVES GLOBAL website, including text, graphics, logos,
              and software, is the property of ARRIVES GLOBAL and is protected by applicable
              intellectual property laws. You may not reproduce, distribute, or create
              derivative works without our express written consent.
            </p>
          </section>

          <section>
            <h2>13. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the United Arab Emirates.
              Any disputes arising from these Terms shall be subject to the exclusive
              jurisdiction of the courts of the UAE.
            </p>
          </section>

          <section>
            <h2>14. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. The date at the top of this page
              indicates when they were last revised. Continued use of our services after any
              changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2>15. Contact</h2>
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

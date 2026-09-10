import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Privacy Policy: Arrives Global',
  description: 'How Arrives Global collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
  return (
    <main className={styles.main}>
      <div className={`wrap ${styles.inner}`}>
        <nav className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Privacy Policy</span>
        </nav>

        <header className={styles.header}>
          <div className="kicker">Legal</div>
          <h1>Privacy Policy</h1>
          <p className={styles.updated}>Last updated: January 2026</p>
        </header>

        <article className={styles.body}>
          <section>
            <h2>1. Overview</h2>
            <p>
              ARRIVES GLOBAL (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;)
              is committed to protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your personal information when you use
              our services or visit our website.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <p>We may collect the following categories of personal information:</p>
            <ul>
              <li>
                <strong>Identity &amp; Contact:</strong> name, email address, phone number,
                country of residence.
              </li>
              <li>
                <strong>Booking Data:</strong> pickup/drop-off locations, travel dates,
                vehicle preferences, and special requests.
              </li>
              <li>
                <strong>Payment Information:</strong> processed securely by our payment
                providers; we do not store card details.
              </li>
              <li>
                <strong>Usage Data:</strong> IP address, browser type, pages visited, and
                referral source via cookies and analytics tools.
              </li>
            </ul>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <p>We use your personal information to:</p>
            <ul>
              <li>Confirm, manage, and fulfil your bookings.</li>
              <li>Process payments and send receipts.</li>
              <li>Communicate service updates, changes, or disruptions.</li>
              <li>Send relevant offers and newsletters (only with your consent).</li>
              <li>Improve our website, services, and customer experience.</li>
              <li>Comply with applicable legal and regulatory obligations.</li>
            </ul>
          </section>

          <section>
            <h2>4. Sharing Your Information</h2>
            <p>
              We do not sell your personal data. We may share it with trusted third parties
              solely to deliver our services, for example, chauffeurs, payment processors,
              and analytics providers, all of whom are contractually bound to handle your
              data securely and in accordance with applicable law.
            </p>
          </section>

          <section>
            <h2>5. Cookies</h2>
            <p>
              Our website uses cookies and similar technologies to improve functionality and
              analyse traffic. You may configure your browser to refuse cookies, though
              certain features of the site may not function correctly as a result.
            </p>
          </section>

          <section>
            <h2>6. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary to fulfil the purposes
              described in this Policy, or as required by applicable law. Booking records
              are typically retained for up to 7 years for accounting and legal compliance.
            </p>
          </section>

          <section>
            <h2>7. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of your data (&ldquo;right to be forgotten&rdquo;).</li>
              <li>Withdraw consent to marketing communications at any time.</li>
              <li>Lodge a complaint with a supervisory authority.</li>
            </ul>
            <p>
              To exercise any of these rights, please{' '}
              <Link href="/contact">contact us</Link>.
            </p>
          </section>

          <section>
            <h2>8. Security</h2>
            <p>
              We implement appropriate technical and organisational measures to protect
              your personal data against unauthorised access, alteration, disclosure, or
              destruction. No transmission over the internet is 100% secure; we endeavour
              to use commercially reasonable means to protect your information.
            </p>
          </section>

          <section>
            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. The date at the top reflects
              the latest revision. We encourage you to review this page when you visit to
              stay informed of any changes.
            </p>
          </section>

          <section>
            <h2>10. Contact</h2>
            <p>
              If you have any questions or concerns about this Policy, please{' '}
              <Link href="/contact">contact us</Link>.
            </p>
          </section>
        </article>
      </div>
    </main>
  )
}

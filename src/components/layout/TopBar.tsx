import { Phone, Mail, ChevronDown } from 'lucide-react'
import { IconBrandFacebook, IconBrandInstagram, IconBrandWhatsapp } from '@tabler/icons-react'
import styles from './TopBar.module.css'

const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61594081861634', Icon: IconBrandFacebook },
  { label: 'Instagram', href: 'https://www.instagram.com/arrivesglobal/', Icon: IconBrandInstagram },
  { label: 'WhatsApp', href: 'https://wa.me/971502550577', Icon: IconBrandWhatsapp },
]

export function TopBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.social}>
        {SOCIAL_LINKS.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={styles.socialLink}
          >
            <Icon size={14} stroke={1.75} />
          </a>
        ))}
      </div>

      <div className={styles.right}>
        <button type="button" className={styles.lang} aria-label="Select language">
          EN
          <ChevronDown size={13} strokeWidth={2.25} />
        </button>

        <a href="tel:+971502550577" className={styles.link} aria-label="Call +971 50 255 0577">
          <Phone size={13} strokeWidth={2.25} />
          <span className={styles.linkText}>+971 50 255 0577</span>
        </a>

        <a
          href="mailto:reservations@arrivesglobal.com"
          className={styles.link}
          aria-label="Email reservations@arrivesglobal.com"
        >
          <Mail size={13} strokeWidth={2.25} />
          <span className={styles.linkText}>reservations@arrivesglobal.com</span>
        </a>
      </div>
    </div>
  )
}

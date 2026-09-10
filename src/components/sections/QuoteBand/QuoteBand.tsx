import styles from './QuoteBand.module.css'

interface QuoteBandProps {
  quote: string
  attribution: string
}

export function QuoteBand({ quote, attribution }: QuoteBandProps) {
  return (
    <div className={styles.band}>
      <div className={`wrap ${styles.inner}`}>
        <blockquote className={styles.quote}>&ldquo;{quote}&rdquo;</blockquote>
        <cite className={styles.cite}>{attribution}</cite>
      </div>
    </div>
  )
}

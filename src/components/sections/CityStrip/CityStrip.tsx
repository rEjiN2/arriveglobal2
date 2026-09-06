import { CITIES } from '@/lib/constants/cities'
import styles from './CityStrip.module.css'

const COLUMNS = 6

export function CityStrip() {
  const n = CITIES.length
  // Keep roughly a 3s dwell per city regardless of how many cities are in the list.
  const CYCLE_SECONDS = n * 3

  return (
    <div className={styles.wrapper}>
      <div className="wrap">
        <p className={`kicker ${styles.kicker}`}>
          <span className={styles.liveDot} />
          Live dispatch board
        </p>
      </div>

      <div className={styles.board}>
        {Array.from({ length: COLUMNS }, (_, col) => (
          <div className={styles.column} key={col}>
            <div className={styles.flip}>
              {CITIES.map((city, i) => {
                const slot = (i - col + n) % n
                const delay = -((slot / n) * CYCLE_SECONDS)
                return (
                  <div
                    key={city.name}
                    className={styles.face}
                    style={{ animationDelay: `${delay}s`, animationDuration: `${CYCLE_SECONDS}s` }}
                  >
                    <span className={styles.faceName}>{city.name}</span>
                    <span className={styles.faceCode}>{city.code}</span>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

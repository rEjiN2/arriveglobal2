'use client'

import { useState } from 'react'
import styles from './WorldMap.module.css'

interface RoutePoint {
  lat: number
  lng: number
  /** Persistent floating tag — use sparingly, only for a handful of highlighted hubs. */
  label?: string
  /** Fallback name shown only in the hover tooltip, for dots without a persistent label. */
  name?: string
}

interface WorldMapProps {
  dots?: Array<{ start: RoutePoint; end: RoutePoint }>
  lineColor?: string
}

export function WorldMap({ dots = [], lineColor = '#c9a227' }: WorldMapProps) {
  const [hovered, setHovered] = useState<string | null>(null)

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360)
    const y = (90 - lat) * (400 / 180)
    return { x, y }
  }

  return (
    <div className={styles.map}>
      <img src="/world-dots.svg" className={styles.mapImg} alt="" draggable={false} />

      <svg viewBox="0 0 800 400" className={styles.overlay} preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="ag-glow">
            <feMorphology operator="dilate" radius="0.5" />
            <feGaussianBlur stdDeviation="1" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng)
          const endPoint = projectPoint(dot.end.lat, dot.end.lng)

          return (
            <g key={`points-${i}`}>
              {([
                ['start', startPoint, dot.start.label, dot.start.name, 0],
                ['end', endPoint, dot.end.label, dot.end.name, 0.5],
              ] as const).map(([key, point, label, name, pulseBegin]) => (
                <g key={key}>
                  <g
                    onMouseEnter={() => setHovered(label ?? name ?? null)}
                    onMouseLeave={() => setHovered(null)}
                    className={styles.node}
                  >
                    <circle cx={point.x} cy={point.y} r="3" fill={lineColor} filter="url(#ag-glow)" />
                    <circle cx={point.x} cy={point.y} r="3" fill={lineColor} opacity="0.5">
                      <animate attributeName="r" from="3" to="12" dur="2s" begin={`${pulseBegin}s`} repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.6" to="0" dur="2s" begin={`${pulseBegin}s`} repeatCount="indefinite" />
                    </circle>
                  </g>

                  {label && (
                    <g className={styles.labelGroup} style={{ animationDelay: `${0.5 * i + 0.3}s` }}>
                      <foreignObject x={point.x - 50} y={point.y - 35} width="100" height="30">
                        <div className={styles.labelWrap}>
                          <span className={styles.label}>{label}</span>
                        </div>
                      </foreignObject>
                    </g>
                  )}
                </g>
              ))}
            </g>
          )
        })}
      </svg>

      {hovered && <div className={styles.tooltip}>{hovered}</div>}
    </div>
  )
}

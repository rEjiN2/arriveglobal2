'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import DottedMap from 'dotted-map'
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
  animationDuration?: number
}

export function WorldMap({ dots = [], lineColor = '#c9a227', animationDuration = 2 }: WorldMapProps) {
  const [hovered, setHovered] = useState<string | null>(null)

  const map = useMemo(() => new DottedMap({ height: 100, grid: 'diagonal' }), [])

  const svgMap = useMemo(
    () =>
      map.getSVG({
        radius: 0.22,
        color: '#e8cc6a33',
        shape: 'circle',
        backgroundColor: '#17181b',
      }),
    [map],
  )

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360)
    const y = (90 - lat) * (400 / 180)
    return { x, y }
  }

  const createCurvedPath = (start: { x: number; y: number }, end: { x: number; y: number }) => {
    const midX = (start.x + end.x) / 2
    const midY = Math.min(start.y, end.y) - 50
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`
  }

  const staggerDelay = 0.3
  const totalAnimationTime = dots.length * staggerDelay + animationDuration
  const pauseTime = 2
  const fullCycleDuration = totalAnimationTime + pauseTime

  return (
    <div className={styles.map}>
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className={styles.mapImg}
        alt=""
        draggable={false}
      />

      <svg viewBox="0 0 800 400" className={styles.overlay} preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="ag-path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>

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

          const startTime = (i * staggerDelay) / fullCycleDuration
          const endTime = (i * staggerDelay + animationDuration) / fullCycleDuration
          const resetTime = totalAnimationTime / fullCycleDuration

          return (
            <g key={`path-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#ag-path-gradient)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 0, 1, 1, 0] }}
                transition={{
                  duration: fullCycleDuration,
                  times: [0, startTime, endTime, resetTime, 1],
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatDelay: 0,
                }}
              />

              <motion.circle
                r="4"
                fill={lineColor}
                initial={{ offsetDistance: '0%', opacity: 0 }}
                animate={{
                  offsetDistance: [null as unknown as string, '0%', '100%', '100%', '100%'],
                  opacity: [0, 0, 1, 0, 0],
                }}
                transition={{
                  duration: fullCycleDuration,
                  times: [0, startTime, endTime, resetTime, 1],
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatDelay: 0,
                }}
                style={{ offsetPath: `path('${createCurvedPath(startPoint, endPoint)}')` }}
              />
            </g>
          )
        })}

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
                  <motion.g
                    onHoverStart={() => setHovered(label ?? name ?? null)}
                    onHoverEnd={() => setHovered(null)}
                    className={styles.node}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <circle cx={point.x} cy={point.y} r="3" fill={lineColor} filter="url(#ag-glow)" />
                    <circle cx={point.x} cy={point.y} r="3" fill={lineColor} opacity="0.5">
                      <animate attributeName="r" from="3" to="12" dur="2s" begin={`${pulseBegin}s`} repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.6" to="0" dur="2s" begin={`${pulseBegin}s`} repeatCount="indefinite" />
                    </circle>
                  </motion.g>

                  {label && (
                    <motion.g
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 * i + 0.3, duration: 0.5 }}
                      className={styles.labelGroup}
                    >
                      <foreignObject x={point.x - 50} y={point.y - 35} width="100" height="30">
                        <div className={styles.labelWrap}>
                          <span className={styles.label}>{label}</span>
                        </div>
                      </foreignObject>
                    </motion.g>
                  )}
                </g>
              ))}
            </g>
          )
        })}
      </svg>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={styles.tooltip}
          >
            {hovered}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

'use client'

import type { LeafletMouseEvent } from 'leaflet'
import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import styles from './WorldMap.module.css'

const HOVER_COLOR = '#e8cc6a'

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
  if (dots.length === 0) return null

  const hq = dots[0].start
  const destinations = dots.map((d) => d.end)

  return (
    <div className={styles.map}>
      <MapContainer
        center={[hq.lat, hq.lng]}
        zoom={2}
        minZoom={1}
        maxZoom={7}
        scrollWheelZoom={false}
        worldCopyJump
        className={styles.leaflet}
        attributionControl={false}
      >
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}"
          attribution='Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
        />

        <CircleMarker
          center={[hq.lat, hq.lng]}
          radius={7}
          pathOptions={{ color: lineColor, fillColor: lineColor, fillOpacity: 1, weight: 2 }}
          eventHandlers={{
            mouseover: (e: LeafletMouseEvent) => {
              const layer = e.target
              layer.bringToFront()
              layer.setRadius(10)
              layer.setStyle({ weight: 3, color: HOVER_COLOR, fillColor: HOVER_COLOR })
            },
            mouseout: (e: LeafletMouseEvent) => {
              const layer = e.target
              layer.setRadius(7)
              layer.setStyle({ weight: 2, color: lineColor, fillColor: lineColor })
            },
          }}
        >
          <Tooltip direction="top" offset={[0, -6]} permanent className={styles.leafletTooltip}>
            {hq.name}
          </Tooltip>
        </CircleMarker>

        {destinations.map((point, i) => (
          <CircleMarker
            key={i}
            center={[point.lat, point.lng]}
            radius={4}
            pathOptions={{ color: lineColor, fillColor: lineColor, fillOpacity: 0.85, weight: 1 }}
            eventHandlers={{
              mouseover: (e: LeafletMouseEvent) => {
                const layer = e.target
                layer.bringToFront()
                layer.setRadius(8)
                layer.setStyle({ weight: 2, fillOpacity: 1, color: HOVER_COLOR, fillColor: HOVER_COLOR })
              },
              mouseout: (e: LeafletMouseEvent) => {
                const layer = e.target
                layer.setRadius(4)
                layer.setStyle({ weight: 1, fillOpacity: 0.85, color: lineColor, fillColor: lineColor })
              },
            }}
          >
            <Tooltip direction="top" offset={[0, -4]} permanent className={styles.leafletTooltip}>
              {point.label ?? point.name}
            </Tooltip>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  )
}

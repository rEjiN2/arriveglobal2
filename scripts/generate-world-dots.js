// Regenerates public/world-dots.svg — the dotted world map background used by
// WorldMap.tsx. Precomputed at build time (rather than in the browser) since
// generating this SVG is a heavy synchronous operation; run this script again
// only if the map's resolution or colors need to change.
const fs = require('fs')
const path = require('path')
const DottedMap = require('dotted-map').default

const map = new DottedMap({ height: 100, grid: 'diagonal' })
const svg = map.getSVG({
  radius: 0.22,
  color: '#e8cc6a33',
  shape: 'circle',
  backgroundColor: '#17181b',
})

const outPath = path.join(__dirname, '..', 'public', 'world-dots.svg')
fs.writeFileSync(outPath, svg)
console.log(`Wrote ${outPath} (${(svg.length / 1024).toFixed(1)} KB)`)

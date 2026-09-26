import { motion } from 'framer-motion'
const O = [[200,80],[304,140],[304,260],[200,320],[96,260],[96,140]]
const I = [[200,140],[252,170],[252,230],[200,260],[148,230],[148,170]]
const S = { fill:'none', stroke:'#2f6bff', strokeLinejoin:'round' }
const Wire = ({ o = 1, w = 1.2 }) => (
  <g opacity={o} strokeWidth={w} {...S}>
    <path d="M200 80L304 140L304 260L200 320L96 260L96 140Z" />
    <path d="M96 140L200 200L304 140M200 200V320" />
  </g>
)
export default function Cube() {
  return (
    <svg viewBox="0 0 400 400" className="cube" role="img" aria-label="Abstract wireframe cube representing digital architecture">
      <defs><radialGradient id="glow"><stop offset="0" stopColor="#2f6bff" stopOpacity=".35" /><stop offset="1" stopColor="#2f6bff" stopOpacity="0" /></radialGradient></defs>
      <circle cx="200" cy="200" r="190" fill="url(#glow)" opacity=".5" />
      <ellipse cx="200" cy="350" rx="150" ry="34" {...S} strokeOpacity=".25" strokeDasharray="3 6" />
      <motion.g animate={{ y: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}>
        <path d="M200 80L304 140L200 200L96 140Z" fill="#2f6bff" fillOpacity=".12" />
        <path d="M200 200L304 140L304 260L200 320Z" fill="#fff" fillOpacity=".03" />
        <Wire />
        <g transform="translate(100 100) scale(.5)"><Wire o={0.9} w={2} /></g>
        {O.map((p, i) => <line key={i} x1={p[0]} y1={p[1]} x2={I[i][0]} y2={I[i][1]} stroke="#2f6bff" strokeOpacity=".5" strokeDasharray="2 4" />)}
        {O.map((p, i) => <circle key={'c' + i} cx={p[0]} cy={p[1]} r="3" fill="#5b8dff" />)}
      </motion.g>
    </svg>
  )
}

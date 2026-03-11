import { TAG_COLORS } from '../data'

export default function Tag({ label }) {
  const color = TAG_COLORS[label] ?? '#888'

  return (
    <span className="tag" style={{ color, backgroundColor: `${color}20`, borderColor: `${color}40` }}>
      {label}
    </span>
  )
}
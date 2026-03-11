import { useState } from 'react'
import "../styles/Skillcard.css"

export default function SkillCard({ skill }) {
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`skill-card ${open ? 'open' : ''} ${hovered ? 'hovered' : ''}`}
      onClick={() => setOpen(o => !o)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="skill-glow" />
      <div className="skill-header">
        <span className="skill-icon">{skill.icon}</span>
        <span className="skill-title">{skill.title}</span>
        <span className="skill-close">✕</span>
      </div>
      <div className="skill-description-wrapper">
        <p className="skill-description">{skill.description}</p>
      </div>
    </div>
  )
}
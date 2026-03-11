import { useState } from "react"
import Tag from "./Tag"
import "../styles/Projectcard.css"

export default function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`project-card ${hovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="project-header">
        <h3>{project.title}</h3>
        <span className="project-year">{project.year}</span>
      </div>

      <p className="project-description">{project.description}</p>

      <div className="project-tags">
        {project.tags.map(tag => <Tag key={tag} label={tag} />)}
      </div>

      {project.github && (
        <a href={project.github} target="_blank" rel="noreferrer" className="project-github">
          <img src="src/assets/github.png" alt="GitHub" width="16" height="16" style={{ paddingRight: "4px" }} />
          View on GitHub
        </a>
      )}
    </div>
  )
}
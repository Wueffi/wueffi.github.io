import { useState, useEffect } from "react"
import { SKILLS, PROJECTS, ALL_FILTERS } from "./data"
import SkillCard from "./components/Skillcard.jsx"
import ProjectCard from "./components/Projectcard.jsx"
import "./App.css"

function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scroll = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className={scrolled ? "nav nav-scrolled" : "nav"}>
      <div className="nav-container">
        <img src="src/assets/icon.png" width="32px" height="32px" class="logo" />
        <div className="nav-links">
          <button onClick={() => scroll("about")}>About Me</button>
          <button onClick={() => scroll("skills")}>Skills</button>
          <button onClick={() => scroll("projects")}>Projects</button>
        </div>
      </div>
    </nav>
  )
}

export default function App() {
  const [filter, setFilter] = useState("All")

  const filtered =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter(p => p.tags.includes(filter))

  return (
    <div className="app">

      <Nav />

      <section id="about" className="hero">
        <p className="small">Aspiring professional developer</p>

        <h1>Wueffi</h1>

        <p className="description">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>

        <div className="links">
          <a href="https://github.com/Wueffi" target="_blank">
            <img src="src/assets/github.png" alt="GitHub" width="16" height="16" style={{ paddingRight: "5px" }} />
            GitHub
          </a>
          <a href="mailto:wafflr450@gmail.com">
            <img src="src/assets/email.png" alt="Email" width="16" height="16" style={{ paddingRight: "5px" }} />
            Email
          </a>
        </div>
        
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="skills-grid">
          {SKILLS.map(skill => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="filters">
          {ALL_FILTERS.map(f => (
            <button
              key={f}
              className={filter === f ? "active" : ""}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map(project => (
            <div key={project.id} className="fade">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <span>Made with Vite + React</span>
        <span>{new Date().getFullYear()}</span>
      </footer>

    </div>
  )
}
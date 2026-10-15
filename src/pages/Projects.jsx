import Icon from "../components/Icon.jsx";
import { Reveal, Shot, SplitTitle } from "../components/Motion.jsx";
import { PROJECTS } from "../data/projects.js";
import { HireMe } from "./Home.jsx";

function Project({ project, index }) {
  const [main, second] = project.shots;

  return (
    <article id={project.id} className="project" aria-labelledby={`${project.id}-title`}>
      <Reveal className="project-media">
        <Shot {...main} ratio="16 / 10" caption={project.title} className="shot--main" />
        <Shot {...second} ratio="4 / 3" caption={project.title} className="shot--float" />
      </Reveal>

      <Reveal className="project-body" delay={0.1}>
        <span className="project-num">{String(index + 1).padStart(2, "0")} / {project.kind}</span>
        <h2 id={`${project.id}-title`}>{project.title}</h2>
        <p className="project-role">{project.role}</p>
        <div className="prose">
          <p>{project.summary}</p>
          <p>{project.detail}</p>
        </div>
        <ul className="tags">
          {project.stack.map((item) => (
            <li key={item} className="tag">
              {item}
            </li>
          ))}
        </ul>
        <div className="project-actions">
          <a className="btn btn--primary" href={project.live} target="_blank" rel="noopener noreferrer">
            visit site <Icon name="up" />
          </a>
          {project.source && (
            <a className="btn btn--ghost" href={project.source} target="_blank" rel="noopener noreferrer">
              source code <Icon name="code" />
            </a>
          )}
        </div>
      </Reveal>
    </article>
  );
}

export default function Projects() {
  return (
    <>
      <section className="page-hero" aria-labelledby="projects-title">
        <div className="container">
          <span className="eyebrow">projects</span>
          <SplitTitle id="projects-title" text="selected work" tag="h1" className="page-title" />
          <p className="lead">
            {PROJECTS.length} projects, from café pages and a full-stack shop to a hackathon flood-alert app. each
            one was designed with care and shipped to the web.
          </p>
          <nav className="project-index" aria-label="Jump to a project">
            {PROJECTS.map((project, i) => (
              <a key={project.id} className="tag tag--link" href={`#${project.id}`}>
                <span>{String(i + 1).padStart(2, "0")}</span> {project.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="section section--flush-top">
        <div className="container project-list">
          {PROJECTS.map((project, i) => (
            <Project key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>

      <HireMe />
    </>
  );
}

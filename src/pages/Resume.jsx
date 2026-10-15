import Icon from "../components/Icon.jsx";
import { Reveal, SplitTitle } from "../components/Motion.jsx";
import {
  ACHIEVEMENTS,
  CAREER_OBJECTIVE,
  CERTIFICATIONS,
  EDUCATION,
  EXPERIENCE,
  FEATURED_PROJECTS,
  PROFILE,
  SKILLS,
} from "../data/resume.js";
import { LINKEDIN_URL, RESUME_PDF } from "../data/site.js";

function SheetSection({ title, children, className = "" }) {
  return (
    <section className={`sheet-section ${className}`}>
      <h2 className="sheet-heading">{title}</h2>
      {children}
    </section>
  );
}

function ContactRow() {
  const items = [
    { icon: "pin", label: PROFILE.location },
    { icon: "phone", label: PROFILE.phone, href: PROFILE.phoneHref },
    { icon: "mail", label: PROFILE.email, href: `mailto:${PROFILE.email}` },
    ...(LINKEDIN_URL ? [{ icon: "linkedin", label: "mikaella teopaco", href: LINKEDIN_URL }] : []),
  ];

  return (
    <ul className="sheet-contact">
      {items.map((item) => (
        <li key={item.icon}>
          <Icon name={item.icon} />
          {item.href ? <a href={item.href}>{item.label}</a> : <span>{item.label}</span>}
        </li>
      ))}
    </ul>
  );
}

function Entry({ years, title, subtitle, points = [], isCurrent = false }) {
  return (
    <article className={`sheet-entry${isCurrent ? " is-current" : ""}`}>
      <div className="sheet-entry-head">
        <h3>{title}</h3>
        <time>{years}</time>
      </div>
      {subtitle && <p className="sheet-entry-sub">{subtitle}</p>}
      {points.length > 0 && (
        <ul className="sheet-points">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}
    </article>
  );
}

function MainColumn() {
  return (
    <div className="sheet-main">
      <SheetSection title="career objective">
        <p className="sheet-objective">{CAREER_OBJECTIVE}</p>
      </SheetSection>

      <SheetSection title="work experience">
        {EXPERIENCE.map((job) => (
          <Entry
            key={job.title}
            years={job.years}
            title={job.title}
            subtitle={job.org}
            points={job.points}
            isCurrent={job.current}
          />
        ))}
      </SheetSection>

      <SheetSection title="featured projects">
        {FEATURED_PROJECTS.map((project) => (
          <Entry
            key={project.title}
            years={project.years}
            title={project.title}
            subtitle={project.subtitle}
            points={project.points}
          />
        ))}
      </SheetSection>

      <SheetSection title="education">
        {EDUCATION.map((item) => (
          <Entry
            key={item.level}
            years={item.years}
            title={item.school}
            subtitle={item.degree ?? item.level}
            isCurrent={item.current}
          />
        ))}
      </SheetSection>
    </div>
  );
}

function SideColumn() {
  return (
    <aside className="sheet-side">
      <SheetSection title="achievements">
        <ul className="sheet-awards">
          {ACHIEVEMENTS.map((award) => (
            <li key={award.detail}>
              <Icon name="award" />
              <span>
                <strong>{award.title}</strong>
                <small>{award.detail}</small>
              </span>
            </li>
          ))}
        </ul>
      </SheetSection>

      {SKILLS.map((group) => (
        <SheetSection key={group.group} title={group.group}>
          <ul className="tags">
            {group.items.map((item) => (
              <li key={item} className="tag">
                {item}
              </li>
            ))}
          </ul>
        </SheetSection>
      ))}

      <SheetSection title="certifications">
        <dl className="sheet-certs">
          {CERTIFICATIONS.map((group) => (
            <div key={group.issuer}>
              <dt>{group.issuer}</dt>
              {group.items.map((item) => (
                <dd key={item}>{item}</dd>
              ))}
            </div>
          ))}
        </dl>
      </SheetSection>
    </aside>
  );
}

export default function Resume() {
  return (
    <>
      <section className="page-hero no-print" aria-labelledby="resume-title">
        <div className="container">
          <span className="eyebrow">resume</span>
          <SplitTitle id="resume-title" text="resume" tag="h1" className="page-title" />
          <p className="lead">education, experience, skills and certifications, all on one page.</p>
          <div className="hero-actions stack-top">
            <a className="btn btn--primary" href={RESUME_PDF} download="Teopaco_Resume.pdf">
              save as pdf <Icon name="down" />
            </a>
            <a className="btn btn--ghost" href="contact.html">
              get in touch <Icon name="arrow" />
            </a>
          </div>
        </div>
      </section>

      <section className="section section--flush-top resume-section">
        <div className="container">
          <Reveal className="sheet">
            <header className="sheet-header">
              <div>
                <p className="sheet-name">{PROFILE.name}</p>
                <p className="sheet-title">{PROFILE.title}</p>
              </div>
              <ContactRow />
            </header>
            <div className="sheet-body">
              <MainColumn />
              <SideColumn />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

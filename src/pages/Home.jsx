import Icon, { Sparkle } from "../components/Icon.jsx";
import { Badge, HeroCards, Reveal, Rotator, Shot, SplitTitle } from "../components/Motion.jsx";
import { PROJECTS } from "../data/projects.js";
import { TOOLBOX } from "../data/site.js";

const HERO_IMAGES = [
  { src: "assets/img/mika3.jpg", alt: "close-up portrait of kael" },
  { src: "assets/img/mika1.jpg", alt: "kael in a formal portrait" },
  { src: "assets/img/mika2.jpg", alt: "kael in front of a polka-dot wall" },
];

const ROTATING_WORDS = ["minimal interfaces", "cozy café websites", "online shops", "type-first layouts"];
const STICKER_TINTS = ["pink", "", "green", "", "sage", "", "pink"];
const STICKER_TILTS = [-3, 2, -1, 3, -2, 1, -3];

const FEATURED_IDS = ["monsoon-ai", "dropify", "einsteins-art"];
const featured = (id) => PROJECTS.find((project) => project.id === id);

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div>
          <p className="hero-hello">hey there, i'm</p>
          <SplitTitle id="hero-title" text="kael" tag="h1" className="hero-name" />
          <p className="lead">
            a ui/ux designer &amp; front-end developer. i design and build{" "}
            <span className="rotator-line">
              <Rotator words={ROTATING_WORDS} />
            </span>
            with a soft spot for fun fonts and tidy code.
          </p>
          <div className="hero-actions">
            <a className="btn btn--primary" href="projects.html">
              see my work <Icon name="arrow" />
            </a>
            <a className="btn btn--ghost" href="background.html">
              view resume <Icon name="arrow" />
            </a>
          </div>
          <ul className="hero-meta">
            <li>
              <span className="dot" aria-hidden="true" />
              bs information technology, holy angel university
            </li>
            <li>dean's list awardee</li>
          </ul>
        </div>

        <div className="hero-visual">
          <HeroCards images={HERO_IMAGES} />
          <Badge text="ui/ux design · front-end · fonts · " label="say hi to kael" href="contact.html" />
          <Sparkle style={{ "--size": "26px", top: "4%", right: "8%" }} />
          <Sparkle style={{ "--size": "16px", top: "16%", right: "2%", "--c": "var(--sage)", "--d": "1.2s" }} />
        </div>
      </div>
    </section>
  );
}

function WorkCard({ project, index, size }) {
  const shot = project.shots[0];

  return (
    <article className={`work-card work-card--${size}`}>
      <a className="work-link" href={`projects.html#${project.id}`}>
        <Shot {...shot} ratio="16 / 11" caption="see the project" />
        <div className="work-meta">
          <div>
            <h3>{project.title}</h3>
            <p>
              {project.kind} · {project.stack.slice(0, 2).join(", ")}
            </p>
          </div>
          <span className="work-index">{String(index).padStart(2, "0")}</span>
        </div>
      </a>
    </article>
  );
}

function SelectedWork() {
  const rest = PROJECTS.filter((project) => !FEATURED_IDS.includes(project.id));

  return (
    <section className="section section--tint" aria-labelledby="work-title">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <span className="eyebrow">selected work</span>
            <h2 id="work-title" className="title">
              a few things <em>i've made</em>
            </h2>
          </div>
          <a className="text-link" href="projects.html">
            all projects <Icon name="arrow" />
          </a>
        </Reveal>

        <div className="work-grid">
          <Reveal className="work-cell work-cell--wide">
            <WorkCard project={featured("monsoon-ai")} index={1} size="wide" />
          </Reveal>
          <Reveal className="work-cell work-cell--narrow" delay={0.1}>
            <WorkCard project={featured("dropify")} index={2} size="narrow" />
          </Reveal>
          <Reveal className="work-cell work-cell--narrow">
            <WorkCard project={featured("einsteins-art")} index={3} size="narrow" />
          </Reveal>
          <Reveal className="work-cell work-cell--wide" delay={0.1}>
            <div className="more-work">
              <span className="eyebrow">also on the shelf</span>
              <ul className="more-list">
                {rest.map((project) => (
                  <li key={project.id}>
                    <a href={`projects.html#${project.id}`}>
                      <span>
                        <strong>{project.title}</strong>
                        <small>
                          {project.kind} · {project.stack.join(", ")}
                        </small>
                      </span>
                      <Icon name="arrow" />
                    </a>
                  </li>
                ))}
              </ul>
              <p className="more-note">every project here was designed in figma first, then built and shipped by me.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function AboutStrip() {
  return (
    <section className="section" aria-labelledby="about-title">
      <div className="container about-strip">
        <Reveal>
          <figure className="polaroid">
            <img src="assets/img/pfp.jpg" alt="kael smiling, wearing glasses" width="1400" height="788" loading="lazy" />
            <figcaption>that's me!</figcaption>
          </figure>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="eyebrow">about me</span>
          <h2 id="about-title" className="title">
            curious about design, <em>careful</em> with code
          </h2>
          <blockquote className="pull-quote">
            my confidence swings between “this works well!” and “is this even working???” and i've learned to love
            that process.
          </blockquote>
          <div className="prose">
            <p>
              i enjoy turning ideas into simple, functional interfaces. i think from the user's side first,
              collaborate thoughtfully, and care more about growing with every project than chasing perfection.
            </p>
          </div>
          <p className="stack-top">
            <a className="text-link" href="about.html">
              more about me <Icon name="arrow" />
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Toolbox() {
  return (
    <section className="section section--tint" aria-labelledby="tools-title">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <span className="eyebrow">toolbox</span>
            <h2 id="tools-title" className="title">
              what i <em>work with</em>
            </h2>
          </div>
        </Reveal>
        <div className="toolbox">
          {TOOLBOX.map((group, groupIndex) => (
            <Reveal key={group.title} className="tool-group" delay={groupIndex * 0.1}>
              <h3>{group.title}</h3>
              <p>{group.note}</p>
              <ul className="tags">
                {group.items.map((item, i) => {
                  const tint = STICKER_TINTS[(i + groupIndex) % STICKER_TINTS.length];
                  return (
                    <li
                      key={item}
                      className={`sticker${tint ? ` sticker--${tint}` : ""}`}
                      style={{ "--rot": `${STICKER_TILTS[(i + groupIndex * 2) % STICKER_TILTS.length]}deg` }}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HireMe() {
  return (
    <section className="section" aria-labelledby="cta-title">
      <div className="container">
        <Reveal className="cta-band">
          <span className="blob blob--1" aria-hidden="true" />
          <span className="blob blob--2" aria-hidden="true" />
          <div>
            <h2 id="cta-title">hire me!</h2>
            <p>have a website, a redesign or a small graphics job in mind? send me a message, i'd love to hear about it.</p>
          </div>
          <a className="btn btn--light" href="contact.html">
            say hello <Icon name="arrow" />
          </a>
          <Sparkle style={{ "--size": "22px", top: "18%", right: "32%", "--c": "var(--pink-soft)" }} />
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <AboutStrip />
      <Toolbox />
      <HireMe />
    </>
  );
}

import Icon from "../components/Icon.jsx";
import { Badge, Reveal, SplitTitle } from "../components/Motion.jsx";
import { CAREER_OBJECTIVE, SKILLS } from "../data/resume.js";
import { HireMe } from "./Home.jsx";

const VALUES = [
  { title: "empathy", text: "i design from the user's side of the screen first, then make it pretty." },
  { title: "patience", text: "good details take iteration. i'd rather refine than rush." },
  { title: "clear communication", text: "no mystery progress: you'll always know what's done and what's next." },
];

export default function About() {
  return (
    <>
      <section className="page-hero" aria-labelledby="about-title">
        <div className="container">
          <span className="eyebrow">about</span>
          <SplitTitle id="about-title" text="hi, i'm kael" tag="h1" className="page-title" />
          <p className="lead">a front-end developer and ui/ux designer who loves minimal, intuitive interfaces and cool, fun fonts.</p>
        </div>
      </section>

      <section className="section section--flush-top">
        <div className="container about-grid">
          <Reveal className="about-photo">
            <figure className="polaroid">
              <img src="assets/img/pfp.jpg" alt="kael smiling, wearing glasses" width="1400" height="788" />
              <figcaption>kael, probably fixing a margin</figcaption>
            </figure>
            <Badge text="designer · developer · type nerd · " label="contact kael" href="contact.html" />
          </Reveal>

          <div>
            <Reveal className="prose prose--lg">
              <p>
                hi there! i'm kael, a <strong>front-end developer and ui/ux designer</strong> who enjoys creating
                minimal and intuitive digital experiences. i have a strong eye for design, and i love finding and
                working with cool, fun and minimal fonts.
              </p>
              <p>
                i approach both design and code with curiosity and care, enjoying the process of turning ideas into
                simple, functional interfaces. my confidence sometimes swings between “this works well!” and “is this
                even working???” — and i've learned to value that process: experimenting, refining details, and
                improving with every project.
              </p>
              <p>
                beyond technical skills, i value empathy, patience and clear communication. i enjoy thinking from the
                user's perspective, collaborating thoughtfully, and building at my own pace, focusing on growth more
                than chasing perfection.
              </p>
            </Reveal>

            <Reveal className="objective">
              <span className="eyebrow">career objective</span>
              <blockquote className="pull-quote">{CAREER_OBJECTIVE}</blockquote>
            </Reveal>

            <div className="values">
              {VALUES.map((value, i) => (
                <Reveal key={value.title} className="value" delay={i * 0.08}>
                  <span className="num">0{i + 1}</span>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </Reveal>
              ))}
            </div>

            <Reveal className="skills-block">
              <h2 className="title title--sm">
                skills &amp; <em>tools</em>
              </h2>
              <dl className="skills-list">
                {SKILLS.map((group) => (
                  <div key={group.group}>
                    <dt>{group.group}</dt>
                    <dd>
                      <ul className="tags">
                        {group.items.map((item) => (
                          <li key={item} className="tag">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="hero-actions stack-top">
                <a className="btn btn--primary" href="projects.html">
                  see my work <Icon name="arrow" />
                </a>
                <a className="btn btn--ghost" href="background.html">
                  view resume <Icon name="arrow" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <HireMe />
    </>
  );
}

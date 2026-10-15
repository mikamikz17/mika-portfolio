// Resume content, from the client's notes + "TEOPACO_OJT_RESUME" pdf (Oct 2026).

export const PROFILE = {
  name: "mikaella d. teopaco",
  title: "frontend developer | ui/ux designer",
  // Client asked for no street or house number on the site.
  location: "angeles city, pampanga, philippines",
  phone: "+63 906 845 3112",
  phoneHref: "tel:+639068453112",
  email: "mikadteopaco@gmail.com",
};

export const CAREER_OBJECTIVE =
  "a design-focused and detail-oriented web developer passionate about transforming ideas into seamless, visually engaging, and user-centered digital experiences. aspiring to grow as a frontend ui/ux developer by combining thoughtful design, clean development practices, and creativity into impactful solutions.";

export const EDUCATION = [
  {
    years: "2023 – 2027",
    school: "holy angel university",
    level: "college",
    degree: "bachelor in information technology, specializing in web development",
    current: true,
  },
  { years: "2021 – 2023", school: "holy angel university", level: "senior high school" },
  { years: "2017 – 2021", school: "holy angel university", level: "junior high school" },
  { years: "2010 – 2016", school: "aldersgate ecumenical school", level: "elementary" },
];

export const ACHIEVEMENTS = [
  { title: "dean's list awardee", detail: "2nd semester, academic year 2025 – 2026" },
  { title: "dean's list awardee", detail: "1st semester, academic year 2025 – 2026" },
  { title: "dean's list awardee", detail: "2nd semester, academic year 2024 – 2025" },
];

export const FEATURED_PROJECTS = [
  {
    title: "asian hackathon for green future",
    subtitle: "monsoon ai, a household-level flood-alert app",
    years: "april 2026 – present",
    points: [
      "designed intuitive, user-centered ui/ux solutions aligned with user needs and project goals",
      "conducted user research and usability analysis to guide interface improvements",
      "helped define system requirements by combining research insights with functional and visual design",
    ],
  },
  {
    title: "dropify",
    years: "october 2025 – november 2025",
    points: [
      "developed a full-stack web application on the mevn stack with a focus on intuitive ui/ux",
      "designed responsive, visually engaging interfaces backed by mongodb, express.js, vue.js and node.js",
    ],
  },
  {
    title: "einstein's art website",
    years: "november 2025 – march 2026",
    points: [
      "designed and developed a clean, accessible static website with angular",
      "built responsive layouts and intuitive interactions, deployed on netlify",
    ],
  },
];

// Set to true once the client confirms these entries should be shown.
// They are dated 2027 onward, which is still in the future.
const SHOW_PROJECTED_ROLES = false;

const PROJECTED_ROLES = [
  {
    years: "2028 – present",
    title: "freelance designer & developer",
    org: "commission work: graphics, front-end and font design",
    points: [],
  },
  {
    years: "2027 – 2028",
    title: "ui/ux designer",
    org: "front-end development company",
    points: [],
  },
];

export const EXPERIENCE = [
  ...(SHOW_PROJECTED_ROLES ? PROJECTED_ROLES : []),
  {
    years: "2026",
    title: "intern",
    org: "bb88 advertising & digital solutions inc.",
    current: !SHOW_PROJECTED_ROLES,
    points: [],
  },
  {
    years: "2024 – 2027",
    title: "student & intern",
    org: "studying and internship era",
    points: [
      "built and deployed minimal static websites using html, css and javascript",
      "focused on clean design, thoughtful typography and cohesive color palettes",
      "used github and github pages for version control and hosting",
      "improved projects through iteration, debugging and layout refinement",
    ],
  },
];

export const SKILLS = [
  {
    group: "tech skills",
    items: [
      "ui/ux design",
      "wireframing and prototyping",
      "responsive web design",
      "typography and visual hierarchy",
      "graphic designing",
    ],
  },
  {
    group: "tools & technology",
    items: ["figma", "html", "css", "git and github"],
  },
  {
    group: "soft skills",
    items: [
      "creative problem solving",
      "communication and collaboration",
      "adaptability and time management",
      "attention to detail",
    ],
  },
];

export const CERTIFICATIONS = [
  {
    issuer: "amazon web services",
    items: ["amazon web services certification (2026)"],
  },
  {
    issuer: "canva design school",
    items: ["graphic design essentials (2026)", "create scroll stopping content (2026)"],
  },
  {
    issuer: "simplilearn",
    items: [
      "introduction to graphic design: basics of ui/ux (2025)",
      "introduction to figma",
      "design thinking for beginners",
      "website ui/ux designing using chatgpt",
    ],
  },
  {
    issuer: "hubspot academy",
    items: ["digital marketing certification (2025)", "content marketing", "digital advertising certification"],
  },
  {
    issuer: "freecodecamp",
    items: [
      "responsive web design (2024)",
      "back end development and apis v8",
      "legacy javascript algorithms and data structures v7",
    ],
  },
  {
    issuer: "google developer student clubs",
    items: ["creating a seamless future with ui/ux (2024)"],
  },
  {
    issuer: "coursera project network",
    items: ["work with components in figma (2024)"],
  },
];

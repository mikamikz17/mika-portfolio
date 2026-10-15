// Shared content for every page. Edit text here, not in the components.
import { PROFILE } from "./resume.js";

export const NAV_LINKS = [
  { key: "home", label: "home", href: "index.html" },
  { key: "about", label: "about", href: "about.html" },
  { key: "resume", label: "resume", href: "background.html" },
  { key: "projects", label: "projects", href: "projects.html" },
  { key: "contact", label: "contacts", href: "contact.html" },
];

export const EMAIL = PROFILE.email;

// The client's own resume file (TEOPACO_OJT_RESUME.pdf), served as-is.
export const RESUME_PDF = "assets/Teopaco_Resume.pdf";

export const LINKEDIN_URL = "https://www.linkedin.com/in/mikaella-teopaco-930361350";

export const SOCIALS = [
  { key: "email", label: "email", handle: EMAIL, href: `mailto:${EMAIL}`, icon: "mail" },
  { key: "phone", label: "phone", handle: PROFILE.phone, href: PROFILE.phoneHref, icon: "phone" },
  { key: "linkedin", label: "linkedin", handle: "mikaella teopaco", href: LINKEDIN_URL, icon: "linkedin" },
  { key: "github", label: "github", handle: "@mikamikz17", href: "https://github.com/mikamikz17", icon: "github" },
  { key: "facebook", label: "facebook", handle: "mikasa0016", href: "https://www.facebook.com/mikasa0016/", icon: "facebook" },
];

// Links that open in the same tab (mail, phone).
export const isExternal = (href) => href.startsWith("http");

export const TOOLBOX = [
  {
    title: "design",
    note: "wireframes, prototypes & type",
    items: ["ui/ux design", "figma", "wireframing", "prototyping", "typography", "graphic design"],
  },
  {
    title: "build",
    note: "responsive, accessible front-ends",
    items: ["html", "css", "javascript", "vue", "angular", "node.js", "mongodb"],
  },
  {
    title: "ship",
    note: "versioning & putting it online",
    items: ["git", "github", "github pages", "netlify"],
  },
];

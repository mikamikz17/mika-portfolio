import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./components/Layout.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Resume from "./pages/Resume.jsx";
import "./styles/styles.css";

// Each HTML file sets <body data-page="..."> so the old URLs (about.html, etc.) keep working.
const PAGES = {
  home: Home,
  about: About,
  resume: Resume,
  projects: Projects,
  contact: Contact,
};

const page = document.body.dataset.page ?? "home";
const Page = PAGES[page] ?? Home;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Layout page={page}>
      <Page />
    </Layout>
  </StrictMode>,
);

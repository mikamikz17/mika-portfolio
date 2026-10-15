import { useEffect, useRef, useState } from "react";
import { NAV_LINKS, SOCIALS, isExternal } from "../data/site.js";

function Logo() {
  return (
    <a className="logo" href="index.html" aria-label="kael, home">
      <span>k</span>
      <span>a</span>
      <span>e</span>
      <span>l</span>
    </a>
  );
}

function Header({ page }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const onClick = (event) => {
      if (!toggleRef.current?.contains(event.target) && !navRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };
    const onKey = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
      <div className="container header-inner">
        <Logo />
        <button
          ref={toggleRef}
          className="nav-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="site-nav"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="bars" aria-hidden="true" />
          menu
        </button>
        <nav aria-label="Main">
          <ul id="site-nav" ref={navRef} className={`pill-nav${isOpen ? " is-open" : ""}`}>
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <a className="pill" href={link.href} aria-current={link.key === page ? "page" : undefined}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

const YEAR = new Date().getFullYear();

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Logo />
            <p className="footer-tagline">
              ui/ux designer &amp; front-end developer, making good designs to distract you from loading time.
            </p>
          </div>
          <div>
            <h2>pages</h2>
            <ul>
              {NAV_LINKS.filter((link) => link.key !== "home").map((link) => (
                <li key={link.key}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>elsewhere</h2>
            <ul>
              {SOCIALS.map((social) => (
                <li key={social.key}>
                  <a href={social.href} target={isExternal(social.href) ? "_blank" : undefined} rel="noopener noreferrer">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {YEAR} kael. designed in figma, built by hand.</span>
          <span className="accent">thanks for scrolling this far</span>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ page, children }) {
  return (
    <>
      <a className="skip-link" href="#main">
        skip to content
      </a>
      <Header page={page} />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}

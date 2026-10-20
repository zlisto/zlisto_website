import { NavLink } from "react-router-dom";
import { useEffect, useState, type ReactNode } from "react";

const links = [
  { to: "/teaching", label: "Teaching" },
  { to: "/research", label: "Research" },
  { to: "/publications", label: "Publications" },
  { to: "/metaverse", label: "Metaverse" },
  { to: "/consulting", label: "Consulting" },
];

export function Layout({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
            <span className="brand-dot" aria-hidden />
            Tauhid Zaman
          </NavLink>
          <button
            className="nav-toggle"
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav className={`nav-links${open ? " open" : ""}`} aria-label="Primary">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) => (isActive ? "active" : undefined)}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main className="page">{children}</main>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h2>Contact</h2>
            <div className="socials">
              <a href="mailto:tauhid.zaman@yale.edu" aria-label="Email" title="Email">
                ✉
              </a>
              <a
                href="https://scholar.google.com/citations?user=SA6zXVIAAAAJ&hl=en"
                target="_blank"
                rel="noreferrer"
                aria-label="Google Scholar"
              >
                GS
              </a>
              <a href="https://twitter.com/zlisto" target="_blank" rel="noreferrer" aria-label="X">
                𝕏
              </a>
            </div>
            <p className="footer-meta">© Tauhid Zaman {new Date().getFullYear()}</p>
          </div>
          <img className="footer-logo" src="/assets/brand/yale-logo.svg" alt="Yale" />
        </div>
      </footer>
    </>
  );
}

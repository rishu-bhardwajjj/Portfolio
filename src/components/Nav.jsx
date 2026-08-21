import { useState, useEffect } from "react";
import { NAV_LINKS, RESUME_PDF } from "../data.js";
import { useActiveSection } from "../hooks.js";

export default function Nav() {
  const ids = NAV_LINKS.map((l) => l.id);
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header
      className={
        "fixed top-0 inset-x-0 z-50 transition-all " +
        (scrolled ? "bg-ink/85 backdrop-blur border-b border-hair" : "bg-transparent")
      }
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-semibold text-lg tracking-tight">
          RB<span className="text-gold">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={"#" + l.id}
              className={
                "font-mono text-xs tracking-widest uppercase transition-colors " +
                (active === l.id ? "text-gold" : "text-muted hover:text-fg")
              }
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={RESUME_PDF}
          download="Rishabh_Bhardwaj_resume.pdf"
          className="hidden md:inline-flex items-center gap-2 font-mono text-xs tracking-wide border border-gold/40 text-gold rounded-full px-4 py-2 hover:bg-gold hover:text-ink transition-colors"
        >
          Résumé ↓
        </a>

        <button onClick={() => setOpen((o) => !o)} className="md:hidden text-fg" aria-label="Toggle menu">
          <div className="w-6 flex flex-col gap-1.5">
            <span className={"h-px bg-fg transition-transform " + (open ? "translate-y-2 rotate-45" : "")}></span>
            <span className={"h-px bg-fg transition-opacity " + (open ? "opacity-0" : "")}></span>
            <span className={"h-px bg-fg transition-transform " + (open ? "-translate-y-2 -rotate-45" : "")}></span>
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-panel border-t border-hair px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={"#" + l.id}
              onClick={() => setOpen(false)}
              className="font-mono text-sm text-muted hover:text-fg uppercase tracking-widest"
            >
              {l.label}
            </a>
          ))}
          <a href={RESUME_PDF} download="Rishabh_Bhardwaj_resume.pdf" className="font-mono text-sm text-gold uppercase tracking-widest">
            Download résumé ↓
          </a>
        </div>
      )}
    </header>
  );
}

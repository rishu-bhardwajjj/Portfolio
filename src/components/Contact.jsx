import { Eyebrow } from "./UI.jsx";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 border-t border-hair overflow-hidden">
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-teal/10 blur-[120px]"></div>
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 text-center">
        <Eyebrow n="07">Contact</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl mx-auto leading-tight">
          Let's build something worth querying.
        </h2>
        <p className="text-muted mt-5 max-w-md mx-auto">
          Open to Software Engineer roles across data, AI/ML and full-stack. Based in Noida, India.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:rishabhbhardwajjj@gmail.com"
            className="font-mono text-xs tracking-wide bg-gold text-ink rounded-full px-6 py-3.5 hover:bg-goldd transition-colors"
          >
            rishabhbhardwajjj@gmail.com
          </a>
          <a
            href="tel:+919519570632"
            className="font-mono text-xs tracking-wide border border-hair rounded-full px-6 py-3.5 hover:border-teal/50 hover:text-teal transition-colors"
          >
            +91 95195 70632
          </a>
          <a
            href="https://www.linkedin.com/in/rishabh-bhardwajjj/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-wide border border-hair rounded-full px-6 py-3.5 hover:border-teal/50 hover:text-teal transition-colors"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 mt-24 pt-8 border-t border-hair flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[11px] text-muted">© 2026 Rishabh Bhardwaj. Built with React.</p>
        <p className="font-mono text-[11px] text-muted">Noida, Uttar Pradesh, India</p>
      </div>
    </section>
  );
}

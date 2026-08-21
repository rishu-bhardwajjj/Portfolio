import { PROJECTS } from "../data.js";
import { Eyebrow, Tag } from "./UI.jsx";

function ProjectCard({ p, i }) {
  return (
    <div className="group relative rounded-2xl border border-hair bg-panel/60 p-7 md:p-8 hover:border-gold/40 transition-colors">
      <span className="font-mono text-xs text-muted">0{i + 1}</span>
      <h3 className="font-display text-xl md:text-2xl font-semibold mt-2 mb-3 group-hover:text-gold transition-colors">
        {p.name}
      </h3>
      <p className="text-muted text-sm leading-relaxed mb-4">{p.desc}</p>
      <ul className="space-y-2 mb-6">
        {p.bullets.map((b, idx) => (
          <li key={idx} className="text-fg/80 text-sm leading-relaxed flex gap-2.5">
            <span className="text-teal mt-1 shrink-0">▹</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-28 border-t border-hair">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Eyebrow n="03">Projects</Eyebrow>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-14">
          Things I've shipped on the side.
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.name} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

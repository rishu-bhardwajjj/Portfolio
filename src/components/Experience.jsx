import { EXPERIENCE } from "../data.js";
import { Eyebrow, Tag } from "./UI.jsx";

function ExperienceCard({ item, last }) {
  return (
    <div className="relative pl-12 md:pl-16 pb-14 last:pb-0">
      {!last && (
        <span className="absolute left-[13px] md:left-[17px] top-3 bottom-0 w-px bg-gradient-to-b from-teal/50 via-hair to-transparent"></span>
      )}
      <span
        className={
          "absolute left-0 md:left-1 top-1 w-7 h-7 rounded-full border flex items-center justify-center " +
          (item.current ? "border-teal bg-teal/10" : "border-hair bg-panel")
        }
      >
        <span className={"w-2 h-2 rounded-full " + (item.current ? "bg-teal" : "bg-muted")}></span>
      </span>

      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
        <h3 className="font-display text-xl md:text-2xl font-semibold">{item.role}</h3>
        <span className="font-mono text-xs text-teal">{item.period}</span>
      </div>
      <p className="text-muted text-sm mb-4">{item.org} — {item.type}</p>

      <ul className="space-y-2.5 mb-5">
        {item.bullets.map((b, i) => (
          <li key={i} className="text-fg/85 text-[15px] leading-relaxed flex gap-3">
            <span className="text-gold mt-1.5 shrink-0">▹</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {item.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-28 border-t border-hair bg-panel/30">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Eyebrow n="02">Experience</Eyebrow>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-14">
          The pipeline so far.
        </h2>
        <div className="max-w-3xl">
          {EXPERIENCE.map((item, idx) => (
            <ExperienceCard key={item.org} item={item} last={idx === EXPERIENCE.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

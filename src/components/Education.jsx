import { EDUCATION, ACHIEVEMENTS } from "../data.js";
import { Eyebrow } from "./UI.jsx";

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-28 border-t border-hair">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-14">
        <div className="md:col-span-6">
          <Eyebrow n="05">Education</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-10">Grounding.</h2>
          <div className="space-y-7">
            {EDUCATION.map((e) => (
              <div key={e.degree} className="flex items-start justify-between gap-4 border-b border-hair pb-6 last:border-none">
                <div>
                  <h3 className="font-display text-lg font-semibold">{e.school}</h3>
                  <p className="text-muted text-sm mt-1">{e.degree} · {e.place}</p>
                  <p className="font-mono text-xs text-teal mt-1.5">{e.period}</p>
                </div>
                <span className="font-mono text-sm text-gold shrink-0">{e.metric}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-6">
          <Eyebrow n="06">Achievements</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-10">Along the way.</h2>
          <ul className="space-y-4">
            {ACHIEVEMENTS.map((a, i) => (
              <li key={i} className="flex gap-4 items-start rounded-xl border border-hair bg-panel/40 px-5 py-4">
                <span className="font-mono text-xs text-gold mt-0.5 shrink-0">0{i + 1}</span>
                <span className="text-fg/85 text-sm leading-relaxed">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

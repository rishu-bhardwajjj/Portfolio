import { SKILLS } from "../data.js";
import { Eyebrow, Tag } from "./UI.jsx";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-28 border-t border-hair bg-panel/30">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Eyebrow n="04">Skills</Eyebrow>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-14">
          The stack, end to end.
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-9">
          {SKILLS.map((group) => (
            <div key={group.label}>
              <p className="font-mono text-[11px] tracking-[0.2em] text-teal uppercase mb-3">{group.label}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

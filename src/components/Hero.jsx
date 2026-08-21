import { PHOTO, QUERY_TEXT } from "../data.js";
import { useTypewriter } from "../hooks.js";

export default function Hero() {
  const { out, done } = useTypewriter(QUERY_TEXT, 26, 600);

  return (
    <section id="top" className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]"></div>
      <div className="absolute -top-24 right-[-10%] w-[520px] h-[520px] rounded-full bg-teal/10 blur-[120px]"></div>
      <div className="absolute top-40 left-[-10%] w-[420px] h-[420px] rounded-full bg-gold/10 blur-[110px]"></div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 md:gap-8 items-center">
        <div className="md:col-span-5 order-2 md:order-1 flex justify-center md:justify-start">
          <div className="relative floaty">
            <div className="absolute -inset-3 rounded-[28px] border border-gold/25"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl border border-teal/30"></div>
            <div className="relative w-64 h-80 md:w-72 md:h-[23rem] rounded-[22px] overflow-hidden border border-hair shadow-2xl shadow-black/50">
              <img src={PHOTO} alt="Rishabh Bhardwaj" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0 bg-panel border border-hair rounded-full pl-2 pr-4 py-1.5 flex items-center gap-2 shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal"></span>
              </span>
              <span className="font-mono text-[11px] text-muted whitespace-nowrap">@ MAQ Software</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 order-1 md:order-2">
          <p className="font-mono text-xs tracking-[0.25em] text-teal uppercase mb-4">Software Engineer · Data &amp; AI/ML</p>
          <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            Rishabh Bhardwaj
          </h1>
          <p className="mt-5 text-muted text-base md:text-lg max-w-xl leading-relaxed">
            I build the pipelines, models and dashboards that turn raw, large-scale data into decisions —
            working across SQL, Spark and cloud lakehouses, with an eye for the product on top.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="font-mono text-xs tracking-wide bg-gold text-ink rounded-full px-5 py-3 hover:bg-goldd transition-colors">
              View work →
            </a>
            <a href="#contact" className="font-mono text-xs tracking-wide border border-hair rounded-full px-5 py-3 text-fg hover:border-teal/50 hover:text-teal transition-colors">
              Get in touch
            </a>
          </div>

          <div className="mt-10 max-w-lg rounded-xl border border-hair bg-panel/70 backdrop-blur overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-hair bg-white/[0.02]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e7695c]/70"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#e7b455]/70"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#49d7c2]/70"></span>
              <span className="ml-3 font-mono text-[11px] text-muted">query.sql</span>
            </div>
            <div className="p-4 font-mono text-[13px] leading-relaxed">
              <p className="text-muted">
                <span className="text-teal">{">"}</span> {out}
                <span className="caret text-gold">▍</span>
              </p>
              {done && (
                <div className="mt-4 grid grid-cols-3 gap-3 fade-up">
                  {[
                    { v: "100M+", k: "rows processed" },
                    { v: "+20%", k: "accuracy gain" },
                    { v: "10+", k: "dashboards shipped" },
                  ].map((s) => (
                    <div key={s.k} className="rounded-lg border border-hair bg-white/[0.02] px-3 py-2.5">
                      <div className="text-gold text-base font-semibold">{s.v}</div>
                      <div className="text-muted text-[10px] mt-0.5 leading-tight">{s.k}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

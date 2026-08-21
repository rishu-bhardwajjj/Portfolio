import { Eyebrow } from "./UI.jsx";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-28 border-t border-hair">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <Eyebrow n="01">About</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
            From raw rows<br />to real decisions.
          </h2>
        </div>
        <div className="md:col-span-8">
          <p className="text-lg md:text-xl text-fg/90 leading-relaxed">
            I'm a Computer Science graduate with hands-on experience across the data stack — data engineering,
            AI/ML development and business intelligence. I've processed and validated large-scale datasets,
            built predictive models, and designed interactive dashboards that help teams act on what the data
            actually says.
          </p>
          <p className="mt-5 text-muted leading-relaxed">
            Day to day that means SQL, Spark and cloud lakehouse platforms upstream, and Power BI downstream —
            with a working fluency in full-stack development (React, Spring Boot, Java) that lets me ship the
            product around the data, not just the pipeline behind it. Currently based in Noida, India, and
            open to Software Engineer roles.
          </p>

          <div className="mt-9 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { v: "2026", k: "B.E. CSE, graduating" },
              { v: "500+", k: "problems solved" },
              { v: "100M+", k: "rows / dataset" },
              { v: "2", k: "roles held" },
            ].map((s) => (
              <div key={s.k}>
                <div className="font-display text-2xl md:text-3xl font-semibold text-gold">{s.v}</div>
                <div className="font-mono text-[11px] text-muted mt-1 leading-snug">{s.k}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

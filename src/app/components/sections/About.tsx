import { CERTIFICATIONS } from "@/app/data/portfolio";
import { FadeIn } from "@/app/components/shared/FadeIn";

export function About() {
  return (
    <section id="about" className="px-6 py-24 md:px-12 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <FadeIn>
            <span className="font-mono-label mb-12 block border-b border-border pb-6 text-xs tracking-[0.2em] text-muted-foreground uppercase">
              About
            </span>
            <p className="mb-6 text-base leading-relaxed font-light text-muted-foreground">
              I graduated with a BSc in Computer Science from Addis Ababa University. 
              Over the past few years, I have built projects across different areas of 
              software development, from desktop applications in C++ to full-stack web 
              applications using Django and Laravel with a focus on writing clean, 
              maintainable, and functional software.
            </p>
            <p className="mb-6 text-base leading-relaxed font-light text-muted-foreground">
              I gained industry experience as a software developer intern in 2025, where I 
              contributed to backend development, collaborated in agile teams, and improved
               my skills in building user-focused, production-ready applications.
            </p>
            <p className="text-base leading-relaxed font-light text-muted-foreground">
              Based in Addis Ababa, I am open to software development opportunities, 
              remote roles, and projects that allow me to continue learning and creating 
              impactful solutions.
            </p>
          </FadeIn>

          <FadeIn delay={100} className="flex flex-col">
            <span className="font-mono-label mb-12 block border-b border-border pb-6 text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Education & Certifications
            </span>

            <div className="mb-2 border border-border bg-card p-6 transition-colors duration-300 hover:border-accent/30">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="mb-1 text-base font-semibold text-foreground">
                    BSc in Computer Science
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Addis Ababa University
                  </div>
                </div>
                <span className="font-mono-label mt-1 shrink-0 text-xs text-muted-foreground tabular-nums">
                  2022 — 2026
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.title}
                  className="group flex items-start justify-between gap-4 border border-border bg-card p-5 transition-all duration-300 hover:border-accent/30 hover:-translate-y-0.5"
                >
                  <div>
                    <div className="mb-1 text-sm font-semibold text-foreground transition-colors duration-200 group-hover:text-accent">
                      {cert.title}
                    </div>
                    <div className="text-xs text-muted-foreground">{cert.org}</div>
                  </div>
                  <span className="font-mono-label mt-1 shrink-0 text-xs text-muted-foreground tabular-nums">
                    {cert.period}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 border border-accent/20 bg-accent/5 p-6 transition-colors duration-300 hover:border-accent/40">
              <div className="mb-3 flex items-center gap-2">
                <div className="h-1.5 w-1.5 bg-accent" aria-hidden />
                <span className="font-mono-label text-xs tracking-widest text-accent uppercase">
                  Experience
                </span>
              </div>
              <div className="mb-1 text-sm font-semibold text-foreground">
                Software Developer Intern
              </div>
              <div className="font-mono-label mb-3 text-xs text-muted-foreground">
                07/2025 — 09/2025
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Built and hosted websites in an agile team environment. Gained
                hands-on backend and database experience while refining coding
                practices under mentorship.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

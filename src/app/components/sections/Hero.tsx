import { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";
import { CONTACT_INFO } from "@/app/data/portfolio";
import { FadeIn } from "@/app/components/shared/FadeIn";

export function Hero() {
  const [typed, setTyped] = useState("");
  const full = "software developer";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(full.slice(0, i + 1));
      i++;
      if (i >= full.length) clearInterval(interval);
    }, 65);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative flex min-h-screen flex-col justify-end px-6 pt-32 pb-20 md:px-12 md:pb-28"
      id="home"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/4 right-0 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="mb-12 grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_auto] md:gap-12">
          <div>
            <h1 className="font-display mb-2 text-[clamp(3rem,12vw,11rem)] leading-none font-extrabold tracking-tighter text-foreground uppercase">
              Nikat Desta
            </h1>
            <h2 className="font-display text-[clamp(1.75rem,6vw,5.5rem)] leading-none font-bold tracking-tighter text-muted-foreground uppercase">
              <span className="text-accent">{typed}</span>
              <span className="animate-pulse" aria-hidden>
                _
              </span>
            </h2>
          </div>

          <FadeIn delay={120} className="flex items-center justify-center md:justify-end">
            <div className="group relative">
              <div
                className="absolute -inset-1 bg-accent/20 opacity-0 blur transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden
              />
              <div className="relative h-44 w-44 overflow-hidden border-2 border-accent/30 bg-card transition-colors duration-300 group-hover:border-accent/60 md:h-56 md:w-56">
                <img
                  src={profilePhoto}
                  alt="Nikat Desta"
                  className="absolute inset-0 h-[130%] w-full object-cover object-top"
                />
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={200}>
          <div className="flex flex-col gap-10 border-t border-border pt-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-lg text-base leading-relaxed font-light text-muted-foreground">
              Computer Science graduate from Addis Ababa University building practical web applications 
              and backend systems. I create solutions ranging from full-stack platforms to REST APIs, 
              always focused on solving real-world problems.
            </p>
            <div className="flex items-center gap-6">
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition-colors duration-200 hover:text-accent"
                aria-label="GitHub profile"
              >
                <Github size={20} />
              </a>
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition-colors duration-200 hover:text-accent"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-muted-foreground transition-colors duration-200 hover:text-accent"
                aria-label="Send email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

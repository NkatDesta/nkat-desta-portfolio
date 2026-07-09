import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { PROJECTS } from "@/app/data/portfolio";
import { FadeIn } from "@/app/components/shared/FadeIn";
import { SectionHeading } from "@/app/components/shared/SectionHeading";

const DESCRIPTION_LIMIT = 160;

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const isLong = project.description.length > DESCRIPTION_LIMIT;
  const displayText =
    expanded || !isLong
      ? project.description
      : `${project.description.slice(0, DESCRIPTION_LIMIT).trim()}…`;

  return (
    <FadeIn delay={index * 80}>
      <article
        className="group flex h-full flex-col border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_30px_rgba(212,255,58,0.08)] md:p-8"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <span className="font-mono-label text-xs tracking-[0.15em] text-accent uppercase">
            {project.category}
          </span>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-all duration-200 hover:text-accent"
            aria-label={`View ${project.title} on GitHub`}
          >
            <ExternalLink
              size={14}
              style={{
                transform: hovered ? "translate(2px, -2px)" : "translate(0,0)",
              }}
            />
          </a>
        </div>

        {/* <p className="font-mono-label mb-4 text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
          Project Information
        </p> */}

        <dl className="mb-5 space-y-2">
          <div>
            <dt className="font-mono-label text-[10px] tracking-widest text-muted-foreground uppercase">
              Project Title
            </dt>
            <dd className="font-display text-xl font-bold tracking-tight text-foreground uppercase md:text-2xl">
              {project.title}
            </dd>
          </div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <div>
              <dt className="font-mono-label text-[10px] tracking-widest text-muted-foreground uppercase">
                Project Duration
              </dt>
              <dd className="text-sm text-foreground">{project.duration}</dd>
            </div>
            <div>
              <dt className="font-mono-label text-[10px] tracking-widest text-muted-foreground uppercase">
                My Role
              </dt>
              <dd className="text-sm text-foreground">{project.role}</dd>
            </div>
          </div>
        </dl>

        <p className="mb-4 flex-1 text-sm leading-relaxed font-light text-muted-foreground">
          {displayText}
        </p>

        {isLong && (
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="font-mono-label mb-4 self-start text-[10px] tracking-widest text-accent uppercase transition-colors hover:text-foreground"
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        )}

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono-label border border-border px-2.5 py-1 text-[10px] tracking-widest text-muted-foreground uppercase transition-colors duration-200 group-hover:border-accent/30 group-hover:text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </FadeIn>
  );
}

export function Projects() {
  return (
    <section id="work" className="px-6 py-24 md:px-12 md:py-36">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="mb-16">
          <SectionHeading label="Projects" />
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

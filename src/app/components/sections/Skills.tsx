import type { LucideIcon } from "lucide-react";
import { ChevronRight, Code2, Database, Globe, Wrench } from "lucide-react";
import { SKILLS } from "@/app/data/portfolio";
import { FadeIn } from "@/app/components/shared/FadeIn";
import { SectionHeading } from "@/app/components/shared/SectionHeading";

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  Languages: Code2,
  Web: Globe,
  Database: Database,
  Tools: Wrench,
};

export function Skills() {
  return (
    <section
      id="skills"
      className="border-y border-border bg-card px-6 py-24 md:px-12 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn className="mb-16">
          <SectionHeading label="Technical Skills" />
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((group, groupIndex) => {
            const Icon = CATEGORY_ICONS[group.category] ?? Code2;

            return (
              <FadeIn
                key={group.category}
                delay={groupIndex * 60}
                className="flex flex-col border border-border bg-background p-6 transition-colors duration-300 hover:border-accent/30 md:p-8"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center border border-accent/30 bg-accent/5">
                    <Icon size={18} className="text-accent" aria-hidden />
                  </div>
                  <h4 className="font-mono-label text-xs tracking-[0.2em] text-accent uppercase">
                    {group.category}
                  </h4>
                </div>

                <ul className="flex flex-col gap-3" role="list">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                    >
                      <ChevronRight size={10} className="shrink-0 text-accent" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

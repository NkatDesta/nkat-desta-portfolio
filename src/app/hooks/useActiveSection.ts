import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: readonly string[]) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const updateActive = () => {
      if (window.scrollY < 120) {
        setActiveId("");
        return;
      }

      const navOffset = 100;
      let current = "";

      for (const section of sections) {
        const { top } = section.getBoundingClientRect();
        if (top <= navOffset) {
          current = section.id;
        }
      }

      setActiveId(current || sections[0].id);
    };

    const observer = new IntersectionObserver(
      () => updateActive(),
      {
        rootMargin: "-10% 0px -55% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", updateActive, { passive: true });
    updateActive();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateActive);
    };
  }, [sectionIds]);

  return activeId;
}

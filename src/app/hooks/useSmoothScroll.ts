import { useCallback } from "react";

export function useSmoothScroll() {
  return useCallback((targetId: string) => {
    const element = document.getElementById(targetId);
    if (!element) return;

    const navOffset = 72;
    const top = element.getBoundingClientRect().top + window.scrollY - navOffset;

    window.scrollTo({ top, behavior: "smooth" });
  }, []);
}

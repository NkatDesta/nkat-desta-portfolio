import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import cvPdf from "@/imports/Nikat_Desta_cv.pdf";
import { NAV_SECTIONS } from "@/app/data/portfolio";
import { useActiveSection } from "@/app/hooks/useActiveSection";
import { useSmoothScroll } from "@/app/hooks/useSmoothScroll";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const sectionIds = NAV_SECTIONS.map((s) => s.id);
  const activeId = useActiveSection(sectionIds);
  const scrollTo = useSmoothScroll();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (id: string) => {
    scrollTo(id);
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(8,8,8,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid transparent",
        }}
        aria-label="Main navigation"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12">
          <button
            type="button"
            onClick={() => handleNavClick("home")}
            className="font-mono-label text-sm font-medium tracking-widest text-accent transition-colors hover:text-foreground"
            aria-label="Scroll to top"
          >
            ND
          </button>

          <ul className="hidden items-center gap-10 md:flex" role="list">
            {NAV_SECTIONS.map(({ label, id }) => {
              const isActive = activeId === id;
              return (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(id)}
                    className={`font-mono-label relative text-xs tracking-[0.18em] uppercase transition-colors duration-200 ${
                      isActive
                        ? "text-accent"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                    {isActive && (
                      <span
                        className="absolute -bottom-1 left-0 h-px w-full bg-accent"
                        aria-hidden
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={cvPdf}
              download="Nikat_Desta_CV.pdf"
              className="font-mono-label hidden items-center gap-2 border border-border px-4 py-2 text-xs tracking-wider uppercase transition-all duration-200 hover:border-accent hover:text-accent md:flex"
            >
              Download CV <Download size={12} aria-hidden />
            </a>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center border border-border text-foreground transition-colors hover:border-accent hover:text-accent md:hidden"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-background/98 backdrop-blur-md transition-all duration-300 md:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        style={{ top: "64px" }}
        aria-hidden={!mobileOpen}
      >
        <div className="flex flex-col gap-2 px-6 py-8">
          {NAV_SECTIONS.map(({ label, id }) => {
            const isActive = activeId === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => handleNavClick(id)}
                className={`font-display border-b border-border py-4 text-left text-3xl font-bold uppercase tracking-tight transition-colors ${
                  isActive ? "text-accent" : "text-foreground hover:text-accent"
                }`}
              >
                {label}
              </button>
            );
          })}

          <a
            href={cvPdf}
            download="Nikat_Desta_CV.pdf"
            className="font-mono-label mt-6 inline-flex items-center gap-2 border border-border px-4 py-3 text-xs tracking-wider uppercase transition-all hover:border-accent hover:text-accent"
            onClick={() => setMobileOpen(false)}
          >
            Download CV <Download size={12} aria-hidden />
          </a>
        </div>
      </div>
    </>
  );
}

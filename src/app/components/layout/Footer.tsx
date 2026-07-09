import { CONTACT_INFO } from "@/app/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <span className="font-mono-label text-xs text-muted-foreground">
          © 2026 Nikat Desta
        </span>
        <span className="font-mono-label text-xs text-muted-foreground">
          {CONTACT_INFO.location}
        </span>
      </div>
    </footer>
  );
}

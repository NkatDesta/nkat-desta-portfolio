interface SectionHeadingProps {
  label: string;
  meta?: string;
  className?: string;
}

export function SectionHeading({ label, meta, className = "" }: SectionHeadingProps) {
  return (
    <div
      className={`flex items-end justify-between border-b border-border pb-6 ${className}`}
    >
      <span className="font-mono-label text-xs tracking-[0.2em] uppercase text-muted-foreground">
        {label}
      </span>
      {meta && (
        <span className="font-mono-label text-xs text-muted-foreground">{meta}</span>
      )}
    </div>
  );
}

import {
  type ElementType,
  type ReactNode,
  type RefObject,
} from "react";
import { useIntersection } from "@/app/hooks/useIntersection";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
}

export function FadeIn({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: FadeInProps) {
  const { ref, visible } = useIntersection();

  return (
    <Tag
      ref={ref as RefObject<HTMLElement>}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}

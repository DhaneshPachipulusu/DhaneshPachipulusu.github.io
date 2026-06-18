import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

/** Consistent vertical rhythm + scroll anchor for every page section. */
export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`relative scroll-mt-24 py-24 sm:py-28 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}

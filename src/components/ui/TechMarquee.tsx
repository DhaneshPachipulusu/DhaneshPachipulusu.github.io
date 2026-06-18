import { marqueeTech } from "@/lib/data";

/** Infinite horizontal marquee of tech keywords. */
export function TechMarquee() {
  const row = [...marqueeTech, ...marqueeTech];
  return (
    <div className="relative flex w-full overflow-hidden border-y border-border bg-surface/30 py-5 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
      <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
        {row.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="flex items-center gap-3 whitespace-nowrap font-mono text-sm text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

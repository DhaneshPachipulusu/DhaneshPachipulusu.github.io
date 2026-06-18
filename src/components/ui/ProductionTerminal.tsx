"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { terminalGroups } from "@/lib/data";

/* Flatten groups into a reveal sequence so each line animates in order. */
type Row =
  | { kind: "cmd"; text: string }
  | { kind: "line"; label: string; value?: string; ok?: boolean };

const rows: Row[] = terminalGroups.flatMap((g) => [
  { kind: "cmd", text: g.cmd } as Row,
  ...g.lines.map((l) => ({ kind: "line", ...l }) as Row),
]);

export function ProductionTerminal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="glass relative w-full max-w-md overflow-hidden rounded-2xl shadow-glow"
    >
      {/* header */}
      <div className="flex items-center gap-2 border-b border-border bg-surface-2/60 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-xs text-faint">
          production · platform-ops
        </span>
        <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-emerald">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald" />
          </span>
          live
        </span>
      </div>

      {/* body */}
      <div className="space-y-1.5 p-5 font-mono text-[13px] leading-relaxed">
        {rows.map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.18, duration: 0.35 }}
          >
            {row.kind === "cmd" ? (
              <p className="text-fg">
                <span className="text-accent">$</span>{" "}
                <span className="text-muted">{row.text}</span>
              </p>
            ) : (
              <p className="flex items-center gap-2 pl-3 text-faint">
                {row.ok && (
                  <Check className="h-3.5 w-3.5 shrink-0 text-emerald" />
                )}
                <span className="text-muted">{row.label}</span>
                {row.value && (
                  <span className="ml-auto rounded border border-emerald/30 bg-emerald/10 px-1.5 py-0.5 text-[11px] text-emerald">
                    {row.value}
                  </span>
                )}
              </p>
            )}
          </motion.div>
        ))}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ delay: 0.8 + rows.length * 0.18, repeat: Infinity, duration: 1 }}
          className="ml-3 inline-block h-4 w-2 bg-accent align-middle"
        />
      </div>
    </motion.div>
  );
}

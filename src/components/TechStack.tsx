"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Container,
  Boxes,
  Cloud,
  Gauge,
  Activity,
  Server,
  Code2,
  Layers,
  Database,
  Brain,
  Workflow,
  Terminal,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import techData from "@/data/techstack.json";

const iconMap: Record<string, LucideIcon> = {
  container: Container,
  boxes: Boxes,
  cloud: Cloud,
  gauge: Gauge,
  activity: Activity,
  server: Server,
  code2: Code2,
  layers: Layers,
  database: Database,
  brain: Brain,
  workflow: Workflow,
  terminal: Terminal,
};

const levelTone: Record<string, string> = {
  Advanced: "border-emerald/40 bg-emerald/10 text-emerald",
  Proficient: "border-accent/40 bg-accent/10 text-accent",
  Working: "border-amber/40 bg-amber/10 text-amber",
};

export function TechStack() {
  const tech = techData.tech;
  const [hovered, setHovered] = useState<number | null>(null);
  const [active, setActive] = useState<number | null>(null);

  return (
    <Section id="tech-stack">
      <SectionHeading
        eyebrow="Interactive Tech Stack"
        title="Hover any tool for the details"
        description="The technologies I work with — hover (or tap on mobile) to see how I've used each one, where, and at what depth."
      />

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {tech.map((t, i) => {
          const Icon = iconMap[t.icon] ?? Code2;
          const open = hovered === i || active === i;
          return (
            <div
              key={t.key}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setActive((a) => (a === i ? null : i))}
              className="glass card-hover relative h-44 cursor-pointer overflow-hidden rounded-2xl p-5"
            >
              {/* front */}
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2"
                    style={{ color: t.color }}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span
                    className={`rounded-md border px-2 py-0.5 font-mono text-[10px] ${levelTone[t.level] ?? "border-border text-faint"}`}
                  >
                    {t.level}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-fg">{t.name}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-muted">{t.description}</p>
                <span className="mt-auto font-mono text-[11px] text-faint">
                  {open ? "" : "hover for details →"}
                </span>
              </div>

              {/* detail overlay */}
              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex flex-col gap-2 overflow-y-auto bg-surface/95 p-5 backdrop-blur-sm"
                    style={{ borderTop: `2px solid ${t.color}` }}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4" style={{ color: t.color }} />
                      <span className="text-sm font-semibold text-fg">{t.name}</span>
                    </div>
                    <ul className="space-y-1">
                      {t.points.map((p) => (
                        <li key={p} className="flex gap-1.5 text-xs text-muted">
                          <span
                            className="mt-1 h-1 w-1 shrink-0 rounded-full"
                            style={{ background: t.color }}
                          />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto">
                      <p className="font-mono text-[10px] uppercase tracking-wider text-faint">
                        used in
                      </p>
                      <p className="text-xs text-muted">{t.projects.join(" · ")}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

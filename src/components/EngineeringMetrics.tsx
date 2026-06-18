"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Cloud,
  Workflow,
  Container,
  Bot,
  Gauge,
  Server,
  Activity,
  type LucideIcon,
} from "lucide-react";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { Counter } from "./ui/Counter";
import { staggerContainer, staggerItem } from "./ui/Reveal";
import metricsConfig from "@/data/metrics.json";

const iconMap: Record<string, LucideIcon> = {
  rocket: Rocket,
  cloud: Cloud,
  workflow: Workflow,
  container: Container,
  bot: Bot,
  gauge: Gauge,
  server: Server,
  activity: Activity,
};

export function EngineeringMetrics() {
  const metrics = metricsConfig.metrics;

  return (
    <Section id="metrics">
      <SectionHeading
        eyebrow="Engineering Metrics"
        title="By the numbers"
        description="Configurable, honest metrics — driven from a JSON file, animated on scroll."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
      >
        {metrics.map((m) => {
          const Icon = iconMap[m.icon] ?? Activity;
          return (
            <motion.div
              key={m.label}
              variants={staggerItem}
              className="glass card-hover flex flex-col items-center rounded-2xl p-5 text-center"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-accent">
                <Icon className="h-5 w-5" />
              </span>
              <div className="mt-4 text-3xl font-bold tracking-tight text-fg">
                <Counter value={m.value} suffix={m.suffix} />
              </div>
              <p className="mt-1.5 text-xs leading-snug text-muted">{m.label}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}

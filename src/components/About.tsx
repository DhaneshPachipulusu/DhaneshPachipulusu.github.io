"use client";

import { motion } from "framer-motion";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { staggerContainer, staggerItem } from "./ui/Reveal";
import { aboutHighlights, profile } from "@/lib/data";

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About"
        title={
          <>
            From <span className="text-gradient-accent">development</span> to{" "}
            <span className="text-gradient-accent">production</span>
          </>
        }
        description={profile.shortBio}
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        {/* Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-7 lg:sticky lg:top-28"
        >
          <p className="text-lg leading-relaxed text-muted">
            I&apos;m a{" "}
            <span className="font-medium text-fg">DevOps &amp; Backend Engineer</span>{" "}
            with hands-on experience building and deploying production-grade
            applications and AI-powered systems.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            My expertise spans{" "}
            <span className="text-accent">AWS cloud infrastructure</span>, Docker,
            Kubernetes, CI/CD automation, backend development, monitoring,
            observability, and AI integrations. I specialize in taking products
            all the way to production — deployment, scalability, monitoring,
            security, and automation.
          </p>

          <div className="mt-7 grid grid-cols-3 gap-3 border-t border-border pt-6">
            {[
              { k: "Primary", v: "DevOps" },
              { k: "Then", v: "Backend" },
              { k: "Plus", v: "AI Apps" },
            ].map((x) => (
              <div key={x.k}>
                <p className="font-mono text-[11px] uppercase tracking-wider text-faint">
                  {x.k}
                </p>
                <p className="mt-1 font-semibold text-fg">{x.v}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Highlight grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {aboutHighlights.map((h) => (
            <motion.div
              key={h.title}
              variants={staggerItem}
              className="glass card-hover group rounded-2xl p-5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-accent transition-colors group-hover:border-accent/50">
                <h.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-fg">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {h.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

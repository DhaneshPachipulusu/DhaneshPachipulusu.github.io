"use client";

import { motion } from "framer-motion";
import { Activity, GitCommitHorizontal, Star, Boxes } from "lucide-react";
import { useGitHub, timeAgo } from "@/lib/useGitHub";

function Dot() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
    </span>
  );
}

export function SystemStatus() {
  const gh = useGitHub();

  const services = [
    { name: "portfolio", up: true },
    { name: "ai-bot", up: true },
    { name: "jarvis", up: true },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="border-y border-border bg-surface/40"
    >
      <div className="container-page">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 py-2.5 font-mono text-xs">
          <span className="inline-flex items-center gap-2 font-medium text-emerald">
            <Dot />
            ALL SYSTEMS OPERATIONAL
          </span>

          <span className="hidden items-center gap-1.5 text-muted sm:inline-flex">
            {services.map((s) => (
              <span key={s.name} className="inline-flex items-center gap-1.5 px-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
                {s.name}
              </span>
            ))}
          </span>

          <span className="ml-auto flex flex-wrap items-center gap-x-5 gap-y-1 text-faint">
            <span className="inline-flex items-center gap-1.5" title="Public repositories">
              <Boxes className="h-3.5 w-3.5 text-accent" />
              <span className="text-muted">{gh.loading ? "··" : gh.repos}</span> repos
            </span>
            <span className="inline-flex items-center gap-1.5" title="Total stars">
              <Star className="h-3.5 w-3.5 text-amber" />
              <span className="text-muted">{gh.loading ? "··" : gh.stars}</span> stars
            </span>
            <span className="inline-flex items-center gap-1.5" title="Most recent push">
              <GitCommitHorizontal className="h-3.5 w-3.5 text-accent-2" />
              last commit{" "}
              <span className="text-muted">
                {gh.lastCommit ? timeAgo(gh.lastCommit) : gh.loading ? "··" : "recently"}
              </span>
            </span>
            <span className="inline-flex items-center gap-1.5" title="CI/CD">
              <Activity className="h-3.5 w-3.5 text-emerald" />
              build <span className="text-emerald">passing</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              {gh.live ? (
                <span className="rounded border border-emerald/30 bg-emerald/10 px-1.5 text-[10px] text-emerald">
                  ● live
                </span>
              ) : (
                <span className="rounded border border-border px-1.5 text-[10px] text-faint">
                  cached
                </span>
              )}
            </span>
          </span>
        </div>
      </div>
    </motion.div>
  );
}

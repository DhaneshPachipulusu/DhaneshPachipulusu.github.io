"use client";

import { motion } from "framer-motion";

/**
 * Global animated backdrop — fixed, behind everything.
 * Grid + floating aurora blobs. Pure CSS animation, GPU-friendly.
 */
export function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg"
    >
      {/* grid */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_50%,transparent_100%)]" />

      {/* aurora blobs */}
      <motion.div
        className="absolute -top-40 left-1/4 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.18),transparent_62%)] blur-3xl"
        animate={{ x: [0, 60, -30, 0], y: [0, 40, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/5 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.16),transparent_62%)] blur-3xl"
        animate={{ x: [0, -50, 30, 0], y: [0, -30, 40, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/2 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.12),transparent_62%)] blur-3xl"
        animate={{ x: [0, 40, -40, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* top + bottom vignette */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-bg to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />
    </div>
  );
}

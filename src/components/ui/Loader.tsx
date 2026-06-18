"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

/** Professional loading screen — shown briefly on first paint. */
export function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1300);
    // also lift the loader once everything is loaded
    const onLoad = () => setDone(true);
    window.addEventListener("load", onLoad);
    return () => {
      clearTimeout(t);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg"
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative flex h-20 w-20 items-center justify-center"
          >
            <span className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-accent border-r-accent-2 [animation-duration:1.1s]" />
            <span className="font-mono text-lg font-bold text-gradient-accent">
              {profile.monogram}
            </span>
          </motion.div>

          <motion.div className="mt-6 h-px w-40 overflow-hidden rounded-full bg-border">
            <motion.div
              className="h-full bg-gradient-to-r from-accent-3 to-accent-2"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </motion.div>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.3em] text-faint">
            Initializing
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

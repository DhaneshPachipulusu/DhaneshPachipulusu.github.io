"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bot, X, Send, Sparkles, CornerDownRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import kb from "@/data/assistant.json";

interface Msg {
  role: "user" | "bot";
  text: string;
  action?: string;
}

type QA = { q: string; keywords: string[]; a: string; action?: string };
const QA_LIST = kb.qa as QA[];

function answerFor(input: string): QA | null {
  const q = input.toLowerCase().trim();
  if (!q) return null;
  // exact / prefix question match first
  const exact = QA_LIST.find((x) => x.q.toLowerCase() === q);
  if (exact) return exact;
  // keyword scoring
  let best: QA | null = null;
  let bestScore = 0;
  for (const x of QA_LIST) {
    const score = x.keywords.reduce((s, k) => (q.includes(k) ? s + 1 : s), 0);
    if (score > bestScore) {
      bestScore = score;
      best = x;
    }
  }
  return bestScore > 0 ? best : null;
}

function runAction(action?: string) {
  if (!action) return;
  if (action.startsWith("goto:")) {
    const hash = action.slice(5);
    setTimeout(
      () => document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" }),
      200
    );
  }
}

export function Assistant() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([{ role: "bot", text: kb.intro }]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, typing, open]);

  const ask = (text: string) => {
    const clean = text.trim();
    if (!clean || typing) return;
    setInput("");
    setMsgs((m) => [...m, { role: "user", text: clean }]);
    setTyping(true);
    const hit = answerFor(clean);
    const reply: Msg = hit
      ? { role: "bot", text: hit.a, action: hit.action }
      : {
          role: "bot",
          text: "I can answer about Dhaneswara's projects, DevOps & cloud experience, the AI Interview Bot, or how to contact him. Try one of the suggestions below.",
        };
    window.setTimeout(() => {
      setMsgs((m) => [...m, reply]);
      setTyping(false);
      runAction(reply.action);
    }, 650);
  };

  // questions not yet asked, for suggestion chips
  const suggestions = QA_LIST.filter(
    (x) => !msgs.some((m) => m.role === "user" && m.text === x.q)
  ).slice(0, 4);

  return (
    <>
      {/* launcher */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => setOpen((v) => !v)}
        aria-label="Open Dhanesh AI assistant"
        className="fixed bottom-5 right-5 z-[70] flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-3 to-accent-2 text-bg shadow-glow transition-transform hover:scale-105"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span key="b" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <Bot className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
        {!open && (
          <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald" />
          </span>
        )}
      </motion.button>

      {/* panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="glass fixed bottom-24 right-5 z-[70] flex h-[30rem] w-[min(92vw,24rem)] flex-col overflow-hidden rounded-2xl shadow-glow"
          >
            {/* header */}
            <div className="flex items-center gap-3 border-b border-border bg-surface-2/60 px-4 py-3">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent-3 to-accent-2 text-bg">
                <Sparkles className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-fg">{kb.name}</p>
                <p className="inline-flex items-center gap-1.5 font-mono text-[11px] text-emerald">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> online · knows the portfolio
                </p>
              </div>
            </div>

            {/* messages */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
              {msgs.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-gradient-to-br from-accent-3 to-accent-2 text-bg"
                        : "border border-border bg-surface-2/60 text-muted"
                    }`}
                  >
                    {m.text}
                    {m.action?.startsWith("goto:") && (
                      <button
                        onClick={() => runAction(m.action)}
                        className="mt-2 flex items-center gap-1.5 font-mono text-xs text-accent hover:underline"
                      >
                        <CornerDownRight className="h-3.5 w-3.5" />
                        jump to {m.action.slice(6)}
                      </button>
                    )}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="flex gap-1 rounded-2xl border border-border bg-surface-2/60 px-3 py-3">
                    {[0, 1, 2].map((d) => (
                      <motion.span
                        key={d}
                        className="h-1.5 w-1.5 rounded-full bg-muted"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: d * 0.2 }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* suggestions */}
            {suggestions.length > 0 && (
              <div className="flex flex-wrap gap-1.5 border-t border-border px-3 pt-3">
                {suggestions.map((s) => (
                  <button
                    key={s.q}
                    onClick={() => ask(s.q)}
                    className="rounded-full border border-border bg-surface px-2.5 py-1 text-xs text-muted transition-colors hover:border-accent/50 hover:text-fg"
                  >
                    {s.q}
                  </button>
                ))}
              </div>
            )}

            {/* input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                ask(input);
              }}
              className="flex items-center gap-2 p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about projects, DevOps, cloud…"
                aria-label="Ask Dhanesh AI"
                className="flex-1 rounded-xl border border-border bg-surface px-3 py-2 text-sm text-fg outline-none placeholder:text-faint focus:border-accent/50"
              />
              <button
                type="submit"
                aria-label="Send"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent-3 to-accent-2 text-bg transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

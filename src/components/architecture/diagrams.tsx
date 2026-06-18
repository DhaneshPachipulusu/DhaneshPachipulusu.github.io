"use client";

import { motion } from "framer-motion";
import {
  architectureCards,
  type DiagramKind,
  type FlowNode,
} from "@/lib/data";

/* ------------------------------------------------------------------ */
/* Premium vertical engineering-flow diagram (animated SVG)            */
/* ------------------------------------------------------------------ */

const W = 460;
const NODE_W = 300;
const NODE_H = 62;
const GAP = 46;
const TOP = 18;
const NX = (W - NODE_W) / 2;
const CX = W / 2;

function VerticalFlow({ flow }: { flow: FlowNode[] }) {
  const n = flow.length;
  const height = TOP * 2 + n * NODE_H + (n - 1) * GAP;
  const nodeY = (i: number) => TOP + i * (NODE_H + GAP);

  return (
    <svg
      viewBox={`0 0 ${W} ${height}`}
      className="h-full w-full"
      role="img"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="vfNode" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#161a28" />
          <stop offset="1" stopColor="#0e1119" />
        </linearGradient>
        <filter id="vfGlow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="2.6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Edges (render first, behind nodes) */}
      {flow.slice(0, -1).map((node, i) => {
        const y1 = nodeY(i) + NODE_H;
        const y2 = nodeY(i + 1);
        const d = `M ${CX} ${y1} L ${CX} ${y2}`;
        return (
          <g key={`edge-${i}`}>
            {/* base line draw-in */}
            <motion.path
              d={d}
              fill="none"
              stroke="#2a3147"
              strokeWidth={1.6}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.12 }}
            />
            {/* flowing dash overlay */}
            <path
              d={d}
              fill="none"
              stroke={node.accent}
              strokeWidth={1.8}
              strokeDasharray="3 7"
              strokeLinecap="round"
              className="animate-dash"
              opacity={0.8}
            />
            {/* arrowhead */}
            <motion.path
              d={`M ${CX - 5} ${y2 - 9} L ${CX} ${y2 - 2} L ${CX + 5} ${y2 - 9}`}
              fill="none"
              stroke={node.accent}
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 + i * 0.12 }}
            />
            {/* traveling data packet */}
            <motion.circle
              r={3.2}
              cx={CX}
              fill={node.accent}
              filter="url(#vfGlow)"
              initial={{ cy: y1, opacity: 0 }}
              animate={{ cy: [y1, y2 - 6], opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 1.3,
                delay: 0.6 + i * 0.18,
                repeat: Infinity,
                repeatDelay: 0.5,
                ease: "easeIn",
              }}
            />
          </g>
        );
      })}

      {/* Nodes */}
      {flow.map((node, i) => {
        const y = nodeY(i);
        return (
          <motion.g
            key={`node-${i}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.12 }}
          >
            <rect
              x={NX}
              y={y}
              width={NODE_W}
              height={NODE_H}
              rx={14}
              fill="url(#vfNode)"
              stroke={node.accent}
              strokeOpacity={0.45}
              strokeWidth={1.2}
            />
            {/* left accent bar */}
            <rect x={NX} y={y} width={4} height={NODE_H} rx={2} fill={node.accent} />
            {/* index badge */}
            <circle
              cx={NX + 32}
              cy={y + NODE_H / 2}
              r={15}
              fill={node.accent}
              fillOpacity={0.14}
              stroke={node.accent}
              strokeOpacity={0.5}
            />
            <text
              x={NX + 32}
              y={y + NODE_H / 2 + 4}
              textAnchor="middle"
              fill={node.accent}
              fontSize="12"
              fontWeight="700"
              fontFamily="var(--font-mono)"
            >
              {i + 1}
            </text>
            {/* label */}
            <text
              x={NX + 60}
              y={node.sub ? y + NODE_H / 2 - 4 : y + NODE_H / 2 + 5}
              fill="#e7ecf5"
              fontSize="15"
              fontWeight="600"
              fontFamily="var(--font-sans)"
            >
              {node.label}
            </text>
            {node.sub && (
              <text
                x={NX + 60}
                y={y + NODE_H / 2 + 14}
                fill="#9aa6bd"
                fontSize="11"
                fontFamily="var(--font-mono)"
              >
                {node.sub}
              </text>
            )}
          </motion.g>
        );
      })}
    </svg>
  );
}

export function ArchitectureDiagram({ kind }: { kind: DiagramKind }) {
  const card = architectureCards.find((c) => c.id === kind);
  if (!card) return null;
  return <VerticalFlow flow={card.flow} />;
}

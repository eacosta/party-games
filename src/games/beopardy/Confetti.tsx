"use client";

import { useMemo } from "react";

const COLORS = [
  "#fcd34d", // amber-300
  "#fb7185", // rose-400
  "#34d399", // emerald-400
  "#818cf8", // indigo-400
  "#a78bfa", // violet-400
  "#38bdf8", // sky-400
];

const PIECE_COUNT = 28;

interface Piece {
  id: number;
  left: number;
  color: string;
  delay: number;
  duration: number;
  size: number;
}

function seededRandFactory(seed: number) {
  // Simple deterministic LCG so useMemo produces stable values across renders.
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

export default function Confetti() {
  const pieces = useMemo<Piece[]>(() => {
    const rand = seededRandFactory(42);
    return Array.from({ length: PIECE_COUNT }, (_, i) => ({
      id: i,
      left: rand() * 100,
      color: COLORS[Math.floor(rand() * COLORS.length)],
      delay: rand() * 400,
      duration: 1600 + rand() * 800,
      size: 8 + Math.floor(rand() * 5),
    }));
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 h-64 overflow-hidden"
    >
      {pieces.map((p) => (
        <span
          key={p.id}
          className="animate-confetti-rise absolute bottom-0 rounded-sm"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            animationDelay: `${p.delay}ms`,
            animationDuration: `${p.duration}ms`,
          }}
        />
      ))}
    </div>
  );
}

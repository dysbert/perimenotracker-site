"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Period = "7d" | "30d";

const DATA: Record<Period, { label: string; count: number; color: string }[]> = {
  "7d": [
    { label: "Hot Flash", count: 5, color: "#E8B86D" },
    { label: "Fatigue", count: 4, color: "#C4714A" },
    { label: "Sleep Issue", count: 3, color: "#7C6E8A" },
    { label: "Headache", count: 2, color: "#C4714A" },
    { label: "Brain Fog", count: 1, color: "#7A9E8E" }
  ],
  "30d": [
    { label: "Hot Flash", count: 14, color: "#E8B86D" },
    { label: "Fatigue", count: 9, color: "#C4714A" },
    { label: "Sleep Issue", count: 7, color: "#7C6E8A" },
    { label: "Irregular Period", count: 4, color: "#7A9E8E" },
    { label: "Headache", count: 3, color: "#C4714A" }
  ]
};

export default function InsightsDemo() {
  const [period, setPeriod] = useState<Period>("30d");
  const rows = DATA[period];
  const max = rows[0].count;

  return (
    <div className="w-full max-w-[420px]">
      <div className="mb-6 inline-flex rounded-full bg-[rgba(44,40,37,0.06)] p-1">
        {(["7d", "30d"] as Period[]).map((p) => (
          <button
            key={p}
            onClick={() => setPeriod(p)}
            className={`relative rounded-full px-5 py-1.5 text-[13px] font-medium transition-colors ${
              period === p ? "text-umbra" : "text-pizarra"
            }`}
          >
            {period === p && (
              <motion.span
                layoutId="tab-pill"
                className="absolute inset-0 rounded-full bg-white shadow-sm"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{p}</span>
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {rows.map((row, i) => (
          <div key={row.label} className="flex items-center gap-3">
            <span className="w-[120px] shrink-0 text-right text-[13px] text-umbra">{row.label}</span>
            <div className="relative h-[10px] flex-1 overflow-hidden rounded-full bg-[rgba(44,40,37,0.06)]">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{ backgroundColor: row.color }}
                initial={{ width: 0 }}
                animate={{ width: `${(row.count / max) * 100}%` }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
                key={`${period}-${row.label}`}
              />
            </div>
            <span className="w-5 shrink-0 text-right text-[13px] font-medium text-umbra">{row.count}</span>
          </div>
        ))}
      </div>

      <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.08em] text-pizarra">
        Sample data · {period === "7d" ? "Last 7 days" : "Last 30 days"}
      </p>
    </div>
  );
}

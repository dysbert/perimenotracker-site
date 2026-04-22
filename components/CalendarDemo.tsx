"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const CATEGORY_COLORS: Record<string, string> = {
  vasomotor: "#E8B86D",
  sleep: "#7C6E8A",
  physical: "#C4714A",
  cognitive: "#7A9E8E"
};

type Entry = {
  category: keyof typeof CATEGORY_COLORS;
  label: string;
  intensity: number;
};

type DayData = {
  day: number;
  entries: Entry[];
};

const SAMPLE_DATA: DayData[] = [
  { day: 3, entries: [{ category: "vasomotor", label: "Hot Flash", intensity: 2 }] },
  { day: 5, entries: [{ category: "sleep", label: "Sleep Issue", intensity: 3 }] },
  {
    day: 7,
    entries: [
      { category: "physical", label: "Fatigue", intensity: 3 },
      { category: "vasomotor", label: "Hot Flash", intensity: 3 }
    ]
  },
  { day: 10, entries: [{ category: "vasomotor", label: "Hot Flash", intensity: 4 }] },
  {
    day: 11,
    entries: [
      { category: "physical", label: "Headache", intensity: 3 },
      { category: "sleep", label: "Anxiety", intensity: 2 }
    ]
  },
  {
    day: 12,
    entries: [
      { category: "vasomotor", label: "Hot Flash", intensity: 5 },
      { category: "cognitive", label: "Brain Fog", intensity: 3 }
    ]
  },
  {
    day: 13,
    entries: [
      { category: "vasomotor", label: "Night Sweats", intensity: 4 },
      { category: "physical", label: "Fatigue", intensity: 4 }
    ]
  },
  { day: 14, entries: [{ category: "vasomotor", label: "Hot Flash", intensity: 3 }] },
  { day: 16, entries: [{ category: "sleep", label: "Sleep Issue", intensity: 2 }] },
  { day: 18, entries: [{ category: "physical", label: "Fatigue", intensity: 2 }] },
  { day: 19, entries: [{ category: "vasomotor", label: "Hot Flash", intensity: 2 }] },
  {
    day: 20,
    entries: [
      { category: "physical", label: "Fatigue", intensity: 3 },
      { category: "sleep", label: "Anxiety", intensity: 3 }
    ]
  },
  { day: 21, entries: [{ category: "sleep", label: "Sleep Issue", intensity: 4 }] },
  {
    day: 22,
    entries: [
      { category: "vasomotor", label: "Hot Flash", intensity: 3 },
      { category: "physical", label: "Headache", intensity: 3 },
      { category: "physical", label: "Fatigue", intensity: 4 }
    ]
  }
];

const DAYS_IN_MONTH = 30;
const FIRST_DAY_OFFSET = 3;
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const TODAY = 22;

export default function CalendarDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredDay, setHoveredDay] = useState<number | null>(null);

  const cells: (number | null)[] = [
    ...Array(FIRST_DAY_OFFSET).fill(null),
    ...Array.from({ length: DAYS_IN_MONTH }, (_, i) => i + 1)
  ];

  while (cells.length % 7 !== 0) cells.push(null);

  const dataByDay = new Map(SAMPLE_DATA.map((d) => [d.day, d.entries]));

  return (
    <div ref={ref} className="mx-auto w-full max-w-[420px] select-none">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-display text-[22px] italic text-umbra">April 2026</span>
        <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-pizarra">Sample data</span>
      </div>

      <div className="mb-2 grid grid-cols-7 text-center">
        {WEEKDAYS.map((d) => (
          <span key={d} className="text-[10px] font-medium uppercase tracking-[0.06em] text-pizarra">
            {d}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-y-1">
        {cells.map((day, i) => {
          if (!day) return <div key={`empty-${i}`} />;

          const entries = dataByDay.get(day) ?? [];
          const isToday = day === TODAY;
          const isHovered = hoveredDay === day;

          return (
            <div
              key={day}
              className="relative flex flex-col items-center gap-[3px] py-1"
              onMouseEnter={() => entries.length > 0 && setHoveredDay(day)}
              onMouseLeave={() => setHoveredDay(null)}
            >
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full text-[13px] transition-colors ${
                  isToday ? "border border-siena font-medium text-siena" : "text-umbra"
                } ${entries.length > 0 ? "cursor-default" : "text-[rgba(44,40,37,0.3)]"}`}
              >
                {day}
              </span>

              <div className="flex h-[8px] items-center gap-[3px]">
                {entries.slice(0, 3).map((entry, dotIndex) => (
                  <motion.span
                    key={dotIndex}
                    className="block rounded-full"
                    style={{
                      backgroundColor: CATEGORY_COLORS[entry.category],
                      width: 6,
                      height: 6
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: isInView ? (day - 1) * 0.025 + dotIndex * 0.04 : 0,
                      type: "spring",
                      stiffness: 400,
                      damping: 20
                    }}
                  />
                ))}
              </div>

              {isHovered && entries.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded-[10px] bg-umbra px-3 py-2 shadow-xl"
                >
                  <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.08em] text-pizarra">{`Apr ${day}`}</p>
                  {entries.map((e, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <span
                        className="block h-[6px] w-[6px] flex-shrink-0 rounded-full"
                        style={{ backgroundColor: CATEGORY_COLORS[e.category] }}
                      />
                      <span className="text-[12px] text-creta">{e.label}</span>
                      <span className="text-[11px] text-pizarra">{e.intensity}/5</span>
                    </div>
                  ))}
                  <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-umbra" />
                </motion.div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex flex-wrap gap-4 border-t border-[rgba(44,40,37,0.08)] pt-4">
        {Object.entries(CATEGORY_COLORS).map(([cat, color]) => (
          <div key={cat} className="flex items-center gap-1.5">
            <span className="block h-[8px] w-[8px] rounded-full" style={{ backgroundColor: color }} />
            <span className="text-[11px] capitalize text-pizarra">{cat}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

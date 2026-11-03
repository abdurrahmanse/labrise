"use client";

import { Check } from "lucide-react";
import { InfoCard } from "@/shared/components/InfoCard";
import { useGuideProgress } from "../store/useGuideProgress";

/** Checklist whose ticks are remembered in this browser. */
export function GuideChecklist({ guideId, items }: { guideId: string; items: string[] }) {
  const checked = useGuideProgress((s) => s.checked[guideId]) ?? [];
  const toggle = useGuideProgress((s) => s.toggle);

  return (
    <InfoCard label={`Checklist · ${checked.length}/${items.length}`}>
      <ul className="space-y-2">
        {items.map((item) => {
          const done = checked.includes(item);
          return (
            <li key={item}>
              <button
                type="button"
                onClick={() => toggle(guideId, item)}
                aria-pressed={done}
                className="flex w-full items-start gap-3 text-left text-sm font-sans font-normal text-slate-200 cursor-pointer"
              >
                <span className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border-2 ${done ? "border-transparent bg-indigo-600 text-white" : "border-white/50"}`}>
                  {done && <Check className="h-3 w-3" />}
                </span>
                <span className={done ? "line-through opacity-60" : ""}>{item}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </InfoCard>
  );
}

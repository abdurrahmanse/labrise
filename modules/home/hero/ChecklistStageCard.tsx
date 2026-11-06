import { Check } from "lucide-react";
import { FloatingCard } from "./FloatingCard";

const CHECKS = ["CV", "SOP", "IELTS", "Referees"];

export function ChecklistStageCard() {
  return (
    <FloatingCard className="bottom-0 left-[34%] w-[30%] animate-float-reverse">
      <div className="mb-2 font-mono text-xs uppercase tracking-wider text-indigo-300">Documents</div>
      <ul className="space-y-1.5">
        {CHECKS.map((c, i) => (
          <li key={c} className="flex items-center gap-2 text-sm font-bold text-slate-200">
            <span className={`flex h-4 w-4 items-center justify-center ${i < 2 ? "bg-indigo-600 text-white" : "bg-white/10"}`}>
              {i < 2 && <Check className="h-3 w-3" />}
            </span>
            {c}
          </li>
        ))}
      </ul>
    </FloatingCard>
  );
}

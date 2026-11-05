import { Flag } from "@/shared/components/Flag";
import { FloatingCard } from "./FloatingCard";

export function ScholarshipStageCard() {
  return (
    <FloatingCard className="left-0 top-0 w-[42%] animate-float-slow">
      <div className="mb-2 flex items-center gap-2">
        <Flag country="Germany" className="h-5 w-8" />
        <span className="font-mono text-xs uppercase tracking-wider text-indigo-300">Scholarship</span>
      </div>
      <div className="text-lg font-bold text-white leading-tight">DAAD</div>
      <div className="text-sm text-slate-300">Master&apos;s &amp; PhD · stipend, insurance, travel</div>
    </FloatingCard>
  );
}

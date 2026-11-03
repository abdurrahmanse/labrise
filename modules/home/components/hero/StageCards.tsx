import { Check } from "lucide-react";
import { Flag } from "@/modules/directory/components/Flag";
import { Avatar } from "@/shared/components/Avatar";
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

export function ProfessorStageCard() {
  return (
    <FloatingCard className="bottom-0 right-0 w-[34%] animate-float-reverse">
      <div className="flex items-center gap-3">
        <Avatar name="Andreas Geiger" size={44} />
        <div className="min-w-0">
          <div className="font-bold text-white">Prof. reply</div>
          <div className="text-sm text-slate-300">Happy to talk.</div>
        </div>
      </div>
      <span className="mt-3 inline-block bg-emerald-500/15 px-2 py-0.5 font-mono text-xs uppercase text-emerald-400">Replied</span>
    </FloatingCard>
  );
}

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

export function DeadlineStageCard() {
  return (
    <FloatingCard className="right-0 top-[40%] w-[24%] animate-float-slow">
      <div className="font-mono text-xs uppercase tracking-wider text-slate-400">Deadline</div>
      <div className="text-2xl font-bold text-white">Dec 1</div>
      <div className="text-sm text-cyan-300">HKPFS</div>
    </FloatingCard>
  );
}

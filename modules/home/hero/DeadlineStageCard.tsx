import { FloatingCard } from "./FloatingCard";

export function DeadlineStageCard() {
  return (
    <FloatingCard className="right-0 top-[40%] w-[24%] animate-float-slow">
      <div className="font-mono text-xs uppercase tracking-wider text-slate-400">Deadline</div>
      <div className="text-2xl font-bold text-white">Dec 1</div>
      <div className="text-sm text-cyan-300">HKPFS</div>
    </FloatingCard>
  );
}

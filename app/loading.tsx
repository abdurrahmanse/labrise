import { Compass } from "lucide-react";
import { loadingText as t } from "@/data/text/status";

export default function Loading() {
  return (
    <main role="status" aria-live="polite" className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <span className="flex h-16 w-16 items-center justify-center border-2 border-white/80 bg-canvas-card/70 shadow-[4px_4px_0_0_rgba(58,95,224,0.35)]">
        <Compass className="h-8 w-8 animate-spin text-indigo-400 [animation-duration:2.5s]" aria-hidden />
      </span>
      <p className="text-xl font-bold text-white">{t.label}</p>
      <p className="font-mono text-xs text-slate-400">{t.hint}</p>
    </main>
  );
}

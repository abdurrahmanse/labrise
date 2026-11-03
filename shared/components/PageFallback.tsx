import { Compass } from "lucide-react";
import { commonText } from "@/content/text/common";

/** Suspense fallback shown while a route reads its URL data. */
export function PageFallback() {
  return (
    <div role="status" className="mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center gap-3 px-4 py-16 text-slate-400">
      <Compass className="h-5 w-5 animate-spin text-indigo-400 [animation-duration:2.5s]" aria-hidden />
      {commonText.states.loading}
    </div>
  );
}

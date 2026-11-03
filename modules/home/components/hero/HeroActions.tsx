import Link from "next/link";
import { ArrowRight } from "lucide-react";

const primary =
  "inline-flex items-center gap-2 bg-indigo-600 px-6 py-3 font-bold uppercase tracking-wider text-white shadow-[4px_4px_0_0_rgba(58,95,224,0.35)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_rgba(58,95,224,0.35)]";
const ghost =
  "inline-flex items-center gap-2 bg-white/[0.06] px-6 py-3 font-bold uppercase tracking-wider text-slate-100 backdrop-blur-md transition-colors hover:bg-white/10";

export function HeroActions() {
  return (
    <div className="flex flex-wrap gap-4">
      <Link href="/steps" className={primary}>
        Start step 1 <ArrowRight className="h-5 w-5" />
      </Link>
      <Link href="/apply" className={ghost}>
        How to apply
      </Link>
    </div>
  );
}

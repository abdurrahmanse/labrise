import { XCircle } from "lucide-react";
import { Block } from "@/shared/components/Block";
import { guideSidebarText } from "@/data/text/site";

export function GuideMistakes({ mistakes }: { mistakes: string[] }) {
  return (
    <Block title={guideSidebarText.mistakes}>
      <ul className="space-y-2">
        {mistakes.map((m) => (
          <li key={m} className="flex gap-3 text-slate-200 font-sans font-normal">
            <XCircle className="w-5 h-5 shrink-0 text-rose-400 mt-0.5" /> {m}
          </li>
        ))}
      </ul>
    </Block>
  );
}

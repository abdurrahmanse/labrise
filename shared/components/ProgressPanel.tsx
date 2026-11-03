import { RotateCcw } from "lucide-react";
import type { ReactNode } from "react";
import { commonText } from "@/data/text/common";
import { ProgressBar } from "./ProgressBar";
import { surface } from "@/shared/components/Surface";

interface ProgressPanelProps {
  label: string;
  /** e.g. "3 of 7 done" */
  summary: string;
  percent: number;
  /** Shows a reset button once something is done. */
  onReset?: () => void;
  canReset?: boolean;
  note?: string;
  /** Big number or extra content on the right. */
  aside?: ReactNode;
  bare?: boolean;
}

/** Progress bar with its summary line, optional percent and reset. Used by every saved checklist. */
export function ProgressPanel({ label, summary, percent, onReset, canReset = true, note, aside, bare }: ProgressPanelProps) {
  const body = (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-3 font-mono text-xs text-slate-400">
        <span>{summary}</span>
        <span className="flex items-center gap-3">
          {aside}
          {onReset && canReset && (
            <button type="button" onClick={onReset} className="inline-flex cursor-pointer items-center gap-1.5 font-bold hover:text-rose-400">
              <RotateCcw className="h-3.5 w-3.5" aria-hidden /> {commonText.actions.reset}
            </button>
          )}
        </span>
      </div>
      <ProgressBar percent={percent} label={label} />
      {note && <p className="font-mono text-xs text-slate-500">{note}</p>}
    </div>
  );
  return bare ? body : <div className={surface({ tone: "panel", depth: "md", padding: "lg" })}>{body}</div>;
}

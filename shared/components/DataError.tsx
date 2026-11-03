import { AlertTriangle } from "lucide-react";
import { commonText } from "@/content/text/common";
import { errorMessage } from "@/shared/api/errors";

interface DataErrorProps {
  error: unknown;
  onRetry?: () => void;
}

/** One error panel for every data-driven list: a readable message and a retry button. */
export function DataError({ error, onRetry }: DataErrorProps) {
  return (
    <div role="alert" className="flex flex-col items-center gap-3 border-2 border-dashed border-rose-400/50 bg-rose-500/5 px-6 py-12 text-center">
      <AlertTriangle className="h-8 w-8 text-rose-300" aria-hidden />
      <p className="text-xl font-bold text-white">{commonText.states.errorTitle}</p>
      <p className="max-w-md font-sans font-normal text-slate-400">{errorMessage(error)}</p>
      {onRetry && (
        <button type="button" onClick={onRetry} className="cursor-pointer border-2 border-white/40 px-4 py-2 text-sm font-bold uppercase tracking-wider text-slate-100 hover:border-indigo-400 hover:text-indigo-300">
          {commonText.states.retry}
        </button>
      )}
    </div>
  );
}

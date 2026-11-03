import { CopyButton } from "@/components/ui/CopyButton";

export function EmailDraftBox({ draft }: { draft: string }) {
  return (
    <div className="space-y-3">
      <pre className="whitespace-pre-wrap border-2 border-indigo-400/60 bg-canvas-base/70 p-5 text-sm text-slate-200 font-mono leading-relaxed">
        {draft}
      </pre>
      <CopyButton textToCopy={draft} label="Copy draft" />
    </div>
  );
}

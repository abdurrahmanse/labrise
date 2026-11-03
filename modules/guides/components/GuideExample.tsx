import { Block } from "@/shared/components/Block";

export function GuideExample({ label, text }: { label: string; text: string }) {
  return (
    <Block title={label}>
      <pre className="whitespace-pre-wrap border-2 border-indigo-400/60 bg-canvas-base/70 p-5 text-sm text-slate-200 font-mono leading-relaxed">
        {text}
      </pre>
    </Block>
  );
}

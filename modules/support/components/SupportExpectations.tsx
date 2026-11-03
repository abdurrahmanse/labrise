import { Check, X } from "lucide-react";
import { supportPageText as t } from "@/content/text/support";
import { surface } from "@/shared/components/Surface";

interface ExpectationListProps {
  title: string;
  items: readonly string[];
  tone: "yes" | "no";
}

function ExpectationList({ title, items, tone }: ExpectationListProps) {
  const Icon = tone === "yes" ? Check : X;
  return (
    <div className="space-y-3">
      <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400">{title}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 font-sans font-normal text-slate-200">
            <Icon className={`mt-1 h-4 w-4 shrink-0 ${tone === "yes" ? "text-emerald-400" : "text-rose-400"}`} aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** What a person gets and what they should never be promised: the honest part of the page. */
export function SupportExpectations() {
  return (
    <div className={surface({ tone: "quiet", depth: "none", padding: "xl", className: "space-y-6" })}>
      <h2 className="text-2xl font-bold text-white">{t.expectations.title}</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <ExpectationList title={t.expectations.yesTitle} items={t.expectations.yes} tone="yes" />
        <ExpectationList title={t.expectations.noTitle} items={t.expectations.no} tone="no" />
      </div>
    </div>
  );
}

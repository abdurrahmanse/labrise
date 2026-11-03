import { ListOrdered } from "lucide-react";
import { supportPageText as t } from "@/content/text/support";
import { Block } from "@/shared/components/Block";
import { NumberBadge } from "@/shared/components/IconBadge";
import { surface } from "@/shared/components/Surface";

/** Section 2: four numbered steps from first message to submitted applications. */
export function SupportProcess() {
  return (
    <Block title={t.process.title} icon={ListOrdered}>
      <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.process.steps.map((step, i) => (
          <li key={step.title} className={surface({ tone: "quiet", depth: "none", padding: "lg", className: "space-y-3" })}>
            <NumberBadge size="md">{i + 1}</NumberBadge>
            <h3 className="text-lg font-bold text-white">{step.title}</h3>
            <p className="font-sans text-[length:var(--text-body)] font-normal text-slate-300">{step.body}</p>
          </li>
        ))}
      </ol>
    </Block>
  );
}

import { ArrowRight, Check } from "lucide-react";
import { supportPageText as t, type SupportPlan } from "@/content/text/support";
import { Button } from "@/shared/ui/Button";
import { IconBadge } from "@/shared/components/IconBadge";
import { surface } from "@/shared/components/Surface";
import { buildSupportMailto } from "../utils/supportMail";

/** One level of help: who it is for, what it includes, and a button that opens an email about it. */
export function SupportPlanCard({ plan }: { plan: SupportPlan }) {
  return (
    <article className={surface({ tone: "panel", depth: "md", interactive: true, padding: "xl", className: "flex h-full flex-col gap-5" })}>
      <div className="flex items-center gap-4">
        <IconBadge icon={plan.Icon} size="lg" shadow />
        <div>
          <h3 className="text-2xl font-bold text-white">{plan.title}</h3>
          <p className="font-mono text-xs uppercase tracking-wider text-indigo-400">{plan.tagline}</p>
        </div>
      </div>

      <p className="font-sans text-[length:var(--text-body)] font-normal text-slate-300">
        <span className="font-mono text-xs uppercase tracking-wider text-slate-400">{t.plans.forWho}: </span>
        {plan.audience}
      </p>

      <ul className="flex-1 space-y-3">
        {plan.includes.map((item) => (
          <li key={item} className="flex gap-3 font-sans font-normal text-slate-200">
            <Check className="mt-1 h-4 w-4 shrink-0 text-indigo-400" aria-hidden />
            {item}
          </li>
        ))}
      </ul>

      <Button href={buildSupportMailto(plan.title)} variant="secondary" fullWidth rightIcon={<ArrowRight className="h-4 w-4" aria-hidden />}>
        {t.plans.cta}
      </Button>
    </article>
  );
}

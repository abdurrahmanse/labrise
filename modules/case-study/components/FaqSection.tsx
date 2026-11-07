import Link from "next/link";
import { inlineLinkClass } from "@/shared/components/linkStyles";
import { faq } from "../data/extras";

export function FaqSection() {
  return (
    <dl className="space-y-3">
      {faq.map((f) => (
        <div key={f.q} className="border-2 border-white/20 bg-white/[0.03] p-4">
          <dt className="font-bold text-white">{f.q}</dt>
          <dd className="mt-1 space-y-1 font-sans text-sm text-slate-300">
            <p>{f.a}</p>
            <Link href={f.href} className={inlineLinkClass}>Read the guide →</Link>
          </dd>
        </div>
      ))}
    </dl>
  );
}

import Link from "next/link";
import { ArrowRight, Check, Landmark } from "lucide-react";
import { scholarshipDetailText as t } from "@/content/text/scholarships";
import { Block } from "@/shared/components/Block";
import { surface } from "@/shared/components/Surface";
import { providerSlug } from "../../../utils/slugs";
import type { ProviderEntry } from "../../../types";
import { bodyClass, labelClass, linkClass } from "./detailStyles";

/** How the organisation behind the scholarship selects people, and what it asks for. */
export function ScholarshipProviderBlock({ provider }: { provider: ProviderEntry }) {
  return (
    <Block title={t.provider.title} icon={Landmark}>
      <div className={surface({ tone: "quiet", depth: "none", padding: "lg", className: "space-y-4" })}>
        <div>
          <p className={labelClass}>{t.provider.route}</p>
          <p className={bodyClass}>{provider.route}</p>
        </div>
        <div>
          <p className={labelClass}>{t.provider.selection}</p>
          <p className={bodyClass}>{provider.selection}</p>
        </div>
        <div>
          <p className={`${labelClass} mb-2`}>{t.provider.requirements}</p>
          <ul className="space-y-2">
            {provider.requirements.map((r) => (
              <li key={r} className={`flex gap-2 ${bodyClass}`}><Check className="mt-0.5 h-5 w-5 shrink-0 text-indigo-400" aria-hidden /> {r}</li>
            ))}
          </ul>
        </div>
        <Link href={`/directory/providers/${providerSlug(provider)}`} className={`inline-flex items-center gap-1.5 text-sm font-bold ${linkClass}`}>
          {t.provider.view} <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </Block>
  );
}

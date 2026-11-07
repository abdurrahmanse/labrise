import Link from "next/link";
import { commonText } from "@/content/text/common";
import { Button } from "@/shared/ui/Button";
import { Logo } from "@/shared/ui/Logo";

/** The brand, a one-line promise and the main call to action. */
export function FooterBrand() {
  return (
    <div className="space-y-4">
      <Link href="/" aria-label={commonText.brand.homeLabel} className="inline-flex items-center gap-2.5 text-lg font-bold tracking-wider text-white">
        <Logo size={30} />
        <span>
          {commonText.brand.first}<span className="text-indigo-400">{commonText.brand.second}</span>
        </span>
      </Link>
      <p className="max-w-sm font-sans text-sm text-slate-400">{commonText.footer.blurb}</p>
      <Button href="/steps" variant="secondary">{commonText.footer.cta}</Button>
    </div>
  );
}

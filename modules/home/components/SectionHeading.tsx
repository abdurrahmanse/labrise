import Link from "next/link";
import { actionLinkClass } from "@/shared/components/linkStyles";

interface SectionHeadingProps {
  title: string;
  linkHref: string;
  linkLabel: string;
}

export function SectionHeading({ title, linkHref, linkLabel }: SectionHeadingProps) {
  return (
    <div className="mb-8 flex flex-wrap items-baseline justify-between gap-3 border-b-2 border-white/80 pb-3">
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      <Link href={linkHref} className={`${actionLinkClass}`}>{linkLabel} →</Link>
    </div>
  );
}

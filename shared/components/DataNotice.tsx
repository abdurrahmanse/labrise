import Link from "next/link";
import { Flag, ShieldCheck } from "lucide-react";
import { DATA_REVIEWED } from "@/modules/directory/data/review";

interface DataNoticeProps {
  /** What the page is about, used in the correction message. */
  subject: string;
  /** Official page to confirm the details on. */
  source?: string;
  /** Extra line for data that was not re-checked against a live page. */
  caution?: string;
}

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

/** Review date, a link to the official source and a way to report a mistake. */
export function DataNotice({ subject, source, caution }: DataNoticeProps) {
  const subjectLine = encodeURIComponent(`Correction: ${subject}`);
  const reportHref = CONTACT_EMAIL ? `mailto:${CONTACT_EMAIL}?subject=${subjectLine}` : "/contact";

  return (
    <aside className="flex flex-col gap-2 border border-white/15 bg-white/[0.04] p-4 text-sm text-slate-300 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
      <p className="flex items-start gap-2">
        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />
        <span>
          Reviewed {DATA_REVIEWED}. Deadlines, funding and people change, so confirm on the official source before you act.
          {caution && <> {caution}</>}
        </span>
      </p>
      <div className="flex shrink-0 flex-wrap gap-4 font-bold">
        {source && (
          <a href={source} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-200">
            Official source ↗
          </a>
        )}
        <a href={reportHref} className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-200">
          <Flag className="h-4 w-4" /> Report a correction
        </a>
      </div>
    </aside>
  );
}

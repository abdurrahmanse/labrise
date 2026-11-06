import { Flag, ShieldAlert, ShieldCheck } from "lucide-react";
import { DATA_REVIEWED } from "@/shared/data/review";
import { noticeText } from "@/content/text/common";
import { contactInfo } from "@/content/text/contact";
import { actionLinkClass } from "@/shared/components/linkStyles";

interface DataNoticeProps {
  /** What the page is about, used in the correction message. */
  subject: string;
  /** Official page to confirm the details on. */
  source?: string;
  /** Extra line for data that was not re-checked against a live page. */
  caution?: string;
  /** The entry has not been checked against its official page: show that instead of the review date. */
  unverified?: boolean;
}


/** Review date, a link to the official source and a way to report a mistake. */
export function DataNotice({ subject, source, caution, unverified }: DataNoticeProps) {
  const subjectLine = encodeURIComponent(noticeText.reportSubject(subject));
  const reportHref = `mailto:${contactInfo.email}?subject=${subjectLine}`;

  return (
    <aside className="flex flex-col gap-2 border border-white/15 bg-white/[0.04] p-4 text-sm text-slate-300 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
      <p className="flex items-start gap-2">
        {unverified ? <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0" /> : <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />}
        <span>
          {unverified ? noticeText.unverified : noticeText.reviewed(DATA_REVIEWED)}
          {caution && <> {caution}</>}
        </span>
      </p>
      <div className="flex shrink-0 flex-wrap gap-4 font-bold">
        {source && (
          <a href={source} target="_blank" rel="noopener noreferrer" className={`${actionLinkClass}`}>
            {noticeText.officialSource} ↗
          </a>
        )}
        <a href={reportHref} className={`inline-flex items-center gap-1 ${actionLinkClass}`}>
          <Flag className="h-4 w-4" /> {noticeText.report}
        </a>
      </div>
    </aside>
  );
}

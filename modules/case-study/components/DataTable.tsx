import Link from "next/link";
import { inlineLinkClass } from "@/shared/components/linkStyles";
import { caseStudyText as t } from "../text";
import type { Table } from "../types";

/** A simple table that scrolls sideways on narrow screens. The first cell of a row links when the row has an address. */
export function DataTable({ table }: { table: Table }) {
  const hasFiles = table.rows.some((r) => r.file);
  return (
    <div className="space-y-2">
      <div className="overflow-x-auto border-2 border-white/25">
        <table className="w-full min-w-[34rem] border-collapse text-left font-sans text-sm">
          <thead>
            <tr className="bg-white/[0.06]">
              {table.head.map((h) => (
                <th key={h} scope="col" className="px-3 py-2 font-mono text-xs font-bold uppercase tracking-wider text-slate-300">{h}</th>
              ))}
              {hasFiles && <th scope="col" className="px-3 py-2 font-mono text-xs font-bold uppercase tracking-wider text-slate-300">{t.pdf.column}</th>}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row.cells.join("|")} className="border-t border-white/15">
                {row.cells.map((cell, i) => (
                  <td key={i} className={i === 0 ? "px-3 py-2 font-bold text-white" : "px-3 py-2 text-slate-300"}>
                    {i === 0 && row.href ? <Link href={row.href} className={inlineLinkClass}>{cell}</Link> : cell}
                  </td>
                ))}
                {hasFiles && (
                  <td className="whitespace-nowrap px-3 py-2">
                    {row.file && <a href={`/case-study/documents/${row.file}.pdf`} target="_blank" rel="noopener noreferrer" className={`${inlineLinkClass} font-bold text-white`}>{t.pdf.open}</a>}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {table.note && <p className="font-sans text-sm text-slate-400">{table.note}</p>}
    </div>
  );
}

import { Mail, Search } from "lucide-react";
import { CopyButton } from "@/shared/ui/CopyButton";
import type { ProfessorEntry } from "../../types";
import { emailText } from "@/content/text/directory";
import { commonText } from "@/content/text/common";

export function EmailLine({ professor }: { professor: ProfessorEntry }) {
  if (professor.email) {
    return (
      <div className="flex flex-wrap items-center gap-2">
        <a href={`mailto:${professor.email}`} className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-200 break-all">
          <Mail className="h-4 w-4 shrink-0" /> {professor.email}
        </a>
        <CopyButton textToCopy={professor.email} label={commonText.actions.copy} />
      </div>
    );
  }

  const query = encodeURIComponent(emailText.searchQuery(professor.name, professor.university));
  return (
    <a href={`https://www.google.com/search?q=${query}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-slate-400 hover:text-indigo-300">
      <Search className="h-4 w-4" /> {emailText.findOfficial}
    </a>
  );
}

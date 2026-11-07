import { BulletList } from "@/shared/components/BulletList";
import { outreach } from "../data/outreach";
import { DataTable } from "./DataTable";
import { EmailCard } from "./EmailCard";
import { Subheading } from "./Subheading";

export function OutreachSection() {
  return (
    <div className="space-y-6">
      <Subheading title="Her rules"><BulletList items={outreach.rules} /></Subheading>
      <Subheading title="The first email"><EmailCard email={outreach.first} /></Subheading>
      <Subheading title="The follow-up"><EmailCard email={outreach.followUp} /></Subheading>
      <Subheading title="The reply">
        <p className="font-sans text-slate-200">{outreach.reply.summary}</p>
        <p className="font-sans text-sm text-slate-400">{outreach.reply.next}</p>
      </Subheading>
      <Subheading title="Her tracker"><DataTable table={outreach.tracker} /></Subheading>
    </div>
  );
}

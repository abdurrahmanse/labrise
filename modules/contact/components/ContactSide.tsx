import { ListChecks, Mail, MapPin, ShieldCheck } from "lucide-react";
import { CopyButton } from "@/shared/ui/CopyButton";
import { contactInfo, contactPageText as t } from "@/content/text/contact";
import { IconBadge } from "@/shared/components/IconBadge";
import { ContourPattern } from "@/shared/illustrations/ContourPattern";

const card = "border-2 border-white/30 bg-canvas-card/60 p-5 backdrop-blur-xl shadow-[4px_4px_0_0_rgba(15,23,42,0.18)]";
const osmLink = `https://www.openstreetmap.org/?mlat=${contactInfo.latitude}&mlon=${contactInfo.longitude}#map=11/${contactInfo.latitude}/${contactInfo.longitude}`;

export function ContactSide() {
  return (
    <aside className="space-y-5">
      <div className={card}>
        <div className="flex items-center gap-4">
          <IconBadge icon={Mail} size="md" />
          <div className="min-w-0">
            <p className="font-mono text-xs uppercase tracking-wider text-slate-400">{t.side.email.title}</p>
            <a href={`mailto:${contactInfo.email}`} className="block break-all text-lg font-bold text-white hover:text-indigo-300">
              {contactInfo.email}
            </a>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between gap-3">
          <span className="font-sans text-sm font-normal text-slate-400">{t.side.email.hint}</span>
          <CopyButton textToCopy={contactInfo.email} />
        </div>
      </div>

      <div className={`${card} relative overflow-hidden`}>
        <ContourPattern className="absolute -right-10 -top-6 h-40 w-64 opacity-60" />
        <div className="relative flex items-center gap-4">
          <IconBadge icon={MapPin} size="md" />
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-slate-400">{t.side.location.title}</p>
            <p className="text-lg font-bold text-white">
              {contactInfo.locality}, {contactInfo.country}
            </p>
            <p className="font-mono text-xs text-slate-400">{t.side.location.coordinates}</p>
          </div>
        </div>
        <a href={osmLink} target="_blank" rel="noopener noreferrer" className="relative mt-3 inline-block text-sm font-bold text-indigo-400 hover:text-indigo-200">
          {t.side.location.mapLink} ↗
        </a>
      </div>

      <div className={card}>
        <div className="mb-3 flex items-center gap-3">
          <IconBadge icon={ListChecks} size="md" />
          <h2 className="text-lg font-bold text-white">{t.side.checklist.title}</h2>
        </div>
        <ul className="list-disc space-y-2 pl-5 font-sans font-normal text-slate-300">
          {t.side.checklist.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className={card}>
        <div className="mb-2 flex items-center gap-3">
          <IconBadge icon={ShieldCheck} size="md" />
          <h2 className="text-lg font-bold text-white">{t.side.promise.title}</h2>
        </div>
        <p className="font-sans font-normal text-slate-300">{t.side.promise.body}</p>
      </div>
    </aside>
  );
}

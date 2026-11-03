import Link from "next/link";
import { Mail, MessageSquareText } from "lucide-react";
import { contactInfo } from "@/content/text/contact";
import { supportPageText as t } from "@/content/text/support";
import { Button } from "@/shared/ui/Button";
import { surface } from "@/shared/components/Surface";
import { buildSupportMailto } from "../utils/supportMail";

/** Section 3: for anyone who is not sure which help fits, a way to write now, or to start free. */
export function SupportContact() {
  return (
    <section className={surface({ tone: "panel", depth: "lg", padding: "xl", className: "space-y-5" })}>
      <h2 className="text-2xl font-bold text-white">{t.contact.title}</h2>
      <p className="max-w-2xl font-sans text-[length:var(--text-body)] font-normal text-slate-300">{t.contact.body}</p>

      <div className="flex flex-wrap items-center gap-3">
        <Button href={buildSupportMailto()} leftIcon={<Mail className="h-4 w-4" aria-hidden />}>
          {t.contact.email}
        </Button>
        <Button href="/contact" variant="secondary" leftIcon={<MessageSquareText className="h-4 w-4" aria-hidden />}>
          {t.contact.form}
        </Button>
        <span className="font-mono text-xs text-slate-400">{contactInfo.email}</span>
      </div>

      <p className="border-t border-white/10 pt-4 font-sans text-sm font-normal text-slate-400">
        {t.contact.free}{" "}
        {t.contact.freeLinks.map((link, i) => (
          <span key={link.href}>
            {i > 0 && " · "}
            <Link href={link.href} className="font-semibold text-indigo-400 underline underline-offset-4 hover:text-indigo-200">
              {link.label}
            </Link>
          </span>
        ))}
      </p>
    </section>
  );
}

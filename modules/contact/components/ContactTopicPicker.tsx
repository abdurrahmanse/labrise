import { contactPageText as t, contactTopics } from "@/content/text/contact";
import { cn } from "@/shared/utils/cn";
import { labelClass } from "./ContactField";

interface ContactTopicPickerProps {
  value: string;
  onChange: (topic: string) => void;
}

export function ContactTopicPicker({ value, onChange }: ContactTopicPickerProps) {
  return (
    <fieldset>
      <legend className={labelClass}>{t.form.topic}</legend>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {contactTopics.map(({ value: topic, label, hint, Icon }) => {
          const active = value === topic;
          return (
            <label
              key={topic}
              className={cn(
                "flex cursor-pointer items-start gap-3 border-2 p-3 transition-colors",
                active ? "border-indigo-400 bg-indigo-600 text-white" : "border-white/25 bg-white/[0.03] text-slate-200 hover:border-indigo-400/70"
              )}
            >
              <input type="radio" name="topic" value={topic} checked={active} onChange={() => onChange(topic)} className="sr-only" />
              <Icon className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
              <span>
                <span className="block font-bold">{label}</span>
                <span className={cn("block font-sans text-sm font-normal", active ? "opacity-80" : "text-slate-400")}>{hint}</span>
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

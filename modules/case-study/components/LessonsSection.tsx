import { BulletList } from "@/shared/components/BulletList";
import { Button } from "@/shared/ui/Button";
import { journey } from "../data/journey";
import { caseStudyText as t } from "../text";
import { Subheading } from "./Subheading";

/** What to copy and what she avoided, then the next places to go. */
export function LessonsSection() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Subheading title="What to copy"><BulletList items={journey.lessons} /></Subheading>
        <Subheading title="What she avoided"><BulletList items={journey.avoided} /></Subheading>
      </div>
      <Subheading title="If you are applying for a Master's instead"><BulletList items={journey.masters} /></Subheading>
      <Subheading title={t.cta.title}>
        <div className="flex flex-wrap gap-3">
          <Button href="/apply">{t.cta.apply}</Button>
          <Button href="/directory/professors" variant="secondary">{t.cta.directory}</Button>
          <Button href="/planner" variant="secondary">{t.cta.planner}</Button>
          <Button href="/profile" variant="secondary">{t.cta.profile}</Button>
          <Button href="/guides" variant="secondary">{t.cta.guides}</Button>
        </div>
      </Subheading>
    </div>
  );
}

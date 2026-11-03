import { BulletList } from "@/shared/components/BulletList";
import { Block } from "@/shared/components/Block";
import type { FieldInfo } from "../../data/fields";

export function ProfessorFieldInfo({ field }: { field: FieldInfo }) {
  return (
    <>
      <Block title={`About the field: ${field.title}`}>
        <p className="text-lg text-slate-200 font-sans font-normal">{field.about}</p>
      </Block>
      <div className="grid gap-8 md:grid-cols-3">
        <Block title="Common topics">
          <BulletList items={field.topics} />
        </Block>
        <Block title="Skills to show">
          <BulletList items={field.skills} />
        </Block>
        <Block title="What to read">
          <BulletList items={field.reading} />
        </Block>
      </div>
    </>
  );
}

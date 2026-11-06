import { BulletList } from "@/shared/components/BulletList";
import { Block } from "@/shared/components/Block";
import type { FieldInfo } from "../data/fields";
import { detailText } from "@/content/text/directory";
import { professorDetailText } from "@/content/text/directory";

export function ProfessorFieldInfo({ field }: { field: FieldInfo }) {
  return (
    <>
      <Block title={professorDetailText.fieldAbout(field.title)}>
        <p className="text-lg text-slate-200 font-sans font-normal">{field.about}</p>
      </Block>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <Block title={detailText.blocks.commonTopics}>
          <BulletList items={field.topics} />
        </Block>
        <Block title={detailText.blocks.skills}>
          <BulletList items={field.skills} />
        </Block>
        <Block title={detailText.blocks.reading}>
          <BulletList items={field.reading} />
        </Block>
      </div>
    </>
  );
}

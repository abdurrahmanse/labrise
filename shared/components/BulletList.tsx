export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-slate-200 font-sans font-normal">
          <span className="text-indigo-400">■</span> {item}
        </li>
      ))}
    </ul>
  );
}

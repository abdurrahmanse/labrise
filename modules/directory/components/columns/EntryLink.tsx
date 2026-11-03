import Link from "next/link";

export function EntryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="font-bold text-white hover:text-indigo-300 underline decoration-white/30 underline-offset-4">
      {children}
    </Link>
  );
}

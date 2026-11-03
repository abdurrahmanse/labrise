import Link from "next/link";
import { HeartHandshake } from "lucide-react";
import { supportLinkData } from "@/content/site/navigationData";
import { cn } from "@/shared/utils/cn";

interface HeaderSupportLinkProps {
  className?: string;
  onClick?: () => void;
}

/** The "Support" call to action: a filled pill, the one strong element in the header. */
export function HeaderSupportLink({ className, onClick }: HeaderSupportLinkProps) {
  return (
    <Link
      href={supportLinkData.href}
      onClick={onClick}
      className={cn(
        "inline-flex h-9 items-center justify-center gap-2 rounded-full bg-indigo-600 px-4 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-500 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60",
        className
      )}
    >
      <HeartHandshake className="h-4 w-4" aria-hidden />
      {supportLinkData.label}
    </Link>
  );
}

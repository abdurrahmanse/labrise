import { commonText } from "@/content/text/common";
import { Button } from "@/shared/ui/Button";

interface LoadMoreButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

/** "Load more" for lists that fetch their next page on demand. */
export function LoadMoreButton({ onClick, disabled }: LoadMoreButtonProps) {
  return (
    <Button variant="secondary" disabled={disabled} onClick={onClick}>
      {commonText.states.loadMore}
    </Button>
  );
}

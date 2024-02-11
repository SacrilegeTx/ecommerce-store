import type { MouseEventHandler } from "react";

import { cn } from "@/lib/utils";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
}

function IconButton({ onClick, icon, className }: IconButtonProps) {
  return (
    <button
      className={cn(
        "flex items-center justify-center rounded-full border bg-white p-2 shadow-md transition hover:scale-110",
        className,
      )}
      type="button"
      onClick={onClick}
    >
      {icon}
    </button>
  );
}

export default IconButton;

import clsx from "clsx";

import CardCoverIcon from "../icons/CardCoverIcon";

export interface CardProps {
  className?: string;
}

export default function Card({ className }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-md min-w-0 max-w-2/3 h-fit overflow-hidden transition-all",
        className
      )}
    >
      <CardCoverIcon className="size-full" />
    </div>
  );
}

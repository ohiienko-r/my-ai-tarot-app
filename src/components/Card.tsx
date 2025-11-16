import { useState } from "react";
import clsx from "clsx";

import CardCoverIcon from "../icons/CardCoverIcon";

export interface CardProps {
  className?: string;
  disabled?: boolean;
  totalCards?: number;
  onReveal?: () => void;
}

export default function Card({
  className,
  disabled,
  totalCards = 1,
  onReveal,
}: CardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={clsx(
        "rounded-md overflow-hidden perspective-[1000px] transition-all",
        totalCards > 1 ? "w-28 h-[198px]" : "w-56 h-[396px]",
        className
      )}
    >
      {/* Inner clickable container */}
      <button
        className={clsx(
          "relative size-full text-center transition-transform duration-500",
          flipped && "rotate-y-180"
        )}
        style={{ transformStyle: "preserve-3d" }}
        disabled={disabled}
        onClick={() => {
          setFlipped((prev) => !prev);
          onReveal?.();
        }}
      >
        <CardCoverIcon className="top-0 absolute size-full backface-hidden" />

        <div className="top-0 absolute bg-white size-full rotate-y-180 backface-hidden">
          <p className="text-black">GOTCHA!</p>
        </div>
      </button>
    </div>
  );
}

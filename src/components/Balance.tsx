import clsx from "clsx";

import MoonCoinIcon from "../icons/MoonCoinIcon";

interface BalanceProps {
  balance?: number;
  className?: string;
}

export default function Balance({ balance, className }: BalanceProps) {
  return (
    <div className="bg-linear-to-r from-[#EA850F] to-[#FFC700] p-0.5 rounded-2xl size-fit">
      <div
        className={clsx(
          "flex items-center gap-1 bg-[#06080d] px-2 py-0.5 rounded-full",
          className
        )}
      >
        <MoonCoinIcon className="size-4 text-white" />

        <span className="font-medium text-sm">{balance ?? "N/A"}</span>
      </div>
    </div>
  );
}

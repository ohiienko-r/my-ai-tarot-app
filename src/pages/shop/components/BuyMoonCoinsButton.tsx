import { type ComponentProps } from "react";
import clsx from "clsx";

import MoonCoinIcon from "../../../icons/MoonCoinIcon";
import TelegramStarIcon from "../../../icons/TelegramStarIcon";

interface BuyMoonCoinsButtonProps extends ComponentProps<"button"> {
  coinsQty: number;
  price: number;
  economy?: number;
}

export default function BuyMoonCoinsButton({
  coinsQty,
  price,
  economy,
  className,
  disabled,
  ...rest
}: BuyMoonCoinsButtonProps) {
  return (
    <button
      disabled={disabled}
      {...rest}
      className={clsx(
        "flex flex-col justify-between items-center gap-2 bg-linear-to-b from-[#5760AD] to-[#8F37B5] rounded-[10px] w-full max-w-24 overflow-hidden",
        className,
        disabled && "grayscale-100"
      )}
    >
      <p className="flex items-center gap-1 p-2 font-bold text-3xl">
        {coinsQty}
        <MoonCoinIcon className="size-5" />
      </p>

      <div className="flex flex-col items-center gap-1.5 w-full">
        <p className="flex items-center gap-1">
          <TelegramStarIcon />
          {price}
        </p>

        <div
          className="flex justify-center items-center bg-[#EC1EE5] p-2 w-full h-[19px]"
          style={{ visibility: economy ? "visible" : "hidden" }}
        >
          <p className="text-[8px]">Economy {economy}%</p>
        </div>
      </div>
    </button>
  );
}

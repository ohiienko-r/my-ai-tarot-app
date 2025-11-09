import type { ReactNode, ComponentProps } from "react";
import clsx from "clsx";

import HeartsCardIcon from "../icons/HeartsCardIcon";

const BUTTON_VARIANTS: Record<number, string> = {
  0: "from-[#BE124E] to-[#2F3BAE]",
  1: "from-[#1B4887] to-[#860E9E]",
  2: "from-[#E19641] to-[#BA2519]",
};

interface NavButtonProps extends ComponentProps<"button"> {
  index?: number;
  children?: ReactNode;
}

export default function NavButton({
  index = 0,
  children,
  className,
  disabled,
  ...rest
}: NavButtonProps) {
  return (
    <button
      className={clsx(
        "flex items-center gap-4 bg-linear-to-r m-0 p-0 px-3 py-2 border-0 rounded-md outline-0",
        BUTTON_VARIANTS[index],
        className,
        disabled && "grayscale pointer-events-none"
      )}
      disabled={disabled}
      {...rest}
    >
      <HeartsCardIcon />
      {children}
    </button>
  );
}

import { type ComponentProps } from "react";
import clsx from "clsx";

export default function Badge({
  children,
  className,
  ...rest
}: ComponentProps<"div">) {
  return (
    <div className="bg-linear-to-r from-[#EA850F] to-[#FFC700] p-0.5 rounded-2xl size-fit transition-all">
      <div
        className={clsx(
          "flex items-center gap-1 bg-[#06080d] px-2 py-0.5 rounded-full transition-all",
          className
        )}
        {...rest}
      >
        {children}
      </div>
    </div>
  );
}

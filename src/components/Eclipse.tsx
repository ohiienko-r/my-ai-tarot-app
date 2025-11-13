import { type PropsWithChildren } from "react";

import clsx from "clsx";

import { ROUTES_NAMES } from "../constants/router";

interface EclipseProps extends PropsWithChildren {
  currentPath?: string;
}

export default function Eclipse({ children, currentPath }: EclipseProps) {
  return (
    <div className="relative">
      <div className="absolute inset-0 blur-xs rounded-full overflow-hidden">
        <div
          className={clsx(
            "-z-1 absolute inset-0 rounded-full",
            currentPath === ROUTES_NAMES.ROOT && "eclipse glow"
          )}
        ></div>
      </div>
      <div className="relative bg-black/10 rounded-full overflow-hidden font-thin text-white text-sm">
        <div className="-z-1 absolute inset-0 bg-white rounded-full eclipse"></div>
        {children}
      </div>
    </div>
  );
}

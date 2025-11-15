import { useLocation, useNavigate } from "react-router";
import { useLaunchParams } from "@tma.js/sdk-react";

import clsx from "clsx";

import { ROUTES_NAMES } from "../constants/router";

import Badge from "./Badge";
import Balance from "./Balance";

import CircleUserIcon from "../icons/CircleUserIcon";
import PlusIcon from "../icons/PlusIcon";

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const lp = useLaunchParams();

  return (
    <header className="flex justify-between items-center gap-2">
      <button
        className="flex items-center border-0 outline-0"
        onClick={() => navigate(ROUTES_NAMES.SETTINGS)}
      >
        <Badge>
          <CircleUserIcon className="size-4 text-[#EA850F]" />
          <span className="font-semibold text-sm">
            {lp?.tgWebAppData?.user?.first_name ?? "User"}
          </span>
        </Badge>
      </button>

      <button
        className="flex items-center border-0 outline-0"
        onClick={() =>
          pathname !== ROUTES_NAMES.SHOP && navigate(ROUTES_NAMES.SHOP)
        }
      >
        {pathname !== ROUTES_NAMES.SHOP && (
          <span className="z-10 flex justify-center items-center bg-green-600 -mr-2 rounded-full size-3.5 shrink-0">
            <PlusIcon className="size-3" />
          </span>
        )}

        <Balance
          balance={100}
          className={clsx(pathname !== ROUTES_NAMES.SHOP && "pl-3")}
          currentPath={pathname}
        />
      </button>
    </header>
  );
}

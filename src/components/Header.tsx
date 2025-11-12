import { useLocation, useNavigate } from "react-router";
import { useLaunchParams } from "@tma.js/sdk-react";

import clsx from "clsx";

import { ROUTES_NAMES } from "../constants/router";

import Balance from "./Balance";

import PlusIcon from "../icons/PlusIcon";

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const lp = useLaunchParams();

  console.log(pathname);

  return (
    <header className="flex justify-between items-center gap-2">
      <h1 className="font-semibold text-lg">
        {pathname.includes(ROUTES_NAMES.SHOP)
          ? "Take your time💫"
          : `Hi, ${lp?.tgWebAppData?.user?.first_name ?? "Dear User"}👋`}
      </h1>

      <button
        className="flex items-center border-0 outline-0"
        onClick={() =>
          pathname === ROUTES_NAMES.ROOT
            ? navigate(ROUTES_NAMES.SHOP)
            : undefined
        }
      >
        {pathname === ROUTES_NAMES.ROOT && (
          <span className="z-10 flex justify-center items-center bg-green-600 -mr-2 rounded-full size-3.5 shrink-0">
            <PlusIcon className="size-3" />
          </span>
        )}

        <Balance
          balance={100}
          className={clsx(pathname === ROUTES_NAMES.ROOT && "pl-3")}
        />
      </button>
    </header>
  );
}

import { useLaunchParams } from "@tma.js/sdk-react";
import { useNavigate } from "react-router";

import { TAROLOGISTS } from "../../constants/tarologists";
import { ROUTES_NAMES } from "../../constants/router";

import Balance from "../../components/Balance";
import Navigation from "../../components/Navigation";
import TarologistsPagerView from "../../components/TarologistsPagerView";

import PlusIcon from "../../icons/PlusIcon";

export default function HomePage() {
  const lp = useLaunchParams();
  const navigate = useNavigate();

  return (
    <main className="flex flex-col gap-6 p-2 size-full">
      <header className="flex justify-between items-center gap-2">
        <h1 className="font-semibold text-lg">
          Hi, {lp?.tgWebAppData?.user?.first_name ?? "Dear User"}👋
        </h1>

        <button
          className="flex items-center border-0 outline-0"
          onClick={() => navigate(ROUTES_NAMES.SHOP)}
        >
          <span className="z-10 flex justify-center items-center bg-green-600 -mr-2 rounded-full size-3.5 shrink-0">
            <PlusIcon className="size-3" />
          </span>

          <Balance balance={100} className="pl-3" />
        </button>
      </header>

      <TarologistsPagerView tarologists={TAROLOGISTS} />

      <Navigation />
    </main>
  );
}

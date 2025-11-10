import { useLaunchParams } from "@tma.js/sdk-react";

import { TAROLOGISTS } from "../../constants/tarologists";

import Navigation from "../../components/Navigation";
import TarologistsPagerView from "../../components/TarologistsPagerView";

import MoonCoinIcon from "../../icons/MoonCoinIcon";
import PlusIcon from "../../icons/PlusIcon";

export default function HomePage() {
  const lp = useLaunchParams();

  return (
    <main className="flex flex-col gap-6 p-2 size-full">
      <header className="flex justify-between items-center gap-2">
        <h1 className="font-semibold text-lg">
          Hi, {lp?.tgWebAppData?.user?.first_name ?? "Dear User"}👋
        </h1>

        <button className="flex items-center border-0 outline-0">
          <span className="z-10 flex justify-center items-center bg-green-600 -mr-2 rounded-full size-3.5 shrink-0">
            <PlusIcon className="size-3" />
          </span>

          <span className="bg-linear-to-r from-[#EA850F] to-[#FFC700] p-0.5 rounded-2xl size-fit">
            <p className="flex items-center gap-1 bg-[#06080d] px-2 py-0.5 pl-3 rounded-full font-medium text-sm">
              <MoonCoinIcon className="size-4 text-white" />
              100
            </p>
          </span>
        </button>
      </header>

      <TarologistsPagerView tarologists={TAROLOGISTS} />

      <Navigation />
    </main>
  );
}

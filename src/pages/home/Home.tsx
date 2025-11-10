import { useLaunchParams } from "@tma.js/sdk-react";

import Navigation from "../../components/Navigation";

import MoonCoinIcon from "../../icons/MoonCoinIcon";

export default function HomePage() {
  const lp = useLaunchParams();

  return (
    <main className="flex flex-col gap-6 p-2 size-full">
      <header className="flex justify-between items-center gap-2">
        <h1 className="font-semibold text-lg">
          Hi, {lp?.tgWebAppData?.user?.first_name ?? "Dear User"}👋
        </h1>

        <span className="bg-linear-to-r from-[#EA850F] to-[#FFC700] p-0.5 rounded-2xl size-fit">
          <p className="flex items-center gap-1 bg-[#06080d] px-2 py-0.5 rounded-full font-medium text-sm">
            <MoonCoinIcon className="size-4 text-white" />
            100
          </p>
        </span>
      </header>

      {/* TODO: move to a separate component once tarologists qty starts growing */}
      <div className="relative flex flex-col justify-end items-start bg-[url('/galaxy.png')] bg-cover bg-no-repeat shadow-md p-2 rounded-2xl h-48 overflow-hidden">
        <h2 className="font-semibold text-6xl">Eva</h2>

        <div className="z-10 flex justify-center items-center gap-1 w-full">
          <span className="border border-white rounded-full size-1.5 shrink-0"></span>
          <span className="bg-white rounded-full size-1.5 shrink-0"></span>
          <span className="bg-white rounded-full size-1.5 shrink-0"></span>
        </div>

        <img
          src="/eva.png"
          alt="Tarologist Eva"
          className="top-2 right-0 absolute w-48 h-auto"
        />
      </div>

      <Navigation />
    </main>
  );
}

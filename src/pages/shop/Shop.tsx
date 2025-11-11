import useBackButton from "../../hooks/useBackButton";

import Balance from "../../components/Balance";

import MoonCoinIcon from "../../icons/MoonCoinIcon";
import TelegramStarIcon from "../../icons/TelegramStarIcon";

export default function ShopPage() {
  useBackButton();

  return (
    <main className="flex flex-col gap-6 p-2 size-full overflow-y-auto">
      <header className="flex justify-between items-center gap-2">
        <h1 className="font-semibold text-lg">Take your time💫</h1>

        <Balance balance={100} />
      </header>

      <section className="gap-2 grid grid-cols-[repeat(auto-fit,minmax(96px,1fr))]">
        <button className="flex flex-col justify-between justify-self-end items-center gap-2 bg-linear-to-b from-[#5760AD] to-[#8F37B5] rounded-[10px] w-full max-w-24 overflow-hidden">
          <p className="flex items-center gap-1 p-2 font-bold text-3xl">
            5 <MoonCoinIcon className="size-5" />
          </p>

          <div className="flex flex-col items-center gap-1.5 w-full">
            <p className="flex items-center gap-1">
              <TelegramStarIcon />
              50
            </p>

            <div
              className="bg-[#EC1EE5] p-2 w-full h-[19px]"
              style={{ visibility: "hidden" }}
            ></div>
          </div>
        </button>

        <button className="flex flex-col justify-between justify-self-center items-center gap-2 bg-linear-to-b from-[#5760AD] to-[#8F37B5] rounded-[10px] w-full max-w-24 overflow-hidden">
          <p className="flex items-center gap-1 p-2 font-bold text-3xl">
            20 <MoonCoinIcon className="size-5" />
          </p>

          <div className="flex flex-col items-center gap-1.5 w-full">
            <p className="flex items-center gap-1">
              <TelegramStarIcon />
              175
            </p>

            <div className="flex justify-center items-center bg-[#EC1EE5] w-full h-[19px]">
              <p className="text-[8px]">Economy 13%</p>
            </div>
          </div>
        </button>

        <button className="flex flex-col justify-between items-center gap-2 bg-linear-to-b from-[#5760AD] to-[#8F37B5] rounded-[10px] w-full max-w-24 overflow-hidden">
          <p className="flex items-center gap-1 p-2 font-bold text-3xl">
            80 <MoonCoinIcon className="size-5" />
          </p>

          <div className="flex flex-col items-center gap-1.5 w-full">
            <p className="flex items-center gap-1">
              <TelegramStarIcon />
              600
            </p>

            <div className="flex justify-center items-center bg-[#EC1EE5] w-full h-[19px]">
              <p className="text-[8px]">Economy 38%</p>
            </div>
          </div>
        </button>
      </section>
    </main>
  );
}

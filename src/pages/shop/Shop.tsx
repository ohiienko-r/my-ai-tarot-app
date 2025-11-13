import useBackButton from "../../hooks/useBackButton";

import { Button } from "../../components/Button";
import BuyMoonCoinsButton from "./components/BuyMoonCoinsButton";
import Header from "../../components/Header";

import MoonCoinIcon from "../../icons/MoonCoinIcon";
import TelegramStarIcon from "../../icons/TelegramStarIcon";

export default function ShopPage() {
  useBackButton();

  return (
    <main className="flex flex-col gap-8 p-2 size-full overflow-y-auto">
      <Header />

      <section className="gap-3 grid grid-cols-[repeat(auto-fit,minmax(96px,1fr))] grid-rows-auto px-2">
        <h3 className="col-span-full row-start-1 font-semibold text-sm">
          Buy 💰
        </h3>

        <BuyMoonCoinsButton coinsQty={5} price={50} />

        <BuyMoonCoinsButton coinsQty={20} price={175} economy={13} />

        <BuyMoonCoinsButton coinsQty={80} price={600} economy={38} />
      </section>

      <section className="flex flex-col gap-3 px-2">
        <h3 className="font-semibold text-sm">Get for free 🎁</h3>

        <div className="flex flex-col gap-2">
          <Button
            variant={"secondary"}
            size={"xl"}
            className="justify-start gap-4"
          >
            <span className="flex items-center gap-0.5 font-semibold text-xl">
              3 <MoonCoinIcon />
            </span>{" "}
            For inviting a friend
          </Button>

          <Button
            variant={"secondary"}
            size={"xl"}
            className="justify-start gap-4"
          >
            <span className="flex items-center gap-0.5 font-semibold text-xl">
              3 <MoonCoinIcon />
            </span>{" "}
            Daily bonus
          </Button>

          <Button
            variant={"secondary"}
            size={"xl"}
            className="justify-start gap-4"
          >
            <span className="flex items-center gap-0.5 font-semibold text-xl">
              3 <MoonCoinIcon />
            </span>{" "}
            For watching an add
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-3 px-2">
        <h3 className="font-semibold text-sm">Support us 💗</h3>

        <Button
          variant={"secondary"}
          size={"xl"}
          className="justify-between gap-4"
        >
          <span className="flex justify-between items-center gap-4 w-full">
            With Telegram Stars
            <TelegramStarIcon />
          </span>
        </Button>
      </section>
    </main>
  );
}

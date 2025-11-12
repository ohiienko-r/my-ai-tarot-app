import useBackButton from "../../hooks/useBackButton";

import Balance from "../../components/Balance";
import BuyMoonCoinsButton from "./components/BuyMoonCoinsButton";

export default function ShopPage() {
  useBackButton();

  return (
    <main className="flex flex-col gap-6 p-2 size-full overflow-y-auto">
      <header className="flex justify-between items-center gap-2">
        <h1 className="font-semibold text-lg">Take your time💫</h1>

        <Balance balance={100} />
      </header>

      <section className="gap-2 grid grid-cols-[repeat(auto-fit,minmax(96px,1fr))]">
        <BuyMoonCoinsButton
          coinsQty={5}
          price={50}
          className="justify-self-end"
        />

        <BuyMoonCoinsButton
          coinsQty={20}
          price={175}
          economy={13}
          className="justify-self-center"
        />

        <BuyMoonCoinsButton
          coinsQty={80}
          price={600}
          economy={38}
          className="justify-self-start"
        />
      </section>
    </main>
  );
}

import { useState, Activity } from "react";
import { useLocation } from "react-router";
import useMainButton from "../../hooks/useMainButton";

import type { Spread } from "../../types/tarologists";

import CardsLayout from "./components/CardsLayout";

interface LocationState {
  spread: Spread;
}

export default function SpreadDetailsPage() {
  const [isPaid, setIsPaid] = useState(false);

  const {
    state: { spread },
  } = useLocation() as { state: LocationState };

  useMainButton({
    title: isPaid
      ? "Touch the card to reveal"
      : `Get spread for ${spread?.cost} Moon Coins`,
    onClick: () => setIsPaid(true),
    visible: false,
  });

  return (
    <main className="flex flex-col items-center gap-4 size-full overflow-y-auto transition-all">
      <CardsLayout
        spread={spread}
        isPaid={isPaid}
        onAllCardsRevealed={() => console.log("All cards revealed")}
      />

      <Activity mode={isPaid ? "hidden" : "visible"}>
        <p className="text-sm text-center">{spread?.description}</p>
      </Activity>
    </main>
  );
}

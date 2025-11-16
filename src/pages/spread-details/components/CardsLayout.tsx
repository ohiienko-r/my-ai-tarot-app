import { useState, useEffect } from "react";

import type { Spread } from "../../../types/tarologists";

import Card from "../../../components/Card";

interface CardsLayoutProps {
  spread: Spread;
  isPaid: boolean;
  onAllCardsRevealed?: () => void;
}

export default function CardsLayout({
  spread,
  isPaid,
  onAllCardsRevealed,
}: CardsLayoutProps) {
  const [revealedCards, setRevealedCards] = useState<number[]>([]);

  useEffect(() => {
    if (revealedCards.length === spread.cards) {
      onAllCardsRevealed?.();
    }
  }, [revealedCards, spread.cards, onAllCardsRevealed]);

  return (
    <section className="flex flex-wrap flex-1 justify-center items-center gap-2">
      {Array.from({ length: spread?.cards }).map((_, index) => (
        <Card
          key={index}
          totalCards={spread?.cards}
          disabled={!isPaid || revealedCards.includes(index)}
          onReveal={() => setRevealedCards((prev) => [...prev, index])}
        />
      ))}
    </section>
  );
}

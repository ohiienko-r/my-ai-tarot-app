import { TAROLOGISTS } from "../../constants/tarologists";

import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import TarologistsPagerView from "../../components/TarologistsPagerView";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-6 p-2 size-full">
      <Header />

      <TarologistsPagerView tarologists={TAROLOGISTS} />

      <Navigation spreads={TAROLOGISTS[0].spreads} />
    </main>
  );
}

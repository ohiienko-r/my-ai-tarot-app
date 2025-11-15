import { TAROLOGISTS } from "../../constants/tarologists";

import Navigation from "../../components/Navigation";
import TarologistsPagerView from "../../components/TarologistsPagerView";

export default function HomePage() {
  return (
    <>
      <TarologistsPagerView tarologists={TAROLOGISTS} />

      <Navigation spreads={TAROLOGISTS[0].spreads} />
    </>
  );
}

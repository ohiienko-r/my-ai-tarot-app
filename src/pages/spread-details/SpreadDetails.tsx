import { useState, Activity } from "react";
import { useLocation } from "react-router";
import useMainButton from "../../hooks/useMainButton";
import clsx from "clsx";

import type { Spread } from "../../types/tarologists";

import Card from "../../components/Card";

interface LocationState {
  spread: Spread;
}

export default function SpreadDetailsPage() {
  const [descriptionVisible, setDescriptionVisible] = useState(true);
  const {
    state: { spread },
  } = useLocation() as { state: LocationState };
  useMainButton({
    title: "Make a spread",
    onClick: () => setDescriptionVisible((prev) => !prev),
  });

  return (
    <main className="flex flex-col items-center gap-4 size-full overflow-y-auto transition-all">
      <section
        className={clsx(
          "justify-items-center gap-2 grid grid-cols-[repeat(auto-fit,minmax(35%,1fr))] w-full",
          !descriptionVisible && "h-full"
        )}
      >
        {Array.from({ length: spread?.cards }).map((_, index) => {
          console.log(index === 2);
          return (
            <Card
              key={index}
              className={clsx(index === 2 && "col-span-full w-[35%]")}
            />
          );
        })}
      </section>

      <Activity mode={descriptionVisible ? "visible" : "hidden"}>
        <p className="text-sm text-center">{spread?.description}</p>
      </Activity>
    </main>
  );
}

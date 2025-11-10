import type { Tarologist } from "../types/tarologists";

interface TarologistsPagerViewProps {
  tarologists: Tarologist[];
}

export default function TarologistsPagerView({
  tarologists,
}: TarologistsPagerViewProps) {
  // TODO: update wrapping ul to be a swipable pager
  return (
    <section className="flex flex-col gap-3 w-full">
      <ul className="flex items-center w-full h-fit">
        {tarologists.map((tarologist) => (
          <li
            key={tarologist.id}
            className={`relative flex w-full flex-col justify-end items-start bg-cover bg-no-repeat shadow-md p-2 rounded-2xl h-48 overflow-hidden`}
            style={{ backgroundImage: `url(${tarologist.bg})` }}
          >
            <h2 className="font-semibold text-6xl">{tarologist.name}</h2>

            <img
              src={tarologist.avatar}
              alt={`Tarologist ${tarologist.name}`}
              className="top-2 right-0 absolute w-48 h-auto"
            />
          </li>
        ))}
      </ul>

      <div className="flex justify-center items-center gap-1 w-full">
        {Array.from({ length: tarologists.length }, (_, index) => index).map(
          (indicator) => (
            <span
              key={indicator}
              className="border border-white rounded-full size-1.5 shrink-0"
            ></span>
          )
        )}
      </div>
    </section>
  );
}

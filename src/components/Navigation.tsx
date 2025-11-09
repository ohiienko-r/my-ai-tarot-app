import NavButton from "./NavButton";

import MoonCoinIcon from "../icons/MoonCoinIcon";
import CircleQuestionMarkIcon from "../icons/CircleQuestionMarkIcon";

// TODO: update once constants for tarologist are ready
export default function Navigation() {
  return (
    <section className="flex flex-col flex-1 justify-between gap-3">
      <div className="flex flex-col gap-3">
        <NavButton index={0}>
          <div className="flex flex-1 justify-between items-center gap-4 font-bold text-2xl">
            <p className="font-semibold text-lg">Card of the day</p>

            <span className="flex items-center gap-1">
              2 <MoonCoinIcon className="size-4" />
            </span>
          </div>
        </NavButton>

        <NavButton index={1}>
          <div className="flex flex-1 justify-between items-center gap-4 font-bold text-2xl">
            <p className="font-semibold text-lg">Yes/No</p>

            <span className="flex items-center gap-1">
              3 <MoonCoinIcon className="size-4" />
            </span>
          </div>
        </NavButton>

        <NavButton index={2}>
          <div className="flex flex-1 justify-between items-center gap-4 font-bold text-2xl">
            <p className="font-semibold text-lg">Ask a question</p>

            <span className="flex items-center gap-1 font-bold">
              5 <MoonCoinIcon className="size-4" />
            </span>
          </div>
        </NavButton>
      </div>

      <button className="bg-linear-to-r from-[#EA850F] to-[#FFC700] m-0 p-0.5 border-0 rounded-md outline-0">
        <span className="flex justify-between items-center bg-[#06080d] px-3 py-2 rounded-md text-xs">
          Get more information about Tarot?
          <CircleQuestionMarkIcon className="size-4" />
        </span>
      </button>
    </section>
  );
}

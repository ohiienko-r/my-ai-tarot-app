import { useNavigate } from "react-router";
import { ROUTES_NAMES } from "../constants/router";

import NavButton from "./NavButton";

import MoonCoinIcon from "../icons/MoonCoinIcon";
import CircleQuestionMarkIcon from "../icons/CircleQuestionMarkIcon";

// TODO: update once constants for tarologist are ready
export default function Navigation() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col flex-1 justify-between gap-3">
      <div className="flex flex-col gap-3">
        <NavButton
          index={0}
          onClick={() => navigate(ROUTES_NAMES.CARD_OF_THE_DAY)}
        >
          <div className="flex flex-1 justify-between items-center gap-4 font-bold text-2xl">
            <p className="font-semibold text-lg">Card of the day</p>

            <span className="flex items-center gap-1">
              2 <MoonCoinIcon className="size-4" />
            </span>
          </div>
        </NavButton>

        <NavButton index={1} onClick={() => navigate(ROUTES_NAMES.YES_NO)}>
          <div className="flex flex-1 justify-between items-center gap-4 font-bold text-2xl">
            <p className="font-semibold text-lg">Yes/No</p>

            <span className="flex items-center gap-1">
              3 <MoonCoinIcon className="size-4" />
            </span>
          </div>
        </NavButton>

        <NavButton
          index={2}
          onClick={() => navigate(ROUTES_NAMES.ASK_QUESTION)}
        >
          <div className="flex flex-1 justify-between items-center gap-4 font-bold text-2xl">
            <p className="font-semibold text-lg">Ask a question</p>

            <span className="flex items-center gap-1 font-bold">
              5 <MoonCoinIcon className="size-4" />
            </span>
          </div>
        </NavButton>
      </div>

      <button
        className="bg-linear-to-r from-[#EA850F] to-[#FFC700] m-0 p-0.5 border-0 rounded-md outline-0"
        onClick={() => navigate(ROUTES_NAMES.INFORMATION)}
      >
        <span className="flex justify-between items-center bg-[#06080d] px-3 py-2 rounded-md text-xs">
          Get more information about Tarot?
          <CircleQuestionMarkIcon className="size-4" />
        </span>
      </button>
    </section>
  );
}

import { useNavigate } from "react-router";
import { ROUTES_NAMES } from "../constants/router";
import type { Spread } from "../types/tarologists";

import NavButton from "./NavButton";

import MoonCoinIcon from "../icons/MoonCoinIcon";
import CircleQuestionMarkIcon from "../icons/CircleQuestionMarkIcon";

interface NavigationProps {
  spreads: Spread[];
}

export default function Navigation({ spreads }: NavigationProps) {
  const navigate = useNavigate();

  return (
    <nav className="flex flex-col flex-1 justify-between gap-3">
      <div className="flex flex-col gap-3">
        {spreads.map((spread, index) => (
          <NavButton
            key={spread.id}
            index={index}
            onClick={() =>
              navigate(ROUTES_NAMES.SPREAD_DETAILS, {
                state: { spread },
              })
            }
          >
            <div className="flex flex-1 justify-between items-center gap-4 font-bold text-2xl">
              <p className="font-semibold text-lg">{spread.name}</p>

              <span className="flex items-center gap-1">
                {spread.cost} <MoonCoinIcon className="size-4" />
              </span>
            </div>
          </NavButton>
        ))}
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
    </nav>
  );
}

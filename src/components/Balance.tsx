import Badge from "./Badge";
import Eclipse from "./Eclipse";

import MoonCoinIcon from "../icons/MoonCoinIcon";

interface BalanceProps {
  balance?: number;
  className?: string;
  currentPath?: string;
}

export default function Balance({
  balance,
  className,
  currentPath,
}: BalanceProps) {
  return (
    <Eclipse currentPath={currentPath}>
      <Badge className={className}>
        <MoonCoinIcon className="size-4 text-white" />

        <span className="font-semibold text-sm">{balance ?? "N/A"}</span>
      </Badge>
    </Eclipse>
  );
}

import { useLocation } from "react-router";
import useBackButton from "../../hooks/useBackButton";

export default function SpreadDetailsPage() {
  const {
    state: { spread },
  } = useLocation();
  useBackButton();

  return (
    <main className="flex flex-col justify-center items-center size-full overflow-y-auto">
      {spread?.name}
    </main>
  );
}

import { useLocation } from "react-router";
import useBackButton from "../../hooks/useBackButton";
import useMainButton from "../../hooks/useMainButton";

export default function SpreadDetailsPage() {
  const {
    state: { spread },
  } = useLocation();
  useBackButton();
  useMainButton({ title: "Make a spread" });

  return (
    <main className="flex flex-col justify-center items-center p-2 size-full overflow-y-auto">
      {spread?.description}
    </main>
  );
}

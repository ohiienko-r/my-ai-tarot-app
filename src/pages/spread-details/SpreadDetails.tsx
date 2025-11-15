import { useLocation } from "react-router";
import useMainButton from "../../hooks/useMainButton";

export default function SpreadDetailsPage() {
  const {
    state: { spread },
  } = useLocation();
  useMainButton({ title: "Make a spread" });

  return (
    <main className="flex flex-col justify-center items-center size-full overflow-y-auto transition-all">
      {spread?.description}
    </main>
  );
}

import useBackButton from "../../hooks/useBackButton";

export default function CardOfTheDayPage() {
  useBackButton();

  return (
    <main className="flex flex-col justify-center items-center size-full">
      Card of the day page
    </main>
  );
}

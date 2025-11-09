import useBackButton from "../../hooks/useBackButton";

export default function YesNoPage() {
  useBackButton();

  return (
    <main className="flex flex-col justify-center items-center size-full">
      Yes/No Page
    </main>
  );
}

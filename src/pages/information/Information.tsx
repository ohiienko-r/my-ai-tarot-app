import useBackButton from "../../hooks/useBackButton";

export default function InformationPage() {
  useBackButton();

  return (
    <main className="flex flex-col justify-center items-center size-full">
      Information page
    </main>
  );
}

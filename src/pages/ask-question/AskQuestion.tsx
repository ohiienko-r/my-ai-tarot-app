import useBackButton from "../../hooks/useBackButton";

export default function AskQuestionPage() {
  useBackButton();

  return (
    <main className="flex flex-col justify-center items-center size-full">
      Ask Question Page
    </main>
  );
}

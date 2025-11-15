import useBackButton from "../../hooks/useBackButton";

export default function SettingsPage() {
  useBackButton();

  return (
    <main className="flex flex-col gap-6 p-4 size-full overflow-y-auto text-sm"></main>
  );
}

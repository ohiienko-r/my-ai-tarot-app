import { useLaunchParams } from "@tma.js/sdk-react";
import useBackButton from "../../hooks/useBackButton";

import { Button } from "../../components/Button";

import UserIcon from "../../icons/UserIcon";

export default function SettingsPage() {
  const lp = useLaunchParams();
  useBackButton();

  return (
    <main className="flex flex-col gap-6 p-4 size-full overflow-y-auto text-sm">
      <section className="flex flex-col items-center gap-2 bg-linear-to-r from-[#FF9831] to-[#4C08A4] p-4 rounded-md">
        {lp?.tgWebAppData?.user?.photo_url ? (
          <img
            src={lp?.tgWebAppData?.user?.photo_url}
            alt="User"
            className="rounded-full size-12"
          />
        ) : (
          <span className="flex justify-center items-center bg-indigo-200 rounded-full size-12 overflow-hidden shrink-0">
            <UserIcon className="size-8 text-indigo-700" />
          </span>
        )}

        <div>
          <p className="font-semibold text-lg text-center text-wrap">{`${
            lp?.tgWebAppData?.user?.first_name ?? ""
          } ${lp?.tgWebAppData?.user?.last_name ?? ""}`}</p>

          {lp?.tgWebAppData?.user?.username && (
            <p className="opacity-80 text-sm">
              {`@${lp?.tgWebAppData?.user?.username}`}
            </p>
          )}
        </div>
      </section>

      <section className="flex flex-col gap-2">
        <Button variant={"secondary"} size={"xl"} disabled>
          Language
        </Button>

        <Button variant={"secondary"} size={"xl"} disabled>
          My transactions
        </Button>

        <Button variant={"secondary"} size={"xl"} disabled>
          Contact support
        </Button>
      </section>
    </main>
  );
}

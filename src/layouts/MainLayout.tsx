import { Outlet, useLocation } from "react-router";
import useBackButton from "../hooks/useBackButton";
import useSettingsButton from "../hooks/useSettingsButton";

import { ROUTES_NAMES } from "../constants/router";

import SafeAreaView from "../components/SafeAreaView";
import Header from "../components/Header";

export default function MainLayout() {
  const { pathname } = useLocation();
  useBackButton({ visible: pathname !== ROUTES_NAMES.ROOT });
  useSettingsButton();

  return (
    <SafeAreaView>
      <main className="flex flex-col gap-6 p-2 size-full">
        <Header />
        <Outlet />
      </main>
    </SafeAreaView>
  );
}

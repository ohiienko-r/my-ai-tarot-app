import { Outlet } from "react-router";
import SafeAreaView from "../components/SafeAreaView";

export default function SecondaryLayout() {
  return (
    <SafeAreaView>
      <Outlet />
    </SafeAreaView>
  );
}

import { BrowserRouter, Routes, Route } from "react-router";

import { ROUTES_NAMES } from "../constants/router";

import MainLayout from "../layouts/MainLayout";
import SecondaryLayout from "../layouts/SecondaryLayout";

import HomePage from "../pages/home/Home";
import SettingsPage from "../pages/settings/Settings";
import ShopPage from "../pages/shop/Shop";
import SpreadDetailsPage from "../pages/spread-details/SpreadDetails";
import InformationPage from "../pages/information/Information";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />

          <Route
            path={ROUTES_NAMES.SPREAD_DETAILS}
            element={<SpreadDetailsPage />}
          />

          <Route path={ROUTES_NAMES.SHOP} element={<ShopPage />} />
        </Route>

        <Route element={<SecondaryLayout />}>
          <Route path={ROUTES_NAMES.SETTINGS} element={<SettingsPage />} />

          <Route
            path={ROUTES_NAMES.INFORMATION}
            element={<InformationPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

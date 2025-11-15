import { BrowserRouter, Routes, Route } from "react-router";

import { ROUTES_NAMES } from "../constants/router";

import HomePage from "../pages/home/Home";
import SpreadDetailsPage from "../pages/spread-details/SpreadDetails";
import ShopPage from "../pages/shop/Shop";
import InformationPage from "../pages/information/Information";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />

        <Route
          path={ROUTES_NAMES.SPREAD_DETAILS}
          element={<SpreadDetailsPage />}
        />

        <Route path={ROUTES_NAMES.SHOP} element={<ShopPage />} />

        <Route path={ROUTES_NAMES.INFORMATION} element={<InformationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

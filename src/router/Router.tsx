import { BrowserRouter, Routes, Route } from "react-router";

import HomePage from "../pages/home/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

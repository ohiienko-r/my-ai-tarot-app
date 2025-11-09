import { BrowserRouter, Routes, Route } from "react-router";

import { ROUTES_NAMES } from "../constants/router";

import HomePage from "../pages/home/Home";
import CardOfTheDayPage from "../pages/card-of-the-day/CardOfTheDay";
import YesNoPage from "../pages/yes-no/YesNo";
import AskQuestionPage from "../pages/ask-question/AskQuestion";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />

        <Route
          path={ROUTES_NAMES.CARD_OF_THE_DAY}
          element={<CardOfTheDayPage />}
        />

        <Route path={ROUTES_NAMES.YES_NO} element={<YesNoPage />} />

        <Route path={ROUTES_NAMES.ASK_QUESTION} element={<AskQuestionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

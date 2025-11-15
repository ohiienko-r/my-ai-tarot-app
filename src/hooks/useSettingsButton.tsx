import { useEffect } from "react";
import { useNavigate } from "react-router";
import { settingsButton } from "@tma.js/sdk-react";

import { ROUTES_NAMES } from "../constants/router";

export default function useSettingsButton() {
  const navigate = useNavigate();

  useEffect(() => {
    settingsButton.show.ifAvailable();
  }, []);

  useEffect(() => {
    const handleSettingsButtonClick = () => {
      navigate(ROUTES_NAMES.SETTINGS);
    };

    settingsButton.onClick(handleSettingsButtonClick);

    return () => settingsButton.offClick(handleSettingsButtonClick);
  }, [navigate]);
}

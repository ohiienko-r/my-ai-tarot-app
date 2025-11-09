import { useEffect } from "react";
import { backButton } from "@tma.js/sdk-react";

export default function useBackButton() {
  useEffect(() => {
    backButton.show();
    return () => {
      backButton.hide();
    };
  }, []);
}

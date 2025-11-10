import { useEffect, useCallback } from "react";
import { useNavigate } from "react-router";
import { backButton } from "@tma.js/sdk-react";

interface UseBackButtonProps {
  customCallback?: () => void;
}

export default function useBackButton({
  customCallback,
}: UseBackButtonProps = {}) {
  const navigate = useNavigate();

  const handleGoBack = useCallback(() => navigate(-1), [navigate]);

  useEffect(() => {
    backButton.show();
    return () => {
      backButton.hide();
    };
  }, []);

  useEffect(() => {
    if (customCallback) {
      backButton.onClick(customCallback);
    } else {
      backButton.onClick(handleGoBack);
    }

    return () => {
      if (customCallback) {
        backButton.offClick(customCallback);
      } else {
        backButton.offClick(handleGoBack);
      }
    };
  }, [customCallback, handleGoBack]);
}

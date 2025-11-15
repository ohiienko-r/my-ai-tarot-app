import { useEffect } from "react";
import { mainButton } from "@tma.js/sdk-react";

interface MainButtonProps {
  title: string;
  visible?: boolean;
  enabled?: boolean;
  isLoading?: boolean;
  onClick?: () => Promise<void> | void;
}

export default function useMainButton({
  visible = true,
  enabled = true,
  isLoading = false,
  title,
  onClick,
}: MainButtonProps) {
  useEffect(() => {
    mainButton.setParams({
      isVisible: visible,
      hasShineEffect: true,
      bgColor: "#EA850F",
    });
    return () => mainButton.setParams({ isVisible: false });
  }, [visible]);

  useEffect(() => {
    mainButton.setParams({ isEnabled: enabled });
  }, [enabled]);

  useEffect(() => {
    mainButton.setParams({ text: title });
  }, [title]);

  useEffect(() => {
    mainButton.setParams({ isLoaderVisible: isLoading, isEnabled: !isLoading });
  }, [isLoading]);

  useEffect(() => {
    if (onClick) mainButton.onClick(onClick);

    return () => {
      if (onClick) mainButton.offClick(onClick);
    };
  }, [onClick]);
}

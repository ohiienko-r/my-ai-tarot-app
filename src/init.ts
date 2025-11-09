import {
  themeParams,
  initData,
  viewport,
  closingBehavior,
  swipeBehavior,
  init as initSDK,
  miniApp,
  backButton,
  // retrieveLaunchParams,
} from "@tma.js/sdk-react";
// import { UNSUPPORTED_FULL_SCREEN_PLATFORMS } from "./constants/app";

export async function init() {
  initSDK();

  backButton.mount.ifAvailable();
  initData.restore();

  if (miniApp.mount.isAvailable()) {
    themeParams.mount();
    miniApp.mount();
    themeParams.bindCssVars();
    miniApp.setHeaderColor("#0F062A");
    miniApp.setBgColor("#0F062A");
    miniApp.setBottomBarColor("#0F062A");
  }

  if (closingBehavior.mount.isAvailable()) {
    closingBehavior.mount();
    closingBehavior.enableConfirmation();
  }

  if (swipeBehavior.mount.isAvailable()) {
    swipeBehavior.mount();
    swipeBehavior.disableVertical();
  }

  if (viewport.mount.isAvailable()) {
    viewport.mount().then(() => {
      viewport.bindCssVars();

      // TODO: fixes required. Sometimes safe area insets are ignored
      // if (
      //   !UNSUPPORTED_FULL_SCREEN_PLATFORMS.includes(
      //     retrieveLaunchParams().tgWebAppPlatform
      //   )
      // ) {
      //   viewport.requestFullscreen.ifAvailable();
      // }
    });

    viewport.expand();
  }
}

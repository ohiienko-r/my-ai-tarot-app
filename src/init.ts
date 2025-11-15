import {
  themeParams,
  initData,
  viewport,
  closingBehavior,
  swipeBehavior,
  settingsButton,
  mainButton,
  init as initSDK,
  miniApp,
  backButton,
} from "@tma.js/sdk-react";

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
    });

    viewport.expand();
  }

  mainButton.mount.ifAvailable();
  settingsButton.mount.ifAvailable();
}

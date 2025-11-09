import type { ComponentProps } from "react";
import { viewport } from "@tma.js/sdk-react";

export default function SafeAreaView({
  style,
  ...rest
}: ComponentProps<"section">) {
  const { top, bottom } = viewport.safeAreaInsets();
  const contentSafeAreaInsetTop = viewport.contentSafeAreaInsetTop();

  return (
    <section
      style={{
        paddingTop: top + contentSafeAreaInsetTop,
        paddingBottom: bottom,
        width: "100%",
        height: "100%",
        ...style,
      }}
      {...rest}
    />
  );
}

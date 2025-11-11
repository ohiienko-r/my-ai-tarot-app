import type { ComponentProps } from "react";
import { viewport } from "@tma.js/sdk-react";

export default function SafeAreaView({
  style,
  ...rest
}: ComponentProps<"section">) {
  const { top, right, bottom, left } = viewport.safeAreaInsets();
  const contentSafeAreaInsetTop = viewport.contentSafeAreaInsetTop();

  return (
    <section
      style={{
        paddingTop: top + contentSafeAreaInsetTop,
        paddingRight: right,
        paddingBottom: bottom,
        paddingLeft: left,
        width: "100%",
        height: "100%",
        ...style,
      }}
      {...rest}
    />
  );
}

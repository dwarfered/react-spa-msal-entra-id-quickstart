"use client";

import { FluentProvider, webLightTheme } from "@fluentui/react-components";

export default function FluentClientProvider({ children }: { children: React.ReactNode }) {
  return <FluentProvider theme={webLightTheme}>{children}</FluentProvider>;
}
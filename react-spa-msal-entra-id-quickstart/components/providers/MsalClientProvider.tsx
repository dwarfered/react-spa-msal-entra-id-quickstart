"use client";

import { ReactNode, useEffect } from "react";
import { MsalProvider } from "@azure/msal-react";
import { msalInstance } from "@/lib/msal/instance";

export default function MsalClientProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const setup = async () => {
      await msalInstance.initialize();
      const result = await msalInstance.handleRedirectPromise();

      if (result !== null && result.account) {
        msalInstance.setActiveAccount(result.account);
      }
    };

    setup().catch((err) => {
      console.error("MSAL initialization failed", err);
    });
  }, []);

  return <MsalProvider instance={msalInstance}>{children}</MsalProvider>;
}

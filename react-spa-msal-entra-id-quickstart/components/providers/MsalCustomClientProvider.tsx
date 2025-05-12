"use client";

// import { useEffect, useState } from "react";
// import { useMsal } from "@azure/msal-react";
// import { PublicClientApplication } from "@azure/msal-browser";

/*
 •	Automatically log in unauthenticated users
 •	Restrict access to authenticated users only
 •	Centralise token handling logic
*/

export const MsalCustomClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // const { instance, accounts } = useMsal();
  // const [isInitialized, setIsInitialized] = useState(false);

  // useEffect(() => {
  //   const initializeMsal = async () => {
  //     const pca = instance as PublicClientApplication;
  //     if (!pca.getActiveAccount()) {
  //       await pca.initialize(); // required from MSAL v4+
  //     }
  //     setIsInitialized(true);
  //   };

  //   initializeMsal();
  // }, [instance]);

  // useEffect(() => {
  //   if (isInitialized && accounts.length === 0) {
  //     instance.loginRedirect();
  //   }
  // }, [accounts, instance, isInitialized]);

  return <>{children}</>;
};

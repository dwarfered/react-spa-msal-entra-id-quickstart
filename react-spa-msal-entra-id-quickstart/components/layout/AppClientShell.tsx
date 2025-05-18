"use client";

import { ReactNode, useEffect, useState } from "react";
import {
  FluentProvider,
  makeStyles,
  shorthands,
  webLightTheme,
} from "@fluentui/react-components";
import MsalClientProvider from "../providers/MsalClientProvider";
import NavBar from "./navigation/NavBar";
import LoadingOverlay from "./loading/LoadingOverlay";

const useStyles = makeStyles({
  toolbar: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  content: {
    ...shorthands.margin("6px"),
  },
  container: {
    height: "calc(100vh - 40px - 20px)",
    overflowY: "auto",
    ...shorthands.margin("10px"),
    flexGrow: 1,
  },
  mainContainer: {
    display: "flex",
  },
  sidePanel: {
    width: "280px",
    flexShrink: 0,
    "@media (max-width: 768px)": {
      display: "none",
    },
    backgroundColor: "#e9e9e9",
  },
});

export default function AppClientShell({ children }: { children: ReactNode }) {
  const styles = useStyles();

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true); // wait for client-side hydration
  }, []);

  if (!hydrated) {
    return <LoadingOverlay />;
  }

  return (
    <MsalClientProvider>
      <FluentProvider theme={webLightTheme}>
        {" "}
        <div className={styles.toolbar}>
          <NavBar />
        </div>
        <div className={styles.mainContainer}>
          <div className={styles.sidePanel}>{/* <SideBar /> */}</div>
          <div className={styles.container}>
            <div className={styles.content}>{children}</div>
          </div>
        </div>
      </FluentProvider>
    </MsalClientProvider>
  );
}

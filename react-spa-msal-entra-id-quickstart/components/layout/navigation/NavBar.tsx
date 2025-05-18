import React from "react";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import {
  Button,
  makeStyles,
  shorthands,
  Toolbar,
  ToolbarGroup,
  DrawerProps,
} from "@fluentui/react-components";
import { APP_NAME } from "@/lib/constants/app";
import SignInButton from "../login/SignInButton";
import { useGlobalStyles } from "@/lib/fluent/helper";
import SignOutButton from "../login/SignOutButton";
import { NavOverlay } from "./NavOverlay";

const useStyles = makeStyles({
  toolbar: {
    justifyContent: "space-between",
    backgroundColor: "#1c1c1c",
    ...shorthands.padding(0),
  },
  navMobileOverlay: {
    "@media (min-width: 768px)": {
      display: "none",
    },
  },
  navStandard: {
    "@media (max-width: 768px)": {
      display: "none",
    },
  },
});

type DrawerType = Required<DrawerProps>["type"];

export const FarGroup = () => {
  const standardStyles = useGlobalStyles();
  const styles = useStyles();
  const [type] = React.useState<DrawerType>("overlay");

  return (
    <Toolbar aria-label="with Separeted Groups" className={styles.toolbar}>
      <ToolbarGroup role="presentation">
        <div className={styles.navMobileOverlay}>
          <NavOverlay />
        </div>
        <div className={styles.navStandard}>
          <Button
            shape="square"
            size="large"
            className={standardStyles.toolbarNavButton}
            appearance="primary"
          >
            {type === "inline" ? "Toggle" : APP_NAME}
          </Button>
        </div>
      </ToolbarGroup>
      <ToolbarGroup role="presentation">
        <UnauthenticatedTemplate>
          <SignInButton />
        </UnauthenticatedTemplate>
        <AuthenticatedTemplate>
          <SignOutButton />
        </AuthenticatedTemplate>
      </ToolbarGroup>
    </Toolbar>
  );
};

const NavBar = () => {
  return <FarGroup />;
};

export default NavBar;
import { graphConfig } from "@/lib/msal/authConfig";
import { handleSignOut } from "@/lib/msal/helper";
import { msalInstance } from "@/lib/msal/instance";
import { fetcher } from "@/lib/msgraph/fetcher";
import {
  Avatar,
  Button,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import { useEffect, useState } from "react";
import useSWR from "swr";

const useStyles = makeStyles({
  buttonContent: {
    paddingRight: "8px",
    display: "flex",
    alignItems: "center",
    maxWidth: "250px",
    backgroundColor: "#1c1c1c",
    color: tokens.colorBrandBackgroundInverted,
    ":hover:active": {
      backgroundColor: "#333",
      color: "#fff",
    },
    ":hover": {
      backgroundColor: "#333",
      color: "#fff",
    },
  },
  textContainer: {
    textAlign: "left",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    paddingRight: "8px",
    paddingLeft: "8px",
  },
  text: {
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    textAlign: "right",
  },
});

export default function SignOutButton() {
  const styles = useStyles();
  const account = msalInstance.getActiveAccount();

  const { data, error, isLoading } = useSWR<Blob>(
    graphConfig.graphMePhotoEndpoint,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: 0,
    }
  );
  const [imageSrc, setImageSrc] = useState<string | undefined>();

  useEffect(() => {
    if (data && data instanceof Blob) {
      const objectUrl = URL.createObjectURL(data);
      setImageSrc(objectUrl);
      return () => {
        URL.revokeObjectURL(objectUrl);
      };
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading image</div>;

  return (
    <>
      <Menu positioning="below-end">
        <MenuTrigger disableButtonEnhancement>
          <Button
            className={styles.buttonContent}
            size="small"
            shape="square"
            appearance="primary"
            style={{ minWidth: 0 }}
          >
              <div
                className={styles.textContainer}
                style={{ flex: 1, overflow: "hidden" }}
              >
                <div className={styles.text} style={{ overflow: "hidden" }}>
                  {account?.username}
                </div>
                <div className={styles.text} style={{ overflow: "hidden" }}>
                  {account?.name}
                </div>
              </div>
              <Avatar
                name={account?.name}
                image={imageSrc ? { src: imageSrc } : undefined}
              />
          </Button>
        </MenuTrigger>
        <MenuPopover>
          <MenuList>
            <MenuItem
              onClick={() => handleSignOut()}
              key="logoutRedirect"
              style={{ textAlign: "left" }}
            >
              Sign out
            </MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
    </>
  );
}
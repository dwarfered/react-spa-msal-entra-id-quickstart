import { useGlobalStyles } from "@/lib/fluent/helper";
import { handleSignIn } from "@/lib/msal/helper";
import {
  Avatar,
  Button,
} from "@fluentui/react-components";


export default function SignInButton() {
  const styles = useGlobalStyles();

  return (
    <Button
      className={styles.toolbarNavButton}
      size="small"
      shape="square"
      appearance="primary"
      style={{ minWidth: 0, columnGap: "8px" }}
      onClick={() => handleSignIn()}
    >
      Sign In
      <Avatar name={undefined} image={undefined} />
    </Button>
  );
}
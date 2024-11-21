import { AuthenticatedTemplate } from "@azure/msal-react";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  Body1,
  Body1Strong,
  Button,
  Divider,
  tokens,
  Toolbar,
  ToolbarGroup,
} from "@fluentui/react-components";
import {
  AppsListRegular,
  DividerTallFilled,
  HomeRegular,
} from "@fluentui/react-icons";
import { usePathname, useRouter } from "next/navigation";

export default function NavMenu() {
  const router = useRouter();

  const pathname = usePathname(); // Get the current route

  const activeStyle = {
    backgroundColor: tokens.colorNeutralBackground2,
    color: tokens.colorNeutralForeground2BrandSelected,
  };

  return (
    <Toolbar aria-label="with Separeted Groups">
      <ToolbarGroup role="presentation" style={{ width: "100%" }}>
        <Button
          onClick={() => {
            router.push("/");
          }}
          shape="square"
          appearance="subtle"
          icon={<HomeRegular />}
          style={{
            width: "100%",
            justifyContent: "flex-start", // This aligns the button content to the left
            display: "flex", // Ensures flexbox layout for content alignment,
            ...(pathname === "/" ? activeStyle : {}),
          }}
        >
          <Body1Strong> Home</Body1Strong>
        </Button>
        <Divider />

        <AuthenticatedTemplate>
          <Accordion defaultOpenItems="1">
            <AccordionItem value="1">
              <AccordionHeader
                icon={<AppsListRegular />}
                expandIconPosition="end"
              >
                <Body1Strong>Quickstart</Body1Strong>
              </AccordionHeader>
              <AccordionPanel>
                <Button
                  icon={
                    pathname === "/profile" ? (
                      <DividerTallFilled
                        style={{
                          transform: "scaleX(2)",
                        }}
                      />
                    ) : undefined
                  }
                  onClick={() => router.push("/profile")}
                  shape="square"
                  appearance="subtle"
                  style={{
                    width: "100%",
                    justifyContent: "flex-start",
                    display: "flex",
                    ...(pathname === "/profile" ? activeStyle : {}),
                  }}
                >
                  <Body1>My profile</Body1>
                </Button>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </AuthenticatedTemplate>
      </ToolbarGroup>
      <ToolbarGroup role="presentation"></ToolbarGroup>
    </Toolbar>
  );
}

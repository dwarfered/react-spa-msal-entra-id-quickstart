import React from "react";
import { Button, Body1, tokens } from "@fluentui/react-components";
import { DividerTallFilled } from "@fluentui/react-icons";
import { useRouter, usePathname } from "next/navigation";

interface NavButtonProps {
  label: string;
  route: string;
  showActiveIcon?: boolean;
  icon?: React.ReactNode;
}

const activeStyle = {
  backgroundColor: tokens.colorNeutralBackground2,
  color: tokens.colorNeutralForeground2BrandSelected,
};

export function NavButton({
  label,
  route,
  icon,
  showActiveIcon = false,
}: NavButtonProps) {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = pathname === route;

  return (
    <Button
      shape="square"
      appearance="subtle"
      icon={
        isActive && showActiveIcon ? (
          <DividerTallFilled style={{ transform: "scaleX(2)" }} />
        ) : undefined
      }
      onClick={() => router.push(route)}
      style={{
        width: "100%",
        justifyContent: "flex-start",
        display: "flex",
        ...(isActive ? activeStyle : {}),
      }}
    >
      {icon}
      <Body1 style={{ marginLeft: icon ? 8 : 0 }}>{label}</Body1>
    </Button>
  );
}
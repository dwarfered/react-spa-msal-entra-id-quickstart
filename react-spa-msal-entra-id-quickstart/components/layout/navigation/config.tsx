
import { HomeRegular, InfoRegular } from "@fluentui/react-icons";

interface NavItem {
  label: string;
  route: string;
  icon?: React.ReactNode;         // Icon for the header or button
  showActiveIcon?: boolean;       // Whether to show the active divider icon
  children?: NavItem[];           // Sub-items if this item has an accordion
}

export const navConfig: NavItem[] = [
  {
    label: "Home",
    route: "/",
    icon: <HomeRegular />,
    showActiveIcon: false,
  },
  {
    label: "Profile",
    route: "/profile", 
    icon: <InfoRegular />,
    showActiveIcon: false, 
    children: [
      {
        label: "My profile",
        route: "/profile/me",
        showActiveIcon: true,
      },
    ],
  },
];
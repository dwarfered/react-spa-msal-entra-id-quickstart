
import { HomeRegular } from "@fluentui/react-icons";

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
    label: "App Registrations",
    route: "/app-registrations", 
    showActiveIcon: false, 
    children: [
      {
        label: "Certificates & secrets",
        route: "/app-registrations/certificates-and-secrets",
        showActiveIcon: true,
      },
      {
        label: "Creations",
        route: "/app-registrations/creations",
        showActiveIcon: true,
      },
    ],
  },
  {
    label: "Enterprise Applications",
    route: "/enterprise-applications",
    showActiveIcon: false,
    children: [
      {
        label: "App role permissions",
        route: "/enterprise-applications/app-role-permissions",
        showActiveIcon: true,
      },
      {
        label: "SAML certificate status",
        route: "/enterprise-applications/saml-certificate-expiry-status",
        showActiveIcon: true,
      },
    ],
  },
];
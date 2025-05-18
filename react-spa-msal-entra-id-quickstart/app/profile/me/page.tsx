import { ProfileData } from "@/components/profile/ProfileData";

export const metadata = {
  title: "Microsoft Entra ID SPA Demo - Me",
  description:
    "A React SPA using MSAL and Microsoft Entra ID to authenticate users and access Microsoft Graph.",
  keywords: [
    "Microsoft Entra",
    "MSAL",
    "Next.js",
    "React",
    "Microsoft Graph",
    "SPA",
    "authentication",
  ],
  openGraph: {
    title: "Microsoft Entra ID SPA Demo - Me",
    description:
      "Authenticate users with MSAL and Entra ID. Access the Microsoft Graph API securely in this React SPA.",
    // url: "https://yourdomain.com", // Replace with your deployed site
    // images: [
    //   {
    //     url: "https://yourdomain.com/og-image.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Microsoft Entra SPA Demo",
    //   },
    // ],
  },
};

export default function Page() {
  return (
      <ProfileData />
  );
}

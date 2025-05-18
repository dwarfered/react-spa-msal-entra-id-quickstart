import BuildInfo from "@/components/BuildInfo";
import AuthDebugInfo from "@/components/AuthDebugInfo";
import styles from "./page.module.css";
import { APP_NAME } from "@/lib/constants/app";

export const metadata = {
  title: "Microsoft Entra ID SPA Demo",
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
    title: "Microsoft Entra ID SPA Demo",
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

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Welcome to {APP_NAME}</h1>
        <BuildInfo />
        <AuthDebugInfo />
        <p>
          This is a statically exported React app using MSAL.js to authenticate
          users with Microsoft Entra ID and call Microsoft Graph.
        </p>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}

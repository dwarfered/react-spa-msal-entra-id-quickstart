import { PublicClientApplication } from "@azure/msal-browser";
import { authConfig } from "./config";

const globalForMsal = globalThis as typeof globalThis & {
  __msalInstance?: PublicClientApplication;
};

if (!globalForMsal.__msalInstance) {
  if (process.env.NODE_ENV === "development") {
    console.log("[MSAL] Creating new PublicClientApplication instance");
  }

  globalForMsal.__msalInstance = new PublicClientApplication(authConfig);
} else {
  if (process.env.NODE_ENV === "development") {
    console.log("[MSAL] Reusing existing PublicClientApplication instance");
  }
}

export const msalInstance = globalForMsal.__msalInstance;
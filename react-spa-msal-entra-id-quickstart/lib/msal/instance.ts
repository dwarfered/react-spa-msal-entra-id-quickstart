import { PublicClientApplication } from "@azure/msal-browser";
import { authConfig } from "./authConfig";

const globalWithMsal = globalThis as typeof globalThis & {
  __msalInstance?: PublicClientApplication;
};

const msalInstance =
  globalWithMsal.__msalInstance ?? new PublicClientApplication(authConfig);

globalWithMsal.__msalInstance = msalInstance;

export { msalInstance };
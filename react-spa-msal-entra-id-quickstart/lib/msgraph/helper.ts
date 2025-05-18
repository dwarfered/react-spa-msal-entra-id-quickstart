import { InteractionRequiredAuthError } from "@azure/msal-browser";
import { loginRequest } from "../msal/config";
import { msalInstance } from "../msal/instance";

export async function getMsGraphAccessToken(): Promise<string> {
  let account = msalInstance.getActiveAccount();

  if (!account) {
    const accounts = msalInstance.getAllAccounts();
    if (accounts.length > 0) {
      account = accounts[0];
      msalInstance.setActiveAccount(account);
    } else {
      throw new Error("No active account found.");
    }
  }

  try {
    const response = await msalInstance.acquireTokenSilent({
      ...loginRequest,
      account,
    });
    return response.accessToken;
  } catch (error: unknown) {
    if (error instanceof InteractionRequiredAuthError) {
      console.warn("MSAL: Interaction required, redirecting to sign in");
      msalInstance.loginRedirect(loginRequest);
    } else {
      if (process.env.NODE_ENV === "development") {
        console.error("MSAL: Silent token acquisition failed", error);
      }
    }
    throw error;
  }
}
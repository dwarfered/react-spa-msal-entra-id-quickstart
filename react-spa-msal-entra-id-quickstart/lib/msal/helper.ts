import { AccountInfo, AuthenticationResult, InteractionRequiredAuthError } from "@azure/msal-browser";
import { loginRequest } from "./authConfig";
import { msalInstance } from "./instance";

export async function acquireGraphAccessToken(): Promise<string> {
  const account = msalInstance.getActiveAccount();
  if (!account) {
    console.warn("No active account found in acquireGraphAccessToken()");
    throw new Error("No active account! User may not be signed in.");
  }

  try {
    const response = await msalInstance.acquireTokenSilent({
      ...loginRequest,
      account,
    });
    return response.accessToken;
  } catch (error: unknown) {
    if (error instanceof InteractionRequiredAuthError) {
      console.warn("Token interaction required. Redirecting to sign in.");
      // msalInstance.clearCache(); // optional — be cautious with this
      handleSignIn();
    } else {
      console.error("Silent token acquisition failed", error);
    }
    throw error;
  }
}

export function handleSignIn() {
  msalInstance.loginRedirect(loginRequest).catch((e: unknown) => {
    console.error(`loginRedirect failed: ${e}`);
  });
}

export function handleSignOut() {
  msalInstance.logoutRedirect(loginRequest).catch((e: unknown) => {
    console.error(`loginRedirect failed: ${e}`);
  });
}

// Checks if the current users' access token contains a required scope. 
// Used for incremental scope checks (does user have Sites.Read.All etc) or another perm a page may require.
export const hasScopes = async (
  requiredScopes: string[],
  account: AccountInfo | null
): Promise<boolean> => {
  if (!account) {
    return false;
  }

  try {
    const response: AuthenticationResult = await msalInstance.acquireTokenSilent({
      account,
      scopes: requiredScopes,
    });

    const tokenScopes = response.scopes || [];
    return requiredScopes.every((scope) => tokenScopes.includes(scope));
  } catch {
    return false;
  }
};
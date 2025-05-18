import { AccountInfo, AuthenticationResult } from "@azure/msal-browser";
import { loginRequest } from "./config";
import { msalInstance } from "./instance";

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
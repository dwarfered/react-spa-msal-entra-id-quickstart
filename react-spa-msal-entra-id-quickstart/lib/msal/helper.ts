import { AccountInfo, AuthenticationResult, InteractionRequiredAuthError } from "@azure/msal-browser";
import { loginRequest } from "./authConfig";
import { msalInstance } from "./instance";

export async function acquireGraphAccessToken() {
  const account = msalInstance.getActiveAccount();
  if (!account) {
    throw Error(
      "No active account! Verify a user has been signed in and setActiveAccount has been called."
    );
  }

  try {
    const response = await msalInstance.acquireTokenSilent({
      ...loginRequest,
      account: account,
    });
    return response.accessToken;
  } catch (error) {
     if (error instanceof InteractionRequiredAuthError) {
       msalInstance.clearCache();
       handleSignIn();
    } else {
      console.error('Failed to acquire token silently', error);
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
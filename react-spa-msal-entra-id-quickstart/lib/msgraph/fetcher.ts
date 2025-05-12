import { InteractionRequiredAuthError } from "@azure/msal-browser";
import { acquireGraphAccessToken, handleSignIn } from "../msal/helper";
import { msalInstance } from "../msal/authConfig";

export interface ODataResponse<T> {
  "@odata.context": string;
  value: T[];
}

export async function fetcher(...args: Parameters<typeof fetch>) {
  // fake delay
  // await new Promise(resolve => setTimeout(resolve, 5000));

  const headers = new Headers();
  const accessToken = await acquireGraphAccessToken();
  const bearer = `Bearer ${accessToken}`;
  headers.append("Authorization", bearer);
  const options = {
    method: "GET",
    headers: headers,
  };
  args.push(options);

  const response = await fetch(...args).catch((error) => {
    if (error instanceof InteractionRequiredAuthError) {
      msalInstance.clearCache();
      handleSignIn();
    }
  });

  if (!response) {
    throw new Error("No response from fetch");
  }

  const contentType = response.headers.get("Content-Type");

  if (contentType?.includes("application/json")) {
    const data = await response.json();
    // Handle @odata.nextLink for pagination (assuming you want every result)
    if (
      data["@odata.nextLink"] &&
      typeof data["@odata.nextLink"] === "string"
    ) {
      const nextPageData = await fetcher(data["@odata.nextLink"]);
      data.value = [...(data.value || []), ...(nextPageData.value || [])];
    }
    return data;
  } else if (contentType?.includes("blob") || contentType?.includes("image")) {
    return response.blob();
  } else {
    throw new Error(`Unsupported content type: ${contentType}`);
  }
}
import { getMsGraphAccessToken } from "./helper";


export interface ODataResponse<T> {
  "@odata.context": string;
  value: T[];
}

export async function fetcher(...args: Parameters<typeof fetch>) {
  const [resource, init] = args;

  const accessToken = await getMsGraphAccessToken();

  const headers = new Headers(init?.headers);
  headers.set("Authorization", `Bearer ${accessToken}`);

  const options: RequestInit = {
    ...init,
    method: "GET",
    headers,
  };

  const response = await fetch(resource, options);

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Graph API Error: ${response.status} - ${message}`);
  }

  const contentType = response.headers.get("Content-Type");

  if (contentType?.includes("application/json")) {
    const data = await response.json();

    // Handle OData pagination
    if (data["@odata.nextLink"] && typeof data["@odata.nextLink"] === "string") {
      const nextPageData = await fetcher(data["@odata.nextLink"]);
      data.value = [...(data.value || []), ...(nextPageData.value || [])];
    }

    return data;
  } else if (contentType?.includes("blob") || contentType?.includes("image")) {
    return response.blob();
  }

  throw new Error(`Unsupported content type: ${contentType}`);
}
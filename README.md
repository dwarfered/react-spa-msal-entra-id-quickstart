# React single-page application using MSAL React to authenticate users against Microsoft Entra ID

<p align="center">
<img src="images/repository-open-graph-template.png" width="600"/>
</p>

A quickstart React single-page application built with Next.js that uses MSAL React to authenticate users with Microsoft Entra ID via the authorization code flow with Proof Key for Code Exchange (PKCE). It demonstrates how to securely sign in users and call the Microsoft Graph API, using the Microsoft Authentication Library (MSAL) for authentication and Fluent UI for styling.

## ⭐ Like this project?  

If you find this repository useful, please **give it a star**!  

[![GitHub stars](https://img.shields.io/github/stars/dwarfered/react-spa-msal-entra-id-quickstart.svg?style=social)](https://github.com/dwarfered/react-spa-msal-entra-id-quickstart/stargazers)

## Sample Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [Next.js v15.3.2+](https://nextjs.org/docs/getting-started/installation)
- [Visual Studio Code](https://code.visualstudio.com/download)
- A modern web browser

## Recommendations

- [Next.js by Vercel](https://nextjs.org/docs) framework documentation.
- [Microsoft Authentication Library (MSAL) for JS](https://github.com/AzureAD/microsoft-authentication-library-for-js)
- [Fluent UI](https://developer.microsoft.com/en-us/fluentui#/) The official front-end framework for building experiences that fit seamlessly into Microsoft 365.
- [Dev Fluent UI](https://react.fluentui.dev/?path=/docs/concepts-introduction--docs) the developer resource.
- [SWR by Vercel](https://swr.vercel.app) React Hooks for Data Fetching
> :information_source: "SWR is a strategy to first return the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data."
- Follow the [Entra ID Blog](https://techcommunity.microsoft.com/t5/microsoft-entra-blog/bg-p/Identity) to stay up-to-date with the latest developments.

## 📁 Notable Files

- `app/layout.tsx` – Root layout that wraps the app
- `components/AppClientShell.tsx` – The main client-side layout wrapper for the application. It sets up MSAL authentication, Fluent UI theming, and the core layout structure including the navigation bar and sidebar. It also handles client-side hydration with a loading overlay before rendering the app content
- `lib/msal/config.ts` – MSAL configuration including clientId, authority, and scopes
- `lib/msal/instance.ts` – Exports a singleton `PublicClientApplication` instance
- `lib/msal/helper.ts` – Helper functions for sign-in, sign-out, and token acquisition
- `lib/msgraph/endpoints.ts` - The Microsoft Graph API endpoints that may be called
- `lib/msgraph/fetcher.ts` - A typed fetcher function that performs authenticated GET requests to Microsoft Graph. It attaches a bearer token, handles response types (JSON, blob, image), and supports automatic pagination for OData @odata.nextLink responses.
- `lib/msgraph/helper.ts` -  Retrieves a Microsoft Graph access token using silent authentication with fallback to redirect if user interaction is required. Automatically sets the active account if one is not already set.

## Installing dependencies
```bash
# Install dependencies from the root of the repo
npm install
```
## Running the application
```bash
# Run locally
npm run dev

# Optionally build
npm run build
```

1. Open http://localhost:3000 to view in your browser.
2. Open http://localhost:3000/profile/me to view a protected route, that if signed in will display profile information.

<p align="center">
  <img src="images/image1.png" width="600">
</p>
<p align="center">
  <img src="images/image2.png" width="600">
</p>

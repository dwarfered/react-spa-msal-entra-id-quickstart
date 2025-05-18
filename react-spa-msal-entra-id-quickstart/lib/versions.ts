// lib/versions.ts (runs on server)
import pkg from "../package.json";

export const appVersions = {
  next: pkg.dependencies["next"],
  react: pkg.dependencies["react"],
  reactDom: pkg.dependencies["react-dom"],
  msalBrowser: pkg.dependencies["@azure/msal-browser"],
  msalReact: pkg.dependencies["@azure/msal-react"],
  swr: pkg.dependencies["swr"],
  fluentComponents: pkg.dependencies["@fluentui/react-components"],
  fluentIcons: pkg.dependencies["@fluentui/react-icons"],
};

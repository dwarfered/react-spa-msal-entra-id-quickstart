import { appVersions } from "@/lib/versions";

export default function BuildInfo() {
  return (
    <div style={{ fontSize: "12px", color: "#666" }}>
      Built with next {appVersions.next}, react {appVersions.react}, react-dom{" "}
      {appVersions.reactDom}, @azure/msal-browser {appVersions.msalBrowser},
      @azure/msal-react {appVersions.msalReact}, swr {appVersions.swr},
      @fluentui/react-components {appVersions.fluentComponents},
      @fluentui/react-icons {appVersions.fluentIcons}
    </div>
  );
}

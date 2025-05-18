import { NavigationClient } from "@azure/msal-browser";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export class CustomNavigationClient extends NavigationClient {
  private router: AppRouterInstance;

  constructor(router: AppRouterInstance) {
    super();
    this.router = router;
  }

  async navigateInternal(url: string, options: { noHistory?: boolean }) {
    const relativePath = url.replace(window.location.origin, "");
    if (options.noHistory) {
      this.router.replace(relativePath);
    } else {
      this.router.push(relativePath);
    }
    return false;
  }
}
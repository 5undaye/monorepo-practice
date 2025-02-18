import { type RouteObject } from "react-router-dom";
import { AppRoutingManager } from "@career-up/shell-router";
import { Auth0ClientProvider } from "./provider/auth0-client-provider";

import PageHome from "./pages/page-home";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Auth0ClientProvider>
        <AppRoutingManager type="app-posting" />
      </Auth0ClientProvider>
    ),
    errorElement: <div>Error</div>,
    children: [{ index: true, element: <PageHome /> }],
  },
];

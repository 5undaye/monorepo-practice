import { type RouteObject } from "react-router-dom";
import { AppRoutingManager } from "@career-up/shell-router";

import { Auth0ClientProvider } from "./provider/auth0-client-provider";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Auth0ClientProvider>
        <AppRoutingManager type="app-network" />
      </Auth0ClientProvider>
    ),
    errorElement: <div>Error</div>,
    children: [{ index: true, element: <div className="text-5xl text-rose-500">메렁</div> }],
  },
];

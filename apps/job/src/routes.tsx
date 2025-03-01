import { type RouteObject } from "react-router-dom";
import { AppRoutingManager } from "@career-up/shell-router";

import { Auth0ClientProvider } from "./provider/auth0-client-provider";

import Layout from "./components/layout";

import PageList from "./pages/page-list";
import PageDetail from "./pages/page-detail";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Auth0ClientProvider>
        <Layout>
          <AppRoutingManager type="app-job" />
        </Layout>
      </Auth0ClientProvider>
    ),
    errorElement: <div>App Job Error</div>,
    children: [
      {
        index: true,
        element: <PageList />,
      },
      { path: ":id", element: <PageDetail /> },
    ],
  },
];

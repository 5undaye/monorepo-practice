import { AppRoutingManager } from "@career-up/shell-router";
import { type RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppRoutingManager type="app-posting" />,
    errorElement: <div>Error</div>,
    children: [
      { index: true, element: <div>Posting Home</div> },
      { path: "1", element: <div>Posting 1</div> },
    ],
  },
];

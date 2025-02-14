import { createBrowserRouter, createMemoryRouter } from "react-router-dom";
import { CreateRouterProps } from "./types";

type Router =
  | ReturnType<typeof createBrowserRouter>
  | ReturnType<typeof createMemoryRouter>;

export function createRouter({
  routerType,
  routes,
  basePath,
}: CreateRouterProps): Router {
  switch (routerType) {
    case "browser":
      return createBrowserRouter(routes);

    case "memory":
      return createMemoryRouter(routes, { initialEntries: [basePath || "/"] });
  }
}

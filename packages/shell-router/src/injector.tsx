import { type RouteObject, RouterProvider } from "react-router-dom";
import { createRouter } from "./router";
import { RouterType } from "./types";
import { createRoot } from "react-dom/client";

type InjectRoutingProps = {
  rootElement: HTMLElement;
  basePath?: string;
  routerType: RouterType;
};

function injectFactory({ routes }: { routes: RouteObject[] }) {
  return ({ rootElement, basePath, routerType }: InjectRoutingProps) => {
    const router = createRouter({ routerType, routes, basePath });

    const root = createRoot(rootElement);

    root.render(<RouterProvider router={router} />);

    return () => queueMicrotask(() => root.unmount());
  };
}

export { injectFactory };

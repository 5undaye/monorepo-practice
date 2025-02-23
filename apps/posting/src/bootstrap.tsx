import inject from "./injector";

import "./index.css";

inject({
  routerType: "browser",
  rootElement: document.getElementById("app-posting") as HTMLElement,
});

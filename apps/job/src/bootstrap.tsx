import inject from "./injector";

inject({
  routerType: "browser",
  rootElement: document.getElementById("app-job") as HTMLElement,
});

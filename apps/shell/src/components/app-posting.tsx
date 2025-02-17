import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import { useShellEvent } from "@career-up/shell-router";

import inject from "posting/injector";

import { appPostingBasename } from "../constants/prefix";

export default function AppPosting() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useShellEvent("app-posting", appPostingBasename);

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});

  useEffect(() => {
    if (!isFirstRunRef.current) {
      return;
    }

    unmountRef.current = inject({
      routerType: "memory",
      rootElement: wrapperRef.current as HTMLDivElement,
      basePath: location.pathname.replace(appPostingBasename, ""),
    });

    isFirstRunRef.current = false;
  }, [location]);

  useEffect(() => unmountRef.current, []);

  return <div ref={wrapperRef} id="app-posting" />;
}

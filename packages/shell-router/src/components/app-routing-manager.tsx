import { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import useAppEvent from "../hooks/use-app-event";

interface AppRoutingManagerProps extends PropsWithChildren {
  type: string;
}

const AppRoutingManager = ({ type }: AppRoutingManagerProps) => {
  useAppEvent(type);

  return <Outlet />;
};

export default AppRoutingManager;

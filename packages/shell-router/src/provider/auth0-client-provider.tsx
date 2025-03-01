import { createContext } from "react";
import { Auth0Client } from "@auth0/auth0-spa-js";

type Auth0ClientProviderProps = React.PropsWithChildren<{
  options: {
    domain: string;
    clientId: string;
    redirectUri: string;
  };
}>;

export const Auth0ClientContext = createContext<Auth0Client | null>(null);

export const Auth0ClientProvider = ({
  children,
  options: { domain, clientId, redirectUri },
}: Auth0ClientProviderProps) => {
  const auth0Client = new Auth0Client({
    domain,
    clientId,
    authorizationParams: {
      redirect_uri: redirectUri,
    },
  });

  return <Auth0ClientContext.Provider value={auth0Client}>{children}</Auth0ClientContext.Provider>;
};

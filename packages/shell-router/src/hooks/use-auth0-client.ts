import { useContext } from "react";
import { Auth0ClientContext } from "../provider/auth0-client-provider";
import { type Auth0Client } from "@auth0/auth0-spa-js";

export default function useAuth0Client(): Auth0Client {
  const auth0Client = useContext(Auth0ClientContext);

  if (auth0Client === null) {
    throw new Error("Check your AuthContext");
  }

  return auth0Client;
}

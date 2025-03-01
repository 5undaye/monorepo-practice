import { useCallback } from "react";

import MyNetwork from "../components/my-network";

import { useMyNetworkStore } from "../store";

import { getMyNetwork } from "../apis";

import { useAuth0Client } from "@career-up/shell-router";

const MyNetworkContainer = () => {
  const auth0Client = useAuth0Client();
  const myNetwork = useMyNetworkStore((state) => state.myNetwork);
  const setMyNetwork = useMyNetworkStore((state) => state.setMyNetwork);

  const fetchMyNetwork = useCallback(async () => {
    try {
      const token = await auth0Client.getTokenSilently();

      const myNetwork = await getMyNetwork(token);

      setMyNetwork(myNetwork);
    } catch (error) {
      console.error(error);
    }
  }, [auth0Client, setMyNetwork]);

  return <MyNetwork myNetwork={myNetwork} fetchMyNetwork={fetchMyNetwork} />;
};

export default MyNetworkContainer;

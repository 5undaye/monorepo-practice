import { useCallback } from "react";
import useAuth0Client from "../hooks/use-auth0-client";
import { useConnectionsStore } from "../store";
import { getConnections } from "../apis";
import Connections from "../components/connections";

const ConnectionsContainer = () => {
  const auth0Client = useAuth0Client();
  const connections = useConnectionsStore((state) => state.connections);
  const setConnections = useConnectionsStore((state) => state.setConnections);

  const fetchConnections = useCallback(async () => {
    try {
      const token = await auth0Client.getTokenSilently();
      const connections = await getConnections(token);

      setConnections(connections);
    } catch (error) {
      console.error(error);
    }
  }, [auth0Client, setConnections]);

  return <Connections connections={connections} fetchConnections={fetchConnections} />;
};

export default ConnectionsContainer;

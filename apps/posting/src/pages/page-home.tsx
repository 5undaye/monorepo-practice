import { useEffect } from "react";
import useAuth0Client from "../hooks/use-auth0-client";

const page = () => {
  const auth0Client = useAuth0Client();

  useEffect(() => {
    (async () => {
      try {
        const token = await auth0Client.getTokenSilently();
        console.log(token);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [auth0Client]);

  return <div>Posting Home</div>;
};

export default page;

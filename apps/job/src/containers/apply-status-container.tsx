import { useCallback } from "react";
import ApplyStatus from "../components/apply-status";

import { getApplyStatus } from "../apis";
import { useAtom } from "jotai";
import { applyStatusAtom } from "../atoms";
import { useAuth0Client } from "@career-up/shell-router";

const ApplyStatusContainer = () => {
  const auth0Client = useAuth0Client();
  const [applyStatus, setApplyStatus] = useAtom(applyStatusAtom);

  const fetchApplyStatus = useCallback(async () => {
    try {
      const token = await auth0Client.getTokenSilently();
      const applyStatus = await getApplyStatus(token);

      setApplyStatus(applyStatus);
    } catch (error) {}
  }, [auth0Client, setApplyStatus]);

  return <ApplyStatus fetchApplyStatus={fetchApplyStatus} applyStatus={applyStatus} />;
};

export default ApplyStatusContainer;

import { useCallback } from "react";
import JobList from "../components/job-list";

import { getJobs } from "../apis";
import { jobsAtom } from "../atoms";
import { useAtom } from "jotai";
import { useAuth0Client } from "@career-up/shell-router";

const JobListContainer = () => {
  const auth0Client = useAuth0Client();
  const [jobs, setJobs] = useAtom(jobsAtom);

  const fetchJobs = useCallback(async () => {
    try {
      const token = await auth0Client.getTokenSilently();
      const jobs = await getJobs(token);

      setJobs(jobs);
    } catch (error) {}
  }, [auth0Client, setJobs]);

  return <JobList jobs={jobs} fetchJobs={fetchJobs} />;
};

export default JobListContainer;

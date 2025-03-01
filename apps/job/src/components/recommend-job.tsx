import { RecommendJobWrapper } from "./recommend-job.styles";
import { useShellNavigate } from "@career-up/shell-router";

import "./recommend-job.styles";

interface RecommendJobProps {
  id: number;
  position: string;
  company: string;
}

const RecommendJob = ({ id, position, company }: RecommendJobProps) => {
  const navigate = useShellNavigate();
  const onClick = () => {
    navigate(`/job/${id}`);
  };
  return (
    <RecommendJobWrapper onClick={onClick}>
      <div className="job--recommend-job-position">{position}</div>
      <div className="job--recommend-job-company">{company}</div>
    </RecommendJobWrapper>
  );
};

export default RecommendJob;

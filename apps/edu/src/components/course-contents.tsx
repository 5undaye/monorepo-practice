import { CourseContentsWrapper } from "./course-contents.styles";

interface CourseContentsProps {
  id: number;
  goals: string[];
  summaries: string[];
}

const CourseContents = ({ goals, summaries }: CourseContentsProps) => {
  return (
    <CourseContentsWrapper>
      <div className="edu--course-contents-goal">
        <h3>강의 목표</h3>
        {goals.map((goal, index) => (
          <p key={index}>{goal}</p>
        ))}
      </div>
      <div className="edu--course-contents-summary">
        <h3>강의 요약</h3>
        {summaries.map((summary, index) => (
          <p key={index}>{summary}</p>
        ))}
      </div>
    </CourseContentsWrapper>
  );
};

export default CourseContents;

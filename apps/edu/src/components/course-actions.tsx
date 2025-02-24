import { Button } from "@career-up/ui-kit";
import { CourseActionsWrapper } from "./course-actions.styles";

const CourseActions = () => {
  return (
    <CourseActionsWrapper>
      <Button>Like This Course</Button>
      <Button>Add to My Course</Button>
    </CourseActionsWrapper>
  );
};

export default CourseActions;

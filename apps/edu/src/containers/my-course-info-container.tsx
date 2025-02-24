import MyCourseInfo from "../components/my-course-info";

import { useUserStore } from "../store";

const MyCourseInfoContainer = () => {
  const user = useUserStore((state) => state.user);

  return <MyCourseInfo user={user} />;
};

export default MyCourseInfoContainer;

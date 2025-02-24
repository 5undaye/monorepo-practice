import { useCourseStore } from "../store";

import CourseListItem from "../components/course-list-item";

const Page = () => {
  const courses = useCourseStore((state) => state.courses);

  return (
    <>
      {courses.map((course) => (
        <CourseListItem key={course.id} {...course} />
      ))}
    </>
  );
};

export default Page;

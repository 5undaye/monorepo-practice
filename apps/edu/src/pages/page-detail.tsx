import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CourseDetailItem from "../components/course-detail-item";
import CourseContents from "../components/course-contents";
import CourseActions from "../components/course-actions";

import { useCourseStore } from "../store";

import { getCourseContents } from "../apis";

import { type CourseContentsType } from "../types";

import { useAuth0Client } from "@career-up/shell-router";

const Page = () => {
  const { id } = useParams();

  const auth0Client = useAuth0Client();

  const [courseContents, setCourseContents] = useState<CourseContentsType | null>(null);

  const course = useCourseStore((state) => state.getCourseById(Number(id)));

  useEffect(() => {
    if (course === undefined) {
      return;
    }

    (async () => {
      try {
        const token = await auth0Client.getTokenSilently();

        const courseContents = await getCourseContents(token, course.id);

        setCourseContents(courseContents);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [auth0Client, course]);

  if (course === undefined) {
    return null;
  }

  return (
    <>
      <CourseDetailItem {...course} />
      {courseContents !== null && <CourseContents {...courseContents} />}
      <CourseActions />
    </>
  );
};

export default Page;

import { useEffect } from "react";

import { useCourseStore, useUserStore } from "../store";

import ProfileContainer from "../containers/profile-container";

import { getCourses, getUser } from "../apis";

import { LayoutWrapper } from "./layout.styles";

import MyCourseInfoContainer from "../containers/my-course-info-container";

import { useAuth0Client } from "@career-up/shell-router";
const Layout = ({ children }: { children: React.ReactNode }) => {
  console.log("A");

  const auth0Client = useAuth0Client();

  const setUser = useUserStore((state) => state.setUser);
  const setCourses = useCourseStore((state) => state.setCourses);

  useEffect(() => {
    (async () => {
      try {
        const token = await auth0Client.getTokenSilently();

        getUser(token).then(setUser);
        getCourses(token).then(setCourses);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [auth0Client, setUser, setCourses]);

  return (
    <LayoutWrapper>
      <div className="edu--layout-left">
        <ProfileContainer />
        <MyCourseInfoContainer />
      </div>
      <div className="edu--layout-center">{children}</div>
    </LayoutWrapper>
  );
};

export default Layout;

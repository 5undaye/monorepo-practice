import { type User } from "@auth0/auth0-spa-js";

export interface UserType extends User {
  view_count: number;
  update_count: number;
  courses: { courseId: number; done: boolean }[];
}

export interface CourseType {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
}

export interface CourseContentsType {
  id: number;
  goals: string[];
  summaries: string[];
}

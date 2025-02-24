import { create } from "zustand";
import { type CourseType, type UserType } from "./types";

interface UserStore {
  user: UserType | null;
  setUser: (user: UserType | null) => void;
}

interface CourseStore {
  courses: CourseType[];
  setCourses: (courses: CourseType[]) => void;
  getCourseById: (id: number) => CourseType | undefined;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

export const useCourseStore = create<CourseStore>((set, get) => ({
  courses: [],
  setCourses: (courses) => set({ courses }),
  getCourseById: (id: number) => get().courses.find((course) => course.id === id),
}));

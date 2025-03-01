import { atom } from "jotai";
import { ApplyStatusType, JobType } from "./types";

export const applyStatusAtom = atom<ApplyStatusType | null>(null);

export const jobsAtom = atom<JobType[]>([]);

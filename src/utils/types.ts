import type { Exam } from "../types/exam";
import type { Lab } from "../types/lab";

export interface User {
  name: string | undefined;
  degree: string | undefined;
  semester: number;
  onboardingComplete: boolean;
  //   preferences: UserPreferences;
}

export interface UserData {
  exams: Exam[];
  labs: Lab[];
}

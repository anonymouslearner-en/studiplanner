import { atomWithStorage } from "jotai/utils";
import type { User, UserData } from "../utils/types";

// ============================================
//          User
// ============================================

export const userAtom = atomWithStorage<User>("user", {
  name: undefined,
  degree: undefined,
  semester: 1,
  onboardingComplete: false,
  //   preferences: {}
});

// ============================================
//          Data
// ============================================

export const dataAtom = atomWithStorage<UserData>("user-data", {
  exams: [],
  labs: [],
});

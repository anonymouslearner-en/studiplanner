import { useAtom } from "jotai";
import { userAtom } from "../atoms/atoms";
import type { User } from "../utils/types";

export const useUserData = () => {
  const [user, setUser] = useAtom(userAtom);

  const updateUser = (updates: Partial<User>) => {
    setUser((prev) => ({ ...prev, ...updates }));
  };

  return { user, updateUser };
};

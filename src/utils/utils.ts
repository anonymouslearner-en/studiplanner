import type { Exam } from "../types/exam";
import type { Lab } from "../types/lab";

type sortingCriteria = "priority" | "subject" | "preparation";

export const SortItems = () => {
  const myItems: Array<Exam | Lab> = [];

  return [...myItems];
};

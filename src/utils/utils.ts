import type { Exam, tPrepStatus } from "../types/exam";
import type { Lab } from "../types/lab";

export type sortCriteria = "Date" | "Preparation";
export type sortOrder = "Ascending" | "Descending";
export type ViewMode = "Chronological" | "Grouped";

interface sortProps {
  sortBy: sortCriteria;
  order: sortOrder;
}

export const sortItems = (
  sortOptions: sortProps,
  items: Array<Exam | Lab>
): Array<Exam | Lab> => {
  const sortedItems: Array<Exam | Lab> = [...items];

  switch (sortOptions.sortBy) {
    case "Date":
      sortedItems.sort((a, b) => {
        if (sortOptions.order === "Ascending") {
          return (
            a.details.scheduledDate.getTime() -
            b.details.scheduledDate.getTime()
          );
        } else {
          return (
            b.details.scheduledDate.getTime() -
            a.details.scheduledDate.getTime()
          );
        }
      });
      break;

    case "Preparation":
      const preparationOrder: tPrepStatus[] = [
        "Not Started",
        "In Progress",
        "Well Prepared",
        "Ready",
      ];

      sortedItems.sort((a, b) => {
        const prepA = preparationOrder.indexOf(a.prepStatus);
        const prepB = preparationOrder.indexOf(b.prepStatus);

        if (sortOptions.order === "Ascending") {
          return prepA - prepB;
        } else {
          return prepB - prepA;
        }
      });
      break;
  }

  return sortedItems;
};

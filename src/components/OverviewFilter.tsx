import type { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  // DropdownMenuItem,
  // DropdownMenuLabel,
  // DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import type { sortProps } from "../utils/utils";

interface Props {
  currentSetting: sortProps;
}
export const OverviewFilter: FC<Props> = ({ currentSetting }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="!bg-accent-400">
        <p className="font-medium">
          Sort by
          <span className="font-semibold">{` ${currentSetting.sortBy}`}</span>
        </p>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <p className="font-medium">Sort by </p>
        <p className="font-medium">Sort by </p>
        <p className="font-medium">Sort by </p>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

import type { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";

/**
 * @name AddExamTile
 *
 * @brief
 */
export const AddExamTile: FC = () => {
  return (
    <div className="bg-accent-100 rounded-sm border-dashed border-2 border-neutral-400 flex items-center justify-center cursor-pointer overflow-hidden">
      <Dialog>
        <DialogTrigger className="!bg-transparent">
          <p className="text-4xl font-semibold text-gray-800 leading-tight">
            +
          </p>
          <p className="font-normal text-base text-neutral-600">Hinzufügen</p>
        </DialogTrigger>
        {
          //ToDo Finish!
        }
        <DialogContent className="min-h-4/6 min-w-4/6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold">
              Add New Exam
            </DialogTitle>
            <DialogDescription>Lorem Ipsum</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

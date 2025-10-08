import type { FC } from "react";
import type { Exam } from "../types/exam";
import { Progress } from "../../components/ui/progress";
import { ExamTileActionButton } from "./ETActionButton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";

interface Props {
  exam: Exam;
}

//ToDo Refactor (design changes)
// const getStatusStyle = (status: string) => {
//   switch (status) {
//     case "Ready":
//       return "bg-emerald-500 text-white";
//     case "Well Prepared":
//       return "bg-blue-600 text-white";
//     case "In Progress":
//       return "bg-amber-500 text-white";
//     case "Not Started":
//       return "bg-slate-400 text-white";
//     default:
//       return "bg-slate-400 text-white";
//   }
// };

//ToDo Refactor (design changes)
// const getCardAccent = (prepStatus: string) => {
//   switch (prepStatus) {
//     case "Ready":
//       return "border-l-emerald-500";
//     case "Well Prepared":
//       return "border-l-blue-600";
//     case "In Progress":
//       return "border-l-amber-500";
//     case "Not Started":
//       return "border-l-slate-400";
//     default:
//       return "border-l-slate-400";
//   }
// };

export const ExamTile: FC<Props> = ({ exam }) => {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const examDate = exam.details?.scheduledDate;

  return (
    <div
      className={`group bg-accent-100 rounded-sm transition-all duration-200 overflow-hidden shadow-sm`}
    >
      {/* Header Section */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-lg font-semibold text-gray-800 leading-tight">
            {exam.name}
          </h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 pb-6">
        {/* Date and Location */}
        <div className="space-y-3 mb-5">
          {examDate && (
            <div className="flex items-center text-sm text-gray-500">
              <div className="w-5 h-5 mr-3 flex items-center justify-center">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="font-medium text-gray-700">
                {formatDate(examDate)}
              </span>
            </div>
          )}
          {exam.details?.scheduledPlace && (
            <div className="flex items-center text-sm text-gray-500">
              <div className="w-5 h-5 mr-3 flex items-center justify-center">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <span className="text-gray-600">
                {exam.details.scheduledPlace}
              </span>
            </div>
          )}
        </div>

        {/* Status Badge */}
        <div className="flex flex-col items-start">
          <Progress value={80} />

          {/* Action Buttons */}
          {
            //ToDo: Visual Refactoring (fix global black button!)
          }
          <div className="w-full  flex flex-row justify-end ml-2 mt-2">
            <Dialog>
              <DialogTrigger className="!bg-transparent">
                <ExamTileActionButton
                  title="Edit exam"
                  action={() => console.log("Edit exam:", exam.id)}
                  icon={
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="black"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  }
                />
              </DialogTrigger>

              <DialogContent className="min-h-4/6 min-w-4/6">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-semibold">
                    {exam.name}
                  </DialogTitle>
                  <DialogDescription>Lorem Ipsum</DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <ExamTileActionButton
              title="Delete exam"
              action={() => console.log("Delete exam:", exam.id)}
              icon={
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="black"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

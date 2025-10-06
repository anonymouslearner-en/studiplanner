import type { FC } from "react";
import type { Exam } from "../types/exam";
import { ExamTile } from "./ExamTile";

interface Props {
  exams: Exam[];
}

export const OverviewSection: FC<Props> = ({ exams }) => {
  return (
    <div className="my-5 w-full bg-accent-200 p-4">
      <h2 className="text-black font-sans text-3xl">Overview Section</h2>

      <div className="min-h-96 w-full">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {exams.map((exam) => (
            <ExamTile key={exam.id} exam={exam} />
          ))}
        </div>
      </div>
    </div>
  );
};

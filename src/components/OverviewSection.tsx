import type { FC } from "react";
import type { Exam } from "../types/exam";
import { ExamTile } from "./ExamTile";

interface Props {
  exams: Exam[];
}

export const OverviewSection: FC<Props> = ({ exams }) => {
  return (
    <div className="my-5">
      <h2 className="text-black font-sans text-3xl">Overview Section</h2>

      <div className="min-h-96 w-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg p-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {exams.map((exam) => (
            <ExamTile key={exam.id} exam={exam} />
          ))}
        </div>
      </div>
    </div>
  );
};

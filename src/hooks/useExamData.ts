import { useAtom } from "jotai";
import { dataAtom } from "../atoms/atoms";

export const useExamData = () => {
  const [data, setData] = useAtom(dataAtom);

  const updateExams = (exams: any[]) => {
    setData((prev) => ({ ...prev, exams }));
  };

  const addExam = (exam: any) => {
    setData((prev) => ({
      ...prev,
      exams: [...prev.exams, exam],
    }));
  };

  return {
    exams: data.exams,
    labs: data.labs,
    updateExams,
    addExam,
  };
};

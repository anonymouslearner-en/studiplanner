/**
 * @file    Exams
 */

export type tCompleted = "Succeeded" | "Failed";
export type tPrepStatus =
  | "Not Started"
  | "In Progress"
  | "Well Prepared"
  | "Ready";
export type tState = "Scheduled" | "Coming Soon" | tCompleted;

interface MetaData {
  createdAt: Date;
  updatedAt?: Date;
}

/* ==================================
                EXAM
===================================== */

//ToDo better name
interface ExamData {
  scheduledDate: Date;
  scheduledPlace: string;
  duration?: number; // in minutes
  notes?: string;
}

export interface Topic {
  name: string;
  id: string;
  prepStatus: tPrepStatus;
  difficultyLevel: "Easy" | "Moderate" | "Difficult" | "Endgame";
  relevance: "explicitly not coming" | "could appear" | "focus";
}

export interface Exam {
  name: string;
  id: string;
  state: tState;
  prepStatus: tPrepStatus;
  details: ExamData;
  topics: Topic[];
  metaData: MetaData;
}

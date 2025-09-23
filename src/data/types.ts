/**
 * @file    Types
 */

type tCompleted = "succeeded" | "failed";

interface MetaData {
  createdAt: Date;
  updatedAt?: Date;
}

//ToDo Remove

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
  state: "pending" | "learning" | "reviewing" | "exam questions";
  actions: null;
  difficultyLevel: "easy" | "moderate" | "diffucult" | "endgame";
  relevance: "explicitly not coming" | "could appear" | "focus";
}

export interface Exam {
  name: string;
  id: string;
  state: "pending" | "ongoing" | tCompleted;
  actionFlags: "forget it" | "work hard" | "good";
  details: ExamData;
  topics: Topic[];
  metadata: MetaData;
}

/* ==================================
                LAB
===================================== */
export interface Lab {
  name: string;
  state: "pending" | "";
}

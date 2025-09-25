import type { tPrepStatus, tState } from "./exam";

/* ==================================
                LAB
===================================== */
interface LabData {
  scheduledDate: Date;
  scheduledPlace: string;
}
export interface Lab {
  name: string;
  state: tState;
  prepStatus: tPrepStatus;
  details: LabData;
  // metadata: MetaData;
}

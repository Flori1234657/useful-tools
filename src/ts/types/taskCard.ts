import { SelectedStatusOption, HijriTimes } from "../enums/tasks";

export type TaskCard = {
  id: number;
  hijriTimes: HijriTimes;
  task: string;
  status: SelectedStatusOption;
};

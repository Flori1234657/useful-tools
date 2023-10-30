import { SelectedStatusOption, HijriTimes } from "../enums/tasks";

export type TaskCard = {
  id: string;
  hijriTimes: HijriTimes;
  task: string;
  status: SelectedStatusOption;
};

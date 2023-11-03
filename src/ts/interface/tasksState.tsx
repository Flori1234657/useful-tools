import { TaskCard } from "../types/taskCard";
import { TaskConfig } from "../types/taskConfig";

export interface TasksState {
  tasks: TaskCard[] | [];
  taskSetup: TaskConfig;
  setTasks: (task: TaskCard) => void;
  removeTask: (id: string) => void;
}

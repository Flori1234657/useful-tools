import { SelectedStatusOption } from "../enums/tasks";
import { TaskCard } from "../types/taskCard";
import { TaskConfig } from "../types/taskConfig";

export interface TasksState {
  tasks: TaskCard[] | [];
  taskSetup: TaskConfig;
  taskActions: {
    filterTasks?: string;
    searchTasks?: string;
  };
  setTasks: (task: TaskCard) => void;
  removeTask: (id: string) => void;
}

import { Language } from "../types/lang";
import { TaskCard } from "../types/taskCard";
import { TaskConfig } from "../types/taskConfig";

export interface MainState {
  language: Language;
  tasks: TaskCard[] | [];
  errors: string;
  loading: boolean;
  taskSetup: TaskConfig;
  setTasks: (task: TaskCard) => void;
  removeTask: (id: string) => void;
  setErrors: (err: string) => void;
  setLoading: (load: boolean) => void;
}

import { Language } from "../types/lang";
import { TaskCard } from "../types/taskCard";

export interface MainState {
  language: Language;
  tasks: TaskCard[] | [];
  errors: string;
  loading: boolean;
  setTasks: (task: TaskCard) => void;
  removeTask: (id: string) => void;
  setErrors: (err: string) => void;
  setLoading: (load: boolean) => void;
}

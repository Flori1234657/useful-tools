import { TaskCard } from "../ts/types/taskCard";
import { MainState } from "../ts/interface/mainState";

const setTask = (prevState: MainState, task: TaskCard) => {
  if (prevState.tasks.length > 0)
    return {
      tasks: [
        ...prevState.tasks.map((el) => (el.id === task.id ? task : el)),
        task,
      ],
    };

  return {
    tasks: [task],
  };
};

export default setTask;

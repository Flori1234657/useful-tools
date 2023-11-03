import { TaskCard } from "../../ts/types/taskCard";
import { TasksState } from "../../ts/interface/tasksState";

type ReturnProps = {
  tasks: TaskCard[];
};

// Sort algorithm for sorting new and edited tasks 'Insertion Sort'

const sort = (arr: TaskCard[]): TaskCard[] => {
  let arry = [...arr];

  for (let i = 1; i < arry.length; i++) {
    let temp = arry[i];
    let j = i - 1;

    while (j >= 0 && arry[j].hijriTimes > temp.hijriTimes) {
      arry[j + 1] = arry[j];
      j--;
    }
    arry[j + 1] = temp;
  }

  return arry;
};

// Final function also here sort fc will be called InshaaAllah

const setTask = (prevState: TasksState, task: TaskCard): ReturnProps => {
  let areEqual: boolean = false;

  if (prevState.tasks.length > 0) {
    const arr = [
      ...prevState.tasks.map((el) => {
        if (el.id === task.id) {
          areEqual = true;
          return task;
        }
        return el;
      }),
      ...(!areEqual ? [task] : []),
    ];

    if (arr.length === 1) return { tasks: arr };
    return { tasks: sort(arr) };
  }

  return {
    tasks: [task],
  };
};

export default setTask;

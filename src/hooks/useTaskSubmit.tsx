import React, { useState } from "react";
import { HijriTimes, SelectedStatusOption } from "../ts/enums/tasks";
import { TaskCard } from "../ts/types/taskCard";
import { useMainStore } from "../state/mainState";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data?: TaskCard;
  id: string;
  add: boolean;
}

const useTaskSubmit = (props: Props) => {
  const store = useMainStore();
  const { setOpen, data, id, add } = props;

  const [time, setTime] = useState<string>(HijriTimes[data?.hijriTimes || 0]);
  const [task, setTask] = useState<string>(data?.task || "");
  const [state, setState] = useState<string>(data?.status || "");

  const handleSubmit = () => {
    store.setLoading(true);

    const obj = {
      id: id,
      //@ts-ignore
      hijriTimes: HijriTimes[time],
      task: task,
      status: SelectedStatusOption.O1,
    };

    if (add) {
      store.setTasks({
        ...obj,
        id: id,
        status: SelectedStatusOption.O1,
      });

      setTime("");
      setTask("");
    } else {
      store.setTasks({
        ...obj,
        //@ts-ignore
        status: SelectedStatusOption[state],
      });
    }

    store.setLoading(false);
    setOpen(false);
  };

  return {
    time,
    setTime,
    task,
    setTask,
    state,
    setState,
    handleSubmit,
  };
};

export default useTaskSubmit;

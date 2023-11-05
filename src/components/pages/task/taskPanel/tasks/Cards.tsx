import { useTaskStore } from "../../../../../state/tasksState";
import ManualFailTasks from "./cards/ManualFailTasks";
import AutoFailTasks from "./cards/AutoFailTasks";

const Cards = () => {
  const tasksStore = useTaskStore();

  return (
    <>
      {tasksStore.taskSetup.skipped ? <ManualFailTasks /> : <AutoFailTasks />}
    </>
  );
};

export default Cards;

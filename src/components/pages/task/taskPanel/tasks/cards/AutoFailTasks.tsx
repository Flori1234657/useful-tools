import useAvailableTimes from "../../../../../../hooks/useAvailableTimes";
import { useTaskStore } from "../../../../../../state/tasksState";
import { SelectedStatusOption as St } from "../../../../../../ts/enums/tasks";
import Card from "../Card";
import { TaskCard } from "../../../../../../ts/types/taskCard";

const AutoFailTasks = () => {
  const tasksStore = useTaskStore();
  const availableTimes = useAvailableTimes();

  const filterTasks = useTaskStore((state) => state.taskActions.filterTasks);
  const searchTasks = useTaskStore((state) => state.taskActions.searchTasks);

  const cardsArr = tasksStore.tasks.map(
    (el): TaskCard =>
      availableTimes![el.hijriTimes] ? el : { ...el, status: St.O3 } // Fail if time pass InshaaAllah
  );

  if (filterTasks)
    return cardsArr
      .filter((el) => el.status === filterTasks)
      .map((el) => <Card key={el.id} {...el} />);

  if (searchTasks)
    return cardsArr
      .filter((el) => el.task.toLowerCase().includes(searchTasks.toLowerCase()))
      .map((el) => <Card key={el.id} {...el} />);

  return cardsArr.map((el) => <Card key={el.id} {...el} />);
};

export default AutoFailTasks;

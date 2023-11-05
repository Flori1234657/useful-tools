import { useTaskStore } from "../../../../../../state/tasksState";
import Card from "../Card";

const ManualFailTasks = () => {
  const tasksStore = useTaskStore();

  const filterTasks = useTaskStore((state) => state.taskActions.filterTasks);
  const searchTasks = useTaskStore((state) => state.taskActions.searchTasks);

  // Return filtered results if have InshaaAllah
  if (filterTasks)
    return tasksStore.tasks
      .filter((el) => el.status === filterTasks)
      .map((il) => <Card key={il.id} {...il} />);

  // Return searched results if have InshaaAllah
  if (searchTasks)
    return tasksStore.tasks
      .filter((el) =>
        el.task.toLowerCase().includes(searchTasks?.toLowerCase())
      )
      .map((il) => <Card key={il.id} {...il} />);

  // Return Basic InshaaAllah
  return tasksStore.tasks.map((el) => <Card key={el.id} {...el} />);
};

export default ManualFailTasks;

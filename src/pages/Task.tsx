import { useMainStore } from "../state/mainState";
import { useTaskStore } from "../state/tasksState";
import { useState, lazy, Suspense } from "react";
import AddTaskModal from "../components/pages/task/AddTaskModal";

const TasksPanel = lazy(() => import("../components/pages/task/TasksPanel"));
const ConfigPanel = lazy(() => import("../components/pages/task/ConfigPanel"));

const Task = () => {
  const lang = useMainStore((state) => state.language.pages.tasks);
  const tasksStore = useTaskStore();

  const [open, setOpen] = useState<boolean>(false);

  const [togglePanel, setTogglePanel] = useState<boolean>(
    tasksStore.taskSetup.newUser
  );

  return (
    <Suspense fallback={<h3>Loading ...</h3>}>
      <main className="tasks">
        <h1>{lang.headingTxt}</h1>
        {togglePanel ? <ConfigPanel /> : <TasksPanel setOpen={setOpen} />}
        <AddTaskModal open={open} setOpen={setOpen} />
      </main>
    </Suspense>
  );
};

export default Task;

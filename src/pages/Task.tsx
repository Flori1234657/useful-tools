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

  return (
    <main className="tasks">
      <h1>{lang.headingTxt}</h1>
      <Suspense fallback={""}>
        {tasksStore.taskSetup.newUser ? (
          <ConfigPanel />
        ) : (
          <TasksPanel setOpen={setOpen} />
        )}
      </Suspense>
      <AddTaskModal open={open} setOpen={setOpen} />
    </main>
  );
};

export default Task;

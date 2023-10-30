import { useMainStore } from "../state/mainState";
import { useState } from "react";
import AddTaskModal from "../components/pages/task/AddTaskModal";
import TasksPanel from "../components/pages/task/TasksPanel";

const Task = () => {
  const lang = useMainStore((state) => state.language.pages.tasks);
  const [open, setOpen] = useState<boolean>(false);

  return (
    <main className="tasks">
      <h1>{lang.headingTxt}</h1>
      <TasksPanel setOpen={setOpen} />
      <AddTaskModal open={open} setOpen={setOpen} />
    </main>
  );
};

export default Task;

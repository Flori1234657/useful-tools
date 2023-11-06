import { useMainStore } from "../../../state/mainState";
import { useTaskStore } from "../../../state/tasksState";
import { TopInfo, SearchAndFilter, Tasks, BottomInfo } from "./taskPanel";
import { configTaskPanel } from "../../../utils/tasks/setupTaskPanel";
import { compareDates } from "../../../utils/tasks/compareDate";
import { useEffect } from "react";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TasksPanel: React.FC<Props> = ({ setOpen }) => {
  const lang = useMainStore((state) => state.language.pages.tasks);
  const taskStore = useTaskStore((state) => state.taskSetup);

  /**
   TODO: Add an error comp plus when time fetched fails on load set skipped true
   */

  useEffect(() => {
    if (taskStore.skipped) return;

    const theSame = compareDates(taskStore.fetchDate!, new Date());

    if (!theSame) configTaskPanel(taskStore.country!, taskStore.city!);
  }, []);

  return (
    <div className="tasks__panel" aria-label="Tasks Panel">
      <TopInfo />
      <SearchAndFilter />
      <Tasks />
      <BottomInfo />
      <button
        className="tasks__panel__open-modal-button"
        onClick={() => setOpen(true)}
      >
        {lang.secondPanel.button}
      </button>
    </div>
  );
};

export default TasksPanel;

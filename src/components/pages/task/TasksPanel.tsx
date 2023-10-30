import { useMainStore } from "../../../state/mainState";
import { TopInfo, SearchAndFilter, Tasks, BottomInfo } from "./taskPanel";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TasksPanel: React.FC<Props> = ({ setOpen }) => {
  const lang = useMainStore((state) => state.language.pages.tasks);

  return (
    <div className="tasks__panel" aria-label="Tasks Panel">
      <TopInfo />
      <SearchAndFilter />
      <Tasks />
      <BottomInfo />
      <button onClick={() => setOpen(true)}>{lang.secondPanel.button}</button>
    </div>
  );
};

export default TasksPanel;

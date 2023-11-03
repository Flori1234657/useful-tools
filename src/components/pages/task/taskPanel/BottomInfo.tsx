import { useMainStore } from "../../../../state/mainState";
import { useTaskStore } from "../../../../state/tasksState";

const BottomInfo = () => {
  const lang = useMainStore((state) => state.language.pages.tasks);
  const tasksStore = useTaskStore();

  return (
    <p dir={lang.headingTxt === "خطط ليومك!" ? "rtl" : "ltr"}>
      {tasksStore.tasks.length > 0
        ? lang.secondPanel.bottomInfoText
        : lang.secondPanel.noTasksText}
    </p>
  );
};

export default BottomInfo;

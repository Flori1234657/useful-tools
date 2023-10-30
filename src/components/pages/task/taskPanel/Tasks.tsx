import Cards from "./tasks/Cards";
import { useMainStore } from "../../../../state/mainState";

const Tasks = () => {
  const lang = useMainStore(
    (state) => state.language.pages.tasks.secondPanel.cardsCategoryText
  );

  return (
    <div
      className="tasks__panel__task-container"
      aria-label="Container for tasks"
    >
      <div
        className="tasks__panel__task-container__3-txt-headers"
        aria-label="Container for 3 info headers"
      >
        <h3>{lang.txt1}</h3>
        <h3>{lang.txt2}</h3>
        <h3>{lang.txt3}</h3>
      </div>
      <div
        className="tasks__panel__task-container__card-container"
        aria-label="Tasks Cards Container"
      >
        <Cards />
      </div>
    </div>
  );
};

export default Tasks;

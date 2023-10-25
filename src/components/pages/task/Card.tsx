import { BsFillSunriseFill as PlaceholderIcn } from "react-icons/bs";
import { useMainStore } from "../../../state/mainState";
import { TaskCard } from "../../../ts/types/taskCard";
import EditTaskModal from "./EditTaskModal";
import { useState } from "react";

const Card = () => {
  const lang = useMainStore((state) => state.language.pages.tasks);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {" "}
      <div
        className="tasks__panel__task-container__card-container__card"
        aria-label="Task card"
        onClick={() => setOpenModal(true)}
      >
        <div
          className="tasks__panel__task-container__card-container__card__time"
          aria-label="Time info inside tasks cards"
        >
          <h4>{lang.secondPanel.hijriTimes[0]}</h4>
          <PlaceholderIcn />
        </div>

        <h4>Go to that city to arrive there</h4>
        <h4>{lang.secondPanel.filter_Status.option2}</h4>
      </div>
      <EditTaskModal open={openModal} setOpen={setOpenModal} />
    </>
  );
};

export default Card;

import {
  BsFillSunriseFill as SabahIcn,
  BsFillSunFill as DrekIcn,
  BsFillSunsetFill as AkshamIcn,
} from "react-icons/bs";
import { RiSunFoggyFill as IkindiIcn } from "react-icons/ri";
import { FaMoon as JaciIcn } from "react-icons/fa6";
import { useMainStore } from "../../../../../state/mainState";
import { TaskCard } from "../../../../../ts/types/taskCard";
import EditTaskModal from "./card/EditTaskModal";
import React, { useState } from "react";
import { useTaskStore } from "../../../../../state/tasksState";

const iconsObj = {
  "0": SabahIcn,
  "1": DrekIcn,
  "2": IkindiIcn,
  "3": AkshamIcn,
  "4": JaciIcn,
};

const Card: React.FC<TaskCard> = (data) => {
  const tasksStore = useTaskStore();

  const lang = useMainStore((state) => state.language.pages.tasks);
  const [openModal, setOpenModal] = useState(false);

  const VisibleIcon = iconsObj[data.hijriTimes];

  return (
    <>
      {" "}
      <div
        className="tasks__panel__task-container__card-container__card"
        style={data.status !== "option3" ? { opacity: 1 } : { opacity: 0.5 }}
        aria-label="Task card"
        onClick={() =>
          data.status !== "option3"
            ? setOpenModal(true)
            : tasksStore.removeTask(data.id)
        }
      >
        <div
          className="tasks__panel__task-container__card-container__card__time"
          aria-label="Time info inside tasks cards"
        >
          <h4>{lang.secondPanel.hijriTimes[data.hijriTimes]}</h4>
          <VisibleIcon />
        </div>

        <h4>{data.task}</h4>
        <h4>{lang.secondPanel.filter_Status[data.status]}</h4>
      </div>
      <EditTaskModal open={openModal} setOpen={setOpenModal} data={data} />
    </>
  );
};

export default Card;

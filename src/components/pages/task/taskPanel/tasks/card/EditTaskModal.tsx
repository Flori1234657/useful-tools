import React from "react";
import { Modal } from "@mui/joy";
import { TaskCard } from "../../../../../../ts/types/taskCard";
import useTaskSubmit from "../../../../../../hooks/useTaskSubmit";
import SheetCard from "../../edit&addModalComponents/SheetCard";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: TaskCard;
}

const EditTaskModal: React.FC<Props> = ({ open, setOpen, data }) => {
  const editTaskHook = useTaskSubmit({
    setOpen,
    data,
    id: data.id,
    add: false,
  });

  return (
    <Modal
      aria-labelledby="Edit task modal"
      aria-describedby="Modal to edit task"
      open={open}
      onClose={() => setOpen(false)}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <SheetCard {...{ ...editTaskHook, setOpen, data, add: false }} />
    </Modal>
  );
};

export default EditTaskModal;

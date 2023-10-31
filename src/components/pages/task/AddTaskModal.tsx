import React from "react";
import Modal from "@mui/joy/Modal";
import { v4 as uuidv4 } from "uuid";
import { SheetCard } from "./taskPanel/edit&addModalComponents";
import useTaskSubmit from "../../../hooks/useTaskSubmit";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddTaskModal: React.FC<Props> = ({ open, setOpen }) => {
  const editTaskHook = useTaskSubmit({
    setOpen,
    id: uuidv4(),
    add: true,
  });

  return (
    <Modal
      aria-labelledby="Add task modal"
      aria-describedby="Modal to add a new task"
      open={open}
      onClose={() => setOpen(false)}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <SheetCard {...{ ...editTaskHook, setOpen, add: true }} />
    </Modal>
  );
};

export default AddTaskModal;

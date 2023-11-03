import { Button, Stack } from "@mui/joy";
import React from "react";
import { useMainStore } from "../../../../../state/mainState";
import { TaskCard } from "../../../../../ts/types/taskCard";
import { useTaskStore } from "../../../../../state/tasksState";

interface Props {
  data: TaskCard;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteButton: React.FC<Props> = ({ data, setOpen }) => {
  const mainStore = useMainStore();
  const tasksStore = useTaskStore();
  const lang = useMainStore(
    (state) => state.language.pages.tasks.secondPanel.taskModal
  );

  return (
    <Stack mt="1rem" justifyContent="center" width="100%">
      <Button
        color="warning"
        sx={{
          borderRadius: "0.8rem",
          backgroundColor: "#b84743",
          p: "1em 2em",
          fontSize: "0.688rem",
          ":hover": {
            backgroundColor: "#b84743af",
          },
        }}
        onClick={() => {
          mainStore.setLoading(true);
          tasksStore.removeTask(data.id);
          mainStore.setLoading(false);
          setOpen(false);
        }}
      >
        {lang.deleteBtn}
      </Button>
    </Stack>
  );
};

export default DeleteButton;

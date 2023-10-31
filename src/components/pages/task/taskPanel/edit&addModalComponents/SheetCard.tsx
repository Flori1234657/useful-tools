import React from "react";
import { Sheet, Stack, Typography } from "@mui/joy";
import {
  CancelButton,
  DeleteButton,
  StateSelect,
  SubmitButton,
  TaskInput,
  TimeInput,
} from "./index";
import { TaskCard } from "../../../../../ts/types/taskCard";
import { useMainStore } from "../../../../../state/mainState";

interface Props {
  time: string;
  setTime: React.Dispatch<React.SetStateAction<string>>;
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data?: TaskCard;
  add: boolean;
}

const SheetCard = React.forwardRef((props: Props, ref) => {
  const lang = useMainStore(
    (state) => state.language.pages.tasks.secondPanel.taskModal
  );

  return (
    <Sheet
      variant="outlined"
      sx={{
        width: { xs: "90.65%", md: "30.769rem" },
        maxWidth: { xs: "500px", sm: "700px" },
        borderRadius: "1.5rem",
        border: "none",
        p: "1.5rem",
        boxShadow: "lg",
        backgroundImage: `linear-gradient(180deg, #43abb8 0%, #394f64 78.12%)`,
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.handleSubmit();
        }}
      >
        <Typography
          component="h2"
          id="modal-title"
          level="h4"
          sx={{ color: "white" }}
          textAlign="center"
          fontWeight="lg"
          mb="1rem"
        >
          {props.add ? lang.sheet.addTaskSheetHt : lang.sheet.editTaskSheetHt}
        </Typography>
        <Stack width="100%">
          <TimeInput time={props.time} setTime={props.setTime} />
          <TaskInput task={props.task} setTask={props.setTask} />
          {!props.add && <StateSelect setState={props.setState} />}
          <Stack
            mt="1.5rem"
            direction="row"
            justifyContent="space-between"
            width="100%"
          >
            <CancelButton setOpen={props.setOpen} />
            <SubmitButton add={props.add} />
          </Stack>
          {!props.add && (
            <DeleteButton data={props.data!} setOpen={props.setOpen} />
          )}
        </Stack>
      </form>
    </Sheet>
  );
});

export default SheetCard;
